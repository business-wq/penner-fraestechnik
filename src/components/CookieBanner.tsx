import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Shield, Settings, X } from "lucide-react";
import { Link } from "react-router-dom";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_KEY = "marklewitz_cookie_consent";

const getStoredConsent = (): CookiePreferences | null => {
  try {
    const stored = localStorage.getItem(COOKIE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = getStoredConsent();
    if (!consent) {
      // Small delay so it doesn't flash immediately
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(prefs));
    setVisible(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    saveConsent({ necessary: true, analytics: true, marketing: true });
  };

  const rejectAll = () => {
    saveConsent({ necessary: true, analytics: false, marketing: false });
  };

  const saveCustom = () => {
    saveConsent(preferences);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card shadow-2xl">
            {!showSettings ? (
              /* Main Banner */
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent">
                    <Shield className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      Cookie-Einstellungen
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      Wir verwenden Cookies, um Ihnen ein optimales Nutzererlebnis zu bieten. Einige Cookies
                      sind für den Betrieb der Website notwendig, andere helfen uns, die Website zu verbessern.
                      Weitere Informationen finden Sie in unserer{" "}
                      <Link to="/datenschutz" className="text-primary hover:underline">
                        Datenschutzerklärung
                      </Link>.
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    onClick={() => setShowSettings(true)}
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Settings className="h-4 w-4" />
                    Einstellungen
                  </button>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      onClick={rejectAll}
                      className="flex-1 sm:flex-none"
                    >
                      Alle ablehnen
                    </Button>
                    <Button
                      variant="solar"
                      onClick={acceptAll}
                      className="flex-1 sm:flex-none"
                    >
                      Alle akzeptieren
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              /* Settings Panel */
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    Cookie-Einstellungen anpassen
                  </h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="mt-6 space-y-5">
                  {/* Necessary */}
                  <div className="flex items-center justify-between rounded-xl border border-border bg-muted/50 p-4">
                    <div>
                      <p className="font-heading font-bold text-foreground">Notwendig</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        Diese Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden.
                      </p>
                    </div>
                    <Switch checked disabled className="opacity-60" />
                  </div>

                  {/* Analytics */}
                  <div className="flex items-center justify-between rounded-xl border border-border p-4">
                    <div>
                      <p className="font-heading font-bold text-foreground">Analyse & Statistik</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        Helfen uns zu verstehen, wie Besucher unsere Website nutzen, um sie zu verbessern.
                      </p>
                    </div>
                    <Switch
                      checked={preferences.analytics}
                      onCheckedChange={(checked) =>
                        setPreferences({ ...preferences, analytics: checked })
                      }
                    />
                  </div>

                  {/* Marketing */}
                  <div className="flex items-center justify-between rounded-xl border border-border p-4">
                    <div>
                      <p className="font-heading font-bold text-foreground">Marketing</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        Werden verwendet, um Ihnen relevante Werbung und personalisierte Inhalte zu zeigen.
                      </p>
                    </div>
                    <Switch
                      checked={preferences.marketing}
                      onCheckedChange={(checked) =>
                        setPreferences({ ...preferences, marketing: checked })
                      }
                    />
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <Button
                    variant="outline"
                    onClick={rejectAll}
                    className="flex-1"
                  >
                    Nur notwendige
                  </Button>
                  <Button
                    variant="solar"
                    onClick={saveCustom}
                    className="flex-1"
                  >
                    Auswahl speichern
                  </Button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
