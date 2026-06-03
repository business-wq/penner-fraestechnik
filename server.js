'use strict';

/**
 * Penner Fraestechnik — Webserver
 *
 * Liefert die statische Website aus (public/) und verarbeitet das
 * Angebots-Formular ueber Resend. Beim Absenden gehen zwei E-Mails raus:
 *   1. interne Lead-Mail an Andre  (Theme wie die dunkle Formular-Sektion)
 *   2. Bestaetigung an den Kunden   (helles Paper-Layout der Website)
 *
 * Konfiguration ausschliesslich ueber Umgebungsvariablen (z. B. in Coolify):
 *   RESEND_API_KEY  (Pflicht)  API-Key von resend.com
 *   MAIL_FROM       Absender, Domain muss in Resend verifiziert sein
 *                   Default: "Penner Fraestechnik <angebot@penner-fraestechnik.de>"
 *   MAIL_TO         Empfaenger der Lead-Mail (Andre)
 *                   Default: andrepenner93@web.de
 *   MAIL_BCC        optionale Blindkopie der Lead-Mail
 *   PORT            Default: 80
 *
 * Der API-Key wird niemals an den Browser ausgeliefert.
 */

const path = require('path');
const express = require('express');

const app = express();

// ─────────────────────────── Konfiguration ───────────────────────────
const PORT = process.env.PORT || 80;
const PUBLIC_DIR = path.join(__dirname, 'public');

const RESEND_API_KEY = process.env.RESEND_API_KEY || '';
const MAIL_FROM = process.env.MAIL_FROM || 'Penner Frästechnik <angebot@penner-fraestechnik.de>';
const MAIL_TO = process.env.MAIL_TO || 'andrepenner93@web.de';
const MAIL_BCC = process.env.MAIL_BCC || '';

// reine Absender-Adresse aus MAIL_FROM herausloesen (Display-Name kann variieren)
const FROM_ADDR = (MAIL_FROM.match(/<([^>]+)>/) || [null, MAIL_FROM])[1].trim();
const FROM_INTERNAL = `"Penner Frästechnik · Website" <${FROM_ADDR}>`;
const FROM_CUSTOMER = `"Andre Penner · Frästechnik" <${FROM_ADDR}>`;

// ─────────────────────────── Stammdaten ──────────────────────────────
const BIZ = {
  name: 'Andre Penner Frästechnik',
  region: 'Neuwied · Westerwald · Umgebung',
  telDisplay: '0157 / 339 27 868',
  telHref: '+4915733927868',
  waHref: 'https://wa.me/4915733927868',
  emailPublic: 'info@penner-fraestechnik.de',
  site: 'https://www.penner-fraestechnik.de',
  impressum: 'https://www.penner-fraestechnik.de/impressum.html',
  datenschutz: 'https://www.penner-fraestechnik.de/impressum.html#datenschutz',
};

// Auswahl-Schluessel -> Klartext (Single Source of Truth, nicht manipulierbar)
const LEISTUNG = {
  fraesen: 'Nur Einfräsen in Estrich',
  komplett: 'Komplett — Fräsen, Rohr, Verteiler',
  unklar: 'Beratung gewünscht',
};
const UMFANG = {
  raum: 'Einzelner Raum (bis ~30 m²)',
  wohnung: 'Wohnung / Etage (30–120 m²)',
  haus: 'Komplettes Haus (120–250 m²)',
  gross: 'Mehrfamilien-/Gewerbeobjekt (> 250 m²)',
};
const ZEIT = {
  asap: 'So bald wie möglich (< 4 Wochen)',
  '3mo': 'Innerhalb von 3 Monaten',
  plan: 'Plant noch / erst Infos',
};

