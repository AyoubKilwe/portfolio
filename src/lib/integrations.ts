/**
 * Third-party integrations. Both values are public identifiers (safe to commit).
 * - WEB3FORMS_KEY: contact form delivery to your inbox via https://web3forms.com (free).
 *   Leave empty to fall back to opening the visitor's mail client.
 * - GA_MEASUREMENT_ID: Google Analytics 4 property id (G-XXXXXXXXXX). Leave empty to disable analytics.
 */
export const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";
