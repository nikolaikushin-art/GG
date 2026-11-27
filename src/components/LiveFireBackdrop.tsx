import { useEffect, useRef, useState } from "react";
import { FIRE_FRAG, FIRE_VERT } from "./fire-shader";
import { createFireSim, type FireRenderer } from "./fire-sim";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

/** Simple single-pass fire for devices that can't run the simulation (WebGL1). */
function createLegacyFire(
  gl: WebGLRenderingContext,
  img: HTMLImageElement,
  canvas: HTMLCanvasElement,
): FireRenderer | null {
  const compile = (type: number, source: string) => {
    const s = gl.createShader(type)!;
    gl.shaderSource(s, source);
    gl.compileShader(s);
    return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
  };
  const vs = compile(gl.VERTEX_SHADER, FIRE_VERT);
  const fs = compile(gl.FRAGMENT_SHADER, FIRE_FRAG);
  if (!vs || !fs) return null;
  const prog = gl.createProgram()!;
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null;
  gl.useProgram(prog);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const aPos = gl.getAttribLocation(prog, "aPos");
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

  const tex = gl.createTexture();
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

  const uRes = gl.getUniformLocation(prog, "uRes");
  const uTime = gl.getUniformLocation(prog, "uTime");
  gl.uniform1i(gl.getUniformLocation(prog, "uTex"), 0);
  gl.uniform1f(gl.getUniformLocation(prog, "uImgAspect"), img.naturalWidth / img.naturalHeight);

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const w = Math.max(1, Math.round(canvas.clientWidth * dpr));
    const h = Math.max(1, Math.round(canvas.clientHeight * dpr));
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
    gl.viewport(0, 0, w, h);
    gl.uniform2f(uRes, w, h);
  };
  resize();
  let time = 3;
  return {
    resize,
    frame(_now, dt) {
      time += dt;
      gl.uniform1f(uTime, time);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    },
    dispose() {},
  };
}

/**
 * Hero background: the oven photo with a real-time fire in the oven mouth.
 * Modern devices run a GPU fluid simulation (WebGL2); others get a lighter shader.
 * The plain <img> underneath is the instant first paint and the fallback for
 * reduced-motion users or browsers without WebGL.
 */
export function LiveFireBackdrop({ src, alt, width, height, className = "" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const opts = { antialias: false, alpha: false, powerPreference: "high-performance" as const };
    const gl2 = canvas.getContext("webgl2", opts) as WebGL2RenderingContext | null;
    const gl = (gl2 ??
      canvas.getContext("webgl", opts) ??
      canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null;
    if (!gl) return;

    let renderer: FireRenderer | null = null;
    let videoEl: HTMLVideoElement | null = null;
    let raf = 0;
    let running = false;
    let visible = true;
    let disposed = false;
    let last = 0;

    const loop = (now: number) => {
      if (!running || !renderer) return;
      const dt = last ? (now - last) / 1000 : 1 / 60;
      last = now;
      renderer.frame(now / 1000, dt);
      raf = requestAnimationFrame(loop);
    };
    const play = () => {
      if (running || !renderer || !visible || document.hidden || disposed) return;
      running = true;
      last = 0;
      raf = requestAnimationFrame(loop);
    };
    const pause = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const img = new Image();
    img.decoding = "async";
    img.onload = () => {
      if (disposed) return;
      try {
        renderer = (gl2 && createFireSim(gl2, img, canvas)) || createLegacyFire(gl, img, canvas);
      } catch (err) {
        console.warn("Live fire unavailable:", err);
        renderer = null;
      }
      if (!renderer) return;
      renderer.frame(0, 1 / 60); // first frame before the canvas fades in
      setLive(true);
      play();

      // Optional: real filmed fire. Drop fire.mp4 (and/or fire.webm) in /public/fire/ and it is used automatically.
      if (renderer.setVideo) {
        const v = document.createElement("video");
        v.muted = true;
        v.loop = true;
        v.playsInline = true;
        v.preload = "auto";
        v.crossOrigin = "anonymous";
        const sources = [
          ["/fire/fire.webm", "video/webm"],
          ["/fire/fire.mp4", "video/mp4"],
        ] as const;
        for (const [url, type] of sources) {
          const el = document.createElement("source");
          el.src = url;
          el.type = type;
          v.appendChild(el);
        }
        v.addEventListener("loadeddata", () => {
          if (disposed || !renderer?.setVideo) return;
          v.play()
            .then(() => renderer?.setVideo?.(v))
            .catch(() => {});
        });
        videoEl = v;
        v.load();
      }
    };
    img.src = src;

    const ro = new ResizeObserver(() => renderer?.resize());
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => {
      visible = e?.isIntersecting ?? true;
      if (visible) play();
      else pause();
    });
    io.observe(canvas);
    const onVis = () => {
      if (document.hidden) pause();
      else play();
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      disposed = true;
      pause();
      videoEl?.pause();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [src]);

  return (
    <>
      <img src={src} alt={alt} width={width} height={height} className={className} />
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className={`${className} transition-opacity duration-700 ${live ? "opacity-100" : "opacity-0"}`}
      />
    </>
  );
}