// ─────────────────────────── Helfer ──────────────────────────────────
function escapeHtml(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
// CR/LF entfernen (Header-Injection vermeiden, z. B. im Subject)
function oneLine(s) {
  return String(s == null ? '' : s).replace(/[\r\n\t]+/g, ' ').trim();
}
function isEmail(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}
function firstName(name) {
  return oneLine(name).split(/\s+/)[0] || name;
}

// ─────────────────────────── E-Mail-Design ───────────────────────────
// Palette der Website (siehe :root in index.html)
const C = {
  paper: '#f4f1ec',
  paper2: '#ebe6de',
  ink: '#15140f',
  dark: '#141310',
  dark2: '#1d1b16',
  hair: '#2b2922', // Trennlinien auf dunkel
  hairLight: '#e2ddd1', // Trennlinien auf hell
  accent: '#E8721D', // entspricht oklch(0.68 0.17 50)
  accentInk: '#1b1000',
  onDark: '#f4f1ec',
  onDark2: '#a8a498',
  ink2: '#3a372f',
  ink3: '#7a766a',
};
const FONT = {
  sans: "'Inter Tight',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif",
  mono: "'JetBrains Mono',ui-monospace,SFMono-Regular,Menlo,Consolas,monospace",
  serif: "'Instrument Serif',Georgia,'Times New Roman',serif",
};

// Marken-Lockup (kleines PF-Badge + Wortmarke) fuer den dunklen Header
function brandLockup() {
  return `
  <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
    <td style="vertical-align:middle;">
      <div style="width:34px;height:34px;background:${C.accent};color:${C.accentInk};font-family:${FONT.mono};font-weight:700;font-size:13px;line-height:34px;text-align:center;border-radius:2px;">PF</div>
    </td>
    <td style="vertical-align:middle;padding-left:12px;">
      <span style="font-family:${FONT.sans};font-weight:600;font-size:14px;letter-spacing:0.18em;text-transform:uppercase;color:${C.onDark};">Penner Frästechnik</span>
    </td>
  </tr></table>`;
}

function brandFooter(extraNote) {
  return `
  <td style="background:${C.dark};padding:30px 36px;border-top:1px solid ${C.hair};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr><td style="padding-bottom:14px;">${brandLockup()}</td></tr>
      <tr><td style="font-family:${FONT.mono};font-size:11px;letter-spacing:0.04em;color:${C.onDark2};line-height:1.9;">
        ${escapeHtml(BIZ.name)} · ${escapeHtml(BIZ.region)}<br>
        <a href="tel:${BIZ.telHref}" style="color:${C.onDark};text-decoration:none;">${escapeHtml(BIZ.telDisplay)}</a> &nbsp;·&nbsp;
        <a href="mailto:${BIZ.emailPublic}" style="color:${C.onDark};text-decoration:none;">${escapeHtml(BIZ.emailPublic)}</a> &nbsp;·&nbsp;
        <a href="${BIZ.site}" style="color:${C.onDark};text-decoration:none;">penner-fraestechnik.de</a>
      </td></tr>
      <tr><td style="padding-top:14px;">
        <a href="${BIZ.impressum}" style="font-family:${FONT.mono};font-size:11px;letter-spacing:0.04em;color:${C.onDark2};text-decoration:underline;">Impressum</a>
        &nbsp;&nbsp;
        <a href="${BIZ.datenschutz}" style="font-family:${FONT.mono};font-size:11px;letter-spacing:0.04em;color:${C.onDark2};text-decoration:underline;">Datenschutz</a>
      </td></tr>
      ${extraNote ? `<tr><td style="padding-top:16px;font-family:${FONT.sans};font-size:11px;color:${C.ink3};line-height:1.6;">${extraNote}</td></tr>` : ''}
    </table>
  </td>`;
}

// Gesamthuelle: dunkler Header (Eyebrow) + Body + dunkler Footer
function emailDoc({ preheader, eyebrow, bodyTd, footerNote }) {
  return `<!DOCTYPE html>
<html lang="de" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<meta name="color-scheme" content="light">
<title>Penner Frästechnik</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
<!--[if mso]><style>* { font-family: Arial, sans-serif !important; }</style><![endif]-->
</head>
<body style="margin:0;padding:0;background:${C.paper2};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;font-size:1px;line-height:1px;">${escapeHtml(preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${C.paper2};">
    <tr><td align="center" style="padding:28px 14px;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:100%;background:${C.dark};border-radius:4px;overflow:hidden;">
        <!-- Header -->
        <tr><td style="background:${C.dark};padding:30px 36px 24px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr><td style="padding-bottom:20px;">${brandLockup()}</td></tr>
            <tr><td>
              <span style="font-family:${FONT.mono};font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:${C.onDark2};">
                <span style="color:${C.accent};">&#9679;</span>&nbsp;&nbsp;${escapeHtml(eyebrow)}
              </span>
            </td></tr>
          </table>
        </td></tr>
        <!-- Body -->
        <tr>${bodyTd}</tr>
        <!-- Footer -->
        <tr>${brandFooter(footerNote)}</tr>
      </table>
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:100%;">
        <tr><td style="padding:16px 36px;font-family:${FONT.mono};font-size:10px;letter-spacing:0.04em;color:${C.ink3};text-align:center;">
          Diese Nachricht wurde über das Angebotsformular auf penner-fraestechnik.de ausgelöst.
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// Datenzeile fuer die interne Lead-Mail (dunkles Theme)
function row(label, valueHtml) {
  return `<tr>
    <td style="padding:13px 0;border-bottom:1px solid ${C.hair};vertical-align:top;width:38%;">
      <span style="font-family:${FONT.mono};font-size:11px;letter-spacing:0.07em;text-transform:uppercase;color:${C.onDark2};">${escapeHtml(label)}</span>
    </td>
    <td style="padding:13px 0;border-bottom:1px solid ${C.hair};vertical-align:top;font-family:${FONT.sans};font-size:15px;line-height:1.5;color:${C.onDark};">
      ${valueHtml}
    </td>
  </tr>`;
}

// ── 1) Interne Lead-Mail an Andre — dunkle Form-Sektion-Optik ──
function internalEmail(d) {
  const subject = oneLine(`Neue Anfrage · ${d.leistung || 'Allgemein'} · ${d.name}`);
  const nameEsc = escapeHtml(d.name);
  const telEsc = escapeHtml(d.tel);
  const emailEsc = escapeHtml(d.email);

  const bodyTd = `
  <td style="background:${C.dark};padding:8px 36px 34px;">
    <h1 style="margin:18px 0 6px;font-family:${FONT.sans};font-weight:400;font-size:26px;line-height:1.2;letter-spacing:-0.01em;color:${C.onDark};">
      Neue <span style="font-family:${FONT.serif};font-style:italic;color:${C.accent};">Angebotsanfrage</span>
    </h1>
    <p style="margin:0 0 22px;font-family:${FONT.sans};font-size:14px;color:${C.onDark2};">Eingegangen am ${escapeHtml(nowBerlin())} Uhr über penner-fraestechnik.de</p>

    <!-- Schnellaktionen -->
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:26px;">
      <tr>
        <td style="padding-right:10px;">
          <a href="tel:${telEsc}" style="display:inline-block;background:${C.accent};color:${C.accentInk};font-family:${FONT.sans};font-weight:600;font-size:14px;text-decoration:none;padding:12px 20px;border-radius:2px;">Anrufen →</a>
        </td>
        <td>
          <a href="mailto:${emailEsc}" style="display:inline-block;background:transparent;color:${C.onDark};font-family:${FONT.sans};font-weight:500;font-size:14px;text-decoration:none;padding:11px 20px;border:1px solid ${C.onDark2};border-radius:2px;">E-Mail schreiben</a>
        </td>
      </tr>
    </table>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      ${row('Name', nameEsc)}
      ${row('Telefon', `<a href="tel:${telEsc}" style="color:${C.accent};text-decoration:none;">${telEsc}</a>`)}
      ${row('E-Mail', `<a href="mailto:${emailEsc}" style="color:${C.accent};text-decoration:none;">${emailEsc}</a>`)}
      ${row('PLZ / Ort der Baustelle', escapeHtml(d.plz))}
      ${row('Leistung', escapeHtml(d.leistung || '—'))}
      ${row('Umfang', escapeHtml(d.umfang || '—'))}
      ${row('Zeitfenster', escapeHtml(d.zeit || '—'))}
      <tr>
        <td style="padding:16px 0 0;vertical-align:top;width:38%;">
          <span style="font-family:${FONT.mono};font-size:11px;letter-spacing:0.07em;text-transform:uppercase;color:${C.onDark2};">Nachricht</span>
        </td>
        <td style="padding:16px 0 0;vertical-align:top;font-family:${FONT.sans};font-size:15px;line-height:1.6;color:${C.onDark};">
          ${d.message ? escapeHtml(d.message).replace(/\n/g, '<br>') : '<span style="color:' + C.onDark2 + ';">—</span>'}
        </td>
      </tr>
    </table>
  </td>`;

  const text =
`NEUE ANGEBOTSANFRAGE — penner-fraestechnik.de
Eingegangen: ${nowBerlin()} Uhr

Name:        ${d.name}
Telefon:     ${d.tel}
E-Mail:      ${d.email}
PLZ/Ort:     ${d.plz}
Leistung:    ${d.leistung || '—'}
Umfang:      ${d.umfang || '—'}
Zeitfenster: ${d.zeit || '—'}

Nachricht:
${d.message || '—'}
`;

  return {
    from: FROM_INTERNAL,
    to: [MAIL_TO],
    replyTo: `"${oneLine(d.name).replace(/"/g, '')}" <${d.email}>`,
    bcc: MAIL_BCC || undefined,
    subject,
    html: emailDoc({
      preheader: `${d.name} · ${d.leistung || 'Anfrage'} · ${d.plz}`,
      eyebrow: 'Neue Angebotsanfrage',
      bodyTd,
      footerNote: 'Antworten geht direkt an den Kunden (Reply-To gesetzt).',
    }),
    text,
  };
}

