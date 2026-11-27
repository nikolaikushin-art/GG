# Golden Grain Bakehouse: pre-launch sign-off

Reviewed 18 November 2026. Everything below needs a decision or confirmation from the business before the site goes live. Nothing here has been invented to fill a gap; where a fact could not be verified, the copy has been made neutral and the item is listed here.

## 1. Claims the business must confirm

| # | Claim on the site | Where | Why it is listed |
|---|---|---|---|
| 1 | Delivery "seven days a week, including bank holidays" | Home, Wholesale, Foods, Delivery | Two places previously said "six days". Aligned to seven (original brief). Confirm. |
| 2 | Order cut-off 4pm for next-morning delivery | Throughout | From the original copy. |
| 3 | Delivery areas: London, Essex, Hertfordshire, Kent, Surrey | Home, Delivery, Wholesale | From the original copy. |
| 4 | Free sample box, delivered free within the London area | Home, Contact, Wholesale | A commercial commitment. |
| 5 | Short or wrong items "credited the same day" | Delivery, Wholesale | A commercial commitment. |
| 6 | "Our own vans and our own drivers"; "the same driver keeps your round" | Home, Wholesale | Operational promises. |
| 7 | Orders replied to within one working day | Contact, Trade | Service promise. |
| 8 | Own-label and bespoke baking; frozen and part-baked lines | Home, Foods, Wholesale | Capability claims. |
| 9 | Supplies "a wholesaler loading three pallets" | Foods | Capability claim. |
| 10 | Christmas schedule "sent each December" | Wholesale | Promise to customers. |
| 11 | Sourdough "slow-fermented"; levain fed twice a day | Home, catalogue says "48-hour" | Homepage previously said 24 hours; now neutral. Confirm the real process. |
| 12 | British flour; stoneground wholemeal; all-butter pastry | Home, catalogue | Ingredient claims. Product data in `src/lib/product-details.ts` was not audited against real specifications. |

## 2. Removed because they could not be supported

The company was incorporated on 14 November 2026 (Companies House record, checked by the site owner on 17 November 2026). These were removed or softened:

- "5,000+ loaves every night", "120+ trade customers", "30+ cuisines baked" (replaced with checkable facts: product lines, ranges, cut-off).
- "The thousandth delivery tastes like the first"; bakers who "have learnt from each other for years".
- "Bakeries we proudly supply" and "the ones Londoners ask for by name".
- "Ring the order desk": no telephone number is published.
- A caption stating every image was baked in the bakehouse (see 3).

## 3. Photography

Many images appear to be illustrative or generated. The site now says images are illustrative. Please confirm the source and licence of every image. If real photography is commissioned, the "illustrative" wording on story pages can be removed.

Two images are only 476px wide and are shown at full width, so they look soft on large screens. Replace with originals of at least 1600px:

- `src/assets/editorial/bakers-tools.jpg` (glossary index)
- `src/assets/editorial/sample-box.jpg` (wholesale page)

Total image weight is 75 MB across 363 files; 22 are over 500 KB. Compress before launch.

## 4. Prices and terms

- All prices are planning estimates, shown publicly as "guide" and "trade guide" prices. Decide whether they stay visible. See `PRICE_AUDIT.md`.
- Minimum order, delivery charge, VAT treatment and payment terms are unset.
- Card payment is switched off until `STRIPE_SECRET_KEY` is added. Test with card 4242 4242 4242 4242 in test mode first.

## 5. Legal and registration

- Privacy notice: have it reviewed by a legal adviser. It states that fonts load from Google Fonts. Self-hosting them would remove that disclosure.
- VAT number: add when registered.
- Verify the Companies House details again on the day of launch.

## 6. Technical items needing the live domain

- Add `sitemap.xml`, canonical tags and an `og:image` (all need the final domain).
- Real telephone number and verified email address (`orders@goldengrain.co.uk`).
- Optional style choice: headings use Title Case. British editorial style usually prefers sentence case. This was left as designed.

## 7. What was checked

- 349 pages crawled; every page returns 200.
- 493 page-and-screen combinations tested (29 templates, 17 screen sizes, 320px to 2560px) for overflow, broken images, alt text, headings, metadata, console errors, text size and tap targets.
- Full-site check at 320px and 375px for horizontal overflow.
- Type-check, 18 automated tests and production build pass.

Not tested: live payments, colour contrast, keyboard navigation, page-speed scores, real devices.

## 8. Page content: what is unique and what was removed

Every page now carries only content that belongs to it. Repeated filler was removed rather than rewritten, because inventing facts to fill templates would not be honest.

- **265 story pages:** each now shows its own photograph, title and caption, plus the matching catalogue product where one exists, and three neighbouring stories. The shared "story" paragraph, the identical four-fact strip, the rotating closing lines, the second unrelated photograph and the repeated call-to-action were removed. A small "Illustrative photograph" label replaces the long disclaimer.
- **37 product pages:** removed the identical three-icon strip, the "specification coming soon" block (30 products), the generic "planning your order" and "before serving" rows, the category-wide serving band and the repeated closing call-to-action. Each page keeps its own name, origin, range, image, price calculator and, for the seven products with data, its specification, ingredients, method and serving ideas.
- **30 glossary entries:** removed the identical "Ask a baker / Browse the bakehouse" buttons. Each entry's definition, steps, questions and quotation were already its own.

**Decisions for the client**

1. 30 of 37 products have no specification, ingredient or method data. Supplying it would let those pages grow genuine, unique sections. Until then they are short by design.
2. Story pages are now short photo-and-caption pages. Search engines may treat that as thin content. Consider `noindex` on stories that do not match a product, or merging them into a gallery. 26 stories share a photograph with another story.
3. The site still has no sitewide ask for the visitor to act on these pages beyond the header button and footer links. Add one deliberately if wanted.
