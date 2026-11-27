// Shaders for the live oven fire in the home hero.
// Coordinates inside the fragment shader are in *image space* (0..1, origin top-left)
// so the fire stays locked to the oven mouth whatever the screen shape (object-cover maths).

export const FIRE_VERT = `
attribute vec2 aPos;
void main(){ gl_Position = vec4(aPos, 0.0, 1.0); }
`;

export const FIRE_FRAG = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform sampler2D uTex;
uniform vec2  uRes;      // canvas size in px
uniform float uImgAspect;// image width / height
uniform float uTime;

const vec2  OVEN_C  = vec2(0.764, 0.430); // arch centre line / spring line
const vec2  OVEN_R  = vec2(0.136, 0.118); // arch half width / rise
const float OVEN_BOTTOM = 0.548;
const float FLOOR_Y = 0.505;              // where the flames sit (top of the logs)

float hash(vec2 p){
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i), b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0)), d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
float fbm(vec2 p){
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++){
    v += a * noise(p);
    p = p * 2.03 + vec2(17.1, 9.7);
    a *= 0.5;
  }
  return v;
}
float noise1(float x){
  float i = floor(x), f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(hash(vec2(i, 3.7)), hash(vec2(i + 1.0, 3.7)), f);
}

// Soft arch-shaped mask for the oven mouth. 'shrink' < 1 pulls it inside the edge.
float ovenMask(vec2 p, float shrink){
  float dx = abs(p.x - OVEN_C.x) / (OVEN_R.x * shrink);
  float upper = length(vec2(dx, (p.y - OVEN_C.y) / (OVEN_R.y * shrink)));
  float arch  = 1.0 - smoothstep(0.86, 1.0, upper);
  float rect  = 1.0 - smoothstep(0.86, 1.0, dx);
  float m = p.y < OVEN_C.y ? arch : rect;
  m *= 1.0 - smoothstep(OVEN_BOTTOM - 0.012, OVEN_BOTTOM, p.y);
  return m;
}

vec3 flameRamp(float f){
  vec3 c = mix(vec3(0.30, 0.02, 0.00), vec3(0.95, 0.27, 0.02), smoothstep(0.08, 0.42, f));
  c = mix(c, vec3(1.00, 0.66, 0.12), smoothstep(0.38, 0.72, f));
  c = mix(c, vec3(1.00, 0.93, 0.62), smoothstep(0.74, 1.00, f));
  return c;
}

// One tongue of flame rooted at x0, returns density 0..1
float tongue(vec2 p, float x0, float width, float height, float seed, float t){
  float h  = (FLOOR_Y - p.y) / height;                 // 0 at logs, 1 at tip
  if (h < -0.05 || h > 1.15) return 0.0;
  float sway = (fbm(vec2(seed * 7.0, h * 2.2 - t * 0.9)) - 0.5) * 0.09 * (0.3 + h);
  float x = (p.x - x0 - sway) / (width * (1.0 - 0.55 * clamp(h, 0.0, 1.0)));
  float body = exp(-x * x * 2.2);
  float n = fbm(vec2(p.x * 30.0 + seed * 11.0, h * 7.0 - t * 2.6 + seed));
  float lick = fbm(vec2(p.x * 12.0 - seed, h * 3.0 - t * 1.4 + seed * 3.0));
  float fall = smoothstep(1.1, 0.12, h + (lick - 0.5) * 0.55);
  float f = body * fall * (0.35 + 1.05 * n);
  f *= smoothstep(-0.05, 0.08, h);
  return clamp(f, 0.0, 1.0);
}