// ── 2) Bestaetigung an den Kunden — helles Paper-Layout ──
function customerEmail(d) {
  const subject = 'Ihre Anfrage bei Penner Frästechnik — wir melden uns';
  const fn = escapeHtml(firstName(d.name));

  const summary = [
    ['Leistung', d.leistung],
    ['Umfang', d.umfang],
    ['Zeitfenster', d.zeit],
    ['PLZ / Ort', d.plz],
  ].filter(([, v]) => v).map(([k, v]) => `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid ${C.hairLight};vertical-align:top;width:38%;">
        <span style="font-family:${FONT.mono};font-size:11px;letter-spacing:0.06em;text-transform:uppercase;color:${C.ink3};">${escapeHtml(k)}</span>
      </td>
      <td style="padding:10px 0;border-bottom:1px solid ${C.hairLight};vertical-align:top;font-family:${FONT.sans};font-size:15px;color:${C.ink};">${escapeHtml(v)}</td>
    </tr>`).join('');

  const bodyTd = `
  <td style="background:${C.paper};padding:38px 36px 34px;">
    <h1 style="margin:0 0 14px;font-family:${FONT.sans};font-weight:400;font-size:28px;line-height:1.15;letter-spacing:-0.01em;color:${C.ink};">
      Vielen Dank, ${fn} — <span style="font-family:${FONT.serif};font-style:italic;color:${C.accent};">wir sind dran.</span>
    </h1>
    <p style="margin:0 0 18px;font-family:${FONT.sans};font-size:16px;line-height:1.65;color:${C.ink2};">
      Ihre Anfrage ist bei uns eingegangen. Andre Penner meldet sich <strong>innerhalb von 24 Stunden</strong> persönlich bei Ihnen — meist schon am gleichen Werktag.
    </p>

    <!-- Was als Naechstes passiert -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:8px 0 26px;background:${C.paper2};border-radius:3px;">
      <tr><td style="padding:20px 22px;">
        <span style="font-family:${FONT.mono};font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:${C.ink3};">So geht es weiter</span>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:12px;">
          <tr><td style="font-family:${FONT.sans};font-size:15px;line-height:1.6;color:${C.ink2};padding:4px 0;">
            <strong style="color:${C.accent};">1.</strong>&nbsp; Kurzer Rückruf zur Klärung der Details
          </td></tr>
          <tr><td style="font-family:${FONT.sans};font-size:15px;line-height:1.6;color:${C.ink2};padding:4px 0;">
            <strong style="color:${C.accent};">2.</strong>&nbsp; Bei Bedarf unverbindliche Besichtigung vor Ort
          </td></tr>
          <tr><td style="font-family:${FONT.sans};font-size:15px;line-height:1.6;color:${C.ink2};padding:4px 0;">
            <strong style="color:${C.accent};">3.</strong>&nbsp; Transparentes Festpreis-Angebot
          </td></tr>
        </table>
      </td></tr>
    </table>

    ${summary ? `
    <span style="font-family:${FONT.mono};font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:${C.ink3};">Ihre Angaben</span>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:10px 0 26px;">
      ${summary}
      ${d.message ? `<tr><td colspan="2" style="padding:12px 0 0;font-family:${FONT.sans};font-size:14px;line-height:1.6;color:${C.ink2};"><span style="font-family:${FONT.mono};font-size:11px;letter-spacing:0.06em;text-transform:uppercase;color:${C.ink3};display:block;margin-bottom:6px;">Ihre Nachricht</span>${escapeHtml(d.message).replace(/\n/g, '<br>')}</td></tr>` : ''}
    </table>` : ''}

    <!-- Sofort-Kontakt -->
    <p style="margin:0 0 14px;font-family:${FONT.sans};font-size:15px;line-height:1.6;color:${C.ink2};">
      Es eilt oder Sie möchten direkt sprechen? Sie erreichen uns jederzeit:
    </p>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td style="padding-right:10px;">
          <a href="tel:${BIZ.telHref}" style="display:inline-block;background:${C.ink};color:${C.paper};font-family:${FONT.sans};font-weight:600;font-size:14px;text-decoration:none;padding:12px 22px;border-radius:2px;">${escapeHtml(BIZ.telDisplay)}</a>
        </td>
        <td>
          <a href="${BIZ.waHref}" style="display:inline-block;background:transparent;color:${C.ink};font-family:${FONT.sans};font-weight:500;font-size:14px;text-decoration:none;padding:11px 22px;border:1px solid ${C.hairLight};border-radius:2px;">WhatsApp</a>
        </td>
      </tr>
    </table>

    <p style="margin:30px 0 0;font-family:${FONT.serif};font-style:italic;font-size:18px;color:${C.ink};">Bis gleich,</p>
    <p style="margin:2px 0 0;font-family:${FONT.sans};font-size:15px;color:${C.ink2};">Andre Penner · Frästechnik</p>
  </td>`;

  const text =
`Vielen Dank, ${firstName(d.name)}!

Ihre Anfrage bei Penner Fraestechnik ist eingegangen. Andre Penner meldet
sich innerhalb von 24 Stunden persoenlich bei Ihnen — meist schon am
gleichen Werktag.

So geht es weiter:
  1. Kurzer Rueckruf zur Klaerung der Details
  2. Bei Bedarf unverbindliche Besichtigung vor Ort
  3. Transparentes Festpreis-Angebot

Ihre Angaben:
  Leistung:    ${d.leistung || '—'}
  Umfang:      ${d.umfang || '—'}
  Zeitfenster: ${d.zeit || '—'}
  PLZ/Ort:     ${d.plz}
${d.message ? `  Nachricht:   ${d.message}\n` : ''}
Direkter Kontakt:
  Telefon:  ${BIZ.telDisplay}  (${BIZ.telHref})
  WhatsApp: ${BIZ.waHref}
  E-Mail:   ${BIZ.emailPublic}

Bis gleich,
Andre Penner · Fraestechnik
${BIZ.site}
`;

  return {
    from: FROM_CUSTOMER,
    to: [d.email],
    replyTo: MAIL_TO,
    subject,
    html: emailDoc({
      preheader: 'Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden.',
      eyebrow: 'Anfrage bestätigt',
      bodyTd,
      footerNote: `Sie erhalten diese E-Mail, weil über das Formular auf penner-fraestechnik.de eine Angebotsanfrage mit dieser Adresse gestellt wurde.`,
    }),
    text,
  };
}

