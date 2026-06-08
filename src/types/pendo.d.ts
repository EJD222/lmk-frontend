/**
 * Pendo analytics agent — loaded as a global via the inline snippet in
 * `index.html` (assigns `window.pendo = window.pendo || (function() {...})()`
 * then swaps in the real agent once `pendo.js` finishes loading from the CDN).
 *
 * TypeScript has no knowledge of this global, so `src/main.tsx` referencing
 * `pendo.initialize(...)` fails with TS2304 ("Cannot find name 'pendo'").
 * This ambient declaration teaches the compiler about the shape we rely on.
 */
interface PendoVisitor {
  id: string;
  [key: string]: unknown;
}

interface PendoAccount {
  id: string;
  [key: string]: unknown;
}

interface PendoInitializeOptions {
  visitor: PendoVisitor;
  account?: PendoAccount;
}

interface PendoAgent {
  initialize: (options: PendoInitializeOptions) => void;
  [key: string]: unknown;
}

declare const pendo: PendoAgent;
