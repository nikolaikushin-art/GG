// Advanced oven fire: a real-time GPU fluid simulation (WebGL2).
//
// A small heat field covering the oven mouth is advected every frame by hot-air buoyancy
// plus divergence-free curl-noise turbulence, fed by flickering fuel at the logs and
// cooled by radiation. The result is rendered with a blackbody colour ramp, bloom, heat
// haze that bends the photo, and light that breathes across the bread and bricks.
// Everything lives in image space so it stays locked to the oven at any screen shape.

export const SIM_VERT = `#version 300 es
out vec2 vUv;
void main(){
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`;

const COMMON = `
float hash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p){
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++){ v += a * noise(p); p = p * 2.03 + vec2(17.1, 9.7); a *= 0.5; }
  return v;
}
float noise1(float x){ float i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f); return mix(hash(vec2(i, 3.7)), hash(vec2(i + 1.0, 3.7)), f); }
vec2 curl(vec2 p){
  float e = 0.02;
  float dy = fbm(p + vec2(0.0, e)) - fbm(p - vec2(0.0, e));
  float dx = fbm(p + vec2(e, 0.0)) - fbm(p - vec2(e, 0.0));
  return vec2(dy, -dx) / (2.0 * e);
}
// oven mouth: soft arch mask in IMAGE space (origin top-left)
float ovenMask(vec2 p, float shrink){
  const vec2 C = vec2(0.764, 0.430); const vec2 R = vec2(0.136, 0.118);
  float dx = abs(p.x - C.x) / (R.x * shrink);
  float upper = length(vec2(dx, (p.y - C.y) / (R.y * shrink)));
  float arch = 1.0 - smoothstep(0.86, 1.0, upper);
  float rect = 1.0 - smoothstep(0.86, 1.0, dx);
  float m = p.y < C.y ? arch : rect;
  return m * (1.0 - smoothstep(0.536, 0.548, p.y));
}
`;

// ------------------------------------------------------------------ simulation step
export const SIM_FRAG = `#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uPrev;
uniform vec2  uSize;
uniform vec4  uRegion;      // x, y, w, h of the sim window in image uv
uniform float uImgAspect;
uniform float uTime;
uniform float uDt;
out vec4 o;
${COMMON}
void main(){
  vec2 tc = vUv;                                   // y up inside the sim
  float A = uRegion.z * uImgAspect / uRegion.w;     // window aspect (w/h in pixels)
  vec2 q = vec2(tc.x * A, tc.y);                    // isotropic coords, height = 1
  vec2 pimg = vec2(uRegion.x + tc.x * uRegion.z, uRegion.y + (1.0 - tc.y) * uRegion.w);
  float t = uTime;

  float T0 = texture(uPrev, tc).r;

  // hot air rises faster the hotter it is; big slow eddies + small fast ones tear it into tongues
  float up = 0.30 + 1.25 * T0;
  vec2 c1 = curl(q * 2.6 + vec2(0.0, -t * 0.55));
  vec2 c2 = curl(q * 6.5 + vec2(3.1, -t * 1.50));
  vec2 v = vec2(0.0, up) + (c1 * 0.34 + c2 * 0.20) * (0.35 + 1.6 * T0);
  v.x += (noise1(t * 0.8) - 0.5) * 0.30 * T0;       // whole fire leans with the draught
  v.x += (0.62 - tc.x) * 0.10 * T0;                 // faint pull into the flue

  vec2 back = tc - vec2(v.x / A, v.y) * uDt;
  vec4 adv = texture(uPrev, back);
  float T = adv.r;
  float Tin = T;

  // radiative cooling + ragged burn-out of the tips
  float n = fbm(q * vec2(7.0, 4.5) + vec2(t * 0.35, -t * 1.7));
  T = T * exp(-uDt * 1.40) - uDt * (0.12 + 1.00 * n * n);
  T = max(T, 0.0);
  // soot: made where flame cools, carried upward, thinning out as it rises
  float S = adv.g * exp(-uDt * 0.85) + max(Tin - T, 0.0) * 0.42 * smoothstep(0.30, 0.50, tc.y);
  S = clamp(S, 0.0, 1.0);

  // fuel: four flickering hot spots along the logs
  float band = exp(-pow((tc.y - 0.27) / 0.030, 2.0));
  float sx = 0.0;
  sx += (0.50 + 0.80 * noise1(t * 1.9 + 1.0)) * exp(-pow((tc.x - 0.733) / 0.050, 2.0));
  sx += (0.35 + 0.70 * noise1(t * 2.3 + 9.0)) * exp(-pow((tc.x - 0.606) / 0.035, 2.0));
  sx += (0.55 + 0.95 * noise1(t * 1.7 + 17.0)) * exp(-pow((tc.x - 0.80) / 0.032, 2.0));
  sx += (0.50 + 1.00 * noise1(t * 2.1 + 31.0)) * exp(-pow((tc.x - 0.885) / 0.036, 2.0));
  sx += (0.35 + 0.80 * noise1(t * 1.3 + 41.0)) * exp(-pow((tc.x - 0.842) / 0.022, 2.0));
  sx += (0.20 + 0.60 * noise1(t * 2.7 + 23.0)) * exp(-pow((tc.x - 0.485) / 0.030, 2.0));
  float src = band * sx * (0.55 + 0.9 * noise(vec2(q.x * 16.0, t * 1.2)));
  T = max(T, min(src, 1.25));

  // keep the fire inside the oven
  float mk = ovenMask(pimg, 0.985);
  T *= mk;
  S *= mk;
  o = vec4(T, S, 0.0, 1.0);
}`;