function nowBerlin() {
  try {
    return new Intl.DateTimeFormat('de-DE', {
      timeZone: 'Europe/Berlin',
      day: '2-digit', month: '2-digit', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    }).format(new Date());
  } catch {
    return new Date().toISOString();
  }
}

// ─────────────────────────── Resend ──────────────────────────────────
async function sendViaResend(mail) {
  const payload = {
    from: mail.from,
    to: Array.isArray(mail.to) ? mail.to : [mail.to],
    subject: mail.subject,
    html: mail.html,
    text: mail.text,
  };
  if (mail.replyTo) payload.reply_to = mail.replyTo;
  if (mail.bcc) payload.bcc = Array.isArray(mail.bcc) ? mail.bcc : [mail.bcc];

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    throw new Error(`Resend ${res.status}: ${detail.slice(0, 400)}`);
  }
  return res.json().catch(() => ({}));
}

// ─────────────────────── einfaches Rate-Limit ────────────────────────
const RL_WINDOW = 15 * 60 * 1000;
const RL_MAX = 8;
const rlHits = new Map(); // ip -> number[]
function rateLimited(ip) {
  const now = Date.now();
  const arr = (rlHits.get(ip) || []).filter((t) => now - t < RL_WINDOW);
  arr.push(now);
  rlHits.set(ip, arr);
  if (rlHits.size > 5000) {
    for (const [k, v] of rlHits) {
      if (!v.some((t) => now - t < RL_WINDOW)) rlHits.delete(k);
    }
  }
  return arr.length > RL_MAX;
}

