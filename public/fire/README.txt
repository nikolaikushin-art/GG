REAL FIRE FOOTAGE - 2 MINUTE SETUP
==================================
1. Download a real fire clip. Free, public domain (CC0), real gas flame on black, from Uni Marburg:
   http://www.mathematik.uni-marburg.de/~thormae/misc/fire_720p_120hz_from_right_short.mp4
   (page: uni-marburg.de/en/fb12/research-groups/grafikmultimedia/research/studio  - "Fire" section)
   Any other fire-on-black-background clip also works (stock sites: search "fire black background").

2. In the project folder run:
   ./tools/make-fire-clip.sh ~/Downloads/fire_720p_120hz_from_right_short.mp4

   It trims, shrinks and makes a seamless loop -> public/fire/fire.mp4 + fire.webm.
   (needs ffmpeg:  brew install ffmpeg   or   sudo apt install ffmpeg)

3. Deploy. The site detects the clip and blends it into the oven mouth automatically.
   No clip here = the built-in live simulation plays instead.

If the flames sit too high/low/small in the oven, use the CROP option to frame the flames
tighter, e.g.  CROP=800:500:240:100 ./tools/make-fire-clip.sh input.mp4
