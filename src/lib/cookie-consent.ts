/**
 * Cookie consent utilities – central place to read consent and
 * conditionally load third-party tracking scripts.
 */

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_KEY = "marklewitz_cookie_consent";

export const getStoredConsent = (): CookiePreferences | null => {
  try {
    const stored = localStorage.getItem(COOKIE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};

export const setStoredConsent = (prefs: CookiePreferences) => {
  localStorage.setItem(COOKIE_KEY, JSON.stringify(prefs));
  applyConsent(prefs);
};

export const clearStoredConsent = () => {
  localStorage.removeItem(COOKIE_KEY);
};

/**
 * Load or remove tracking scripts based on current consent.
 * Add your tracking script IDs here once you have them.
 */
export const applyConsent = (prefs: CookiePreferences) => {
  // --- Google Analytics (gtag.js) ---
  if (prefs.analytics) {
    loadGoogleAnalytics();
  } else {
    removeScript("ga-script");
    removeScript("ga-config");
    // Revoke GA consent
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
  }

  // --- Meta / Facebook Pixel ---
  if (prefs.marketing) {
    loadMetaPixel();
  } else {
    removeScript("fb-pixel");
    if (typeof window.fbq === "function") {
      // No built-in revoke, but we prevent further loading
    }
  }
};

// ——— Helpers ———

const GA_MEASUREMENT_ID = ""; // e.g. "G-XXXXXXXXXX"

function loadGoogleAnalytics() {
  if (!GA_MEASUREMENT_ID || document.getElementById("ga-script")) return;

  const script = document.createElement("script");
  script.id = "ga-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  const config = document.createElement("script");
  config.id = "ga-config";
  config.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('consent', 'default', { analytics_storage: 'granted' });
    gtag('config', '${GA_MEASUREMENT_ID}');
  `;
  document.head.appendChild(config);
}

const META_PIXEL_ID = ""; // e.g. "123456789"

function loadMetaPixel() {
  if (!META_PIXEL_ID || document.getElementById("fb-pixel")) return;

  const script = document.createElement("script");
  script.id = "fb-pixel";
  script.textContent = `
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
    (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init','${META_PIXEL_ID}');fbq('track','PageView');
  `;
  document.head.appendChild(script);
}

function removeScript(id: string) {
  document.getElementById(id)?.remove();
}

// Global type augmentation
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    fbq?: (...args: any[]) => void;
  }
}