// ─────────────────────────── Routen ──────────────────────────────────
app.set('trust proxy', 1); // hinter Coolify/Traefik: korrekte Client-IP
app.use(express.json({ limit: '32kb' }));

app.get('/healthz', (_req, res) => res.status(200).send('ok'));

app.post('/api/quote', async (req, res) => {
  try {
    const b = req.body || {};

    // Honeypot: ausgefuellt => Bot. Erfolg vortaeuschen, nichts senden.
    if (typeof b.company === 'string' && b.company.trim() !== '') {
      return res.status(200).json({ ok: true });
    }

    const data = {
      name: oneLine(b.name).slice(0, 120),
      tel: oneLine(b.tel).slice(0, 60),
      email: oneLine(b.email).slice(0, 160),
      plz: oneLine(b.plz).slice(0, 120),
      message: String(b.message || '').trim().slice(0, 4000),
      leistung: LEISTUNG[b.leistung] || null,
      umfang: UMFANG[b.umfang] || null,
      zeit: ZEIT[b.zeit] || null,
    };
    const dsgvo = b.dsgvo === true || b.dsgvo === 'true' || b.dsgvo === 'on';

    const errors = {};
    if (!data.name) errors.name = 'Bitte Namen eingeben';
    if (!data.tel) errors.tel = 'Bitte Telefonnummer eingeben';
    if (!isEmail(data.email)) errors.email = 'Bitte gültige E-Mail eingeben';
    if (!data.plz) errors.plz = 'Bitte PLZ / Ort eingeben';
    if (!dsgvo) errors.dsgvo = 'Bitte Datenschutzerklärung bestätigen';
    if (Object.keys(errors).length) {
      return res.status(400).json({ ok: false, errors });
    }

    if (!RESEND_API_KEY) {
      console.error('[quote] RESEND_API_KEY fehlt — E-Mail kann nicht gesendet werden.');
      return res.status(503).json({ ok: false, error: 'mail_not_configured' });
    }

    if (rateLimited(req.ip)) {
      return res.status(429).json({ ok: false, error: 'rate_limited' });
    }

    // Lead an Andre MUSS durchgehen
    await sendViaResend(internalEmail(data));

    // Kundenbestaetigung ist sekundaer — Fehler nicht an den Nutzer durchreichen
    try {
      await sendViaResend(customerEmail(data));
    } catch (e) {
      console.error('[quote] Kundenbestätigung fehlgeschlagen:', e.message);
    }

    return res.json({ ok: true });
  } catch (err) {
    console.error('[quote] Versand fehlgeschlagen:', err.message);
    return res.status(502).json({ ok: false, error: 'send_failed' });
  }
});

