# Price audit — Golden Grain Bakehouse

Updated 27 November 2026 (UK market check). Supersedes earlier audits.

## Rule

**Trade (wholesale) price = published UK wholesale price − 10%.**

- First choice: **JJ Foodservice** delivered price, standard 1–9 case tier, per single unit (pack price ÷ pieces).
- Where JJ does not list the product (ciabatta, focaccia, danish, doughnut), the nearest published UK wholesale price is used instead: **Hunts Food Group** or **A to Z Catering**. Same 10% reduction.
- All figures read from the suppliers' public web pages on 27 November 2026. Standard prices, not offers.
- Logic: `src/lib/jj-reference.ts` (code, name, pack price, pack quantity, source, notes per line) feeding `src/lib/pricing.ts`. A test fails if any referenced line is not 10% below its reference. Case sizes are Golden Grain's own and unchanged.

## Coverage: 26 of 37 products

- **22** from JJ Foodservice (17 like-for-like, 5 proxy), **4** from Hunts / A to Z.
- **11 have no price change** and remain unverified:
  - **Scones (£0.65):** inside the UK range found (Hunts £0.49–£0.62, Caterfood £0.72, Brakes £0.78 each), so left as is.
  - **Cinnamon roll (£1.50):** UK trade prices range from £0.54 (85g whirl) to £2.42 (140g bun), so no single benchmark fits; left as is.
  - **Specialist breads: sangak, barbari, taftoon, Turkish pide, Afghan roghani, khameeri, kulcha, nan-e-tiri, and pistachio baklava:** not listed by JJ, Hunts, Brakes or A to Z in the pages checked. These need a quote from a specialist supplier or the business's own costs.

## Guide (retail) prices: checked, not changed

Guide prices are suggested shelf prices, so they were compared with UK shop prices, not wholesale:

| Product | Our guide | UK shop price seen |
|---|---|---|
| Sourdough boule | £4.95 | GAIL's sourdough 650g £4.90 |
| Almond croissant | £3.95 | GAIL's £4.20 |
| Pain au chocolat | £3.15 | GAIL's £2.95 |
| Cinnamon roll | £3.50 | GAIL's cinnamon bun £4.00 |
| Danish | £3.25 | Tesco Finest danish £1.35 (supermarket, baked in store) |
| White sliced loaf | £2.50 | Supermarket 800g loaves roughly £0.75–£1.40 |

Cafés and bakeries are in line. The white sliced loaf guide (£2.50) is well above supermarket prices, which is normal for a bakery but worth a conscious decision.

## Check before publishing

- Several lines dropped sharply (butter croissant £1.10 → £0.61, pistachio croissant £2.25 → £0.65, paratha £0.48 → £0.16, doughnut £0.85 → £0.45). Wholesale reference pack sizes are smaller or simpler (60g croissant, small frozen parathas, 45g doughnut). Confirm they still cover your costs.
- Reference products are mostly frozen / part-baked. Fresh artisan lines can sit above them.
- Farmhouse bloomer reference (Kara 800g, £3.00) is frozen and not stocked at every JJ branch.
- Supplier prices change often, and whether they are ex-VAT is not stated. VAT, delivery charges, minimum order value and payment terms are not in the data.
- Still unapproved by the business.

## Full table

