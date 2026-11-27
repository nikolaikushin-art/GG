# QA report: 21 November 2026

Checked at 1440px, 820px and 390px: 46 page templates and samples (all main pages, categories, products, glossary entries, stories, 404, order success), 138 page/size combinations.
Result: no horizontal overflow, broken images, missing alt text, duplicate photos on a page, empty sections or console errors (Google Fonts cannot load in the test sandbox only).
Also tested: mobile menu, desktop dropdown, add-to-basket and basket, postcode check, contact form fields, and all 85 links on the home page resolve.
Lint, type-check, 18 tests and production build pass.

## Fixed
- Home: removed repeated stats, second FAQ, second delivery block, mid-page CTA and hero stat strip; delivery block now links to /delivery.
- Photo captions: stronger scrim and text shadow so gold text reads on light photos.
- Mobile: short top-bar message, shorter "Today's Bake" tiles, aligned "Working With Us" cards, logo blended into header.
- Journal gallery: removed 01/02/03 labels (content is not a sequence).
- Glossary index: removed repeated photo blocks; hero uses a full-resolution image.
- Story pages: "More from the bakehouse" now always shows three different photos.
- Order success: correct state on first render and an H1 while loading.
- Wholesale: hero and quote background use full-resolution photos.
- Images: re-encoded to max 1600px / quality 78 (75 MB to about 70 MB); the 16 small 476px editorial images were Lanczos-upscaled and sharpened. This improves softness but adds no real detail: replace with originals when available.

## Still needs the business
Everything in OUTSTANDING.md and CLIENT_SIGNOFF.md (prices, claims, phone, VAT, image licences).

## Round 2: generic sections and dead areas removed
Home reduced from about 30 blocks to a curated photographic set (desktop 22,900px to 11,100px; mobile 42,000px to 19,500px).
Removed: Our Story split panel, five-step "How Your Bread Is Made", "Who We Feed" cards, "Five Lines to Start With", "Working With Us" cards, "Where We Deliver" chips, "What You Can Expect" cards, Honest Ingredients, Sample Box, Shelf Ready, Baker's Notebook, Lunch Menu, Café Counter and the HomeMore block.
Other pages: About (three-value row, order timeline, four trust cards), Wholesale (four numbered steps), Trade (three numbered steps), Delivery (four-step delivery day), Contact (three link cards), Bakehouse index (stat strip), product pages (numbered "Dough to Delivery" steps, text-only serving suggestions).
Photo-and-text panels tightened to remove empty space; caption scrim eased so photos stay bright.
Re-audited: 138 page/size combinations, 0 flagged.
