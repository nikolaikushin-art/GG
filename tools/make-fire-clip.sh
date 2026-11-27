#!/usr/bin/env bash
# Turns a raw fire-on-black video into the site's looping oven fire clip.
#
#   ./tools/make-fire-clip.sh path/to/fire_720p_120hz_from_right_short.mp4
#
# Output: public/fire/fire.mp4  (+ fire.webm)  - muted, ~960px wide, seamless loop, small file.
# Needs ffmpeg (brew install ffmpeg / apt install ffmpeg).
#
# Optional tweaks via environment variables:
#   START=3    seconds to skip at the start      LEN=10    loop length in seconds
#   FADE=1.5   crossfade that hides the loop seam
#   CROP=w:h:x:y   crop the raw frame first (e.g. CROP=800:500:240:100) to frame just the flames
set -euo pipefail
IN="${1:?Usage: $0 input-video}"
START="${START:-3}"; LEN="${LEN:-10}"; FADE="${FADE:-1.5}"
OUT_DIR="$(cd "$(dirname "$0")/.." && pwd)/public/fire"
mkdir -p "$OUT_DIR"
PRE="fps=30,scale=960:-2"
[ -n "${CROP:-}" ] && PRE="crop=${CROP},${PRE}"
FILTER="[0:v]${PRE},format=yuv420p,split[s1][s2];\
[s1]trim=start=${FADE}:end=$(echo "$LEN + $FADE" | bc),setpts=PTS-STARTPTS[body];\
[s2]trim=start=0:end=${FADE},setpts=PTS-STARTPTS[head];\
[body][head]xfade=transition=fade:duration=${FADE}:offset=$(echo "$LEN - $FADE" | bc),format=yuv420p[v]"
ffmpeg -y -loglevel error -ss "$START" -t "$(echo "$LEN + $FADE + 0.5" | bc)" -i "$IN" -filter_complex "$FILTER" -map "[v]" -an \
  -c:v libx264 -crf 26 -preset slow -movflags +faststart "$OUT_DIR/fire.mp4"
ffmpeg -y -loglevel error -i "$OUT_DIR/fire.mp4" -an -c:v libvpx-vp9 -crf 36 -b:v 0 "$OUT_DIR/fire.webm" || true
ls -lh "$OUT_DIR"
echo "Done. Deploy and the oven now uses real fire footage."