| Product | Unit | Guide | Old trade | **New trade** | Market unit (delivered) | Reference line | Source | Basis | Case size | Case total |
|---|---|---|---|---|---|---|---|---|---|---|
| white-sliced-loaf | loaf | £2.50 | £1.45 | **£1.61** | £1.79 | BRE061 Kingsmill Great Everyday Soft Medium Sliced White 800g | JJ Foodservice | like-for-like | 8 | £12.88 |
| wholemeal-loaf | loaf | £2.85 | £1.65 | **£1.70** | £1.89 | BRE063 Kingsmill Tasty Medium Sliced Wholemeal 800g | JJ Foodservice | like-for-like | 8 | £13.60 |
| farmhouse-bloomer | loaf | £3.50 | £2.05 | **£2.70** | £3.00 | BRE118 Kara Medium Malted Bloomer (Frozen) 6x800g | JJ Foodservice | proxy | 6 | £16.20 |
| granary-tin | loaf | £3.25 | £1.90 | **£1.70** | £1.89 | BRE064 Kingsmill Tasty Thick Sliced Wholemeal 800g | JJ Foodservice | proxy | 8 | £13.60 |
| sourdough-boule | loaf | £4.95 | £2.95 | **£1.80** | £2.00 | BRE139 Bridor Part Baked Sourdough Plain Loaf 14x540g | JJ Foodservice | like-for-like | 6 | £10.80 |
| french-baguette | baguette | £2.75 | £0.95 | **£0.76** | £0.84 | BAK448 La Lorraine Part Baked Baguette 57cm 25x250g | JJ Foodservice | like-for-like | 20 | £15.20 |
| ciabatta | bread | £1.95 | £0.75 | **£0.56** | £0.62 | 54944 Planete Pain Oval Ciabatta 40x100g | Hunts Food Group | proxy | 20 | £11.20 |
| focaccia | portion | £3.50 | £1.65 | **£0.95** | £1.06 | 78498 Speciality Breads Rosemary Focaccia Roll 40x100g | Hunts Food Group | proxy | 12 | £11.40 |
| turkish-simit | ring | £2.00 | £0.80 | **£0.72** | £0.80 | BAK402 Letsdough Istanbul Style Simit 4x100g | JJ Foodservice | like-for-like | 24 | £17.28 |
| brioche-burger-bun | bun | £0.95 | £0.42 | **£0.49** | £0.54 | BUN028 Letsdough 4.5" Gourmet Sliced Brioche Buns 1x48 | JJ Foodservice | like-for-like | 48 | £23.52 |
| sesame-burger-bun | bun | £0.65 | £0.25 | **£0.25** | £0.28 | BUN017 Letsdough 4" Seeded Burger Buns 1x48 | JJ Foodservice | like-for-like | 48 | £12.00 |
| hot-dog-roll | roll | £0.65 | £0.25 | **£0.54** | £0.60 | BAK440 Americana 8.5" Brioche Top Sliced Hot Dog Rolls 1x48 | JJ Foodservice | proxy | 48 | £25.92 |
| bap-barm-cake | roll | £0.65 | £0.25 | **£0.30** | £0.33 | BAK081 Letsdough 5" Sandwich Floured Baps 48x86g | JJ Foodservice | like-for-like | 48 | £14.40 |
| pitta-shawarma-bread | bread | £0.65 | £0.22 | **£0.14** | £0.15 | BRE026 JJ Large Frozen Pitta Breads 20x6 | JJ Foodservice | like-for-like | 60 | £8.40 |
| naan-bread | bread | £1.50 | £0.55 | **£0.56** | £0.62 | BRE092 Baked Earth Large Folded Naan Bread 24x80g | JJ Foodservice | like-for-like | 30 | £16.80 |
| sangak-bread | bread | £3.50 | £1.75 | **£1.75** | — | no benchmark found (old figure kept) | — | unverified (old figure kept) | 15 | £26.25 |
| barbari-bread | bread | £2.50 | £1.25 | **£1.25** | — | no benchmark found (old figure kept) | — | unverified (old figure kept) | 20 | £25.00 |
| taftoon-bread | bread | £1.00 | £0.38 | **£0.38** | — | no benchmark found (old figure kept) | — | unverified (old figure kept) | 40 | £15.20 |
| lavash-bread | bread | £0.85 | £0.30 | **£0.25** | £0.28 | BRE148 KaterBake 12" Lebanese Flatbread Khobez 1x100 | JJ Foodservice | proxy | 50 | £12.50 |
| turkish-pide | bread | £2.75 | £1.35 | **£1.35** | — | no benchmark found (old figure kept) | — | unverified (old figure kept) | 20 | £27.00 |
| afghan-roghani | bread | £2.50 | £1.20 | **£1.20** | — | no benchmark found (old figure kept) | — | unverified (old figure kept) | 20 | £24.00 |
| paratha | bread | £1.50 | £0.48 | **£0.16** | £0.17 | BAK506 Humza Paratha Original 20 Pieces 1x1.6kg | JJ Foodservice | like-for-like | 40 | £6.40 |
| khameeri-bread | bread | £2.25 | £1.05 | **£1.05** | — | no benchmark found (old figure kept) | — | unverified (old figure kept) | 20 | £21.00 |
| kulcha-bread | bread | £1.75 | £0.65 | **£0.65** | — | no benchmark found (old figure kept) | — | unverified (old figure kept) | 30 | £19.50 |
| nan-e-tiri | bread | £0.95 | £0.32 | **£0.32** | — | no benchmark found (old figure kept) | — | unverified (old figure kept) | 40 | £12.80 |
| butter-croissant | pastry | £2.85 | £1.10 | **£0.61** | £0.67 | BAK538 Bridor Fully Baked Fine Butter Croissant 20x60g | JJ Foodservice | like-for-like | 24 | £14.64 |
| pain-au-chocolat | pastry | £3.15 | £1.25 | **£0.65** | £0.72 | BAK539 Bridor Fully Baked Fine Butter Pain au Chocolat 20x70g | JJ Foodservice | like-for-like | 24 | £15.60 |
| pistachio-croissant | pastry | £4.50 | £2.25 | **£0.65** | £0.72 | BAK490 Bridor Ready to Bake Fine Butter Pistachio Croissant 50x85g | JJ Foodservice | like-for-like | 12 | £7.80 |
| almond-croissant | pastry | £3.95 | £1.85 | **£0.69** | £0.77 | BAK351 Bridor Almond Croissant 60x95g | JJ Foodservice | like-for-like | 12 | £8.28 |
| danish-pastry | pastry | £3.25 | £1.35 | **£0.56** | £0.62 | 20110 Schulstad Vanilla Creme Crown 48x97g | Hunts Food Group | proxy | 24 | £13.44 |
| cinnamon-roll | bun | £3.50 | £1.50 | **£1.50** | — | no benchmark found (old figure kept) | — | unverified (old figure kept) | 16 | £24.00 |
| victoria-sponge | slice | £4.25 | £1.95 | **£1.18** | £1.31 | DES427 Letscake Carrot Cake 2kg Pre-Sliced 1x16ptn | JJ Foodservice | proxy | 12 | £14.16 |
| carrot-cake-slice | slice | £4.25 | £1.95 | **£1.18** | £1.31 | DES427 Letscake Carrot Cake 2kg Pre-Sliced 1x16ptn | JJ Foodservice | like-for-like | 12 | £14.16 |
| blueberry-muffin | muffin | £2.95 | £1.45 | **£0.90** | £1.00 | MUF033 Kara Filled Blueberry Tulip Muffins 24x100g | JJ Foodservice | like-for-like | 24 | £21.60 |
| doughnut | doughnut | £2.25 | £0.85 | **£0.45** | £0.50 | AAK012 Sugared Ring Doughnuts 36x45g | A to Z Catering | like-for-like | 24 | £10.80 |
| pistachio-baklava | piece | £2.50 | £1.10 | **£1.10** | — | no benchmark found (old figure kept) | — | unverified (old figure kept) | 24 | £26.40 |
| scones | scone | £1.95 | £0.65 | **£0.65** | — | no benchmark found (old figure kept) | — | unverified (old figure kept) | 24 | £15.60 |
