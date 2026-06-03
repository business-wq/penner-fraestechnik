# Penner Frästechnik — Website

Statische Website **plus** schlanker Node-Server, der das Angebots-Formular über
[Resend](https://resend.com) verschickt.

## Architektur

| Pfad | Zweck |
|------|-------|
| `public/` | Statische Website (HTML, Assets, robots/sitemap …) |
| `server.js` | Express-Server: liefert `public/` aus **und** nimmt das Formular unter `POST /api/quote` entgegen |
| `Dockerfile` | Container-Build (Node 22) für Coolify |

Beim Absenden des Formulars gehen **zwei** E-Mails raus — beide im Design der Website:

1. **Lead-Mail an Andre** — dunkles Theme wie die Formular-Sektion, mit allen
   Angaben und Schnellaktionen (Anrufen / Antworten). `Reply-To` ist die
   Kundenadresse, Antworten gehen also direkt an den Kunden.
2. **Bestätigung an den Kunden** — helles Paper-Layout, fasst die Angaben
   zusammen und erklärt die nächsten Schritte.

> Der Resend-API-Key liegt **ausschließlich serverseitig** als Umgebungs­variable.
> Er wird niemals an den Browser ausgeliefert.

## Umgebungsvariablen (in Coolify setzen)

| Variable | Pflicht | Default | Beschreibung |
|----------|:------:|---------|--------------|
| `RESEND_API_KEY` | **ja** | – | API-Key aus dem Resend-Dashboard |
| `MAIL_FROM` | nein | `Penner Frästechnik <penner-fraestechnik@simonnikel.cloud>` | Absender. **Die Domain muss in Resend verifiziert sein** (`simonnikel.cloud` ist es bereits). |
| `MAIL_TO` | nein | `andrepenner93@web.de` | Empfänger der Lead-Mail (Andre) |
| `MAIL_BCC` | nein | – | optionale Blindkopie der Lead-Mail (z. B. `info@penner-fraestechnik.de`) |
| `PORT` | nein | `80` | Port des Servers |

## Absender-Domain in Resend

Der Standard-Absender liegt auf **`simonnikel.cloud`** — diese Domain ist in
Resend bereits verifiziert (SPF/DKIM), die Mails werden also direkt zugestellt.
Der Anzeigename bleibt „Penner Frästechnik" bzw. „Andre Penner · Frästechnik";
Antworten gehen per `Reply-To` an Andre bzw. an den Kunden.

Wenn später aus Branding-Gründen über **`@penner-fraestechnik.de`** versendet
werden soll, muss zuerst diese Domain in Resend verifiziert werden:

> Resend-Dashboard → **Domains** → *Add Domain* → `penner-fraestechnik.de` →
> die angezeigten **SPF/DKIM-DNS-Einträge** beim Domain-Provider eintragen —
> danach `MAIL_FROM=Penner Frästechnik <angebot@penner-fraestechnik.de>` setzen.

## Lokal starten

```bash
npm install
RESEND_API_KEY=re_xxx node server.js
# → http://localhost  (bzw. PORT=3000 node server.js)
```

## Deployment (Coolify)

- Buildet das `Dockerfile` (Node 22, `npm ci --omit=dev`, Start via `node server.js`).
- Exponierter Port: **80** (wie zuvor bei nginx — Coolify-Port bleibt unverändert).
- `RESEND_API_KEY` (und optional die übrigen Variablen) unter **Environment Variables** setzen.
- Health-Check-Endpoint: `GET /healthz` → `200 ok`.
