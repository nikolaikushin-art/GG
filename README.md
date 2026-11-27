# Golden Grain Bakehouse

Wholesale artisan bakery website — TanStack Start (React 19, Tailwind 4), deployed on Vercel.

## Develop
```
npm install
npm run dev
```

## Deploy to Vercel
Import the repo (or run `npx vercel`). Framework preset: **Other**; the build (`npm run build`) emits `.vercel/output` via Nitro. No environment variables required.


## Payments (Stripe Checkout)

Set `STRIPE_SECRET_KEY` (and optionally `SITE_URL`, `MIN_ORDER_PENCE`, `DELIVERY_CHARGE_PENCE`, `STRIPE_AUTOMATIC_TAX`) in the Vercel project settings. See `.env.example` and `OUTSTANDING.md`. No Stripe SDK is used; the server calls the Stripe REST API directly.
