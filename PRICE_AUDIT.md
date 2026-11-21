# Price audit — Golden Grain Bakehouse

Audited 18 November 2026 against `src/lib/pricing.ts`, the only pricing source in the project.

**Finding: there is no authoritative price source.** The file describes every figure as an indicative planning estimate, not an approved Golden Grain selling price. No price was changed. Every figure remains **unverified** and must be approved by the business before launch.

## Arithmetic checks (all passed)

- 37 products, 37 prices; every catalogue product has a price entry.
- Trade price is below guide price for every line.
- Case total = trade price × case size × cases, in whole pence (tested).
- Quote builder uses the same function, so the catalogue and quote cannot disagree.

## Not verifiable from the project

VAT treatment, delivery charges, minimum order value, discounts, payment terms. None exist in the data. The site states they are confirmed in writing and invents no figure.

## Lines to review first (trade price is under 35% of guide price)

| Product | Guide | Trade | Case | Trade/Guide |
|---|---|---|---|---|
| french-baguette | £2.75 | £0.95 | 20 | 35% |
| pitta-shawarma-bread | £0.65 | £0.22 | 60 | 34% |
| paratha | £1.50 | £0.48 | 40 | 32% |
| nan-e-tiri | £0.95 | £0.32 | 40 | 34% |
| scones | £1.95 | £0.65 | 24 | 33% |

## Full table

| Product | Unit | Guide | Trade | Case size | Case total |
|---|---|---|---|---|---|
| white-sliced-loaf | loaf | £2.50 | £1.45 | 8 | £11.60 |
| wholemeal-loaf | loaf | £2.85 | £1.65 | 8 | £13.20 |
| farmhouse-bloomer | loaf | £3.50 | £2.05 | 6 | £12.30 |
| granary-tin | loaf | £3.25 | £1.90 | 8 | £15.20 |
| sourdough-boule | loaf | £4.95 | £2.95 | 6 | £17.70 |
| french-baguette | baguette | £2.75 | £0.95 | 20 | £19.00 |
| ciabatta | bread | £1.95 | £0.75 | 20 | £15.00 |
| focaccia | portion | £3.50 | £1.65 | 12 | £19.80 |
| turkish-simit | ring | £2.00 | £0.80 | 24 | £19.20 |
| brioche-burger-bun | bun | £0.95 | £0.42 | 48 | £20.16 |
| sesame-burger-bun | bun | £0.65 | £0.25 | 48 | £12.00 |
| hot-dog-roll | roll | £0.65 | £0.25 | 48 | £12.00 |
| bap-barm-cake | roll | £0.65 | £0.25 | 48 | £12.00 |
| pitta-shawarma-bread | bread | £0.65 | £0.22 | 60 | £13.20 |
| naan-bread | bread | £1.50 | £0.55 | 30 | £16.50 |
| sangak-bread | bread | £3.50 | £1.75 | 15 | £26.25 |
| barbari-bread | bread | £2.50 | £1.25 | 20 | £25.00 |
| taftoon-bread | bread | £1.00 | £0.38 | 40 | £15.20 |
| lavash-bread | bread | £0.85 | £0.30 | 50 | £15.00 |
| turkish-pide | bread | £2.75 | £1.35 | 20 | £27.00 |
| afghan-roghani | bread | £2.50 | £1.20 | 20 | £24.00 |
| paratha | bread | £1.50 | £0.48 | 40 | £19.20 |
| khameeri-bread | bread | £2.25 | £1.05 | 20 | £21.00 |
| kulcha-bread | bread | £1.75 | £0.65 | 30 | £19.50 |
| nan-e-tiri | bread | £0.95 | £0.32 | 40 | £12.80 |
| butter-croissant | pastry | £2.85 | £1.10 | 24 | £26.40 |
| pain-au-chocolat | pastry | £3.15 | £1.25 | 24 | £30.00 |
| pistachio-croissant | pastry | £4.50 | £2.25 | 12 | £27.00 |
| almond-croissant | pastry | £3.95 | £1.85 | 12 | £22.20 |
| danish-pastry | pastry | £3.25 | £1.35 | 24 | £32.40 |
| cinnamon-roll | bun | £3.50 | £1.50 | 16 | £24.00 |
| victoria-sponge | slice | £4.25 | £1.95 | 12 | £23.40 |
| carrot-cake-slice | slice | £4.25 | £1.95 | 12 | £23.40 |
| blueberry-muffin | muffin | £2.95 | £1.45 | 24 | £34.80 |
| doughnut | doughnut | £2.25 | £0.85 | 24 | £20.40 |
| pistachio-baklava | piece | £2.50 | £1.10 | 24 | £26.40 |
| scones | scone | £1.95 | £0.65 | 24 | £15.60 |