// statische Website
app.use(express.static(PUBLIC_DIR, {
  extensions: ['html'],
  setHeaders(res, filePath) {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    } else {
      res.setHeader('Cache-Control', 'public, max-age=86400');
    }
  },
}));

// 404
app.use((req, res) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ ok: false, error: 'not_found' });
  }
  res.status(404).sendFile(path.join(PUBLIC_DIR, '404.html'));
});

// fehlerhaftes JSON o. Ae.
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  if (err && err.type === 'entity.parse.failed') {
    return res.status(400).json({ ok: false, error: 'bad_json' });
  }
  console.error('[server] Unerwarteter Fehler:', err && err.message);
  res.status(500).json({ ok: false, error: 'server_error' });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Penner Frästechnik läuft auf Port ${PORT}`);
    console.log(`  Statisch:  ${PUBLIC_DIR}`);
    console.log(`  Resend:    ${RESEND_API_KEY ? 'konfiguriert' : 'NICHT konfiguriert (RESEND_API_KEY fehlt)'}`);
    console.log(`  Absender:  ${MAIL_FROM}`);
    console.log(`  Lead an:   ${MAIL_TO}${MAIL_BCC ? ' (BCC: ' + MAIL_BCC + ')' : ''}`);
  });
}

module.exports = { app, internalEmail, customerEmail };
