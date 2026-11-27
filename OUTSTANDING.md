# Outstanding items before launch

0. **Stripe payments (needs you):** card payment is built (`/basket`, `/api/checkout`, `/order/success`) but switched off until you add `STRIPE_SECRET_KEY` in Vercel > Settings > Environment Variables (use a `sk_test_` key first). See `.env.example`.
   - Prices are always taken from `src/lib/pricing.ts` on the server, never from the browser. **Those prices are unapproved guide prices. Approve them before taking real payments.**
   - `MIN_ORDER_PENCE` and `DELIVERY_CHARGE_PENCE` are unset, because the business has not confirmed them. Set them when it has.
   - VAT: set `STRIPE_AUTOMATIC_TAX=true` only once Stripe Tax is enabled and the company is VAT registered. Otherwise VAT is not added and the basket says "Shown on your invoice".
   - Tested end to end only against a local mock of Stripe (this environment cannot reach Stripe). Do a test-mode payment with card 4242 4242 4242 4242 before going live.
   - Orders are visible in the Stripe dashboard (business, delivery date, postcode and notes are stored as metadata). There is no webhook or order database yet.

1. **Prices**: trade prices are now UK wholesale price −10% for 26 of 37 products (22 JJ Foodservice, 4 Hunts / A to Z); 11 keep an old unverified figure (see PRICE_AUDIT.md). Guide (retail) prices unchanged and checked against UK shop prices. Business must approve all of them and re-check supplier prices before launch.
2. **Traders' account login / online ordering**: not in the original project; needs a backend and credentials. Quotes and applications currently open a pre-written email.
3. **Email and phone**: orders@goldengrain.co.uk is unverified; the placeholder phone number was removed. Add a real number.
4. **Operating claims** (4pm cut-off, delivery areas, seven days, order desk hours) come from the original copy; confirm.
5. **VAT number**: not on the Companies House record; add when registered.
6. **Privacy notice**: describes current behaviour; have it legally reviewed.
7. **Product ingredient data** (src/lib/product-details.ts) was not audited against real specifications.
8. **Photography**: glossary photographs never repeat within the glossary; a few pages use generic bakery shots, and some images are shared with other pages.
9. No GIF files exist in the project.
