# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite)
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # ESLint
```

There is no test suite configured.

## Architecture

A frontend-only ecommerce storefront using React 19, Tailwind CSS v4, React Router v7, and Vite. All product data comes from [FakeStoreAPI](https://fakestoreapi.com/) — there is no backend.

### Global State: CartContext

`src/CartContext.jsx` is the single source of shared state. It wraps the entire app and manages:
- `cart` — array of items, persisted to `localStorage` on every change
- `isCartOpen` — controls the slide-out cart drawer visibility

Cart item shape:
```js
{ data: { id, title, category, description, price, image }, quantity }
```

Every component that needs cart operations imports `useContext(CartContext)`.

### Routing & Layout

`src/App.jsx` wraps everything in `<CartProvider>` and renders `<CartDrawerWrapper />` globally (so the drawer overlays any page). Header and Footer are suppressed on `/checkout/shipping` and `/checkout/payment` via the `noLayoutPaths` array.

Routes:
- `/` — Home
- `/category/:category` — CategoryPage (filtered by FakeStoreAPI category)
- `/product/:product` — ProductPage (product ID as param)
- `/cart` — Cart page
- `/checkout/shipping` → `/checkout/payment` → `/order_confirmation` — linear checkout flow
- `/search`, `/login`, `/account`, `/favorites` — additional pages

### Cart Drawer

`CartDrawerWrapper` handles the overlay and outside-click-to-close logic; it only renders the drawer on `md` (≥768px) viewports and auto-closes on resize below that breakpoint. `CartDrawer` is the drawer UI itself and reads directly from `CartContext`.

### Checkout Forms

`ShippingForm` and `PaymentForm` each manage their own field state via `useState` with an `inputs` config array (field metadata: type, name, pattern, errorMessage) and a separate `values` object. They delegate rendering to `ShippingFormInput` / `PaymentFormInput` respectively. On submit, `ShippingForm` navigates to `/checkout/payment`; `PaymentForm` clears the cart and navigates to `/order_confirmation`.
