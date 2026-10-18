# RouteFree — React + Formspree

A Vite + React website. The **Vacation Coverage Request** form submits to `https://formspree.io/f/xrpedorn`.

## Run

```bash
npm install
npm run dev
```

## Test coverage requests

1. Open the site and complete the **Request route coverage** form.
2. Click **Request my coverage quote**. Wait for the success message.
3. Open your Formspree dashboard and confirm the new submission.
4. Check that email notifications are enabled and your notification address is verified in Formspree.

A success response means Formspree accepted the request; it does not guarantee email inbox delivery. Test a submission before going live.

## Driver applications

Driver applications have **not** been connected to Formspree. They still use a `mailto:` link with `hello@routefree.example` as a placeholder. Set a real email address or supply a **second** Formspree endpoint before publishing the driver form.

## Deployment

`npm run build` creates a `dist/` folder suitable for static hosting. No Stripe/payment implementation is included yet.