// ------------------------------------------------------------------ render pass
export const RENDER_FRAG = `#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uTex;     // the oven photo
uniform sampler2D uSim;     // heat field
uniform sampler2D uVid;     // optional real fire footage
uniform float uUseVid;
uniform vec2  uRes;
uniform vec4  uRegion;
uniform float uImgAspect;
uniform float uTime;
out vec4 o;
${COMMON}

vec2 simTc(vec2 p){ vec2 s = (p - uRegion.xy) / uRegion.zw; return vec2(s.x, 1.0 - s.y); }
const vec4 VZ = vec4(0.715, 0.255, 0.205, 0.285); // where the footage sits (image uv: x, y, w, h)
vec2 vidUv(vec2 p){ return (p - VZ.xy) / VZ.zw; }
float vidMask(vec2 p){
  vec2 v = vidUv(p);
  return smoothstep(0.0, 0.08, v.x) * smoothstep(1.0, 0.92, v.x) * smoothstep(0.0, 0.10, v.y) * smoothstep(1.0, 0.97, v.y);
}
float heatAt(vec2 p){
  if (uUseVid > 0.5){
    vec3 v = texture(uVid, clamp(vidUv(p), 0.0, 1.0)).rgb;
    return dot(v, vec3(0.299, 0.587, 0.114)) * vidMask(p) * 1.1;
  }
  return texture(uSim, simTc(p)).r;
}

// gaussian-ish blurred heat for bloom / haze
float heatBlur(vec2 p, float r){
  float a = 0.0;
  for (int i = 0; i < 6; i++){
    float ang = float(i) * 1.0471976;
    a += heatAt(p + vec2(cos(ang) / uImgAspect, sin(ang)) * r);
  }
  return a * 0.1667;
}

vec3 fireColor(float T){
  vec3 c = mix(vec3(0.0), vec3(0.50, 0.05, 0.0), smoothstep(0.03, 0.20, T));
  c = mix(c, vec3(1.00, 0.30, 0.02), smoothstep(0.14, 0.42, T));
  c = mix(c, vec3(1.00, 0.66, 0.12), smoothstep(0.38, 0.74, T));
  c = mix(c, vec3(1.00, 0.92, 0.62), smoothstep(0.72, 1.12, T));
  return c;
}

void main(){
  vec2 uv = vec2(gl_FragCoord.x / uRes.x, 1.0 - gl_FragCoord.y / uRes.y);
  float ca = uRes.x / uRes.y;
  vec2 p = uv;
  if (ca > uImgAspect) p.y = (uv.y - 0.5) * (uImgAspect / ca) + 0.5;
  else                 p.x = (uv.x - 0.5) * (ca / uImgAspect) + 0.5;
  float t = uTime;

  // everything outside the oven's neighbourhood is just the photo: keeps the pass cheap
  if (p.x < 0.46 || p.y < 0.14 || p.y > 0.78) { o = vec4(texture(uTex, p).rgb, 1.0); return; }
  float mOuter = ovenMask(p, 1.0);
  float mInner = ovenMask(p, 0.975);

  // average heat -> irregular, genuinely fire-driven light level
  float avg = 0.0;
  for (int i = 0; i < 4; i++)
    avg += heatAt(vec2(0.70 + 0.06 * float(i), 0.36 + 0.05 * float(i & 1)));
  avg *= 0.25;
  float flick = clamp(avg * 2.2 - 0.55, -0.6, 0.9);

  // ---- heat haze: hot air bends the photo above and around the flames ----
  float hz = heatBlur(p, 0.03) * 0.6 + heatBlur(p, 0.07) * 0.4;
  vec2 w = vec2(fbm(p * vec2(40.0, 26.0) + vec2(0.0, t * 2.1)), fbm(p * vec2(30.0, 34.0) + vec2(5.2, t * 1.7))) - 0.5;
  vec2 q = p + w * vec2(0.010, 0.016) * hz * 3.0 * clamp(mOuter * 1.6 + 0.25, 0.0, 1.0);
  vec3 col = texture(uTex, q).rgb;

  // ---- replace the photographed (frozen) flames with the oven wall glow behind them ----
  float flameZone = smoothstep(0.76, 0.80, p.x) * (1.0 - smoothstep(0.915, 0.935, p.x)) * smoothstep(0.30, 0.34, p.y) * (1.0 - smoothstep(0.50, 0.53, p.y));
  vec3 blurCol = (texture(uTex, p).rgb * 2.0 + texture(uTex, p + vec2(0.006, 0.0)).rgb + texture(uTex, p - vec2(0.006, 0.0)).rgb
                + texture(uTex, p + vec2(0.0, 0.008)).rgb + texture(uTex, p - vec2(0.0, 0.008)).rgb) / 6.0;
  float lum = dot(blurCol, vec3(0.299, 0.587, 0.114));
  float frozen = smoothstep(0.36, 0.66, lum) * flameZone * mOuter;
  if (frozen > 0.001){
    // soft, warm brick-glow in place of the frozen flame shapes
    float hgt = clamp((0.52 - p.y) / 0.22, 0.0, 1.0);
    vec3 wall = vec3(0.70, 0.30, 0.075) * mix(1.05, 0.62, hgt) * (0.88 + 0.24 * fbm(p * vec2(55.0, 40.0)));
    col = mix(col, wall, frozen);
  }

  // ---- the simulated flames ----
  if (mOuter > 0.001){
    if (uUseVid > 0.5){
      // real footage: screen it into the oven mouth, keyed by its own brightness
      vec3 v = texture(uVid, clamp(vidUv(p), 0.0, 1.0)).rgb * vidMask(p) * mInner;
      float vl = dot(v, vec3(0.299, 0.587, 0.114));
      col = col * (1.0 - 0.45 * smoothstep(0.04, 0.5, vl)) + v * 1.15;
    } else {
    float T = heatAt(p) * 0.82;
      // sharpen and brighten the core with a couple of fine-scale taps
      float Tf = T * 0.6 + 0.4 * (heatAt(p + vec2(0.0018, 0.0)) + heatAt(p - vec2(0.0018, 0.0)) ) * 0.5;
      // fine hot filaments streaming upward through the body of the flame
      float fil = fbm(vec2(p.x * 125.0, p.y * 9.0 + t * 2.6)) * 0.65 + fbm(vec2(p.x * 60.0 + 3.0, p.y * 6.0 + t * 1.8)) * 0.35;
      Tf *= 0.80 + 0.42 * fil;
      float a = smoothstep(0.03, 0.40, Tf);
      vec3 fc = fireColor(Tf);
      // soot / smoke drifting through the oven dims the glow behind it
      float soot = texture(uSim, simTc(p)).g;
      col *= 1.0 - soot * 0.20 * (1.0 - a);
      col = col * (1.0 - a * 0.5) + fc * a * 1.05;
  
  }
    // sparks with short trails
    for (int i = 0; i < 12; i++){
      float fi = float(i);
      float s1 = hash(vec2(fi, 1.3)), s2 = hash(vec2(fi, 7.9)), s3 = hash(vec2(fi, 4.1));
      float life = fract(t * (0.12 + 0.11 * s2) + s1);
      vec2 sp = vec2(0.745 + 0.15 * s3 + 0.035 * sin(t * (1.0 + 2.0 * s2) + fi * 2.1) * life, 0.495 - life * (0.11 + 0.13 * s1));
      vec2 d = (p - sp) * vec2(uImgAspect, 1.0);
      float trail = smoothstep(0.012, 0.0, abs(d.x)) * smoothstep(0.0, 0.020, d.y) * smoothstep(0.03, 0.0, d.y) * 0.5;
      float head = smoothstep(0.0032, 0.0, length(d));
      col += vec3(1.0, 0.58, 0.14) * (head + trail) * (1.0 - life) * (0.6 + 0.4 * noise1(t * 22.0 + fi * 5.0)) * mInner * 1.3;
    }
    // glowing coals on the logs
    float bed = smoothstep(0.030, 0.0, abs(p.y - 0.516)) * smoothstep(0.70, 0.76, p.x) * (1.0 - smoothstep(0.885, 0.90, p.x));
    col += vec3(1.0, 0.30, 0.03) * bed * (0.45 + 0.55 * fbm(vec2(p.x * 38.0, t * 1.4))) * 0.32 * mInner;
  }

  // ---- bloom: the fire's light spills over the oven lip, bread and bricks ----
  float bloom = heatBlur(p, 0.025) * 0.5 + heatBlur(p, 0.06) * 0.35 + heatBlur(p, 0.12) * 0.25;
  col += vec3(1.0, 0.42, 0.08) * bloom * 0.55;

  // ---- the whole room breathes with the fire ----
  float gl = exp(-length((p - vec2(0.83, 0.43)) * vec2(1.0, 1.15)) * 4.4);
  col *= 1.0 + flick * 0.45 * gl;
  col += vec3(0.9, 0.34, 0.06) * flick * 0.06 * gl * (1.0 - mInner);

  // faint sensor grain inside the oven so the fire sits in the photo
  col += (hash(gl_FragCoord.xy + fract(t) * 91.7) - 0.5) * 0.035 * mOuter;

  // gentle highlight roll-off so hot cores stay creamy instead of clipping
  col = col / (1.0 + max(col - 0.85, 0.0) * 0.55);
  o = vec4(col, 1.0);
}`;

