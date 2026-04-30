# GEO-ANALYSIS — Penner Frästechnik
**Stand:** 2026-04-30 | **URL:** https://www.penner-fraestechnik.de

---

## GEO Readiness Score: 68/100

| Kategorie | Score | Gewicht |
|-----------|-------|---------|
| Citability (Zitierbarkeit) | 72/100 | 25 % |
| Structural Readability | 78/100 | 20 % |
| Multi-Modal Content | 55/100 | 15 % |
| Authority & Brand Signals | 40/100 | 20 % |
| Technical Accessibility | 90/100 | 20 % |

**Vor den heutigen Änderungen: ~38/100** — Sprung durch llms.txt, Definitonsblock, JSON-LD, robots.txt.

---

## Platform Breakdown

| Plattform | Schätzung vor | Schätzung nach | Limitierender Faktor |
|-----------|--------------|----------------|----------------------|
| **Google AI Overviews** | 35/100 | 65/100 | Geringe Domain Authority, wenig externe Links |
| **ChatGPT (WebSearch)** | 20/100 | 52/100 | Kein Wikipedia-Eintrag, keine Reddit-Präsenz |
| **Perplexity** | 25/100 | 55/100 | Kein Reddit, kein YouTube-Kanal |
| **Bing Copilot** | 40/100 | 68/100 | Statische Seite indexierbar, robots.txt jetzt korrekt |

---

## AI Crawler Access Status

| Crawler | Vorher | Nachher |
|---------|--------|---------|
| GPTBot (OpenAI) | ✅ implizit erlaubt | ✅ explizit erlaubt |
| OAI-SearchBot | ✅ implizit | ✅ explizit |
| ChatGPT-User | ✅ implizit | ✅ explizit |
| ClaudeBot (Anthropic) | ✅ implizit | ✅ explizit |
| anthropic-ai | ✅ implizit | ✅ explizit |
| PerplexityBot | ✅ implizit | ✅ explizit |
| Googlebot | ✅ | ✅ |
| CCBot (Common Crawl) | ✅ erlaubt | 🚫 blockiert (Training-Scraper) |
| Bytespider (ByteDance) | ✅ erlaubt | 🚫 blockiert |

---

## llms.txt Status

| Check | Status |
|-------|--------|
| Datei vorhanden | ✅ `/llms.txt` erstellt |
| Format korrekt (Markdown) | ✅ |
| Unternehmensinfos vollständig | ✅ Name, Adresse, Tel, E-Mail, USt-ID |
| Leistungsbeschreibungen | ✅ 3 Leistungen detailliert |
| FAQ-Antworten | ✅ 6 vollständige Q&A-Paare |
| Preise / Fakten | ✅ 80–140 €/m², 30 m²/Tag, 40 mm Mindestdicke |
| Zielgruppen | ✅ 5 Segmente |
| Link im HTML `<head>` | ✅ `<link rel="alternate" ...>` |

---

## Brand Mention Analysis

| Plattform | Status | Empfehlung |
|-----------|--------|------------|
| **Wikipedia** | ❌ kein Eintrag | Erst bei mehr Bekanntheit relevant |
| **Google Business** | ✅ Profil vorhanden, Rezensionen | Reviews in JSON-LD übertragen ✅ |
| **LinkedIn** | ❌ unbekannt | Unternehmensprofil anlegen — mittel |
| **YouTube** | ❌ kein Kanal | 2–3 Videos (Vorher/Nachher, Erklärung) = höchster GEO-Hebel |
| **Reddit** | ❌ keine Erwähnungen | r/Handwerk, r/Heimwerken — sehr hilfreich |
| **Yelp / Trusted Shops** | ❌ | Bewertungsprofile anmelden |

**Kritische Erkenntnis:** YouTube-Erwähnungen korrelieren am stärksten (0.737) mit AI-Zitierbarkeit.
Ein einziges kurzes Erklärvideo ("So funktioniert das Fräsverfahren") hätte großen GEO-Impact.

---

## Passage-Level Citability

### Optimaler Block gefunden (Definition, neu eingefügt):
> *"Das nachträgliche Einfräsen einer Fußbodenheizung ist ein Sanierungsverfahren, bei dem mit computergesteuerten Fräsmaschinen präzise Kanäle — typisch 14 mm tief — in den bestehenden Zementestrich geschnitten werden..."*

**Wortanzahl: ~148 Wörter** ✅ (Optimal: 134–167)

### Weitere starke Blöcke (bereits im HTML):
- FAQ-Antwort "Geht das bei meinem Estrich?" — 47 Wörter (zu kurz, aber FAQ-Format ok)
- Schritt 3 "Fräsen & Rohr einlegen" — ~60 Wörter mit Listen ✅
- Testimonial Stefan S. — direkte Aussage, gut zitierfähig ✅

### Schwache Stellen:
- Hero-Beschreibung (46 Wörter) — AI-Crawler sehen sie, aber zu kurz für selbstständige Zitierung
- FAQ-Antworten: könnten auf 80–120 Wörter ausgebaut werden

