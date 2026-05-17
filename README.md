# Pixel Refurbished — Shopify Theme

Custom Shopify theme voor Pixel Refurbished (premium refurbished iPhones & Samsungs).
Bestelflow gaat via WhatsApp (+31 6 24978746) — geen Shopify checkout actief.

## Stack

- Liquid + Alpine.js
- Tailwind CSS via CDN (in `layout/theme.liquid`)
- Hardgecodeerde product catalogus in `snippets/pixel-products.liquid` (20 producten)
- Productfoto's in `assets/p-{slug}-{01..06}.jpg`

## Folder structuur

```
assets/      Logo, favicon, 3 payment SVG's, pixel-styles.css, pixel-app.js
             + 120 product foto's (20 toestellen × 6 zijden)
config/      settings_schema.json + settings_data.json
layout/      theme.liquid + password.liquid
locales/     nl.default.json
sections/    header, footer, home-content, page-* (telefoons, telefoon,
             over-ons, contact, klantenservice, verkopen, checkout)
snippets/    pixel-products, product-card, product-slider, color-swatch
templates/   index.json, page.*.json voor de custom pagina's, +
             cart/collection/product/search/blog/article/list-collections
             (redirecten naar /pages/telefoons)
```

## Pages aanmaken in Shopify Admin

| Title         | Handle           | Template            |
|---------------|------------------|---------------------|
| Over ons      | `over-ons`       | `page.over-ons`     |
| Contact       | `contact`        | `page.contact`      |
| Klantenservice| `klantenservice` | `page.klantenservice` |
| Verkopen      | `verkopen`       | `page.verkopen`     |
| Telefoons     | `telefoons`      | `page.telefoons`    |
| Telefoon      | `telefoon`       | `page.telefoon`     |
| Afrekenen     | `checkout`       | `page.checkout`     |

`/pages/telefoon?p={slug}` toont de product-detail van het juiste toestel.

## Gemaakt door

[TechAzura](https://techazura.nl)
