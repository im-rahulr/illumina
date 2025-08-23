// Centralized Firebase initialization for the site
// Usage: import { app, db, analytics } from './firebase-config.js'

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";
import { initializeFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import { FIREBASE_CONFIG } from './env.js';

export const firebaseConfig = FIREBASE_CONFIG;

export const app = initializeApp(firebaseConfig);
export const analytics = (() => { try { return getAnalytics(app); } catch (_) { return null; } })();

// Use long-polling auto-detection to avoid 400 RPC issues behind proxies/ad blockers
export const db = initializeFirestore(app, { experimentalAutoDetectLongPolling: true });