void main(){
  // screen -> image uv with object-cover, centred
  vec2 uv = vec2(gl_FragCoord.x / uRes.x, 1.0 - gl_FragCoord.y / uRes.y);
  float ca = uRes.x / uRes.y;
  vec2 p = uv;
  if (ca > uImgAspect) p.y = (uv.y - 0.5) * (uImgAspect / ca) + 0.5;
  else                 p.x = (uv.x - 0.5) * (ca / uImgAspect) + 0.5;

  float t = uTime;

  // ---- organic flicker of the fire's light (irregular, never a clean sine) ----
  float flick = 0.55 * noise1(t * 6.0) + 0.30 * noise1(t * 13.0 + 4.0) + 0.15 * noise1(t * 29.0 + 9.0);
  float flickC = flick - 0.5;

  float mOuter = ovenMask(p, 1.0);
  float mInner = ovenMask(p, 0.965);

  // ---- heat shimmer: the photo itself ripples upward inside the oven mouth ----
  vec2 q = p;
  if (mOuter > 0.001){
    float zone = smoothstep(0.30, 0.0, distance(p, vec2(0.84, 0.43)));
    vec2 w = vec2(
      fbm(p * vec2(34.0, 22.0) + vec2(0.0, t * 1.9)) - 0.5,
      fbm(p * vec2(26.0, 30.0) + vec2(5.2, t * 1.5)) - 0.5);
    q += w * vec2(0.010, 0.016) * (0.35 + zone) * mOuter;
  }
  vec3 col = texture2D(uTex, q).rgb;

  // ---- live flames ----
  if (mInner > 0.001){
    float t1 = tongue(p, 0.842, 0.060, 0.205 + 0.03 * flickC, 1.0, t);
    float t2 = tongue(p, 0.800, 0.048, 0.150 + 0.025 * noise1(t * 4.0), 2.3, t * 1.07);
    float t3 = tongue(p, 0.878, 0.038, 0.175 + 0.03 * noise1(t * 5.0 + 2.0), 3.7, t * 0.93);
    float t4 = tongue(p, 0.760, 0.040, 0.095 + 0.02 * noise1(t * 6.0 + 7.0), 5.1, t * 1.15);
    float f = clamp(t1 + t2 * 0.9 + t3 * 0.85 + t4 * 0.7, 0.0, 1.0);
    f = pow(f, 0.85);
    vec3 fc = flameRamp(f);
    float a = clamp(f * 1.35, 0.0, 1.0) * mInner;
    // screen blend so flames brighten, never muddy, the photographed glow
    col = 1.0 - (1.0 - col) * (1.0 - fc * a * 0.78);

    // hot bed of embers along the logs
    float bed = smoothstep(0.035, 0.0, abs(p.y - (FLOOR_Y + 0.012))) * smoothstep(0.70, 0.76, p.x) * (1.0 - smoothstep(0.88, 0.90, p.x));
    float pulse = 0.55 + 0.45 * fbm(vec2(p.x * 40.0, t * 1.6));
    col += vec3(1.0, 0.36, 0.04) * bed * pulse * 0.30 * mInner;

    // sparks lifting off the logs
    for (int i = 0; i < 14; i++){
      float fi = float(i);
      float s1 = hash(vec2(fi, 1.3)), s2 = hash(vec2(fi, 7.9)), s3 = hash(vec2(fi, 4.1));
      float life = fract(t * (0.13 + 0.12 * s2) + s1);
      vec2 sp = vec2(0.745 + 0.15 * s3 + 0.03 * sin(t * (1.0 + s2 * 2.0) + fi * 2.0) * life,
                     FLOOR_Y - 0.01 - life * (0.12 + 0.12 * s1));
      float d = length((p - sp) * vec2(uImgAspect, 1.0));
      float spark = smoothstep(0.0032, 0.0, d) * (1.0 - life) * (0.6 + 0.4 * noise1(t * 20.0 + fi * 5.0));
      col += vec3(1.0, 0.62, 0.16) * spark * mInner * 1.4;
    }
  }

  // ---- the whole room breathes with the fire: bread, bricks, oven lip ----
  float gl = exp(-distance((p - vec2(0.83, 0.43)) * vec2(1.0, 1.15), vec2(0.0)) * 4.6);
  col *= 1.0 + flickC * 0.55 * gl;
  col += vec3(0.9, 0.34, 0.06) * flickC * 0.10 * gl * (1.0 - mInner);

  gl_FragColor = vec4(col, 1.0);
}
`;