---

## Server-Side Rendering Check

| Check | Status |
|-------|--------|
| Statisches HTML | ✅ Kein JavaScript-Framework, kein React/Next |
| Inhalte ohne JS sichtbar | ✅ Alle Texte, Preise, Kontaktdaten im HTML |
| JS-abhängige Inhalte | ⚠️ FAQ-Animation (open/close) — Inhalt aber im DOM |
| Formular-Felder | ⚠️ Formular-Senden via JS-Fetch — unkritisch |
| Bilder ohne JS | ✅ |

**Fazit:** Statisches HTML ist ideal für AI-Crawler. GPTBot, ClaudeBot und PerplexityBot sehen alle Inhalte vollständig.

---

## Top 5 Highest-Impact Changes

### 1. ✅ `llms.txt` erstellen (ERLEDIGT)
Stellt AI-Crawlern strukturierte Informationen bereit — direkt zitierbar, alle Fakten beisammen.

### 2. ✅ JSON-LD LocalBusiness + FAQPage Schema (ERLEDIGT)
Rich Snippets in Google AIO und maschinenlesbare Entitätsdaten.

### 3. ✅ Definition-Block (ERLEDIGT)
Selbstständig zitierbarer Textblock (148 Wörter) zu "Was ist Fräsen?" — ideal für Featured Snippets.

### 4. 🎬 YouTube-Video erstellen (TODO — höchste Priorität)
2–3 Minuten: "Fußbodenheizung einfräsen — so funktioniert das Verfahren".
→ Korrelation 0.737 mit AI-Zitierbarkeit (stärkster Einzelfaktor)
→ Titel/Beschreibung: Keywords + Ortsname + Preisrange

### 5. 📋 Kundenprojekte als strukturierte Fallstudien (TODO)
Seite mit 3–5 konkreten Projekten (Raumgröße, Estrichstärke, Dauer, Preis) = hochspezifische, zitierfähige Inhalte.

---

## Schema Empfehlungen

| Schema | Status | Priorität |
|--------|--------|-----------|
| `LocalBusiness` | ✅ vorhanden | — |
| `FAQPage` | ✅ vorhanden | — |
| `HowTo` (Verfahren) | ✅ neu, auf Definition-Block | — |
| `Review` / `AggregateRating` | ✅ 3 Reviews in JSON-LD | Mehr Google-Rezensionen einbauen |
| `Person` (Andre Penner) | ❌ fehlt | Mittel |
| `Service` | ✅ über hasOfferCatalog | — |
| `BreadcrumbList` | ❌ fehlt | Niedrig |

### Person-Schema empfohlen (für ueber-uns.html):
```json
{
  "@type": "Person",
  "name": "Andre Penner",
  "jobTitle": "Inhaber, Frästechnik-Spezialist",
  "worksFor": {"@id": "https://www.penner-fraestechnik.de/#business"},
  "address": {"@type": "PostalAddress", "addressLocality": "Straßenhaus"}
}
```

---

## Content Reformatting Suggestions

### Jetzt umsetzen:
1. **FAQ-Antworten verlängern** — aktuell 30–50 Wörter, Ziel 80–120 Wörter pro Antwort
2. **"Wärmepumpe" als eigene Sektion** — Suchanfragen wie "Fußbodenheizung nachrüsten für Wärmepumpe" stark wachsend
3. **Preisseite** — Eine eigene Section/Seite mit vollständiger Preisstruktur erhöht Citability für Preisanfragen

### Mittelfristig:
4. **Fallstudien-Seite** `/projekte.html` — 3 Projekte mit Fotos, m², Dauer, Preis
5. **"Förderung"-Abschnitt** — BAFA/KfW-Förderinfo für Wärmepumpenkombi — stark nachgefragt
6. **Lokale Seiten** — `/neuwied.html`, `/westerwald.html` für lokale AI-Suchen

---

## Nächste Schritte (priorisiert)

| Priorität | Maßnahme | Aufwand | GEO-Impact |
|-----------|----------|---------|------------|
| 🔴 Hoch | YouTube-Erklärvideo erstellen | 2–4 h | Sehr hoch |
| 🔴 Hoch | Google Business vollständig ausfüllen + Fotos | 1 h | Hoch |
| 🟡 Mittel | LinkedIn-Unternehmensprofil | 1 h | Mittel |
| 🟡 Mittel | FAQ-Antworten auf 80–120 Wörter ausbauen | 2 h | Mittel |
| 🟡 Mittel | Person-Schema auf ueber-uns.html | 30 min | Mittel |
| 🟢 Niedrig | Fallstudien-Seite | 3–4 h | Mittel |
| 🟢 Niedrig | Förderungs-Abschnitt | 1 h | Mittel |

---

*Erstellt: 2026-04-30 | Tool: Claude GEO-Audit | Nächste Überprüfung empfohlen: 2026-07-30*
