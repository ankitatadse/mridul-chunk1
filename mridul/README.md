# MRIDUL — Saree E-commerce (Chunk 1: Foundation + Homepage)

## What's here
- Next.js 16 (App Router) + TypeScript + Tailwind v4
- Design tokens in `src/app/globals.css` (cream/ink/wine palette, Fraunces + Public Sans)
- Mock product catalog: `src/data/products.ts` (12 sarees)
- Shopify-ready data layer: `src/lib/product-service.ts` — swap its internals for the
  Storefront API later; components never import `data/products.ts` directly
- Cart + wishlist state with localStorage persistence: `src/context/store-context.tsx`
- Full homepage: announcement bar, navbar, hero slider, social proof strip, new arrivals
  carousel, collections, campaign, best sellers (with filter tabs), story, community,
  journal, benefits, Instagram grid, newsletter, footer, cart drawer, WhatsApp button

## Run it
```
npm install
npm run dev
```

## Build note
`next/font/google` needs to fetch Fraunces + Public Sans from Google at build time.
That network call is blocked in this sandbox, so the build was verified twice: once
with the real Google Font imports (passes typecheck/lint), and once with them
temporarily stripped to confirm the rest of the app compiles and prerenders cleanly.
On Vercel (or any environment with normal internet access) `npm run build` will fetch
the fonts and succeed as-is — no action needed.

## Not built yet (next chunks)
- /shop (grid, filters, sort)
- /collections/[slug]
- /product/[slug] (gallery, accordion, details)
- Full cart/checkout flow beyond the drawer
- Animations pass, final responsive/accessibility/SEO audit
