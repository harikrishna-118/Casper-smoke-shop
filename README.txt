CASPER SMOKE SHOP — FRONTEND COMPLIANCE DEMO BUILD
==================================================

This package is a browser-only frontend QA/demo implementation built from
Casper Smoke Shop's existing static storefront. It uses deterministic DEMO
catalog data so the requested checklist can be exercised without a database.

FILES
-----
index.html      Existing Casper storefront markup.
app.js          Catalog model, age gate, search/filter/sort, product variants,
                cart, checkout, shipping/tax/promo calculations, account UI,
                order-state simulation, catalog validation and QA sandbox.
styles.css      Existing styles plus compliance/catalog/QA responsive styles.
_redirects      SPA fallback for Netlify-style static hosting.

LOGO
----
The package intentionally does NOT include casper-mascot-logo.png or
casper-mascot-logo.jpg. Keep the existing logo files in the same folder.

DEMO CATALOG DATA
-----------------
Every demo record is normalized with:
- Product ID, SKU, UPC, manufacturer, brand
- Product name, short/full description
- Category/subcategory/tags
- Stable slug, status, published and featured flags
- Cost, retail, sale, compare-at, recommended price and margin fields
- On-hand/reserved/available inventory and low-stock state
- Weight
- Age restriction and minimum age
- Destination policy fields
- Gallery/main/thumbnail image references
- Independent variant ID, SKU, UPC, price, image, inventory and status
- Variant attributes for size, flavor, color, strength and pack size

DEMO STATUS DATA
----------------
At least one demo record is Out of Stock and one is Discontinued so those
states can be tested in the catalog. One demo product has a destination
restriction for CA to exercise mixed-cart/destination validation. This is
DEMO POLICY DATA ONLY and is not a statement about actual shipping law.

FRONTEND CHECKLIST COVERAGE
---------------------------
1. Catalog:
   Required-field/duplicate validation, identifiers, categories, variants,
   slugs, statuses, publish/featured flags, pricing and inventory metadata.

2. Age verification:
   21+ gate, DOB format validation, impossible date validation, future-date
   rejection, under-age rejection, direct product URL protection, restricted
   search/detail/cart/checkout checks and guest-flow checks in the browser.

3. Destination restrictions:
   Structured product destination rules, state validation and mixed-cart
   destination checks at checkout.

4. Shipping:
   Destination, quantity and weight-aware shipping calculation, heavy-item
   surcharge, in-state free-shipping threshold and invalid ZIP/address checks.

5. Inventory:
   On-hand/reserved/available fields, low-stock/out-of-stock states,
   backorder-disabled oversell guards, variant-level quantity validation and
   frontend inventory decrement after a demo order.

6. Pricing/promotions:
   Cost/retail/sale/compare-at/recommended/margin fields, percentage and
   fixed demo coupons, expired coupon rejection, first-order and per-customer
   usage checks, and coupon recalculation.

7. Media:
   Main image, variant image, lazy loading, image error fallback and image
   zoom behavior.

8. Search:
   Product name, partial name, brand, manufacturer, SKU, UPC, category,
   size/flavor/strength/tag searches, case-insensitive matching and clear
   no-results state.

9. Navigation/filters/sorting:
   Category, brand, price range, availability, age-restricted and sale
   filters; combined filtering; relevance, price, newest and rating sorting.

10. Cart:
    Add/remove, quantity changes, zero/negative rejection, stock limits,
    persisted cart, changed inventory checks, current catalog price sync and
    coupon recalculation.

11. Checkout:
    Customer/address validation, age checks, destination checks, shipping,
    tax, discount, exactly-once browser order simulation and confirmation.

12–15. Orders/accounts:
    Browser order states, account UI, saved browser state, order history
    storage, reorder-safe product restrictions, and frontend return/refund
    simulation helpers are available through the QA API.

16. Security:
    Frontend input validation and protected UI flows are implemented, but
    real authentication, authorization, API security, CSRF, rate limiting,
    secure sessions, payment security and SQL injection protection require a
    trusted backend and cannot be made secure in static browser JavaScript.

17. Responsive:
    Existing mobile/tablet responsive CSS plus responsive catalog, product,
    cart, checkout and QA components.

18. Scale:
    Catalog rendering is data-driven. The browser can be used to load larger
    demo arrays through the QA API, but 10K–50K production-scale performance
    requires real performance/load testing.

19. Import/export:
    Frontend row validation and CSV export helpers are exposed through the
    QA API. Real Excel/database round-trip import requires backend/admin work.

20. Audit/admin:
    Frontend order-state timestamps and browser demo state exist for UI
    testing; authoritative audit logs/admin permissions require backend.

QA SANDBOX
----------
Open the deployed site with:
    ?qa=1

Example:
    https://your-site.example/?qa=1

The QA panel provides catalog validation and buttons for under-age, invalid
DOB, future DOB, oversell, invalid address and demo CSV export tests.

DEVTOOLS API
------------
window.CasperFrontendQA
window.CasperCatalogDemo

Useful examples:
- CasperFrontendQA.validateCatalog()
- CasperFrontendQA.products
- CasperFrontendQA.validateQuantity(product, 1)
- CasperFrontendQA.validateCartItemQuantity(cartItem, 2)
- CasperFrontendQA.calculateShipping(cartItems, 'WY')
- CasperFrontendQA.validateAddress({email:'a@b.com',address:'123 Main St',city:'Casper',zip:'82601'})
- CasperFrontendQA.getOrders()
- CasperFrontendQA.updateOrderStatus(orderNumber, 'Shipped')
- CasperFrontendQA.returnOrder(orderNumber)
- CasperFrontendQA.refundOrder(orderNumber, 10)
- CasperFrontendQA.exportCatalogCSV()

DEPLOYMENT
----------
Keep index.html, app.js, styles.css, _redirects and the existing Casper logo
files together in the Netlify publish directory.

IMPORTANT
---------
All catalog values are demonstration data. Replace demo identifiers,
manufacturer/brand values, images, prices, tax configuration, destination
rules and inventory with authoritative business data before production.
Static frontend validation is not a substitute for server-side enforcement.


SUBCATEGORY DEMO CATALOG
Every navbar subcategory contains 30 dummy products (minimum), with unique IDs/SKUs/UPCs generated by the frontend catalog normalization layer.