export type FireRenderer = {
  setVideo?(video: HTMLVideoElement | null): void;
  resize(): void;
  frame(timeSec: number, dtSec: number): void;
  dispose(): void;
};

const REGION = [0.58, 0.27, 0.35, 0.33]; // x, y, w, h of the sim window in image uv

export function createFireSim(
  gl: WebGL2RenderingContext,
  img: HTMLImageElement,
  canvas: HTMLCanvasElement,
): FireRenderer | null {
  if (!gl.getExtension("EXT_color_buffer_float") && !gl.getExtension("EXT_color_buffer_half_float"))
    return null;

  const compile = (type: number, src: string) => {
    const s = gl.createShader(type)!;
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.warn("Fire sim shader:", gl.getShaderInfoLog(s));
      return null;
    }
    return s;
  };
  const link = (fsSrc: string) => {
    const vs = compile(gl.VERTEX_SHADER, SIM_VERT);
    const fs = compile(gl.FRAGMENT_SHADER, fsSrc);
    if (!vs || !fs) return null;
    const p = gl.createProgram()!;
    gl.attachShader(p, vs);
    gl.attachShader(p, fs);
    gl.linkProgram(p);
    return gl.getProgramParameter(p, gl.LINK_STATUS) ? p : null;
  };
  const simProg = link(SIM_FRAG);
  const renderProg = link(RENDER_FRAG);
  if (!simProg || !renderProg) return null;

  // simulation targets (ping-pong), sized to the window's pixel aspect
  const regionAspect = (REGION[2]! * (img.naturalWidth / img.naturalHeight)) / REGION[3]!;
  const SH = 210;
  const SW = Math.round(SH * regionAspect);
  const targets: { tex: WebGLTexture; fbo: WebGLFramebuffer }[] = [];
  for (let i = 0; i < 2; i++) {
    const tex = gl.createTexture()!;
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA16F, SW, SH, 0, gl.RGBA, gl.HALF_FLOAT, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    const fbo = gl.createFramebuffer()!;
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
    if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) return null;
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    targets.push({ tex, fbo });
  }
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);

  // photo texture
  const photo = gl.createTexture()!;
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, photo);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

  // optional real-footage texture
  const vidTex = gl.createTexture()!;
  gl.activeTexture(gl.TEXTURE2);
  gl.bindTexture(gl.TEXTURE_2D, vidTex);
  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    gl.RGB,
    1,
    1,
    0,
    gl.RGB,
    gl.UNSIGNED_BYTE,
    new Uint8Array([0, 0, 0]),
  );
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  let video: HTMLVideoElement | null = null;

  const aspect = img.naturalWidth / img.naturalHeight;
  const U = (p: WebGLProgram, n: string) => gl.getUniformLocation(p, n);
  const vao = gl.createVertexArray();
  gl.bindVertexArray(vao);

  let read = 0;
  const stepSim = (time: number, dt: number) => {
    const src = targets[read]!;
    const dst = targets[1 - read]!;
    gl.useProgram(simProg);
    gl.bindFramebuffer(gl.FRAMEBUFFER, dst.fbo);
    gl.viewport(0, 0, SW, SH);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, src.tex);
    gl.uniform1i(U(simProg, "uPrev"), 1);
    gl.uniform2f(U(simProg, "uSize"), SW, SH);
    gl.uniform4f(U(simProg, "uRegion"), REGION[0]!, REGION[1]!, REGION[2]!, REGION[3]!);
    gl.uniform1f(U(simProg, "uImgAspect"), aspect);
    gl.uniform1f(U(simProg, "uTime"), time);
    gl.uniform1f(U(simProg, "uDt"), dt);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    read = 1 - read;
  };

  // warm-up so the fire is already roaring on the very first frame
  const warm = 2.0;
  for (let i = 0; i < 75; i++) stepSim(warm + i / 30, 1 / 30);
  let simTime = warm + 75 / 30;

  let quality = 1;
  let slow = 0;
  let n = 0;
  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.25) * quality;
    const w = Math.max(1, Math.round(canvas.clientWidth * dpr));
    const h = Math.max(1, Math.round(canvas.clientHeight * dpr));
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
  };

  const frame = (_now: number, dtSec: number) => {
    // adaptive quality: if the device struggles, quietly render at lower resolution
    if (dtSec > 1 / 36 && dtSec < 0.5) slow++;
    if (++n === 60) {
      if (slow > 30 && quality > 0.55) {
        quality *= 0.75;
        resize();
      }
      n = 0;
      slow = 0;
    }
    const dt = Math.min(Math.max(dtSec, 1 / 120), 1 / 24);
    simTime += dt;
    const useVideo = !!video && video.readyState >= 2;
    if (useVideo) {
      gl.activeTexture(gl.TEXTURE2);
      gl.bindTexture(gl.TEXTURE_2D, vidTex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, video!);
    } else {
      stepSim(simTime, dt);
    }

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.useProgram(renderProg);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, photo);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, targets[read]!.tex);
    gl.uniform1i(U(renderProg, "uTex"), 0);
    gl.uniform1i(U(renderProg, "uSim"), 1);
    gl.uniform1i(U(renderProg, "uVid"), 2);
    gl.uniform1f(U(renderProg, "uUseVid"), useVideo ? 1 : 0);
    gl.uniform2f(U(renderProg, "uRes"), canvas.width, canvas.height);
    gl.uniform4f(U(renderProg, "uRegion"), REGION[0]!, REGION[1]!, REGION[2]!, REGION[3]!);
    gl.uniform1f(U(renderProg, "uImgAspect"), aspect);
    gl.uniform1f(U(renderProg, "uTime"), simTime);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  };

  resize();
  return {
    setVideo(v) {
      video = v;
    },
    resize,
    frame,
    dispose() {
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    },
  };
}
