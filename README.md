# 🚀 wanns-baileys (Full Documentation)

**Pilih Bahasa / Choose Language:**
- [🇺🇸 1. Full English Documentation](#-1-full-english-documentation)
- [🇮🇩 2. Dokumentasi Lengkap Bahasa Indonesia](#-2-dokumentasi-lengkap-bahasa-indonesia)

---

# 🇺🇸 1. Full English Documentation

## ✨ Exclusive v1.2.0 Additions (English)
- **Built-in Pairing Code:** Configure `phoneNumber` and `pairingCode` (8 chars) directly inside `makeWASocket` or `makeWASocketAuto`.
- **Native Album Grid (`sock.sendAlbum`):** Send 2–10 photos/videos in one album bubble.
- **Rich Audio Player (`sock.sendRichAudio`):** Send audio/music with large cover artwork, title, and artist metadata.
- **Native Lottie Sticker (`sock.sendLottieSticker`):** Send animated JSON/TGS vector stickers (`isLottie: true`).
- **Real-Time Live Location (`sock.sendLiveLocation`):** Send moving live location pins with custom duration.
- **Batch Group Approval (`sock.groupRequestParticipantsUpdateAll`):** Approve or reject all pending join requests at once.

```javascript
import { makeWASocketAuto, useMultiFileAuthState } from "wanns-baileys";

const { state, saveCreds } = await useMultiFileAuthState("./session");
const sock = await makeWASocketAuto({
    auth: state,
    phoneNumber: "6281234567890",
    pairingCode: "WANNS123"
});
sock.ev.on("creds.update", saveCreds);

await sock.sendAlbum(jid, [
    { image: { url: "https://example.com" }, caption: "Photo 1" },
    { image: { url: "https://example.com" }, caption: "Photo 2" }
]);
await sock.sendRichAudio(jid, { url: "./song.mp3" }, {
    title: "Song Title",
    artist: "Wanns Music",
    cover: "https://example.com"
});
```

<div align="center" id="top">


# wanns-baileys

### ⚡ The maintained WhatsApp Web API for Node.js

<em>Typed ESM&nbsp;·&nbsp;always-current WA&nbsp;Web versioning&nbsp;·&nbsp;protocol-safe tooling&nbsp;·&nbsp;140+ production bot utilities</em>

<br/>

<!-- identity -->
<p>
<a href="https://www.npmjs.com/package/wanns-baileys"><img src="https://img.shields.io/npm/v/wanns-baileys?color=25D366&label=npm&logo=npm&logoColor=white&style=for-the-badge" alt="npm version" /></a>
<a href="https://www.npmjs.com/package/wanns-baileys"><img src="https://img.shields.io/npm/dt/wanns-baileys?color=128C7E&label=downloads&logo=npm&logoColor=white&style=for-the-badge" alt="npm downloads" /></a>
<a href="./NOTICE.md"><img src="https://img.shields.io/badge/license-MIT-555?style=for-the-badge" alt="MIT license" /></a>
</p>

<!-- quality -->
<p>
<img src="https://img.shields.io/badge/node-%E2%89%A5%2020-3C873A?style=flat-square&logo=node.js&logoColor=white" alt="Node >=20" />
<img src="https://img.shields.io/badge/module-ESM-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="ESM only" />
<img src="https://img.shields.io/badge/types-bundled%20.d.ts-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript types" />
<img src="https://img.shields.io/badge/tests-1513%20passing-2ecc71?style=flat-square&logo=nodedotjs&logoColor=white" alt="tests passing" />
<img src="https://img.shields.io/badge/audit-0%20vulnerabilities-2ecc71?style=flat-square&logo=npm&logoColor=white" alt="npm audit clean" />
</p>

<p>
<a href="https://whatsapp.com/channel/0029VbDRs9EEVccGV50sL42p"><img src="https://img.shields.io/badge/Follow%20on%20WhatsApp-Wanns%20Channel-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="Wanns WhatsApp Channel" /></a>
</p>

<h4>

[📦 Install](#install)&nbsp;·&nbsp;[🚀 Quick start](#quick-start)&nbsp;·&nbsp;[🔥 Features](#-features)&nbsp;·&nbsp;[💡 Examples](#-usage-examples)&nbsp;·&nbsp;[📘 TypeScript](#-typescript-support)&nbsp;·&nbsp;[❓ FAQ](#-faq--troubleshooting)&nbsp;·&nbsp;[🇮🇩 Bahasa Indonesia](./README.id.md)

</h4>

</div>

---

<table>
<tr>
<td width="33%" valign="top" align="center">

### 🔌 Reliable core

Predictable socket, auto WA-Web version resolution, reconnect + anti-ban toolkit — **no hidden side effects**.

</td>
<td width="33%" valign="top" align="center">

### 🧩 Batteries included

Buttons, native flows, carousel, AIRich cards, polls, channels, VoIP, and **140+ bot utilities**.

</td>
<td width="33%" valign="top" align="center">

### 🛡️ Production-ready

Bundled `.d.ts`, multi-backend auth, credential redaction, session tools — **1513 tests, 0 vulns**.

</td>
</tr>
</table>

<details>
<summary><b>📑 Table of contents</b> — click to expand</summary>

<br/>

> **Getting started** &nbsp;›&nbsp; [Install](#install) · [Quick start](#quick-start) · [Overview](#overview) · [Installation](#-installation) · [Authentication](#-authentication) · [Store backends](#️-store-backends)
>
> **What's inside** &nbsp;›&nbsp; [Comparison](#-comparison) · [Built with](#-built-with) · [Features](#-features) · [Exclusive Wanns enhancements](#-exclusive-wanns-enhancements) · [New in v2.4.5](#-new-in-v245)
>
> **Messaging** &nbsp;›&nbsp; [Usage examples](#-usage-examples) · [Message helpers](#-message-helpers) · [Channels, history & transcripts](#-channels-history--transcripts) · [WA 2026 catch-up](#-wa-2026-catch-up)
>
> **Calls & sync** &nbsp;›&nbsp; [Voice & video calls](#-voice--video-calls) · [User sync queries](#-user-sync-queries) · [Username management](#-username-management)
>
> **Toolkit** &nbsp;›&nbsp; [Everyday utilities](#-everyday-utilities) · [Security pack](#-security-pack) · [Bot framework](#-bot-framework) · [Utility modules](#-utility-modules)
>
> **Reference** &nbsp;›&nbsp; [Recommended environment](#-recommended-environment) · [TypeScript support](#-typescript-support) · [FAQ & troubleshooting](#-faq--troubleshooting) · [Contributing](#-contributing) · [Credits](#-credits) · [Maintainer](#-maintainer)

</details>

---

## Install

```bash
npm i wanns-baileys
```

Node.js 20+ is required. The package is ESM-only and has no install/postinstall scripts.

## Quick start

```js
import makeWASocket, { useMultiFileAuthState } from 'wanns-baileys'

const { state, saveCreds } = await useMultiFileAuthState('auth_info')
const sock = makeWASocket({ auth: state, printQRInTerminal: true })

sock.ev.on('creds.update', saveCreds)
sock.ev.on('messages.upsert', async ({ messages }) => {
  const msg = messages[0]
  if (!msg?.message || msg.key.fromMe) return
  await sock.sendMessage(msg.key.remoteJid, { text: 'pong' }, { quoted: msg })
})
```

## Overview

`wanns-baileys` is a production-oriented WhatsApp Web library for bot builders who need predictable socket behavior, complete TypeScript declarations, and maintained utilities without hidden side effects.

- Current WA Web fallback version plus `makeWASocketAuto()` for live version resolution.
- Full WAProto declarations and deep package exports for installed-package consumers.
- Auth backends for files, SQLite, Redis, MongoDB, MySQL, and PostgreSQL.
- Interactive messages, native flows, carousel, AIRich cards, channels/newsletters, status helpers, and bot modules.
- Hardened media/link fetching, credential redaction, session tools, reconnect helpers, and protocol-capture tooling.
- **No implicit group/channel join or follow.** Join/follow helpers remain available, but they only run when your code explicitly calls them.

---

## 🆚 Comparison

How `wanns-baileys` stacks up against other Baileys libraries:

| Capability | `wanns-baileys` | Other forks (typical) |
|---|:---:|:---:|
| Native Flow buttons (V1/V2/V3) | ✅ | ⚠️ partial |
| Carousel messages | ✅ | ❌ |
| Rich response cards (AIRich) | ✅ | ❌ |
| Commerce flow (catalog/order/payment) | ✅ | ⚠️ partial |
| Voice calling (VoIP) | ✅ experimental | ❌ |
| Multi-backend store (SQL/Mongo/Redis) | ✅ | ⚠️ partial |
| Full `.d.ts` TypeScript definitions | ✅ | ⚠️ partial |
| User sync queries (WAUSync) | ✅ | ✅ |
| Username management (check/set/pin/recommend) | ✅ | ❌ |
| Bot framework (middleware, session, stats) | ✅ | ❌ |
| Built-in QR render (terminal/SVG/PNG, zero deps) | ✅ | ❌ needs `qrcode-terminal` |
| Auto WA Web version resolution | ✅ | ❌ hardcoded |
| Status mentions (notify users/groups of your status) | ✅ | ❌ |
| Anti-ban toolkit (warmup ramps, group-op ceilings, disconnect classifier, Gaussian jitter) | ✅ | ❌ |
| Crash-message shield (mention bombs, zalgo, RTLO spoofing) | ✅ | ❌ |
| Session doctor + portable/encrypted session strings | ✅ | ❌ |
| Community/bot modules (economy, games, rental, moderation — 140+ utils) | ✅ | ❌ |
| Sticker EXIF branding | ✅ pure JS | ⚠️ needs `node-webpmux` |
| CLI (`doctor` / `session` / `sticker` / `export` / `wa`) | ✅ | ❌ |
| Credential-redacting logger | ✅ | ❌ |

> This table describes package-level features, not performance benchmarks. PRs to update or correct it are welcome via [Contributing](#-contributing).

---

## 🧰 Built With

<p>
<img src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/>
<img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript"/>
<img src="https://img.shields.io/badge/esm-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black" alt="ESM"/>
<img src="https://img.shields.io/badge/websocket-%23000000.svg?style=for-the-badge&logo=socket.io&logoColor=white" alt="WebSocket"/>
<img src="https://img.shields.io/badge/signal%20protocol-%233A76F0.svg?style=for-the-badge&logo=signal&logoColor=white" alt="Signal Protocol"/>
<img src="https://img.shields.io/badge/protobuf-%23345?style=for-the-badge&logo=google&logoColor=white" alt="Protobuf"/>
<img src="https://img.shields.io/badge/npm-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white" alt="npm"/>
</p>

<p>
<a href="https://skillicons.dev">
  <img src="https://skillicons.dev/icons?i=nodejs,js,ts,npm,docker,redis,mongodb,mysql,postgresql,sqlite" alt="Tech stack icons"/>
</a>
</p>

---

## 🔥 Features

<table>
<tr>
<th align="center">💬 Interactive Messages</th>
<th align="center">🛒 Commerce & Business</th>
<th align="center">🧩 Utility Features</th>
</tr>
<tr>
<td valign="top">

- Native Flow
- Buttons (V1 / V2 / V3)
- Lists
- Carousel Messages
- Poll & Quiz Messages
- Rich Response Messages (AIRich)
- CTA / Reply / URL Buttons
- Call Buttons
- OTP Buttons
- Authentication Buttons

</td>
<td valign="top">

- Catalog Message
- Order Details
- Order Status
- Review & Pay
- Payment Status
- Payment Method
- Track Order
- Reorder
- Cancel Order

</td>
<td valign="top">

- Group Status Support
- Mention All
- Lottie Sticker Support
- Newsletter Support
- ExternalAdReply Helper
- View Once Support
- Rich Formatting
- Code Highlighting

</td>
</tr>
</table>

<table>
<tr>
<th align="center">🔐 Auth & Storage</th>
<th align="center">📞 Realtime</th>
<th align="center">🛠 Developer Tooling</th>
</tr>
<tr>
<td valign="top">

- Multi-file auth state
- Single-file auth state
- SQLite auth state
- Cache-manager auth state
- In-memory store
- SQLite / MongoDB / MySQL /
  PostgreSQL / Redis store adapters

</td>
<td valign="top">

- Voice calling (VoIP, WASM engine)
- User sync queries (WAUSync)
- Presence / status / device lookup
- Event buffer for high-volume bots

</td>
<td valign="top">

- Full TypeScript definitions (`.d.ts`)
- Anti-delete & anti-edit detection (recover deleted messages, capture pre-edit content)
- Message search helpers
- Auto-reply engine
- Scheduling helpers
- Message retry manager

</td>
</tr>
</table>

---

## ✨ Exclusive Wanns Enhancements

### Audio Group Status Fix
Audio status uses a more compatible implementation to avoid unsupported-version errors on older WhatsApp clients.

### AIRich — the rich-response message builder
A chainable builder (`AIRich`, also exported as `AIWanns` / `LeafRich` / `WannsAI` / `WannsRich`) with 40+ `add*()`/`set*()` methods covering headings, formatted text (hyperlinks/citations/LaTeX), code blocks, tables, image/video/product/post cards, task & progress cards, tip banners, and quick-reply suggestions — the kind of rich card layout you'd normally only see from an official AI/assistant-style bot. See [Usage Examples](#airich--rich-response-cards) below.

### Native Flow Expansion

<table>
<tr>
<td valign="top" width="33%">

**Buttons & Actions**
- cta_reminder
- cta_cancel_reminder
- otp_button
- authentication_button
- call_button
- url_button
- reply_button
- voice_call
- video_call_button

</td>
<td valign="top" width="33%">

**Commerce Flow**
- catalog_message
- mpm
- card_message
- order_details
- order_status
- review_and_pay
- payment_status
- payment_method

</td>
<td valign="top" width="33%">

**Navigation & Misc**
- address_message
- send_location
- track_order
- reorder
- cancel_order
- clear_chat
- navigateToScreen
- flow (payload field: flow_action)

</td>
</tr>
</table>

### System Notification Filter

Messages include:

```js
message.isSystemNotification
```

Useful for filtering:

- E2E notices
- Meta service notices
- Other system-generated messages

---

## 📦 Installation

```bash
npm install wanns-baileys
```

Directly from GitHub:

```bash
npm install github:Plenger-final/wanns-baileys
```

> Requires **Node.js 20+** — enforced at import time with a clear error (no install scripts: this package deliberately ships **zero** `preinstall`/`postinstall` hooks, so `npm ci --ignore-scripts` and strict supply-chain policies work out of the box).

> **Coming from `@whiskeysockets/baileys`?** Migration is usually a one-line import change — see [MIGRATION.md](./MIGRATION.md).

### Optional peer dependencies

Everything below is **optional** — the socket works without any of them. Install only what the features you use need; missing ones fail with a clear install hint instead of a silent crash.

| Package | Compatible versions | Unlocks |
|---|---|---|
| `sharp` | any | Fast image resizing/processing (used by the message builders' `Toolkit.resize`) |
| `@napi-rs/image` | `~1.12.x` | Lighter native alternative to `sharp` for image ops |
| `jimp` | bundled (`^1.6.x`) | Pure-JS image fallback when neither of the above is installed — ships as a regular dependency, nothing to install |
| `fluent-ffmpeg` | `^2.1.3` | Audio/video conversion for media messages |
| `ffmpeg-static` | `>=5.0.0` | Bundled ffmpeg **binary** — auto-detected, zero config (~80MB; not available for Termux/Android, use `pkg install ffmpeg` there) |
| `@ffmpeg-installer/ffmpeg` | `>=1.1.0` | Alternative bundled ffmpeg binary — also auto-detected |
| `audio-decode` | `^2.2.3` | Audio waveform/duration extraction (voice notes, VoIP capture) |
| `link-preview-js` | `^3.x` | Rich link previews for URLs in outgoing text messages |
| `better-sqlite3` | `^11.x` (Node 20 ABI) | SQLite auth state, SQLite store adapter, **and** the [Bot Framework](#-bot-framework)'s `SQLiteStore`/`StatsManager` |
| `mongodb` | `^6.10+` | MongoDB store adapter |
| `mysql2` | `^3.11+` | MySQL store adapter |
| `pg` | `^8.13+` | PostgreSQL store adapter |
| `ioredis` | `^5.4+` | Redis store adapter |
| `@roamhq/wrtc` | any (platform-dependent native bindings) | Native WebRTC bindings for [voice calling](#-voice--video-calls) |
| `axios` | any (optional) | Fallback HTTP client for URL thumbnails in button messages — **not required**: the built-in `fetch` (Node 18+) is used first |

The version column mirrors this package's `peerDependencies` ranges — those are the ranges the test suite runs against. Newer majors usually work but aren't verified; `npm ls <pkg>` + `printEnvironmentReport()` (below) will tell you what you actually have.

#### ffmpeg: how it's found

Every feature that shells out to ffmpeg (video thumbnails, sticker conversion, voice-note conversion, VoIP audio feeding) resolves the binary through one central resolver, in this order:

1. **Your override** — `setFfmpegPath('/path/to/ffmpeg')` (exported from the package) or the `FFMPEG_PATH` env var
2. **`ffmpeg-static`** — if installed, its bundled binary is used automatically
3. **`@ffmpeg-installer/ffmpeg`** — same, as an alternative
4. **System `ffmpeg`** on your `PATH`

So on a normal server you can just `npm i ffmpeg-static` and never think about it. On **Termux/Android** (where neither npm package ships a binary) install the system one instead — it's picked up automatically:

```sh
pkg install ffmpeg
```

If nothing is found, the feature fails with a per-platform install hint instead of a cryptic `spawn ffmpeg ENOENT`.

#### Check your environment (doctor)

Wondering why some feature doesn't work? One call diagnoses everything — Node version, which optional deps are installed, where ffmpeg was found, the active image backend:

```js
import { printEnvironmentReport } from 'wanns-baileys'
await printEnvironmentReport() // prints a full report + returns the snapshot
// or the raw-data version without printing:
import { checkEnvironment } from 'wanns-baileys'
const env = await checkEnvironment() // { ok, platform, node, ffmpeg, imageBackend, optionalDeps, warnings }
```

Or straight from the terminal, no code needed:

```sh
npx wanns-baileys doctor    # exit code 0 = all good, 1 = warnings
npx wanns-baileys version
npx wanns-baileys export dump.json --format csv --out chat.csv   # WAMessage JSON → transcript
```

---

## 🚀 Quick Start

```js
import { makeWASocketAuto, useMultiFileAuthState } from 'wanns-baileys'

const { state, saveCreds } = await useMultiFileAuthState('auth_info')

// makeWASocketAuto resolves the freshest WA Web version before connecting
// (WA sw.js -> fork -> fallback), preventing stale-version pairing 405s.
// Prefer sync? `makeWASocket({ auth: state })` still works exactly as before.
const sock = await makeWASocketAuto({
    auth: state
})

// persist credentials whenever Baileys updates them
sock.ev.on('creds.update', saveCreds)

sock.ev.on('connection.update', (update) => {
    const { connection, qr } = update

    // Easiest: pass `printQRInTerminal: true` to makeWASocket and the QR is
    // drawn automatically with the built-in zero-dependency renderer.
    // Manual/custom rendering from the event also works:
    //   import { renderQRToTerminal, qrToSVG, qrToPNG } from 'wanns-baileys'
    //   if (qr) console.log(renderQRToTerminal(qr))          // terminal (▀▄█)
    //   if (qr) fs.writeFileSync('qr.svg', qrToSVG(qr))      // for a web UI
    //   if (qr) fs.writeFileSync('qr.png', qrToPNG(qr))      // raster (send anywhere)
    if (qr) console.log('Got a pairing QR')

    if (connection === 'open') console.log('🍃 Connected!')
})

sock.ev.on('messages.upsert', ({ messages }) => {
    const msg = messages[0]
    if (!msg.message || msg.key.fromMe) return
    console.log('New message from', msg.key.remoteJid)
})
```

**Production tip** — wrap the socket in `autoReconnect()` and disconnect handling is done for you (exponential backoff, never reconnects on `loggedOut`, immediate reconnect after pairing):

```js
import { makeWASocketAuto, autoReconnect, useMultiFileAuthState } from 'wanns-baileys'

const { state, saveCreds } = await useMultiFileAuthState('auth_info')
const manager = autoReconnect(() => makeWASocketAuto({ auth: state, printQRInTerminal: true }), {
    onSocket: sock => {
        sock.ev.on('creds.update', saveCreds)
        sock.ev.on('messages.upsert', handler) // re-attached on every reconnect
    },
    onLoggedOut: () => console.log('delete auth_info/ and re-pair'),
})
await manager.start()
```

Full runnable version: [`examples/auto-reconnect-bot.js`](./examples/auto-reconnect-bot.js).

**Observability** — attach `createDebugMonitor()` for a safe, structured snapshot
(connection state, disconnect reason, uptime, message latency percentiles, send-retry
counts, Signal error tallies, VoIP/WASM state, memory). It **never** contains QR
payloads, pairing codes, auth keys, tokens, or private keys — the whole snapshot is
passed through `redactSecrets()` before it is returned, so it's safe to log or attach
to bug reports as-is:

```js
import { createDebugMonitor } from 'wanns-baileys'

const monitor = createDebugMonitor(sock)
// later — in a health endpoint, cron log, or crash handler:
console.log(JSON.stringify(monitor.getDebugInfo(), null, 2))
// { connection: { state, uptimeMs, lastDisconnect: { code, reason } },
//   messages: { received, decryptFailed, latencyMs: { p50, p90, p99 } },
//   sendRetries, signalErrors: { noSession, badMac, ... }, voip, memory }
```

**Experimental protocol capture** — new WhatsApp features should not be faked from
wishful thinking; first capture the consenting test account's BinaryNode shape, redact
secrets, then add a high-level wrapper once the wire contract is known:

```js
import { bindProtocolCapture } from 'wanns-baileys'

const capture = bindProtocolCapture(sock, { file: './wa-protocol.ndjson' })
// trigger the feature on a paired official client/test account
// each line is redacted JSON: { direction, summary, node }
await capture.close()
```

---

## 🔐 Authentication

Four auth-state backends ship out of the box. All return the same `{ state, saveCreds }` shape expected by `makeWASocket({ auth })`, so they're drop-in interchangeable.

| Function | Storage | Best for |
|---|---|---|
| `useMultiFileAuthState(folder)` | One JSON file per key, on disk | Default choice — simple, debuggable, works everywhere |
| `useSingleFileAuthState(fileName)` | One JSON file, on disk | Small bots where a single file is easier to manage/back up |
| `useSqliteAuthState(opts)` | SQLite (`better-sqlite3`) | Bots that already use SQLite, or want auth in one embedded DB file |
| `useCacheManagerAuthState(store, sessionKey)` | Any [`cacheable`](https://www.npmjs.com/package/@cacheable/node-cache)-compatible store | Multi-session hosting panels, Redis-backed setups |
| `useRedisAuthState(opts)` | Redis (`ioredis` **or** node-redis client) | Multi-instance bots, fast shared session storage |
| `useMongoAuthState(opts)` | MongoDB (`mongodb` collection) | Bots already on Mongo; one document per key |
| `usePostgresAuthState(opts)` | Postgres (`pg` Pool/Client) | Production deployments on Postgres; table auto-created |
| `useMySQLAuthState(opts)` | MySQL/MariaDB (`mysql2/promise`) | Shared-hosting setups; table auto-created |
| `makeAuthStateFromStore(store)` | **Any** key-value backend you implement | Custom databases — implement 5 small methods and you're done |

```js
import { makeWASocket, useMultiFileAuthState } from 'wanns-baileys'

const { state, saveCreds } = await useMultiFileAuthState('auth_info')
const sock = makeWASocket({ auth: state })
sock.ev.on('creds.update', saveCreds)
```

### Pairing code login (no QR)

```js
import { makeWASocket, useMultiFileAuthState, formatPairingCode } from 'wanns-baileys'

const { state, saveCreds } = await useMultiFileAuthState('auth_info')
const sock = makeWASocket({ auth: state, printQRInTerminal: false })
sock.ev.on('creds.update', saveCreds)

if (!state.creds.registered) {
    const code = await sock.requestPairingCode('628123456789') // full international number
    console.log('Pairing code:', formatPairingCode(code))      // "ABCD-EFGH"
}

// custom 8-char code (Crockford base32: 1-9, A-Z minus I/O/U)
await sock.requestPairingCode('628123456789', 'WANNSWANNS12')
```

Input is validated up front with clear errors instead of the classic silent server-side failures: formatting noise (`+`, spaces, dashes) is stripped, a leading `00` international call prefix is removed automatically, and the two big footguns throw immediately — **local-format numbers** (`08123...` instead of `628123...`, the #1 cause of "the pairing code never arrives") and numbers over the 15-digit E.164 maximum. The same check is exported standalone as `normalizePairingPhone(phone)`. For public-facing bots, rate-limit pairing attempts with [`withPairingGuard`](#-security-pack).

```js
// SQLite variant
import { makeWASocket, useSqliteAuthState } from 'wanns-baileys'

const { state, saveCreds } = await useSqliteAuthState({ database: './auth.db' })
const sock = makeWASocket({ auth: state })
sock.ev.on('creds.update', saveCreds)
```

All four database adapters accept either an **existing client/collection** (recommended — you control pooling and lifecycle) or a `uri` (the driver is lazily imported only then; none are hard dependencies):

```js
// Redis variant — works with ioredis AND node-redis
import { makeWASocket, useRedisAuthState } from 'wanns-baileys'

const { state, saveCreds } = await useRedisAuthState({ client: myRedis, session: 'bot-1' })
const sock = makeWASocket({ auth: state })
sock.ev.on('creds.update', saveCreds)
```

`useMultiFileAuthState` also exports `pruneStaleAuthFiles(folder, options)` to clean up old sender-key files on a schedule — useful for long-running bots that accumulate thousands of stale key files.

---

## 🗄️ Store Backends

`makeInMemoryStore()` from `lib/Store` gives you the classic in-memory chat/contact/message cache. For anything that needs to survive a restart, `makePersistentStore()` (from `PersistentStore.js`) wraps one of five backends behind the same interface:

| Backend | Function |
|---|---|
| SQLite | `createSqliteStoreAdapter(opts)` |
| MongoDB | `createMongoStoreAdapter(opts)` |
| MySQL | `createMysqlStoreAdapter(opts)` |
| PostgreSQL | `createPostgresStoreAdapter(opts)` |
| Redis | `createRedisStoreAdapter(opts)` |

```js
import { makeWASocket, makeInMemoryStore } from 'wanns-baileys'

const store = makeInMemoryStore({})
store.readFromFile('./baileys_store.json')
setInterval(() => store.writeToFile('./baileys_store.json'), 10_000)

const sock = makeWASocket({ /* ...auth etc */ })
store.bind(sock.ev)
```

---

## 💡 Usage Examples

### Buttons & Native Flow

```js
import { Button } from 'wanns-baileys'

await new Button(sock)
    .setTitle('Promo Spesial')
    .setBody('Diskon 20% cuma hari ini')
    .setFooter('wanns-baileys')
    .addReply('Klaim Sekarang', 'claim_promo')
    .addUrl('Lihat Katalog', 'https://example.com/catalog')
    .addCall('Hubungi Kami', '628123456789')
    .send(jid)
```

### Poll

```js
import { Poll } from 'wanns-baileys'

await new Poll(sock)
    .setName('Mau makan apa hari ini?')
    .addOptions(['Fried Rice', 'Chicken Noodles', 'Meatballs'])
    .setSelectable(1)
    .send(jid)
```

> **v2.4.7** — the poll builder now validates before it sends. Duplicate options are
> rejected (poll results are bucketed by option text, so duplicates used to merge into
> one result), `setEndDate()` throws on an unparseable date instead of wiring
> `endTime: NaN`, and `setQuiz()` can no longer be combined with
> `setAnnouncementGroup()` (that path emits `pollCreationMessageV2`, which has no
> `correctAnswer` field, so the quiz was silently dropped). Quiz polls are also finally
> readable: `getAggregateVotesInPollMessage()` now recognises `pollCreationMessageV5`.

```js
const poll = new Poll(sock)
    .setName('Quiz: ibu kota Indonesia?')
    .addOptions(['Jakarta', 'Bandung', 'Surabaya'])
    .setQuiz('Jakarta')

poll.validate()        // [] when safe to send — collects every problem at once
poll.assertValid()     // throws the first problem (build()/send() run this for you)
poll.countOptions()    // 3
poll.getOptions()      // ['Jakarta', 'Bandung', 'Surabaya'] (a copy)
poll.removeOption('Surabaya')
Poll.MAX_OPTIONS       // 12 — enforced, like MAX_NAME_LENGTH (255) / MAX_OPTION_LENGTH (100)

await poll.send(jid)
```

### Carousel

> Cards are usually built with `Button(...).toCard()` first. Media cards work as before, and v2.4.7 also allows valid text/button-only carousel cards (WhatsApp renders them) via `addTextCard()` or a `Button(...).toCard()` card with no media header.

```js
import { Button, Carousel } from 'wanns-baileys'

const cardA = await new Button(sock)
    .setImage('https://example.com/a.jpg')
    .setTitle('Produk A')
    .addUrl('Lihat', 'https://example.com/a')
    .toCard()

const cardB = await new Button(sock)
    .setImage('https://example.com/b.jpg')
    .setTitle('Produk B')
    .addUrl('Lihat', 'https://example.com/b')
    .toCard()

await new Carousel(sock)
    .setBody('Pilih salah satu produk di bawah ini')
    .addCard([cardA, cardB])
    .send(jid)

// Text/button-only card, no image required:
await new Carousel(sock)
    .setBody('Quick actions')
    .addTextCard({
        title: 'Support',
        text: 'Choose an action',
        buttons: [
            { id: 'faq', text: 'FAQ' },
            { webview: 'https://example.com/help', text: 'Open Help' }
        ]
    })
    .send(jid)
```

### AIRich — rich response cards

```js
import { AIRich } from 'wanns-baileys'

await new AIRich(sock)
    .addHeading('Order Summary')
    .addText('Your order is being processed.')
    .addTable([
        ['Item', 'Qty'],
        ['Iced Latte', '2']
    ])
    .addTip('Orders are usually ready in 15 minutes')
    .addSuggest('Track Order')
    .send(jid)
```

For the common case, v2.4.7 also exports a one-liner wrapper around the same builder:

```js
import { sendWannsRich, wanns } from 'wanns-baileys'

await sendWannsRich(sock, jid, {
    title: 'Order Summary',
    markdown: '# Paid\nYour order is being processed.',
    actions: { text: 'Track', url: 'https://example.com/order/123' },
    suggestions: ['Track Order', 'Contact Support']
})

// Or keep chaining after the shortcut builds the card:
await wanns(sock, '# Quick Report').addTip('Generated now').send(jid)
```

Neutral aliases (`sendRich`, `Rich`, `createRich`, `buildRich`) remain available, but the WANNS-branded helpers (`wanns`, `wannsRich`, `createWannsRich`, `buildWannsRich`, `sendWannsRich`) are the preferred names for new code.

`AIRich` supports `{ id, insertAt }` on every `add*()`/`set*()` call, so you can insert a block relative to one you added earlier instead of always appending to the end — handy for streaming/edit-in-place style responses combined with `sendEdit(jid, id)`.

**`streamText()` — the "AI typing" effect.** One bubble that grows via in-place edits (exactly how Meta AI streams its answers), instead of flooding the chat:

```js
// sends once, then patches the same bubble until the full text is out
await new AIRich(sock).streamText(jid, longAnswer, {
    chunkSize: 120,  // ~chars per reveal (split at word boundaries)
    intervalMs: 900, // pause between edits (min 300)
    cursor: ' ▍'     // shown while streaming, removed at the end ('' disables)
})
// works alongside other blocks too: addHeading()/addTable() first, then streamText()
```

**`readRichMessage()` — the reader half.** Parse a received rich card (from any AI/assistant-style bot) back into structured blocks instead of staring at opaque proto:

```js
import { readRichMessage } from 'wanns-baileys'

sock.ev.on('messages.upsert', ({ messages }) => {
    const rich = readRichMessage(messages[0])
    if (!rich.found) return
    rich.blocks      // [{ type: 'heading', text }, { type: 'code', language, code },
                     //  { type: 'table', rows, headerRows }, { type: 'text', text, entities }, …]
    rich.suggestions // every suggestion-pill text
    rich.text        // flat text rendering of the whole card
})
```

Handles both wire forms (unified-response payload + proto submessages fallback), resolves inline link entities back to `[label](url)`, re-joins syntax-highlighted code spans, never throws — non-rich input returns `{ found: false }`. Round-trip tested against the AIRich builder itself.

Other builders worth knowing about: **`ButtonV2`** (simpler quick-reply-only buttons), **`ButtonV3`** (`loadFrom(msg)` to edit an existing template message in place), and **`Toolkit`** (static helpers: `Toolkit.resize()`, `Toolkit.fetchBuffer()`, `Toolkit.waitAllPromises()`, `Toolkit.extractIE()` for parsing `[label](url)` links/citations/LaTeX out of plain text).

### 📁 Builders Folder Map (`lib/Builders/`)

Every message builder lives in its own file under `lib/Builders/`, so you can trace exactly where a class comes from instead of digging through one giant `MessageBuilder.js`. `index.js` is just the barrel file that re-exports everything below (plus their aliases) for the top-level `import { ... } from 'wanns-baileys'` syntax.

| File | Exports | What it's for |
|---|---|---|
| `shared.js` | `Toolkit`, `BaseBuilder`, `RowBuilder` | The shared foundation every other builder is built on. `BaseBuilder` holds the common chainable `send()`/context-info plumbing, `RowBuilder` is the shared row/section helper, and `Toolkit` is the static-helper grab bag (`resize`, `fetchBuffer`, `waitAllPromises`, `extractIE`, media-duration/preview helpers). Nothing here is meant to be instantiated directly in bot code — it exists so `Button`, `Poll`, `Carousel`, etc. don't each reimplement the same plumbing. |
| `Button.js` | `Button`, `CardBuilder` | The main interactive/native-flow button builder — headers (image/video/document), CTA helpers (`addUrl`, `addCall`, `addReply`, and the wider native-flow set), and `.toCard()` to turn a button message into a `Carousel` card. |
| `ButtonV2.js` | `ButtonV2` | A lighter-weight legacy `buttonsMessage` variant limited to up to 3 quick-reply buttons — includes `validate()`/`assertValid()`, `countButtons()`/`getButtons()`/`clearButtons()`, and relays with the same canonical `getBizBinaryNode()` envelope as the socket path. |
| `ButtonV3.js` | `ButtonV3` | Built around `loadFrom(msg)` — loads an existing `templateMessage` (e.g. one you fetched or that was quoted) so you can edit it in place. Also validates hydrated quick-reply/url/call buttons and relays with the canonical biz node. |
| `Carousel.js` | `Carousel` | Chains `Button(...).toCard()` results into a swipeable card carousel. Accepts media cards and text/button-only cards (`addTextCard()`), validates before send, and is capped at `Carousel.MAX_CARDS` (10) since WhatsApp silently truncates anything beyond that. |
| `Poll.js` | `Poll` | Poll/vote message builder — question, options, single/multi-select, hidden-voter mode, correct-answer marking, expiry. |
| `AIRich.js` | `AIRich` (+ aliases `ORich`, `AIWanns`, `LeafRich`, `WannsAI`, `WannsRich`, `RichWanns`) | The rich AI-assistant-style response builder described above — headings, formatted text, tables, media/product/post cards, task/progress cards, tip banners, quick-reply suggestions. |
| `Rich.js` | `wanns`, `wannsRich`, `createWannsRich`, `buildWannsRich`, `sendWannsRich` (+ neutral aliases `Rich`, `createRich`, `buildRich`, `sendRich`) | One-liner convenience wrapper over `AIRich` for common cards (`markdown`, `text`, `actions`, `suggestions`, media, etc.) without replacing the full chainable builder. |
| `A2UI.js` | `A2UI`, `sendA2UIWidget` | Lower-level A2UI/Bloks widget builder. Builds the flat `components` tree (Column/Row → `children`, Card/Button → `child`, Modal → `trigger`/`content`) that Bloks widgets expect and sends it through the same `getBizBinaryNode()` path as `Button`/`ButtonV2`, so the wire-level node always matches the button names actually sent. |
| `WannsBaileys.js` | `WannsBaileys` | A unified builder **hub** — one object that wraps all the builders above behind short method names (`.button()`, `.buttonV2()`, `.buttonV3()`, `.carousel()`, `.poll()`, `.airich()`, `.rich()`, `.a2ui()`), plus PascalCase aliases (`.Button()`, `.Carousel()`, `.Poll()`, `.AIRich()`, `.Rich()`, `.A2UI()`) for developers who prefer that naming style. |
| `index.js` | everything above, plus `MESSAGE_BUILDER_VERSION` | The barrel file — re-exports every builder and its aliases so `import { Button, Poll, AIRich, WannsBaileys } from 'wanns-baileys'` works without reaching into individual files. `MESSAGE_BUILDER_VERSION` tracks the builder API surface's own version, independent of the package version. |

**Unified hub example** — useful if you'd rather carry one object around than import each builder individually:

```js
import { WannsBaileys } from 'wanns-baileys'

const vx = new WannsBaileys(sock)

await vx.button()
    .setTitle('Promo Spesial')
    .addReply('Klaim Sekarang', 'claim_promo')
    .send(jid)

await vx.poll()
    .setName('Mau makan apa hari ini?')
    .addOptions(['Fried Rice', 'Chicken Noodles'])
    .send(jid)
```

---

### 📌 Pin / Keep in Chat

```js
// Pin a message for 7 days (default 24h), unpin, keep / unkeep in disappearing chats
await sock.sendPin(jid, msg.key, { durationSec: 7 * 86400 })
await sock.sendUnpin(jid, msg.key)
await sock.sendKeep(jid, msg.key)
await sock.sendUnkeep(jid, msg.key)
```

### 📅 Event

```js
await sock.sendEvent(jid, {
    name: 'Weekly Meeting',
    description: 'Bahas progres bot',
    startDate: new Date('2026-09-15T10:00:00+07:00'),
    endDate: new Date('2026-09-15T11:00:00+07:00'),
    location: { name: 'Office', address: 'Jakarta' },
    extraGuestsAllowed: true
})
```

### 📞 Scheduled Call

Native scheduled-call message (the "Schedule call" card with a join reminder):

```js
// 'voice' (default) or 'video'
await sock.sendScheduledCall(jid, {
    title: 'Daily standup',
    scheduledAt: new Date('2026-09-15T09:00:00+07:00'),
    callType: 'video'
})

// Cancel it later (needs the creation message's key)
await sock.cancelScheduledCall(jid, creationMsg.key)
```

### 📱 Mini App

Two modes — pass `url`, `flow`, or both (two buttons):

```js
import { sendMiniApp } from 'wanns-baileys'

await sendMiniApp(sock, jid, {
    title: 'My Mini App',
    body: 'Tap the button to open the app 👇',
    // 1) webview mode: rich card + CTA opening your web app
    //    (in-app webview when supported, else the browser)
    url: 'https://myapp.example.com',
    params: { ref: 'wa-bot' }, // → appended as ?ref=wa-bot
    buttonText: '🚀 Open App',
    // 2) Flows mode: TRUE native in-chat mini app (forms/screens inside
    //    WhatsApp, no browser). Needs a published Flow ID from Flows Manager.
    flow: { id: '123456789', cta: '📝 Isi Form', screen: 'WELCOME' },
    thumbnail: 'https://myapp.example.com/icon.png' // url or Buffer
})
// or as a socket method: await sock.sendMiniApp(jid, { ... })
```

---

## 📨 Message Helpers

High-level one-liners for modern message types — validated, with friendly aliases:

```js
await sock.sendLocation(jid, { lat: -6.2, lng: 106.8, name: 'Jakarta' });
await sock.sendContact(jid, { name: 'John', vcard: 'BEGIN:VCARD\n...' });
await sock.sendGroupInvite(jid, { code: 'AbC123', jid: groupJid, subject: 'Community' });
await sock.sendPaymentRequest(jid, { currency: 'IDR', amount: 50000, note: 'coffee ☕' });
await sock.sendInvoice(jid, { note: 'INV-001' });
await sock.sendPollOption(jid, pollKey, ['New option']);
await sock.sendEventInvite(jid, { eventTitle: 'Party', startTime: new Date(...) });
await sock.sendNewsletterInvite(jid, { newsletterJid, newsletterName: 'News' });

// Poll upgrades (already wired end-to-end):
await sock.sendPoll(jid, {
  name: 'Jam berapa?', values: ['Pagi', 'Sore'],
  endDate: new Date('2026-09-16T00:00:00Z'), // auto-close
  hideVoter: true,      // anonymous poll
  canAddOption: true,   // voters may add options
});
```

Music messages are experimental — the proto is correct but interop with official
clients is unverified (see [Honestly not implemented](#honestly-not-implemented-and-why)):

```js
await sock.sendMusic(jid, { songUri, artworkUri, embeddedMusic: { songId, title, author } });
```

**Escape hatch:** every content key also works inline via `sendMessage`, and `{ raw: true, <AnyMessageField>: {...} }`
passes any proto field through untouched — full `WAProto` coverage with zero wrapper lag:

```js
await sock.sendMessage(jid, { raw: true, musicMessage: { songUri } });
```

TypeScript consumers get a typed `AnyMessageContent` (`import type { AnyMessageContent } from 'wanns-baileys'`).

## 🧰 Channels, History & Transcripts

**Channel management** (live queries):

```js
await sock.newsletterDelete(channelJid)
await sock.newsletterAdminCount(channelJid)
await sock.newsletterJoinInvite('invite-code')
await sock.newsletterChangeOwner(channelJid, newOwnerJid) // experimental
await sock.communityGetInviteCode(communityJid)
// ...plus existing follow/unfollow/mute/react/fetch + full community CRUD
```

**Group history sharing** for new members (forwards recent messages to their DM):

```js
import { getGroupHistoryFromStore } from 'wanns-baileys'
const messages = getGroupHistoryFromStore(store, groupJid, 10)
await sock.shareGroupHistory({ groupJid, members: newMemberJid, messages, greeting: true })
```

**Voice-note transcription** (pluggable provider — cloud Whisper or your own):

```js
import { openAIWhisperProvider } from 'wanns-baileys'
const provider = openAIWhisperProvider({ apiKey: process.env.OPENAI_API_KEY })
const { text } = await sock.transcribeMessage(voiceNoteMsg, { provider })
```

**Mini-app deep links** (HMAC-signed params your web app can verify):

```js
import { createMiniAppLink, parseMiniAppParams, buildFlowDataExchange } from 'wanns-baileys'
const link = createMiniAppLink('https://app.example.com/', { uid: '123' }, { secret: 's3cr3t' })
parseMiniAppParams(link, { secret: 's3cr3t' }) // → { uid: '123' } (throws if tampered)
buildFlowDataExchange('navigate', { screen: 'HOME' }) // Flows data_exchange payload
```

**A2UI widgets** now include `Slider`, `Switch`, `List`, `ProgressBar`, `Avatar`,
`Badge`, `Spacer`, and `Tabs` alongside the existing Text/Image/Video/Button/Card/Modal
set (all ref-validated at `build()`).

## 🔐 Security Pack

Drop-in hardening for auth state, secrets, and abuse — all in
`lib/Utils/auth-secure.js`, covered by `tests/security.test.js` (incl. fuzzing).

```js
import {
  useEncryptedFileAuthState, secureLogger, withPairingGuard,
  createQRGuard, backupAuthState, writeAuthIntegrity, repairAuthState, secureLogout
} from 'wanns-baileys'

// 1. AES-256-GCM encrypted auth state (reads legacy plaintext, migrates on save)
const { state, saveCreds } = await useEncryptedFileAuthState('./auth', { password: process.env.AUTH_PW })
const sock = makeWASocket({
  auth: state,
  logger: secureLogger(pino({ level: 'info' })), // 7. redacts qr/tokens/keys in every log line
})

// 2. pairing-code rate limit: 5/hour per number, 30s between attempts
withPairingGuard(sock, { maxPerHour: 5, minIntervalMs: 30_000 })

// 3. QR fist-guard: handle the first QR, swallow re-emits for 60s
const qrGuard = createQRGuard({ ttlMs: 60_000 })
sock.ev.on('connection.update', ({ qr }) => { qr = qrGuard.handle(qr); if (qr) show(qr) })

// 6/8. encrypted backup + integrity snapshot
await backupAuthState('./auth', './auth.jabackup', { password: process.env.BACKUP_PW })
await writeAuthIntegrity('./auth', { secret: process.env.INT_PW })

// 9. repair corrupt stores (quarantines + restores creds from backup)
await repairAuthState('./auth', { password: process.env.AUTH_PW, backupFile: './auth.jabackup', backupPassword: process.env.BACKUP_PW })

// 4. logout + overwrite/unlink every auth file + scrub in-memory creds
await secureLogout(sock, { authFolder: './auth' })
```

Single-file variant: `useEncryptedSingleFileAuthState(file, { password })`.

## 🆕 WA 2026 catch-up

WhatsApp 2026 features, wired into WANNS-Baileys. Everything here was audited against the
latest official clients — only gaps were added; what already worked is just documented.

### Usernames (chat without phone numbers)

```js
await sock.checkUsername('wannsstore');            // availability
await sock.setUsername('wannsstore');              // claim it
await sock.reserveUsername('wannsstore');          // reserve it (2026 reservation flow)
await sock.findUserByUsername('wannsstore');       // USync lookup → JID
const u = await sock.fetchContactUsernames(['62812@s.whatsapp.net']);
```

### Editable polls (`editPoll`)

Polls are editable for ~15 minutes after creation (server-side rule):

```js
const sent = await sock.sendPoll(jid, { name: 'Jam berapa?', values: ['Pagi', 'Sore'] });
await sock.editPoll(jid, sent.key, { name: 'Jam berapa?', values: ['Pagi', 'Siang', 'Sore'] });
```

### Mass mention (`sendMentionAll`)

```js
await sock.sendMentionAll(groupJid, 'Announcement: meeting at 9!');
```

> In groups with 32+ members `@all` is admin-only and the rule is enforced
> server-side — non-admin calls are silently dropped by WhatsApp.

### Status mentions (`sendStatusMention`)

Post a status and notify specific users or whole groups — they get the
"mentioned you in their status" bubble linking to your status:

```js
// text status, mention two users
await sock.sendStatusMention({ text: 'Big announcement! 🎉' }, [
    '62812xxx@s.whatsapp.net',
    '62813xxx@s.whatsapp.net',
])

// image status, mention an entire group (every member is notified)
await sock.sendStatusMention({ image: buffer, caption: 'New drop 🔥' }, [groupJid])
```

Works with any status content (`text`, `image`, `video`, `audio`). Pace the
notification fan-out with `{ delayMs }` in options (default 1500 ms per jid).

### Event reminders

```js
await sock.sendMessage(jid, {
  event: {
    title: 'Meeting', description: 'Q3', startDate: new Date('2026-09-15T09:00:00+07:00'),
    reminder: true, reminderOffsetSec: 1800, // remind 30 min before start
  }
});
```

### Sender phone from LID events (`resolveSenderPn`)

Fixes LID-only payloads (e.g. call offers where `caller_pn` is missing):

```js
sock.ev.on('messages.upsert', async ({ messages }) => {
  for (const m of messages) console.log(await sock.resolveSenderPn(m)); // '62812…' | null
});
```

### View-once voice notes

`sendVoiceNote()` content composes with `viewOnce`:

```js
await sock.sendMessage(jid, { ...(await buildVoiceNoteContent('./a.ogg')), viewOnce: true });
```

### Member tags (groups)

Already exposed — no new code, documented here:

```js
await sock.updateMemberLabel({ groupJid, lid, label: 'Admin' });
```

### Honestly not implemented (and why)

- **Voice message transcripts** — generated on-device by official clients only; there is
  no transcript API on the wire.
- **Group message history sharing (native)** — WhatsApp began rolling out the official
  "Group Message History" feature (share the last 25–100 messages with a newly added
  member, E2EE, admin-controlled) in Feb 2026. Its wire format still hasn't been captured
  by any public library (re-verified 28 Sep 2026 by downloading and API-diffing upstream
  Baileys 7.0.0-rc14 plus the 8 largest living forks — none carry it). Until it is, this repo ships an honest *workaround* —
  `shareGroupHistory()` forwards recent messages into the new member's DM — which is NOT
  the native flow (no in-group history bubble, no "history shared" notice). If you need
  native behaviour, the only path today is an official client.
- **Music messages (interoperability)** — the `MusicMessage` proto struct round-trips
  fine and `sendMusic()` emits it, but real interop needs provider catalog IDs
  (Spotify/Apple) plus an artwork upload flow that official clients negotiate privately;
  no public capture exists (re-verified Sep 2026). Messages built with made-up IDs render
  as a plain preview or nothing at all on official clients — treat `sendMusic()` as
  experimental and test against a real device before shipping. What v2.4.1 *does* fix:
  unknown `embeddedMusic` fields used to be silently dropped by the proto encoder
  (a typo'd key just vanished from the wire) — they now throw a clear 400 listing the
  supported field names. For the modern music-on-status surface, see
  `withMusicAttribution()` below.
- ~~`mediaKeyDomain`~~ — **now IMPLEMENTED** (kept here for history). Backported from rc14 onto all 5 media types
  (`Audio/Document/Image/Sticker/VideoMessage`, enum `UNSET/E2EE_CHAT/STATUS/CAPI/BOT`)
  with a send passthrough: `sendMessage(jid, { image: buf, mediaKeyDomain: 1 })`.
  Unset by default (recommended — the server labels it). Skipped only on
  `MMSThumbnailMetadata`, where upstream's field number 8 collides with the newer
  `messageHistoryMetadata` in our proto.

## 🆕 Everyday Utilities

One-liners for daily bot work (also usable standalone — see `examples/`):

```js
// 📊 Poll (chats/groups) + Quiz (channels only)
await sock.sendPoll(jid, { name: 'What to eat?', options: ['Rice', 'Noodles'] })
await sock.sendQuiz(channelJid, { name: 'Quiz', options: ['A', 'B'], correctAnswer: 'A' })

// 🎙️ Voice note — auto-converts mp3/wav/… to Opus PTT (needs fluent-ffmpeg)
await sock.sendVoiceNote(jid, './hello.mp3') // path | Buffer | { url }

// 📞 Tag everyone (visible @list vs hidden)
await sock.tagAll(groupJid, 'Meeting at 10!')
await sock.hideTag(groupJid, 'Announcement 📢')

// 🔍 LID → phone number (best-effort, null when unknown)
await sock.getPhoneNumber('12345@lid') // → '62812…'
await sock.getLidForPhone('62812…')    // reverse lookup

// 🧍 Humanized send — typing… + natural delay + per-chat queue
await sock.sendHumanized(jid, { text: 'Hello!' })

// 🛡️ Send Guard — global anti-ban pacing baked into sendMessage()
const sock = makeWASocket({
    sendRateLimit: {
        messagesPerMinute: 20, // global token-bucket ceiling (0 = off)
        perChatDelayMs: 1500,  // minimum gap between sends to the same chat
        jitterRatio: 0.2       // ±20% randomness so timing never looks robotic
    }
})
await sock.sendMessage(jid, { text: 'auto-paced 🛡️' })            // paced
await sock.sendMessage(jid, { text: 'now!' }, { skipRateLimit: true }) // bypass

// ✅ Delivery tracking — await the server ack of an outgoing message
const msg = await sock.sendMessage(jid, { text: 'important!' })
await sock.waitForMessageAck(msg.key.id) // resolves on ack, rejects on
                                         // server error / 60s timeout

// ✅ One-call variant — send + await the ack, race-free (waiter registered
// BEFORE the send goes out, so a fast ack can never slip through)
const { message, ack } = await sock.sendMessageAcked(jid, { text: 'critical!' }, { ackTimeoutMs: 30_000 })

// 📣 Broadcast to many jids — paced, per-jid outcomes, never dies mid-run
const report = await sock.sendBroadcast(jids, { text: 'promo!' }, { delayMs: 1500 })
// { sent: [...], failed: [{ jid, error }], total }

// 🔗 Group invite links
extractGroupInviteCode('https://chat.whatsapp.com/AbCdEf…') // 'AbCdEf…'
await sock.joinGroupViaLink('https://chat.whatsapp.com/AbCdEf…')

// 🏷️ Parse @mentions out of text → ready for sendMessage
const mentions = parseMentions(text) // ['62812…@s.whatsapp.net', …]
await sock.sendMessage(jid, { text, mentions })

// 🤖 Meta AI chat (experimental — needs Meta AI on the account/region)
const { text } = await sock.askMetaAI('Explain black holes!')
```

**Command router** for prefix bots (`!menu`, `.sticker`) with middleware + auto-help:

```js
import { createRouter } from 'wanns-baileys'
const router = createRouter({ prefix: '!' })
router.command('ping', async (ctx) => ctx.reply('pong! 🏓'), { desc: 'Check bot' })
router.attach(sock) // → detach()
```

**Status / channel schedulers** (in-memory):

```js
import { StatusScheduler, ChannelScheduler, StatusHelper } from 'wanns-baileys'
new StatusScheduler(sock).schedule(StatusHelper.text('Pagi! ☀️'), new Date('2026-09-11T06:00:00+07:00'))
new ChannelScheduler(sock).schedule(channelJid, { text: 'Update' }, Date.now() + 3600_000)
```

**Music attribution on statuses** (`StatusAttribution.Type.MUSIC` — the official
Dec-2025 "add music to your status" surface, wire-verified against WAProto):

```js
import { StatusHelper, withMusicAttribution } from 'wanns-baileys'

const status = withMusicAttribution(
  StatusHelper.text('vibes 🎵'),
  { title: 'Song Name', authorName: 'Artist', songId: '<catalog-id>' }
)
await StatusHelper.send(sock, status, jidList)
```

> Official clients resolve the song via Meta's licensed catalog, so `songId`
> must be a real catalog id for the music chip to render there. The attribution
> struct itself is wire-correct either way (round-trip covered by tests).

**Chat export & statistics** (offline — official "Export chat" format, JSON, CSV):

```js
import { exportChatAsText, exportChatAsCSV, chatStatistics } from 'wanns-baileys'

// messages: WAMessage[] from your store / anti-delete cache / messages.upsert
console.log(exportChatAsText(messages))
// 14/09/2026, 10.32 - Wanns: halo!
// 14/09/2026, 10.33 - Rina: <Media omitted>

fs.writeFileSync('chat.csv', exportChatAsCSV(messages))

const stats = chatStatistics(messages)
// { total, bySender, byKind, byHour[24], byWeekday[7], topWords, ... }
```

Also available with zero code: `npx wanns-baileys export dump.json --format text|json|csv`.

**Offline bot testing (`createMockSocket`)** — test your bot logic in CI with
zero WhatsApp account, zero network, zero ban risk:

```js
import { createMockSocket, createRouter } from 'wanns-baileys'
import assert from 'assert'

const mock = createMockSocket()
myBotSetup(mock.sock)              // your real bot code, unchanged

await mock.receiveText('628xx@s.whatsapp.net', '!ping')
const reply = await mock.waitForReply()
assert.equal(reply.content.text, 'pong! 🏓')
```

Same `ev` surface and `sendMessage()` signature as the live socket; outgoing
messages are REAL `proto.WebMessageInfo` objects built through the same
`generateWAMessage()` pipeline. Supports group injection, quoted replies,
connection lifecycle simulation, read-receipt/presence capture, and
`reset()` between tests. Honest scope: it does not emulate WhatsApp servers —
rate limits, sessions, and encryption are out of scope by design.

`npm test` runs the offline suite (`tests/`, 1226 tests, no network needed).

---

## 🆕 New in v2.4.5

Fresh helpers added this release. All are exported from the package root and fully typed.

### 🗳️ Poll manager — track who voted what (`createPollManager`)

`getAggregateVotesInPollMessage` is stateless and double-counts a voter who changes their mind (WhatsApp re-sends the voter's *full* selection on every change). `createPollManager` keeps that state — each voter counts once, latest choice wins:

```js
import { createPollManager } from 'wanns-baileys'

const polls = createPollManager()
const sent = await sock.sendMessage(jid, { poll: { name: 'Lunch?', values: ['Pizza', 'Sushi'], selectableCount: 1 } })
polls.register(sent) // remembers options + key

// feed it decrypted votes (option names, sha256 hex, or the raw hash Buffers WA sends):
polls.applyVote(sent.key.id, voterJid, ['Pizza'])

polls.tally(sent.key.id)   // [{ name:'Pizza', count, voters:[] }, ...]
polls.winner(sent.key.id)  // { winners:['Pizza'], count } (tie-aware)
console.log(polls.render(sent.key.id)) // live bar chart
```

### ❤️‍🩹 Session-health monitor (`createSessionHealthMonitor`)

Detects bursts of undecryptable messages (a dead Signal session / Bad-MAC drift) per contact and alerts you — purely observational, never throws into your event loop:

```js
import { createSessionHealthMonitor } from 'wanns-baileys'

const health = createSessionHealthMonitor({ badMacThreshold: 3, windowMs: 60_000 })
health.bind(sock)
health.onUnhealthy(({ jid, failures }) => console.warn(`${jid} session looks broken (${failures} decrypt fails)`))
health.onRecover(({ jid }) => console.log(`${jid} recovered`))
```

Ships with `canonicalizeJid()` and `makeJidCanonicalizer(sock)` to key a contact by one identity across the PN/LID split.

### 🔁 Message de-dupe / idempotency (`createMessageDedupe`)

Stops double-replies when WhatsApp re-delivers a message (reconnect, history sync, placeholder resend, retries):

```js
import { createMessageDedupe } from 'wanns-baileys'

const dedupe = createMessageDedupe({ maxSize: 5000 }) // optional ttlMs
sock.ev.on('messages.upsert', ({ messages }) => {
  for (const m of messages) {
    if (dedupe.seen(m.key)) continue // already handled → skip
    // ...handle exactly once
  }
})
```

### 🔗 LID ↔ PN helpers on the socket

The mapping helpers are now first-class socket methods (no more reaching into `signalRepository`):

```js
await sock.getLIDForPN('62812…@s.whatsapp.net') // → '…@lid' | null
await sock.getPNForLID('123…@lid')              // → '…@s.whatsapp.net' | null
await sock.getLIDsForPNs([...])                  // batch
await sock.getPNsForLIDs([...])                  // batch
await sock.storeLIDPNMappings([{ lid, pn }])     // seed the cache
```

### 🧩 Small toolkit helpers

Ten new pure, typed helpers exported from the root:

```js
import { partition, zip, formatCountdown, wordCount, ellipsisMiddle,
         jidType, randomString, isNumeric, firstEmoji, maskJid } from 'wanns-baileys'

partition([1, 2, 3, 4], n => n % 2 === 0) // [[2,4],[1,3]]
zip([1, 2], ['a', 'b'])                    // [[1,'a'],[2,'b']]
formatCountdown(90_061_000)                // '1d 01:01:01'
ellipsisMiddle('abcdefgh', 5)             // 'ab…gh'
jidType('123@g.us')                        // 'group'
maskJid('628123456789@s.whatsapp.net')     // '628******89@s.whatsapp.net'
```

---

## 📞 Voice & Video Calls

Experimental audio-call support via a bundled WASM call stack + WebRTC relay. Requires the optional `@roamhq/wrtc` peer dependency.

```js
import { VoipClient } from 'wanns-baileys'

const voip = new VoipClient({ resourcesPath: './voip-resources' })
await voip.connectWithSocket(sock)

const call = await voip.call('628123456789')

call.on('ringing', () => console.log('Ringing...'))
call.on('connected', () => console.log('Call connected'))
call.on('ended', (reason) => console.log('Call ended:', reason))
```

`ActiveCall` (returned by `.call()`) and `CallState` are also exported directly if you need finer-grained control over call state.

**Answering inbound calls** — offers are tracked, so the bot can pick up (1:1) or join (group):

```js
import { attachVoip } from 'wanns-baileys'
const voip = await attachVoip(sock) // also stored as sock.voip

voip.on('incoming-call', async ({ callId, from, isGroupCall, busy }) => {
    if (busy) return
    if (isGroupCall) await voip.joinGroupCall(callId, { audioSource: './greeting.mp3' })
    else await voip.answerCall(callId, { audioSource: './greeting.mp3' })
})

// ...or fully automatic:
await attachVoip(sock, { autoAnswer: true })   // pick up 1:1 calls
await attachVoip(sock, { autoJoinGroup: true }) // join group calls
await attachVoip(sock, { autoReject: true, autoRejectText: 'Bot cannot take calls 🙏' })

// still-pending offers (answer before `offerTtlMs`, default 45s):
voip.getPendingCalls() // → [{ callId, from, isGroupCall, ... }]
```

**Group / multi-party calls:**

```js
const gcall = await voip.startGroupCall(groupJid, ['62812…', '62813…'], { chatName: 'Meeting' })
await voip.inviteToGroupCall('62814…')
await voip.removeGroupParticipant('62813@s.whatsapp.net')
await voip.rejoinGroupCall() // recovery after a drop

voip.on('group-call-started', console.log)
voip.on('group-call-joined', console.log)
```

Calls also support reactions, hand-raise, recording, and call links:

```js
const call = await voip.call('628123456789', { audioSource: './greeting.mp3' })
call.react('👍')
call.setHandRaised(true)
const stopRecording = call.recordToFile('./call.wav') // remote peer → .wav
await voip.previewCallLink('call-link-token')

// 🔀 switch what the call plays WITHOUT hanging up (IVR-style flows)
call.setAudioSource('./menu.mp3')                    // file/URL
call.setAudioSource({ data: buffer, ext: 'mp3' })    // in-memory audio
call.setAudioSource('lavfi:sine=frequency=440')      // generated tone
call.setAudioSource('silence')                       // stop playing, stay on the call
```

**Reconnect & recovery** — a watchdog monitors the relay transport during every call
(`watchdogIntervalMs`/`watchdogMaxSilent`); on a dead relay it emits `call-degraded`
and automatically re-sends the crypto rekey + offer. Manual controls:

```js
voip.on('call-degraded', ({ callId }) => console.log('relay dead, recovering', callId))
voip.on('call-recovery', (r) => console.log('recovery result', r))
await voip.recoverCall({}) // manual: { rekey: true, offer: true }
voip.getStats()            // { busy, callId, call, relay }
sock.ev.on('call', (calls) => { /* standard offer/reject path still works */ })
```

**Refreshing the WASM stack** — if calls break after a WA Web update, re-fetch the official VoIP build directly from WhatsApp Web's bootloader endpoint:

```bash
npm run voip:fetch-wasm
```

No browser is needed in the default path. If WhatsApp changes the public bootloader response, the script can still fall back to a logged-in Chrome session with `CALL_WASM_FETCH_MODE=browser` and `--remote-debugging-port=9222`.

---

## 🔎 User Sync Queries

`WAUSync` (`USyncQuery` / `USyncUser` + protocols) lets you check things like WhatsApp registration, device lists, status, and username info for a JID before you message it — the same mechanism behind `sock.onWhatsApp()`.

```js
import { USyncQuery, USyncUser, USyncContactProtocol } from 'wanns-baileys'

const query = new USyncQuery()
    .withContext('interactive')
    .withMode('query')
    .withUser(new USyncUser().withPhone('628123456789'))

query.protocols.push(new USyncContactProtocol())

const result = await sock.executeUSyncQuery(query)
```

Available protocols: `USyncContactProtocol`, `USyncDeviceProtocol`, `USyncStatusProtocol`, `USyncUsernameProtocol`, `USyncDisappearingModeProtocol`, `UsyncBotProfileProtocol`, `UsyncLIDProtocol`.

---

## 👤 Username Management

High-level wrappers around WhatsApp's username feature (the `@username` handle you can set instead of exposing your phone number), sitting on top of `USyncUsernameProtocol`.

> ⚠️ **Query-ID rotation.** The GraphQL query IDs behind these calls are captured from live WA Web sessions and WhatsApp rotates them from time to time. When that happens calls fail with `GraphQL server error: Bad Request` (or `unexpected response structure`). You don't have to wait for a package update — hot-patch the rotated ID at runtime:
>
> ```js
> const sock = makeWASocket({
>     usernameQueryIds: { CHECK: '<fresh-id>', SET: '<fresh-id>' } // override any of:
>     // CHECK, CHECK_MULTI, SET, GET, GET_RECOMMENDATIONS, PIN_SET
> })
> ```
>
> Fresh IDs can be captured from a live WA Web session (DevTools → Network → WS frames → look for `xmlns="w:mex"` queries).

```js
// Check availability + get suggestions if taken
const check = await sock.checkUsername('Wanns')
// { available: true, username: 'Wanns' }
// or: { available: false, suggestions: [...], rejectionReasons: [...] }

// Claim a username
await sock.setUsername('Wanns', { source: sock.USERNAME_SOURCE.USER_INPUT })

// Lock it behind a PIN so it can't be changed without one
await sock.setUsernamePin('123456')

// Read your own username / drop it
const mine = await sock.getMyUsername()
await sock.deleteUsername()

// Resolve a username to a JID (USync-based, like onWhatsApp() but by username)
const user = await sock.findUserByUsername('someone')
// { jid: '628...@s.whatsapp.net', contact: false }

// Batch-resolve usernames for a list of known contacts
const usernames = await sock.fetchContactUsernames(jid1, jid2, jid3)

// Get WA's own suggestions (e.g. for onboarding flows)
const recs = await sock.getUsernameRecommendations()
```

> Requires a Community/Contact-tier account in good standing — accounts under WA's usual restrictions for new/unverified numbers may see `INVALID` or empty suggestions regardless of the username's actual availability.

---

## 🤖 Bot Framework

An optional, higher-level layer on top of the raw socket: middleware routing, a `!command` dispatcher, a message queue that survives disconnects, exponential-backoff auto-reconnect, per-JID session storage, group activity stats, and media (sticker/voice-note) conversion helpers — so a new bot project doesn't have to hand-roll session/context management every time.

Needs the `better-sqlite3` peer dependency (session + stats storage) and `fluent-ffmpeg` (sticker/voice-note conversion, already listed above) — both fail with an install hint rather than crashing if you use a Framework feature that needs them without installing them first.

```js
import { Bot } from 'wanns-baileys'

const bot = new Bot({
    socketConfig: { printQRInTerminal: true },
    dbPath: './bot.db',   // sessions + stats, defaults to 'baileys_store.db'
    enableStats: true     // group message/sticker leaderboards + ghost detection
})

bot.command('!ping', async (ctx) => {
    await ctx.reply({ text: 'pong' })
})

bot.command('!sticker', async (ctx) => {
    if (!ctx.quoted?.imageMessage) return ctx.reply({ text: 'Reply to an image with !sticker' })
    // ctx.replySticker() handles the WebP conversion for you
    await ctx.replySticker(imageBuffer, { packname: 'Wanns Pack', author: 'you' })
})

bot.onText(async (ctx) => {
    // ctx.session() / ctx.setSession() / ctx.updateSession() / ctx.clearSession()
    // persist small per-chat state (e.g. multi-step flows) to SQLite automatically
    const state = ctx.session()
    if (state?.awaitingReply) {
        ctx.updateSession((s) => ({ ...s, awaitingReply: false }))
    }
})

await bot.start()
```

`Context`, `SessionManager`, `StatsManager`, `MediaManager`, and `SQLiteStore` are also exported individually if you only need one piece rather than the full `Bot` class.

> These files ship as plain `.js` for now — hand-written `.d.ts` declarations for the Framework module haven't been added yet, unlike the rest of this fork's fully-typed surface.

---

## 🧩 Utility Modules

<details>
<summary><b>📖 Show the full utility-module reference</b> — 140+ helpers across <code>lib/Utils</code></summary>

<br/>

A sample of the utilities exported from `lib/Utils` beyond the message builders above:

| Module | What it does |
|---|---|
| `anti-delete` | Detect and recover messages the sender deleted for everyone |
| `anti-edit` | Capture what a message said BEFORE it was edited — before/after text, full revision history, chained edits |
| `trackers` | Reaction / receipt / presence trackers — who reacted what, who read your group message, who's online/typing |
| `serialize` | `serializeMessage` — flat bot-friendly message object with `.reply()`, `.react()`, `.download()`, quoted unwrap |
| `call-guard` | Track incoming calls, auto-reject with an optional text, per-caller counters, allowlist |
| `group-events` | Welcome/goodbye/promote/demote callbacks + per-group event log from group updates |
| `view-once` | Detect, unwrap and capture view-once messages before they disappear |
| `anti-link` | Detect (and auto-delete) group-invite/any links in groups — allowlists for chats & domains |
| `auto-read` | Auto blue-tick incoming messages — group/DM/status filters, allow/deny lists, pause/resume |
| `afk` | AFK manager — mark users away, catch @mentions & replies while away, auto welcome-back |
| `pairing-tools` | Pairing code lifecycle — validate/normalize custom codes, expiry countdown, `pairWithCode` one-call flow |
| `flood-guard` | Per-user burst detection — N messages in a window fires one alert per burst |
| `word-filter` | Keyword/regex moderation over full extracted text (captions too), auto-delete, runtime word list |
| `warn-manager` | Strike system — warns per user per chat, thresholds, pardon, persistence |
| `gatekeeper` | Ban users/chats from the bot; wrap any handler so banned traffic never reaches it |
| `level-system` | XP & levels per user, level-up events, global + per-chat leaderboards, persistence |
| `sticker-exif` | Read/write sticker pack-name/author EXIF on WebP in pure JS — no native deps, Termux-friendly |
| `economy` | Balances, transfers with fees, daily rewards with streak bonuses, leaderboard, persistence |
| `group-scheduler` | Open/close groups on a daily schedule ("night mode"), weekday filters |
| `verifier` | Captcha-gate new group members — auto challenge on join, timeout/attempt kick hooks |
| `command-stats` | Command analytics — top commands/users, hourly histogram, router middleware, persistence |
| `anti-tagall` | Catch mass-mention & invisible hidetag spam from members — threshold, exemptions, auto-delete |
| `shop` | Shop & inventory on top of the economy — stock, consumables, sell-back, gifting |
| `group-backup` | Snapshot group settings + members to JSON, diff against live, restore settings |
| `menfess` | Anonymous two-way DM relay sessions ("menfess" bot) — aliases, stop words, TTL |
| `notes` | Named snippets per chat (`#save` / `#get`) — search, rename, limits, persistence |
| `birthday` | Birthday book — today/upcoming lists, auto-congratulate once per year |
| `guess-game` | "Tebak-tebakan" engine — one round per chat, first correct wins, rewards, timeout reveal |
| `i18n` | Tiny translation layer — dictionaries, per-chat language, `{var}` interpolation |
| `fancy-text` | Unicode restyling for menus — 𝗯𝗼𝗹𝗱, 𝚖𝚘𝚗𝚘, ⓒⓘⓡⓒⓛⓔⓓ, ｆｕｌｌｗｉｄｔｈ, ꜱᴍᴀʟʟᴄᴀᴘꜱ (12 styles) |
| `join-requests` | Auto approve/reject group join requests — allow/deny lists, manual routing, pending sweep |
| `session-tools` | Session doctor — analyze/repair auth folders, portable session-string export/import, cross-backend migration |
| `shutdown` | Graceful shutdown manager — creds flushed first, ordered hooks, signal handling, run-once |
| `conversation-flow` | Multi-step wizards per user — prompts, validation, cancel words, timeouts |
| `webhook-bridge` | POST socket events to any HTTP endpoint — HMAC signatures, retries with backoff |
| `wa-links` | Build/parse wa.me, group-invite & channel URLs; extract URLs from text |
| `media-probe` | Pure-JS image format + dimensions (PNG/JPEG/GIF/WebP/BMP) — no image library |
| `media-guard` | Block media types per chat ("no stickers here") — per-chat rules, auto-delete |
| `health-monitor` | Process health — memory, event-loop lag, custom probes, threshold alerts |
| `text-extras` | Read-more collapse, progress bars, human durations/sizes, chunking, markdown escape, fuzzy distance |
| `reminders` | "!remind 10m …" — parseDuration, timers, restart-safe persistence (overdue fire late) |
| `quota` | Daily usage limits per user with tiers — midnight reset, bonuses, exhausted events |
| `tiers` | Premium/VIP memberships with expiry — extend/stack, lifetime, expiry sweeper |
| `todo` | Shared task lists per chat — assignees, ☐/☑ render, mentions, persistence |
| `url-watcher` | Poll any URL, alert on content change — extract views, SHA-256 diffing |
| `bug-shield` | Detect crash/"bug" messages — mention bombs, zalgo, invisible floods, RTL spoofing; sanitizeText |
| `crash-guard` | Survive uncaught exceptions/rejections — owner alerts, counters, safeStringify |
| `connection-watchdog` | Catch silent half-open sockets — stale alerts fire once, re-armed by activity |
| `secure-logger` | Credential-redacting pino logger + redactSensitive() for any object |
| `call-log` | Call history + per-caller stats from the `call` event — outcomes, durations, persistence |
| `always-online` | Keep the green dot lit — presence refresher with live switching and failure counters |
| `status-watcher` | Receive-side stories — per-contact filters, media type, download hook |
| `button-extras` | quickButtons, sendConfirm (yes/no), sendMenuButtons one-liners |
| `random-tools` | Dice notation, coins, weighted picks, deterministic rate/"jodoh" meters |
| `jid-extras` | phone↔jid conversions, device-insensitive compare, pretty phone printing |
| `time-tools` | Relative times ('5m ago'), clocks, next-occurrence, overnight windows, greetings |
| `group-tools` | Pure groupMetadata helpers — admins, owner, stats, participant diffs, info card |
| `msg-tools` | messageTypeOf, quoted info, timestamps, one-line message previews |
| `kv-store` | Tiny JSON key-value DB — namespaces, counters, debounced atomic saves |
| `warmup` | Account warmup — ramp daily send volume on fresh numbers (20→50→…→unlimited) |
| `disconnect-classifier` | Close errors → category + recommended action (reconnect / re-pair / stop) |
| `group-op-guard` | Stay under WhatsApp's group-action ceilings (~3 adds & 2 creates per 10 min) |
| `giveaway` | Keyword-entry raffles — fair draws, multi-winner, deadlines, status cards |
| `attendance` | Daily roll-call ("absen") — check-in times, missing list, numbered render |
| `auction` | Timed bidding ("lelang") — min increments, anti-snipe extensions, outbid alerts |
| `text-poll` | Vote-by-number polls that work in every client — tallies, bars, tie handling |
| `tictactoe` | XO duels — challenge/accept, emoji boards, win/draw/forfeit |
| `rps` | Rock-paper-scissors ("suit") — hidden picks, batu/gunting/kertas aliases, bets |
| `word-games` | scrambleWord, math-problem generator, "sambung kata" word-chain engine |
| `rental` | Per-chat bot rentals ("sewa") — trials, expiry warnings, unrented-group filter |
| `message-counter` | Daily per-user activity — top chatters, 🥇 digests, day history |
| `command-lock` | Disable commands per chat/globally + maintenance mode with owner bypass |
| `status-tools` | Status auto-styling — random font/colors for text statuses, media/audio normalization (wired into status sends) |
| `newsletter-tools` | Paced batch channel ops — follow/unfollow/mute many with per-jid verdicts |
| `emoji-tools` | Detect/count/extract/strip emoji, themed randomEmoji |
| `array-tools` | chunk, unique-by, groupBy, sortBy, distinct sample, range |
| `validate-tools` | isUrl/isEmail, id/en parseBool, clamp, ensureArray, pickFields |
| `timing-tools` | debounce, throttle, lap stopwatch, measureTime |
| `task-queue` | Bounded-concurrency async jobs with retries — mass DM safe |
| `mask-tools` | maskPhone/maskEmail, boundary-aware censorText |
| `math-eval` | SAFE !calc parser (no eval) + terbilang (Indonesian spelling) + Roman numerals |
| `chat-settings` | Per-chat feature toggles with defaults — the !settings backbone, ✅/❌ cards |
| `voucher` | Generate & redeem codes (WANNS-X7K2-9QMD) — max uses, expiry, once-per-user |
| `quiz` | Multi-question quiz sessions — running scores, skips, rankings |
| `socket-preflight` | validateSocketConfig — catch broken configs before cryptic 405s (auto-wired into makeWASocket) |
| `group-cache` | createGroupMetadataCache — TTL-LRU for `cachedGroupMetadata` with event-driven invalidation |
| `reputation` | +rep/-rep with per-giver cooldowns, leaderboards, rep cards |
| `invite-tracker` | Who invited whom — active-vs-total counts (join/leave loops don't pay), top-inviter boards |
| `level-rewards` | attachLevelRewards — auto payouts (balance/tier/custom) on level thresholds, once each |
| `marriage` | Propose/accept/divorce registry — strictly monogamous, anniversaries, couples list |
| `ai-groups` | ⚠️ EXPERIMENTAL: add/remove Meta AI in groups, createAiGroup — server-gated by Meta's per-account rollout (no flag = server rejects; nothing to verify manually) |
| `auto-reply` | Simple keyword/pattern-based auto-responder engine |
| `message-search` | Search cached/stored messages, peeling off ephemeral/view-once wrappers first |
| `message-retry-manager` | Handles WhatsApp's retry-receipt protocol for undecryptable messages |
| `scheduling` | Schedule messages/actions for later delivery |
| `business` | Business-profile & catalog helpers |
| `chat-control` | Pin, mute, archive, and mark-read/unread helpers |
| `chat-history-helpers` | Work with synced chat history payloads |
| `link-preview` | Generate link preview metadata for outgoing messages |

```js
// anti-delete + anti-edit share one MessageStore
import { MessageStore, createMessageStoreHandler, createAntiDeleteUpsertHandler, createAntiEditUpsertHandler } from 'wanns-baileys'

const store = new MessageStore()
sock.ev.on('messages.upsert', createMessageStoreHandler(store))     // register FIRST
sock.ev.on('messages.upsert', createAntiDeleteUpsertHandler(store, (info) => {
    console.log('deleted:', info.originalMessage)                   // recovered content
}))
sock.ev.on('messages.upsert', createAntiEditUpsertHandler(store, (info) => {
    console.log(`edit #${info.editCount}: "${info.beforeText}" -> "${info.afterText}"`)
    info.history // every previous revision, oldest first
}))
```

```js
// event trackers — reaction / read-receipt / presence
import { createReactionTracker, createReceiptTracker, createPresenceTracker } from 'wanns-baileys'

const reactions = createReactionTracker()
reactions.bind(sock)                       // messages.reaction
reactions.getSummary(msg.key)              // { '👍': ['628…@s.whatsapp.net'], … }
reactions.onReaction(({ user, emoji, removed }) => { /* live updates */ })

const receipts = createReceiptTracker()
receipts.bind(sock)                        // message-receipt.update + messages.update
receipts.getReceipts(msg.key)              // { delivered: [...], read: [...], played: [...] }
receipts.isReadBy(msg.key, jid)            // has THIS user read it?
receipts.onRead(({ key, user }) => { /* fires once per reader */ })

const presence = createPresenceTracker()
presence.bind(sock)                        // presence.update
await sock.presenceSubscribe(jid)          // WA only streams presence for subscribed jids
presence.isOnline(jid); presence.isTyping(jid); presence.get(jid)?.lastSeen
presence.onChange(({ user, presence }) => { /* online/offline/typing transitions */ })
```

```js
// bot toolkit — serializer, call guard, group events, view-once, anti-link
import {
    serializeMessage, createCallGuard, createGroupEventsTracker,
    createViewOnceCapture, createAntiLinkGuard
} from 'wanns-baileys'

sock.ev.on('messages.upsert', async ({ messages }) => {
    const m = serializeMessage(sock, messages[0])
    if (!m || m.fromMe) return
    if (m.body === 'ping') await m.reply('pong')      // quotes the original
    if (m.isMedia) { const buf = await m.download() } // media as Buffer
    if (m.quoted) console.log('replying to:', m.quoted.body)
})

const calls = createCallGuard({ autoReject: true, rejectMessage: 'Bots cannot pick up calls.' })
calls.bind(sock)                                      // 'call' event
calls.onRejected(call => console.log('rejected', call.from, call.isVideo ? '(video)' : ''))

const groups = createGroupEventsTracker()
groups.bind(sock)                                     // group-participants.update + groups.update
groups.onJoin(({ id, participants }) =>
    sock.sendMessage(id, { text: `Welcome ${participants.join(', ')}! 👋` }))
groups.onLeave(({ participants }) => console.log('left:', participants))

const vault = createViewOnceCapture()
vault.bind(sock)                                      // messages.upsert
vault.onViewOnce(({ msg, unwrapped }) =>
    console.log('view-once', unwrapped.mediaType, 'from', msg.key.remoteJid))

const antilink = createAntiLinkGuard({ autoDelete: true }) // invite links in groups
antilink.bind(sock)
antilink.onDetected(({ chat, sender }) =>
    sock.sendMessage(chat, { text: `@${sender.split('@')[0]} no group links here!`, mentions: [sender] }))
```

```js
// auto-read, AFK & tag-all
import { createAutoRead, createAfkManager, sendMentionAll, sendHideTag } from 'wanns-baileys'

const reader = createAutoRead({ denylist: ['boss@s.whatsapp.net'] })
reader.bind(sock)                       // blue-ticks everything else as it arrives
reader.pause(); reader.resume()

const afk = createAfkManager()
afk.bind(sock)
afk.setAfk(sender, 'lunch break 🍜')    // e.g. from an !afk command
afk.onAfkMention(({ chat, afkUser, reason, msg }) =>
    sock.sendMessage(chat, { text: `@${afkUser.split('@')[0]} is AFK: ${reason}`, mentions: [afkUser] }, { quoted: msg }))
afk.onReturn(({ user, missed }) => console.log(user, 'is back,', missed.length, 'pings while away'))

await sendMentionAll(sock, groupJid, 'Meeting in 5 minutes!') // visible @everyone
await sendHideTag(sock, groupJid, 'Silent announcement')      // pings all, clean text

// serializeMessage upgrades: m.isViewOnce, m.viewOnce, m.expiration, m.forward(jid), m.delete()
```

```js
// pairing, but comfortable — one call from socket to paired
import { pairWithCode, getPairingCodeInfo } from 'wanns-baileys'

const result = await pairWithCode(sock, '628123456789', {
    customCode: 'abcd-efgh', // optional — any format, normalized for you
    onCode: (code, formatted) => console.log('Enter on your phone:', formatted)
})
if (result.restartRequired) { /* recreate the socket — standard after pairing */ }

const info = getPairingCodeInfo(state.creds)
console.log(info.formatted, '— expires in', Math.round(info.remainingMs / 1000), 's')
// requestPairingCode itself now also accepts "abcd-efgh" / "ABCD EFGH" custom codes
```

```js
// community & moderation pack
import {
    createFloodGuard, createWordFilter, createWarnManager,
    createGatekeeper, createLevelSystem
} from 'wanns-baileys'

const flood = createFloodGuard({ maxMessages: 8, windowMs: 10_000 })
flood.bind(sock)
flood.onFlood(({ chat, user }) => warns.warn(user, { chat, reason: 'flooding' }))

const filter = createWordFilter({ words: ['judol'], patterns: [/j\s*u\s*d\s*o\s*l/i], autoDelete: true })
filter.bind(sock)
filter.onMatch(({ chat, sender }) => warns.warn(sender, { chat, reason: 'banned word' }))

const warns = createWarnManager({ threshold: 3 })
warns.onThreshold(async ({ user, chat }) => {
    await sock.groupParticipantsUpdate(chat, [user], 'remove') // three strikes, out
    warns.reset(user, chat)
})

const gate = createGatekeeper()
gate.banUser('pest@s.whatsapp.net', 'spam')
sock.ev.on('messages.upsert', gate.filter(async ({ messages }) => { /* clean traffic only */ }))

const levels = createLevelSystem()
levels.bind(sock)
levels.onLevelUp(({ user, chat, level }) =>
    sock.sendMessage(chat, { text: `🎉 @${user.split('@')[0]} reached level ${level}!`, mentions: [user] }))
levels.getLeaderboard(10, chat) // top 10 in this group
```

```js
// sticker branding, economy, night mode & join captcha
import {
    setStickerExif, readStickerExif, createEconomy,
    createGroupScheduler, createVerifier
} from 'wanns-baileys'

// pure JS — no node-webpmux, works on static AND animated webp
const branded = setStickerExif(webpBuffer, { packName: 'My Pack', author: 'me', emojis: ['🔥'] })
await sock.sendMessage(jid, { sticker: branded })
readStickerExif(branded) // { 'sticker-pack-name': 'My Pack', … }

const eco = createEconomy({ dailyAmount: [100, 200], streakBonus: 25, transferFee: 0.05 })
eco.claimDaily(user)          // { claimed, amount, streak } or { remainingMs }
eco.transfer(userA, userB, 100)

const nightMode = createGroupScheduler()
nightMode.add({ group, action: 'close', at: '22:00' })          // announcement-only
nightMode.add({ group, action: 'open',  at: '06:00' })          // everyone can chat
nightMode.start(sock)

const verifier = createVerifier({ timeoutMs: 120_000 })
verifier.bind(sock) // auto math-captcha for every new member
verifier.onChallenge(({ chat, user, question }) =>
    sock.sendMessage(chat, { text: `👋 @${user.split('@')[0]} verify: ${question}`, mentions: [user] }))
verifier.onFailed(({ chat, user }) => sock.groupParticipantsUpdate(chat, [user], 'remove'))

// router upgrade — guards & categorized menu:
router.command('kick', handler, { adminOnly: true, category: 'Admin' })
router.command('shutdown', handler, { ownerOnly: true })         // owners: [...] in createRouter
router.command('daily', handler, { cooldownMs: 60_000, category: 'Economy' })
```

```js
// analytics, anti-tagall, shop, group backup & menfess
import {
    createCommandStats, createAntiTagAllGuard, createShop,
    backupGroup, diffGroupBackup, restoreGroupSettings, createMenfessRelay
} from 'wanns-baileys'

const stats = createCommandStats()
router.use(stats.middleware())          // counts every executed command
stats.getTopCommands(5); stats.getBusiestHours()

const antiTag = createAntiTagAllGuard({ threshold: 5, autoDelete: true })
antiTag.bind(sock)
antiTag.onDetected(({ sender, hidden }) => console.log(sender, hidden ? 'hidetag!' : 'tag-all'))

const shop = createShop(eco)            // plugs into createEconomy()
shop.addItem({ id: 'potion', name: 'Potion', price: 250, consumable: true })
shop.buy(user, 'potion', 2); shop.useItem(user, 'potion')
eco.bet(user, 100, { winChance: 0.5, multiplier: 2 }) // economy upgrade

const backup = await backupGroup(sock, groupJid)      // settings + members, JSON-safe
const diff = await diffGroupBackup(sock, backup)      // joined/left/promoted/changed
await restoreGroupSettings(sock, backup)              // subject, desc, locks

const menfess = createMenfessRelay()
menfess.bind(sock)
await menfess.start(sock, sender, targetJid, 'first anonymous message')
// both sides now chat through the bot as Anon-1 / Anon-2 until "stop"

// more upgrades: verifier { challenge: 'emoji' }, level ranks (Newbie→Legend)
```

```js
// notes, birthdays, games, i18n, fancy menus & join requests
import {
    createNotes, createBirthdayManager, createGuessGame,
    createI18n, styleText, createJoinRequestManager
} from 'wanns-baileys'

const notes = createNotes()
notes.set(chat, 'rules', 'No spam. Be kind.')     // !save rules …
notes.get(chat, 'rules')?.content                 // !get rules

const bdays = createBirthdayManager()
bdays.set(user, { day: 17, month: 8, year: 2000, chat })
bdays.onBirthday(({ user, age, chat }) =>
    sock.sendMessage(chat, { text: `🎂 HBD @${user.split('@')[0]} (${age})!`, mentions: [user] }))
bdays.start()

const game = createGuessGame({ timeoutMs: 60_000 })
game.bind(sock)
game.start(chat, { answer: 'Jakarta', hint: 'capital city', reward: 500 })
game.onCorrect(({ user, reward }) => eco.add(user, reward, 'quiz win'))

const i18n = createI18n({ defaultLang: 'en' })
i18n.addLanguage('id', { greet: 'Halo {name}!' })
i18n.setChatLang(chat, 'id')                      // !lang id
i18n.tFor(chat, 'greet', { name: 'Budi' })        // 'Halo Budi!'

styleText('Bot Menu', 'bold')                     // 𝗕𝗼𝘁 𝗠𝗲𝗻𝘂

const joins = createJoinRequestManager({ denylist: [spammer] })
joins.bind(sock)                                  // live join-request events
joins.onRequest(({ user, approve, reject }) => approve())
await joins.sweep(sock, groupJid)                 // process the pending list

// CLI upgrade: npx wanns-baileys sticker in.webp out.webp --pack "My Pack" --author me
```

```js
// session & system tools
import {
    analyzeAuthState, repairAuthFolder,
    exportAuthToString, importAuthFromString, migrateFolderToAuthState,
    backupAuthStateRotating, createShutdownManager
} from 'wanns-baileys'

const report = await analyzeAuthState('./auth')     // session doctor
report.registered; report.counts; report.corrupted  // + issues list
await repairAuthFolder('./auth')                    // quarantine corrupted files

// ship the whole login as ONE string (SESSION_ID pattern) — keep it secret!
const sessionString = await exportAuthToString('./auth')
await importAuthFromString(sessionString, './auth') // on the new device

// move a folder session into ANY adapter (SQLite/Redis/Mongo/single-file):
const { state, saveCreds } = await useSQLiteAuthState('auth.db')
await migrateFolderToAuthState('./auth', state, saveCreds)

// timestamped encrypted backups that prune themselves:
await backupAuthStateRotating('./auth', './backups', { password, keep: 5 })

const shutdown = createShutdownManager({ sock, saveCreds })
shutdown.register('close db', () => db.close())
shutdown.attach()                                   // SIGINT/SIGTERM → clean exit
```

```bash
# CLI: session management without writing code
npx wanns-baileys session analyze ./auth
npx wanns-baileys session repair  ./auth
npx wanns-baileys session export  ./auth --out session.txt
npx wanns-baileys session import  session.txt ./auth-new
```

```js
// wizards, webhooks, links, media tools & health
import {
    createConversationFlow, createWebhookBridge, buildWaMeLink, parseWaLink,
    getImageDimensions, createMediaGuard, createHealthMonitor
} from 'wanns-baileys'

const flows = createConversationFlow()
flows.define('order', [
    { id: 'item', prompt: 'What would you like?' },
    { id: 'qty', prompt: 'How many?', validate: t => /^\d+$/.test(t) || 'Numbers only!' }
])
flows.bind(sock)
await flows.start(sock, chat, sender, 'order')   // e.g. from a !order command
flows.onComplete(({ answers }) => console.log(answers.qty, 'x', answers.item))

const bridge = createWebhookBridge('https://my.server/hook', { secret, retries: 2 })
bridge.bind(sock)                                // messages → your backend/n8n

buildWaMeLink('+62 812-3456-7890', 'Hello!')     // https://wa.me/62812…?text=Hello%21
parseWaLink('https://chat.whatsapp.com/AbC…')    // { type: 'group-invite', code }

getImageDimensions(buffer)                       // { format: 'png', width, height }

const media = createMediaGuard({ blocked: ['sticker'], autoDelete: true })
media.bind(sock)                                 // "no stickers in this group"

const health = createHealthMonitor({ thresholds: { heapUsedMb: 400, eventLoopLagMs: 200 } })
health.onAlert(({ metric, value }) => sock.sendMessage(owner, { text: `⚠️ ${metric}: ${value}` }))
health.start()
```

```js
// security & stability hardening
import {
    createBugShield, sanitizeText, installCrashGuard,
    createConnectionWatchdog, createSecureLogger,
    exportAuthToString, checkAuthPermissions, hardenAuthFolder, autoReconnect
} from 'wanns-baileys'

const shield = createBugShield({ autoDelete: true })   // anti bug-message
shield.bind(sock)
shield.onDetected(({ sender, reasons }) => gate.banUser(sender, reasons.join(',')))
sanitizeText(dirtyText)                                // strips RTLO/zalgo/invisible flood

installCrashGuard({                                     // bot never dies silently
    onError: ({ type, error }) =>
        sock.sendMessage(owner, { text: `💥 ${type}: ${error?.message}` }).catch(() => {})
})

const watchdog = createConnectionWatchdog({ staleMs: 5 * 60_000 })
watchdog.bind(sock)
watchdog.onStale(() => sock.end(new Error('stale connection'))) // reconnect takes over
watchdog.start()

const logger = createSecureLogger()                     // creds NEVER hit the logs
const sock2 = makeWASocket({ auth: state, logger })

await exportAuthToString('./auth', { password })        // AES-encrypted WANNSSESS2 export
await hardenAuthFolder('./auth')                        // chmod 700/600 everything
await checkAuthPermissions('./auth')                    // audit for leaks

autoReconnect(factory, {
    onGiveUp: ({ reason, attempts }) => notifyOwner(reason) // new: give-up hook + getStatus()
})
```

```js
// WANNS AI cards from markdown, call tools, presence & button shortcuts
import { AIRich, createCallLog, createCallGuard, createAlwaysOnline,
         createStatusWatcher, quickButtons, sendConfirm } from 'wanns-baileys'

// whole AI card from one markdown string (headings/code/tables auto-detected)
await AIRich.fromMarkdown('# Report\n\n```js\nconst x = 1\n```\n\n| A | B |\n|---|---|\n| 1 | 2 |', sock).send(jid)
new AIRich(sock).addChecklist([{ text: 'done item', done: true }, 'open item'])
    .addKeyValue({ Name: 'WANNS', Version: '2.4.5' })
    .addProgressBar('Download', 70, 100)

const callLog = createCallLog()               // who called, outcome, duration
callLog.bind(sock)
createCallGuard({                              // quiet hours + hard blocks
    autoReject: true,
    schedule: { from: '22:00', to: '06:00' },  // reject only at night
    denylist: [spammer]                        // …except these: always
}).bind(sock)

createAlwaysOnline(sock).start()               // green dot stays lit
const statuses = createStatusWatcher()         // save contacts' stories
statuses.bind(sock)
statuses.onStatus(({ download }) => download())

await sendConfirm(sock, jid, 'Delete all data?')            // confirm_yes/confirm_no
await sendButtons(sock, jid, { text: 'Pick', buttons: quickButtons(['A', 'B']) })

// the 50+ round — grab-bag of daily drivers:
import { rollDice, matchScore, phoneToJid, prettyPhone, formatRelative,
         getGroupAdmins, diffParticipants, summarizeMessage, createKVStore } from 'wanns-baileys'

rollDice('2d6+3')                       // { rolls: [4, 2], total: 9 }
matchScore('budi', 'ani')               // 0-100, deterministic "jodoh meter"
phoneToJid('+62 812-3456-7890')         // 6281234567890@s.whatsapp.net
prettyPhone('6281234567890')            // +62 812-3456-7890
formatRelative(msg.timestamp)           // '5m ago'
getGroupAdmins(await sock.groupMetadata(jid))
summarizeMessage(msg)                   // '📷 image: caption…' for logs

const db = await createKVStore('./botdata.json')   // tiny persistent DB
db.namespace('settings').set(jid, { welcome: true })

// anti-ban pack — fresh numbers, sane group ops, smart reconnects
import { createAccountWarmup, classifyDisconnect, explainDisconnect,
         createGroupOpGuard, randomGaussian, createPresenceCycler } from 'wanns-baileys'

const warmup = createAccountWarmup({ startedAt: firstLoginTs })
if (warmup.trySend().allowed) await sock.sendMessage(jid, content)
// day 1 → 20 msgs, then 50, 100, 200, 400, 800, unlimited

sock.ev.on('connection.update', ({ connection, lastDisconnect }) => {
    if (connection !== 'close') return
    const verdict = classifyDisconnect(lastDisconnect)
    verdict.shouldReconnect ? restart() : console.log(explainDisconnect(lastDisconnect))
    // 🔑 [auth 401] Logged out from the phone — the session is gone, pair again.
})

const ops = createGroupOpGuard()
const safe = ops.wrap(sock)                        // guarded automatically
await safe.groupParticipantsUpdate(jid, users, 'add') // throws past ~3 adds/10min

await sleep(randomGaussian(2000, 600, { clamp: [500, 5000] })) // human-like pauses
createPresenceCycler(sock, { chats: [ownerJid] }).start()      // opt-in activity

// community events — giveaways, roll-calls, auctions, polls
import { createGiveaway, createAttendance, createAuction, createTextPoll } from 'wanns-baileys'

const giveaway = createGiveaway({ keyword: 'join' })
giveaway.bind(sock)
giveaway.start(chat, { prize: 'Voucher 50k', durationMs: 3600_000, winners: 2 })
giveaway.onEnd(({ winners }) => announce(winners))       // fair, injectable RNG

const absen = createAttendance()
absen.bind(sock)
absen.open(chat, { title: 'Absen Pagi 🌞' })             // members type "absen"
await sock.sendMessage(chat, { text: absen.render(chat), mentions: absen.getMentions(chat) })

const auction = createAuction()
auction.start(chat, { item: 'Akun ML', startBid: 50_000, minIncrement: 5_000, antiSnipeMs: 30_000 })
auction.bid(chat, user, 60_000)                          // → accepted / too-low / already-leading
auction.onEnd(({ winner, amount }) => sold(winner, amount))

const polls = createTextPoll()
polls.bind(sock)                                          // votes = plain "1".."9" replies
polls.start(chat, { question: 'Mabar jam?', options: ['19:00', '20:00', '21:00'] })
polls.onEnd(({ results }) => sock.sendMessage(chat, { text: polls.formatResults(results) }))

// games pack — duels & word games
import { createTicTacToe, createRPS, scrambleWord, generateMathProblem,
         createWordChain } from 'wanns-baileys'

const ttt = createTicTacToe()
ttt.challenge(chat, challenger, opponent); ttt.accept(chat, opponent)
ttt.play(chat, user, 5)                      // squares 1-9 → next/win/draw
await sock.sendMessage(chat, { text: ttt.render(chat) }) // ❌⭕3️⃣ emoji board

const suit = createRPS()
suit.challenge(chat, a, b, { bet: 5000 }); suit.accept(chat, b)
suit.pick(chat, a, 'batu')                   // picks stay hidden
suit.onResult(({ winner, loser, bet }) => eco.transfer(loser, winner, bet))

game.start(chat, { answer: scrambleWord('bandung') })       // acak kata
game.start(chat, generateMathProblem('hard'))               // 17 × 8 - 24 = ?
const chain = createWordChain()                             // sambung kata
chain.start(chat, { firstWord: 'makan' })
await chain.play(chat, user, 'nasi')         // ✅ n… — scores by word length

eco.rob(thief, victim)  // upgrade: wallet heists — bank money stays safe

// bot-business ops — rentals, activity, locks
import { createRentalManager, createMessageCounter, createCommandLock } from 'wanns-baileys'

const rental = createRentalManager()
rental.add(groupJid, { days: 30 }); rental.startTrial(newGroup, { days: 3 })
sock.ev.on('messages.upsert', rental.filter(handler)) // unrented groups ignored
rental.onExpiring(({ chat }) => remind(chat))          // renewal reminder (24h before)
rental.onExpire(({ chat }) => sock.groupLeave(chat))
rental.startSweeper()

const counter = createMessageCounter()
counter.bind(sock)
counter.renderDigest(chat)   // 🥇 @user — 42 pesan (daily top chatters)

const locks = createCommandLock({ owners: [ownerJid] })
locks.lock(chat, 'slot'); locks.lockGlobal('rob')
router.use(locks.middleware())                         // blocked before handlers run
locks.setMaintenance(true, { message: '🛠️ maintenance' }) // owners still pass

// MEGA UPGRADE SWEEP (36 upgrades across the whole toolkit):
// kv TTL + getOrSet · notes pinning 📌 · todo priorities 🔴🟡 · recurring
// reminders · warns.renderList · eco.getEconomyStats + eco.work() jobs ·
// shop.renderCatalog · tiers.extendAll (downtime compensation) ·
// quota.renderStatus · level PRESTIGE ⭐ · guess.revealHint('j_k__t_') ·
// ttt win/loss records + leaderboard · RPS best-of-3 series · giveaway
// canJoin requirements · attendance streaks · auction buy-now price ·
// poll renderLive bars · menfess.listActiveSessions · afk.renderAfkList ·
// shield.getReasonStats · gate.banMany (raid cleanup) · warmup.skip ·
// opGuard.waitAndAssert · watchdog autoRestart · health sparklines ▁▅▃█ ·
// router hidden commands + ctx.quotedText · i18n.addLanguages ·
// stats.renderTop · m.timestampMs · tag-all chunking for huge groups ·
// isForwarded/getForwardInfo · rental.renderList
//
// HUNT/UPDATE ROUND (fork ecosystem fully swept — 0 gaps left):
// WA version → live 2.3000.1048680055 · flow backWords ('kembali' rewinds) ·
// url-watcher ETag/304 conditional polling · health probe timeouts ·
// crash-guard alert throttling · webhook body caps · wa.me/message/CODE
// business links · formatParticipantChanges(➕➖⬆️⬇️) · boxText('MENU') ╔═╗ ·
// reminders.renderList

// conversation-flow upgrade: choice steps
flows.define('order', [{ id: 'size', prompt: 'Size:', choices: ['S', 'M', 'L'] }])
// renders numbered options; answers accepted by text OR number
// CLI: npx wanns-baileys wa → package + baked WA Web version

// +18 upgrades: titleCase/slugify/generateId, shop.updateItem, notes.exportText,
// warns.getTop, stats.getTopChats, i18n.formatNumber/formatDate, levels.getRankPosition,
// quota.getAllUsage, tiers.renderStatus, birthday.renderUpcoming, guess.startNumberGame,
// flood.getTopFlooders, gate.listBans, health.setThreshold, watchdog.getReport

// 10 more upgrades: temp bans gate.banUser(jid, r, { expiresInMs }),
// flood autoMuteMs + isMuted, eco.applyInterest(0.01) bank interest,
// shop item maxPerUser, warns.decay(30d), levels.setMultiplier(2) XP events,
// quota.setLimit live, tiers.getExpiring(3d) renewal crons,
// reminders.snooze(id, 10m), todos.setDue + getOverdue (⏰ in render)
```

#### Group / community metadata helpers (v2.4.7)

```js
import { extractLIDPNPairs, GROUP_PARTICIPANTS_CHUNK_SIZE } from 'wanns-baileys'

// Every LID↔PN pair a metadata fetch already carries — normalized + deduplicated.
// The socket now stores these automatically on groupMetadata() /
// groupFetchAllParticipating() / communityMetadata(), so getLIDForPN() and
// getPNForLID() resolve group members without extra USync round-trips.
const meta = await sock.groupMetadata(jid)
extractLIDPNPairs(meta)        // [{ lid: '999@lid', pn: '628…@s.whatsapp.net' }, …]
extractLIDPNPairs(cachedMeta)  // pure + null-safe — works on cached metadata too

GROUP_PARTICIPANTS_CHUNK_SIZE  // 25 — participant arrays are chunked at this size
```

> Also fixed in v2.4.7: group metadata no longer returns `NaN` for `subjectTime` /
> `creation` / `descTime` when WhatsApp omits them (they're `undefined` now, so they
> don't persist as `null`), and community metadata finally reports `addressingMode`
> and honours the server's `size` attribute — both previously diverged from the
> group parser on identical payloads.

#### `w:gp2` group-notification helpers (v2.4.7)

```js
import { resolveNotificationActors, extractNotificationLIDPNPairs,
         parseNotificationParticipants } from 'wanns-baileys'

// Who did it, and to whom — resolved as a UNIT. Before v2.4.7 the two halves fell
// back independently, so a join request could report the requester's LID next to
// the admin's phone number.
const actors = resolveNotificationActors(notificationNode, actionChild)
// { actingLid, actingPn, actingUsername, affectedLid, affectedPn, affectedIsActor }

parseNotificationParticipants(actionChild)        // messageStubParameters shape
extractNotificationLIDPNPairs(node, actionChild)  // [{ lid, pn }] — consistent pairs only

// The socket now stores those pairs automatically on every group notification, and a
// stale pair can be dropped after a change-number event:
await sock.signalRepository.lidMapping.removeMapping('628…@s.whatsapp.net')
```

#### Media-connection and device-list helpers (v2.4.7)

```js
import { parseMediaConnNode, isMediaConnExpired, MEDIA_CONN_DEFAULT_TTL,
         dedupeJidsByUser, dedupeDeviceList } from 'wanns-baileys'

// The <media_conn> handshake, parsed safely. Before v2.4.7 a missing/non-numeric
// `ttl` became NaN, and `now - fetchDate > NaN * 1000` is false forever — so the
// upload connection was never refreshed again and kept using a stale auth token.
const media = parseMediaConnNode(mediaConnNode)
// { hosts, auth, ttl, fetchDate } — ttl is never NaN; falls back to 300s
MEDIA_CONN_DEFAULT_TTL              // 300

isMediaConnExpired(media)           // false while fresh
isMediaConnExpired({ ttl: NaN })    // true — anything unusable counts as expired

// Order-preserving dedup, as used by the USync device fan-out. Messaging your own
// number used to enumerate (and encrypt to) every one of your devices twice.
dedupeJidsByUser([{ jid: a }, { jid: a }, { jid: b }])   // → [a, b]
dedupeDeviceList(devices)  // keyed on user + device index; `u@s` === `u:0@s`
```

#### Reading USync errors (v2.4.7)

```js
import { extractUSyncErrors, hasUSyncQueryError, USyncQuery, USyncUser } from 'wanns-baileys'

const result = await sock.executeUSyncQuery(
    new USyncQuery().withContactProtocol().withUsers(
        new USyncUser().withPhone('+628111'),
        new USyncUser().withPhone('+628222')
    )
)

// Before v2.4.7 a refused query ("rate overlimit") parsed into an empty list that looked
// exactly like "nobody matched". The server's errors are now on the result.
result.errors            // [{ code: 479, text: 'rate overlimit' }]
hasUSyncQueryError(result.errors)   // true -> the whole query failed, don't trust `list`
                                    // false -> only individual users failed (entries carry `jid`)

extractUSyncErrors(rawIqNode)       // same extraction, standalone and null-safe

// onWhatsApp() now also accepts @lid arguments for real (they used to be dropped
// silently), always resolves to an array, and tells you which LID an entry came from:
await sock.onWhatsApp('628111@s.whatsapp.net', '99887766@lid')
// [{ jid: '628111@s.whatsapp.net', exists: true, lid: undefined }, …]
```

#### Store dictionary and participant-list helpers (v2.4.7)

```js
import { makeOrderedDictionary } from 'wanns-baileys'
import { upsertParticipants, removeParticipants, setParticipantsAdmin } from 'wanns-baileys'

// Restoring a snapshot used to replace the array but not the id index, so every
// message came back invisible to get() and re-upserting one appended a duplicate.
const dict = makeOrderedDictionary(m => m.key.id)
dict.fromJSON(JSON.parse(snapshot))
dict.get('AAA')          // the restored message, not undefined
dict.update(newVersion)  // true when it really updated (was always false)
dict.has('AAA')          // new in v2.4.7
dict.size()              // new in v2.4.7

// Participant-list mutations: order-preserving, non-mutating, and matching a person
// by `id` OR `phoneNumber` (the two halves of a LID<->PN pair are the same member).
upsertParticipants(list, [{ id: '2@lid' }])        // merges, never duplicates
setParticipantsAdmin(list, [{ id: '1@lid' }], null) // demote -> admin: null (not false)
removeParticipants(list, [{ phoneNumber: '628…@s.whatsapp.net' }])
```

#### Labels repository round-trip (v2.4.7)

```js
import { ObjectRepository } from 'wanns-baileys'

// toJSON() emits an array, but the constructor only understood a { id: entity } map, so
// feeding a snapshot back in produced entries keyed '0', '1', … and lost every label.
const labels = new ObjectRepository({ L1: { id: 'L1', name: 'Work' } })
const restored = ObjectRepository.fromJSON(JSON.parse(JSON.stringify(labels)))
restored.findById('L1')   // { id: 'L1', name: 'Work' } — not undefined
restored.hasId('L1')      // new in v2.4.7
restored.load([{ id: 'L2', name: 'Family' }])
restored.clear()
```

#### Chat-list classification (v2.4.7)

```js
import { classifyMessage, isMissedCallMessage, MISSED_CALL_STUB_TYPES } from 'wanns-baileys'

// Before v2.4.7 a missed call could never be a "real" message — the content check was
// ANDed over the stub-type allowances too — so it never moved its chat up the list.
classifyMessage(missedCallStub, meId)
// { isReal: true, isStub: true, isMissedCall: true, isAboutMe: false,
//   incrementsUnread: false, contentType: undefined }

classifyMessage(textMessage, meId).contentType   // 'conversation'
isMissedCallMessage(msg)                         // true for the 4 missed-call stubs
MISSED_CALL_STUB_TYPES                           // the table itself
```

#### Reading `messageStubParameters` (v2.4.7)

```js
import { parseStubParticipant, stubParticipantIdentities, stubParticipantsInclude } from 'wanns-baileys'

// Stub parameters are ragged: a JSON pair for some stub types, a plain jid for others.
parseStubParticipant('{"lid":"1@lid","pn":"2@s.whatsapp.net"}')  // { lid, pn }
parseStubParticipant('628111@s.whatsapp.net')                    // { phoneNumber }
stubParticipantIdentities(p)   // every jid this person can be addressed by

// "Is one of these people me?" — checks lid AND pn, so a LID-addressed group matches.
stubParticipantsInclude(msg.messageStubParameters, sock.user.id, sock.user.lid)
```

> Invite-link join requests now emit `group.join-request` as well (only the
> admin-add variant used to), so `createJoinRequestManager()` sees them.

```js
// the 20+ round: text tools, reminders, quotas, tiers, todos & more
import {
    readMore, progressBar, formatDuration, chunkText, similarity,
    parseDuration, createReminderManager, createQuotaManager,
    createTierManager, createTodoList, createUrlWatcher, getZodiac
} from 'wanns-baileys'

readMore('Promo!', 'long details…')       // collapses behind "Read more"
progressBar(70, 100)                      // ███████░░░ 70%
formatDuration(93_784_000)                // 1d 2h 3m
chunkText(longText, 4000)                 // split for WA limits

const reminders = createReminderManager()
reminders.add({ chat, user, text: 'angkat gorengan', inMs: parseDuration('10m') })
reminders.onDue(({ chat, user, text }) =>
    sock.sendMessage(chat, { text: `⏰ @${user.split('@')[0]} ${text}`, mentions: [user] }))

const tiers = createTierManager()
tiers.setTier(user, 'premium', { days: 30 })
const quota = createQuotaManager({ defaultLimit: 20, limits: { premium: 200 } })
if (!quota.consume(sender, tiers.getTier(sender)?.name).allowed) return ctx.reply('Jatah habis!')

const todos = createTodoList()
todos.add(chat, 'bayar wifi', { assignee: member })
await sock.sendMessage(chat, { text: todos.render(chat), mentions: todos.mentions(chat) })

const watcher = createUrlWatcher('https://api.example.com/status.json', { intervalMs: 60_000 })
watcher.onChange(({ body }) => sock.sendMessage(owner, { text: `🔔 changed: ${body.slice(0, 300)}` }))
watcher.start()

// upgrades: eco.deposit/withdraw + eco.getRank, levels.renderRankCard,
// router { onUnknownCommand } + router.remove, i18n.tn plurals,
// styleText 'negativeSquared'/'boldFraktur', getZodiac(17, 8) → 'Leo',
// guess-game near-miss hints, formatHealthSnapshot for owner DMs
```
| `stickerpack` | Build and send sticker packs (including animated/Lottie) |
| `templates` | Legacy WhatsApp Business template message helpers |
| `vcard` | Build vCard (contact card) payloads |
| `status` | Post and manage WhatsApp Status updates |
| `event-buffer` | Buffers/coalesces high-volume socket events for heavier bots |
| `doctor` | `checkEnvironment()` / `printEnvironmentReport()` — one-call environment diagnostics |

Every module above ships a matching `.d.ts`, so your editor will show full hover-docs regardless of which ones you import.

</details>

<div align="right"><sub><a href="#top">⬆ back to top</a></sub></div>

---

## 🛠 Recommended Environment

| Requirement | Version |
|---|---|
| Node.js | 20+ |
| Module system | ESM |
| WhatsApp | Latest Multi Device |

---

## 📘 TypeScript Support

Full `.d.ts`: every shipped `.js` file has a matching TypeScript declaration (guarded by `tests/types-parity.test.js`), and the whole package verifies at zero errors under `tsc --strict`. `import { ... } from 'wanns-baileys'` resolves with no `@types/` package needed (beyond the standard `@types/node` every Node TS project has): `makeWASocket` incl. the username methods and `USERNAME_*` constants, all `Types/*` definitions, `WAProto`, stores, `Utils/*`, the message builders (`Button`, `Poll`, `Carousel`, `AIRich`, `A2UI`, … with Bloks node types), the Bot Framework (`Bot`, `Context`, …), and the VoIP client (`VoipClient`, `ActiveCall`, …). Complex wire payloads are typed as loose records where WhatsApp publishes no schema.

---

## ❓ FAQ & Troubleshooting

<details>
<summary><b>Connection keeps dropping / reconnect loop</b></summary>
<br/>

Check the `lastDisconnect.error` field on `connection.update`. If the status code is `401` (loggedOut), the session really is invalid and needs a fresh QR scan — do not auto-reconnect in that state. For other codes (`428`, `440`, etc.), reconnecting with backoff is usually enough.

</details>

<details>
<summary><b>QR not showing / not scanning</b></summary>
<br/>

Upstream Baileys removed `printQRInTerminal`, but in this package the option **works again** — the QR is drawn automatically by the built-in renderer (vendored [qrcodegen](https://github.com/nayuki/QR-Code-generator), zero extra dependencies). You can also render manually from the `qr` event with `renderQRToTerminal(qr)` / `qrToSVG(qr)` / `qrToPNG(qr)` / `qrToMatrix(qr)`. If the QR shows but linking fails, the WA Web version (`version` in `makeWASocket`) is usually stale; fetch the latest via `fetchBestWaVersion()` (chain: WA's sw.js → baileys forks → fallback). The `Bot` framework already does this automatically on every `start()`/reconnect (disable with `versionCheck: false`). QR looks "inverted" on a light terminal theme? Use `renderQRToTerminal(qr, { inverted: true })`.

</details>

<details>
<summary><b>"Bad MAC" errors / messages fail to decrypt</b></summary>
<br/>

This usually happens when the auth state folder is corrupted or the session is used by more than one process at the same time. Make sure only one instance writes to a given auth state folder, and consider `pruneStaleAuthFiles()` to clean up stale sender keys periodically.

</details>

<details>
<summary><b>Memory keeps growing on long-running bots</b></summary>
<br/>

With `makeInMemoryStore()`, the chat/message/contact caches grow without bound. For long-running bots, consider switching to one of the `makePersistentStore()` backends (SQLite/Redis/etc.) and use `event-buffer` to absorb event bursts under high traffic.

</details>

<details>
<summary><b>Voice call fails to connect</b></summary>
<br/>

This feature is still experimental and needs the `@roamhq/wrtc` peer dependency — make sure it's installed and that its native bindings support your platform. Check the `call.on('ended', reason => ...)` event for details on why it failed.

</details>

<details>
<summary><b>Media features failing / "ffmpeg not found"</b></summary>
<br/>

Run `printEnvironmentReport()` (see [doctor](#check-your-environment-doctor)) — it shows exactly what's missing. For ffmpeg: on servers `npm i ffmpeg-static`, on Termux `pkg install ffmpeg` — both auto-detected with zero config.

</details>

<details>
<summary><b>Startup banner is in the way / want it off</b></summary>
<br/>

The banner is part of this package's identity and shows once per process. It's designed to stay out of your way: on an interactive terminal you get the full banner; in CI/pm2/piped logs it collapses to a single plain-text line (no ANSI codes, so JSON/structured log pipelines are never corrupted). `NO_COLOR=1` removes the styling but not the banner.

Since v2.4.3 the banner doubles as a startup health card — gradient wordmark plus a framed info panel showing the package version, the baked WA Web client version, node/platform/pid, and a rotating daily tagline:

```text
       ██╗   █████╗   ██████╗
       ██║  ██╔══██╗  ██╔══██╗
       ██║  ███████║  ██████╔╝
  ██   ██║  ██╔══██║  ██╔═══╝
  ╚█████╔╝  ██║  ██║  ██║
   ╚════╝   ╚═╝  ╚═╝  ╚═╝

  ╭────────────────────────────────────────────────────────────────╮
  │ wanns-baileys v2.4.5   ● typed · extended · battle-tested    │
  │ WA Web 2.3000.1048680055   node 20.20.2 · linux/x64 · pid 1472 │
  │ ⚡ anti-ban toolkit   🛡️ bug-shield   📚 github.com/Plenger-final/wanns-baileys │
  ╰────────────────────────────────────────────────────────────────╯
   "from Termux to production."  — Made with 🍃 by Wanns
```

</details>

---

## 🤝 Contributing

Contributions are welcome — especially bug fixes, documentation, and enhancements to `MessageBuilder` / `AIRich`.

1. Fork this repo and branch off `main` (`feat/feature-name` or `fix/bug-name`)
2. Keep changes ESM-only and add/update the matching `.d.ts` declarations
3. Test your change against at least one auth state path + one store backend before opening a PR
4. Open a Pull Request with a short description: what changed and why

For bug reports, include your Node.js version, reproduction steps, and the relevant `lastDisconnect.error` log snippet.

---

## 🙏 Credits

Built on the shoulders of the open-source WhatsApp community.

Full details and license terms per component: see [`NOTICE.md`](./NOTICE.md).

---

## 👑 Maintainer

<table>
<tr>
<td width="180" align="center">
<img src="https://github.com/Plenger-final.png" width="160" alt="Wanns avatar" style="border-radius:50%"/>
</td>
<td>

**Wanns**

- GitHub: [github.com/Plenger-final](https://github.com/Plenger-final)
- Package: [`wanns-baileys`](https://www.npmjs.com/package/wanns-baileys)
- ✦ Maintains this fork solo — issues & PRs are welcome and reviewed personally.

</td>
</tr>
</table>

---

## ⚠️ Disclaimer

This project is an independent fork.
Use responsibly and follow WhatsApp Terms of Service.

---

## 📝 Patch Notes Archive

> The full, current release history lives in **[CHANGELOG.md](./CHANGELOG.md)**. Older per-version summaries are archived below.

<details>
<summary><b>📜 Show archived patch notes (v2.4.3 → V4)</b></summary>

<br/>

### v2.4.2 & v2.4.3

> Summary — full details in [CHANGELOG.md](./CHANGELOG.md).

### v2.4.3

- **Community events**: `createGiveaway` (fair raffles), `createAttendance` (absen + streaks), `createAuction` (anti-snipe + buy-now), `createTextPoll` (vote-by-number, works in every client).
- **Games**: `createTicTacToe` (records + leaderboard), `createRPS` (suit, hidden picks, best-of-N), `createWordChain` (sambung kata), `scrambleWord`, `generateMathProblem`.
- **Bot business**: `createRentalManager` (sewa per chat, one-trial-ever, unrented-group filter), `createMessageCounter` (daily digests 🥇), `createCommandLock` (+maintenance mode with owner bypass).
- **Fork ecosystem fully swept** (upstream rc14 + 8 living forks downloaded & API-diffed — zero gaps left): took `status-tools` (auto-styled text statuses, wired into status sends) and `newsletter-tools` (paced batch follow/unfollow/mute).
- **AI groups (experimental, server-gated)**: `addAiBotToGroup` / `createAiGroup` — Meta AI in groups; acceptance depends on Meta's per-account rollout, rejections surface as status codes.
- **36-upgrade sweep** across the whole toolkit (kv TTL, notes pinning, recurring reminders, economy `work()`/`rob()`/interest, level PRESTIGE ⭐, `revealHint`, temp bans, `waitAndAssert`, watchdog `autoRestart`, sparklines, `ctx.quotedText`, ETag polling, alert throttling, `boxText`, and more) + 9 follow-ups.
- **Startup banner v2**: framed health card (package + WA Web version, node/platform/pid, daily tagline).
- WA Web version → live `2.3000.1048680055`; CLI gained `wa` and `sticker` insights.

### v2.4.2

- **Anti-ban pack**: `createAccountWarmup` (20→50→…→unlimited daily ramps), `classifyDisconnect`/`explainDisconnect`, `createGroupOpGuard` (~3 adds/2 creates per 10 min + `wrap(sock)`), Gaussian jitter, opt-in `createPresenceCycler`.
- **Security & stability**: `createBugShield` (mention bombs/zalgo/RTLO + `sanitizeText`), `createSecureLogger` + `redactSensitive`, encrypted `WANNSSESS2` session strings, `hardenAuthFolder`, `installCrashGuard` + `safeStringify`, `createConnectionWatchdog`.
- **Session & DB tools**: `analyzeAuthState` (session doctor), `repairAuthFolder`, portable session export/import strings, `migrateFolderToAuthState`, `backupAuthStateRotating`, `createShutdownManager`, CLI `session` command.
- **Moderation & community**: flood/word-filter/warns/gatekeeper/levels/quota/tiers/economy+shop/command-stats/anti-tagall/verifier/join-requests/group-backup/menfess.
- **Bot toolkit**: `serializeMessage`, call guard + call log, group events, view-once toolkit, anti-link, anti-delete/edit, reaction/receipt/presence trackers, auto-read, AFK, tag-all/hidetag, pairing tools (`pairWithCode`), router guards, conversation flows, webhook bridge, health monitor, i18n, fancy-text, 140+ utility modules in total.
- **Pure-JS sticker EXIF** — `node-webpmux` dependency removed; sticker branding works on Termux; CLI `sticker` command.

---

### v2.1.0

> Summary — full details in [CHANGELOG.md](./CHANGELOG.md).

- **Built-in QR, zero dependencies**: vendored [qrcodegen](https://github.com/nayuki/QR-Code-generator) (Nayuki, MIT) + our own renderer — `renderQRToTerminal` (half-block `▀▄█`, half the height of classic renderers), `qrToSVG`, `qrToPNG` (hand-rolled PNG encoder on top of Node's zlib), `qrToMatrix`, `formatPairingCode`. Round-trip verified against an independent decoder (jsQR) in CI.
- **`printQRInTerminal` works again** — not a deprecation warning: the QR is drawn automatically in the terminal on every `connection.update`.
- **Fixed the VoIP `VoipStatsTracker is not a constructor` spam**: the Metro shim in `worker-bootstrap.js` shifted `module`/`exports` by one position (5th argument `null`). Fixed for both FB Comet bundle export conventions (flag-66 → arg 6, flag-98 → arg 7, 124/204 modules) + an `?.exports` fallback in the loader. Verified the real worker boots all the way to `worker_ready` with no shim errors.
- **Auto WA-version in the `Bot` framework**: every `start()`/reconnect resolves a fresh version via `fetchBestWaVersion()` (WA's sw.js → forks → fallback), preventing 405 pairing failures caused by stale versions. Opt-out: `versionCheck: false` or pin `socketConfig.version`.
- **Genuinely full `.d.ts`**: every shipped `.js` has a matching declaration file, enforced by a parity test + a `tsc --strict` harness in CI.
- **CI + release automation**: GitHub Actions (tests on Node 20/22, type-check, pack sanity) and a provenance-attested publish workflow triggered by `v*` tags.

---

### V6

- Fixed a `package.json` typo: the version field was mistakenly left at `1.0.1` instead of `2.0.1` after the V5 release — corrected to `2.0.1` so the published package version matches the intended release.
- Expanded README documentation, especially around `lib/Builders/`:
  - Added the new [📁 Builders Folder Map](#-builders-folder-map-libbuilders) section — a per-file breakdown of everything under `lib/Builders/` (`shared.js`, `Button.js`, `ButtonV2.js`, `ButtonV3.js`, `Carousel.js`, `Poll.js`, `AIRich.js`, `A2UI.js`, `WannsBaileys.js`, `index.js`), what each file exports, and what it's for — previously `A2UI` and `WannsBaileys` in particular had no usage documentation at all.
  - Added a usage example for the `WannsBaileys` unified builder hub.
- Redesigned `postinstall-banner.js`: cleaner box layout with a divider separating the title block from a small info section (Node version + docs link), a 256-color palette instead of basic ANSI colors, and a plain-text fallback when stdout isn't a TTY or `NO_COLOR` is set (CI logs, piped output) instead of forcing a box that may render misaligned.

---

### V5

- Added [Username Management](#-username-management): `checkUsername`, `checkUsernameMulti`, `setUsername`, `deleteUsername`, `getMyUsername`, `setUsernamePin`, `findUserByUsername`, `fetchContactUsernames`, `getUsernameRecommendations`, layered onto the existing `USyncUsernameProtocol` support.
- Added the [Bot Framework](#-bot-framework) (`Bot`, `Context`, `SessionManager`, `StatsManager`, `MediaManager`, `SQLiteStore`). Adapted on the way in:
  - `SQLiteStore`/`StatsManager` construction moved behind an async `.create()` factory so `better-sqlite3` stays a lazily-loaded optional peer dep instead of a hard top-level import that would crash the Framework module for anyone without it installed.
  - `MediaManager`'s sticker/voice-note conversion now reuses this fork's existing lazy `fluent-ffmpeg` loader (see `Utils/MessageBuilder.js`) instead of adding `ffmpeg-static` + a second ffmpeg dependency; sticker EXIF metadata is written by the built-in pure-JS muxer (`sticker-exif`) — no extra package needed.
  - `Bot`'s default logger now falls back to this fork's own pino instance instead of a silent no-op stub.
- No `.d.ts` files were written for the new Framework module yet — see the note in that section.
- Bumped to `1.0.1`.

---

### V4

- Kept the existing Wanns custom MessageBuilder classes and AIRich implementation intact.
- Added `whatsapp-rust-bridge@0.5.5` as a runtime dependency. The library already dynamically imports this module for LT Hash/app-state and crypto helpers; declaring it prevents accidental missing-module fallbacks in normal installations.
- Existing guarded fallbacks for platforms where the native bridge cannot load remain in place.
- ESM-only package metadata is preserved; no CommonJS build is included.

</details>

<div align="right"><sub><a href="#top">⬆ back to top</a></sub></div>

---

<div align="center">

Made with 🍃 by **WANNS**

Thanks for visiting, bye 👋

<a href="#top">⬆️ Back to top</a>

</div>


---

# 🇮🇩 2. Dokumentasi Lengkap Bahasa Indonesia

## ✨ Fitur Tambahan Eksklusif v1.2.0 (Bahasa Indonesia)
- **Custom Pairing Code Bawaan:** Masukkan `phoneNumber` dan `pairingCode` (8 karakter) langsung di konfigurasi `makeWASocket` atau `makeWASocketAuto`.
- **Album Media Grid (`sock.sendAlbum`):** Mengirim 2–10 foto/video sekaligus dalam satu gelembung album.
- **Pemutar Audio Lengkap (`sock.sendRichAudio`):** Mengirim lagu/audio beserta cover besar, judul, dan nama artis.
- **Stiker Animasi Lottie (`sock.sendLottieSticker`):** Mengirim stiker animasi vektor JSON/TGS asli WhatsApp (`isLottie: true`).
- **Lokasi Live Real-Time (`sock.sendLiveLocation`):** Mengirim titik lokasi bergerak dengan durasi aktif.
- **Persetujuan Grup Massal (`sock.groupRequestParticipantsUpdateAll`):** Terima atau tolak semua permintaan masuk grup sekaligus.

```javascript
import { makeWASocketAuto, useMultiFileAuthState } from "wanns-baileys";

const { state, saveCreds } = await useMultiFileAuthState("./sesi");
const sock = await makeWASocketAuto({
    auth: state,
    phoneNumber: "6281234567890",
    pairingCode: "WANNS123"
});
sock.ev.on("creds.update", saveCreds);

await sock.sendAlbum(jid, [
    { image: { url: "https://example.com" }, caption: "Foto 1" },
    { image: { url: "https://example.com" }, caption: "Foto 2" }
]);
await sock.sendRichAudio(jid, { url: "./lagu.mp3" }, {
    title: "Judul Lagu",
    artist: "Wanns Music",
    cover: "https://example.com"
});
```

<div align="center" id="top">


# wanns-baileys

### ⚡ WhatsApp Web API yang dirawat serius untuk Node.js

<em>ESM typed&nbsp;·&nbsp;versi WA&nbsp;Web selalu terkini&nbsp;·&nbsp;tooling protokol aman&nbsp;·&nbsp;140+ utilitas bot siap produksi</em>

<br/>

<!-- identitas -->
<p>
<a href="https://www.npmjs.com/package/wanns-baileys"><img src="https://img.shields.io/npm/v/wanns-baileys?color=25D366&label=npm&logo=npm&logoColor=white&style=for-the-badge" alt="versi npm" /></a>
<a href="https://www.npmjs.com/package/wanns-baileys"><img src="https://img.shields.io/npm/dt/wanns-baileys?color=128C7E&label=unduhan&logo=npm&logoColor=white&style=for-the-badge" alt="unduhan npm" /></a>
<a href="./NOTICE.md"><img src="https://img.shields.io/badge/lisensi-MIT-555?style=for-the-badge" alt="lisensi MIT" /></a>
</p>

<!-- kualitas -->
<p>
<img src="https://img.shields.io/badge/node-%E2%89%A5%2020-3C873A?style=flat-square&logo=node.js&logoColor=white" alt="Node >=20" />
<img src="https://img.shields.io/badge/module-ESM-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="ESM only" />
<img src="https://img.shields.io/badge/types-bundled%20.d.ts-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="tipe TypeScript" />
<img src="https://img.shields.io/badge/tes-1513%20lulus-2ecc71?style=flat-square&logo=nodedotjs&logoColor=white" alt="tes lulus" />
<img src="https://img.shields.io/badge/audit-0%20kerentanan-2ecc71?style=flat-square&logo=npm&logoColor=white" alt="audit bersih" />
</p>

<p>
<a href="https://whatsapp.com/channel/0029VbDRs9EEVccGV50sL42p"><img src="https://img.shields.io/badge/Ikuti%20di%20WhatsApp-Channel%20Wanns-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="Channel WhatsApp Wanns" /></a>
</p>

<h4>

[📦 Instalasi](#instalasi)&nbsp;·&nbsp;[🚀 Mulai cepat](#mulai-cepat)&nbsp;·&nbsp;[🔥 Fitur](#-fitur)&nbsp;·&nbsp;[💡 Contoh](#-contoh-pemakaian)&nbsp;·&nbsp;[📘 TypeScript](#-dukungan-typescript)&nbsp;·&nbsp;[❓ FAQ](#-faq--troubleshooting)&nbsp;·&nbsp;[🇬🇧 English](./README.md)

</h4>

</div>

---

<table>
<tr>
<td width="33%" valign="top" align="center">

### 🔌 Inti yang andal

Socket stabil, resolusi versi WA-Web otomatis, toolkit reconnect + anti-ban — **tanpa efek samping tersembunyi**.

</td>
<td width="33%" valign="top" align="center">

### 🧩 Lengkap sejak awal

Tombol, native flow, carousel, kartu AIRich, poll, channel, VoIP, dan **140+ utilitas bot**.

</td>
<td width="33%" valign="top" align="center">

### 🛡️ Siap produksi

`.d.ts` bawaan, auth multi-backend, redaksi kredensial, session tools — **1513 tes, 0 kerentanan**.

</td>
</tr>
</table>

<details>
<summary><b>📑 Daftar isi</b> — klik untuk buka</summary>

<br/>

> **Mulai** &nbsp;›&nbsp; [Instalasi](#instalasi) · [Mulai cepat](#mulai-cepat) · [Ringkasan](#ringkasan) · [Instalasi lengkap](#-instalasi) · [Autentikasi](#-autentikasi) · [Backend store](#-backend-store)
>
> **Isi paket** &nbsp;›&nbsp; [Perbandingan](#-perbandingan) · [Fitur](#-fitur) · [Peningkatan eksklusif Wanns](#-peningkatan-eksklusif-wanns) · [Baru di v2.4.5](#-baru-di-v245)
>
> **Pesan** &nbsp;›&nbsp; [Contoh pemakaian](#-contoh-pemakaian) · [Helper pesan](#-helper-pesan) · [Channel, riwayat & transkrip](#-channel-riwayat--transkrip) · [Kejar-tayang WA 2026](#-kejar-tayang-wa-2026)
>
> **Panggilan & sync** &nbsp;›&nbsp; [Panggilan suara & video](#-panggilan-suara--video) · [Query sinkronisasi user](#-query-sinkronisasi-user) · [Manajemen username](#-manajemen-username)
>
> **Toolkit** &nbsp;›&nbsp; [Utilitas sehari-hari](#-utilitas-sehari-hari) · [Paket keamanan](#-paket-keamanan) · [Bot framework](#-bot-framework) · [Modul utilitas](#-modul-utilitas)
>
> **Referensi** &nbsp;›&nbsp; [Lingkungan yang direkomendasikan](#-lingkungan-yang-direkomendasikan) · [Dukungan TypeScript](#-dukungan-typescript) · [FAQ & troubleshooting](#-faq--troubleshooting) · [Kontribusi](#-kontribusi) · [Kredit](#-kredit) · [Maintainer](#-maintainer)

</details>

---

## Instalasi

```bash
npm i wanns-baileys
```

Butuh Node.js 20+. Package ini ESM-only dan tidak memakai install/postinstall script.

## Mulai cepat

```js
import makeWASocket, { useMultiFileAuthState } from 'wanns-baileys'

const { state, saveCreds } = await useMultiFileAuthState('auth_info')
const sock = makeWASocket({ auth: state, printQRInTerminal: true })

sock.ev.on('creds.update', saveCreds)
sock.ev.on('messages.upsert', async ({ messages }) => {
  const msg = messages[0]
  if (!msg?.message || msg.key.fromMe) return
  await sock.sendMessage(msg.key.remoteJid, { text: 'pong' }, { quoted: msg })
})
```

## Ringkasan

`wanns-baileys` adalah library WhatsApp Web untuk builder bot yang butuh socket stabil, deklarasi TypeScript lengkap, dan utilitas yang dirawat tanpa efek samping tersembunyi.

- Fallback versi WA Web terbaru plus `makeWASocketAuto()` untuk resolusi versi live.
- Deklarasi WAProto lengkap dan deep export untuk pemakaian dari package ter-install.
- Backend auth file, SQLite, Redis, MongoDB, MySQL, dan PostgreSQL.
- Interactive messages, native flow, carousel, AIRich, channel/newsletter, status helper, dan modul bot.
- Fetch media/link lebih aman, redaksi kredensial, tool sesi, helper reconnect, dan protocol-capture.
- **Tidak ada auto join/follow grup atau saluran.** Helper join/follow tetap tersedia, tapi hanya jalan kalau dipanggil eksplisit oleh kode kamu.

---

## 🆚 Perbandingan

Posisi `wanns-baileys` dibanding library Baileys lain:

| Kemampuan | `wanns-baileys` | Fork lain (umumnya) |
|---|:---:|:---:|
| Tombol Native Flow (V1/V2/V3) | ✅ | ⚠️ sebagian |
| Pesan carousel | ✅ | ❌ |
| Kartu respons kaya (AIRich) | ✅ | ❌ |
| Alur commerce (katalog/order/pembayaran) | ✅ | ⚠️ sebagian |
| Panggilan suara (VoIP) | ✅ eksperimental | ❌ |
| Store multi-backend (SQL/Mongo/Redis) | ✅ | ⚠️ sebagian |
| Definisi TypeScript `.d.ts` lengkap | ✅ | ⚠️ sebagian |
| Query sinkronisasi user (WAUSync) | ✅ | ✅ |
| Manajemen username (cek/set/pin/rekomendasi) | ✅ | ❌ |
| Framework bot (middleware, sesi, statistik) | ✅ | ❌ |
| Render QR bawaan (terminal/SVG/PNG, nol deps) | ✅ | ❌ butuh `qrcode-terminal` |
| Resolusi versi WA Web otomatis | ✅ | ❌ hardcoded |
| Mention di status (notifikasi user/grup) | ✅ | ❌ |
| Toolkit anti-ban (ramp pemanasan, batas aksi grup, klasifikasi disconnect, jitter Gaussian) | ✅ | ❌ |
| Perisai pesan crash (bom mention, zalgo, spoof RTLO) | ✅ | ❌ |
| Dokter sesi + string sesi portabel/terenkripsi | ✅ | ❌ |
| Modul komunitas/bot (economy, game, sewa, moderasi — 140+ utils) | ✅ | ❌ |
| Branding EXIF stiker | ✅ murni JS | ⚠️ butuh `node-webpmux` |
| CLI (`doctor` / `session` / `sticker` / `export` / `wa`) | ✅ | ❌ |
| Logger dengan redaksi kredensial | ✅ | ❌ |

> Tabel ini menggambarkan fitur di level package, bukan benchmark performa. PR untuk memperbarui/mengoreksi tabel ini dipersilakan lewat [Kontribusi](#-kontribusi).

---

## 🔥 Fitur

<table>
<tr>
<th align="center">💬 Pesan Interaktif</th>
<th align="center">🛒 Commerce & Bisnis</th>
<th align="center">🧩 Fitur Utilitas</th>
</tr>
<tr>
<td valign="top">

- Native Flow
- Tombol (V1 / V2 / V3)
- List
- Pesan Carousel
- Pesan Poll & Kuis
- Pesan Respons Kaya (AIRich)
- Tombol CTA / Reply / URL
- Tombol Panggilan
- Tombol OTP
- Tombol Autentikasi

</td>
<td valign="top">

- Pesan Katalog
- Detail Order
- Status Order
- Review & Bayar
- Status Pembayaran
- Metode Pembayaran
- Lacak Order
- Pesan Ulang
- Batalkan Order

</td>
<td valign="top">

- Dukungan Status Grup
- Mention Semua
- Dukungan Stiker Lottie
- Dukungan Newsletter
- Helper ExternalAdReply
- Dukungan View Once
- Format Teks Kaya
- Highlight Kode

</td>
</tr>
</table>

<table>
<tr>
<th align="center">🔐 Auth & Penyimpanan</th>
<th align="center">📞 Realtime</th>
<th align="center">🛠 Tooling Developer</th>
</tr>
<tr>
<td valign="top">

- Auth state multi-file
- Auth state satu file
- Auth state SQLite
- Auth state cache-manager
- Store in-memory
- Adapter store SQLite / MongoDB /
  MySQL / PostgreSQL / Redis

</td>
<td valign="top">

- Panggilan suara (VoIP, engine WASM)
- Query sinkronisasi user (WAUSync)
- Cek presence / status / perangkat
- Event buffer untuk bot trafik tinggi

</td>
<td valign="top">

- Definisi TypeScript lengkap (`.d.ts`)
- Deteksi anti-delete & anti-edit (pulihkan pesan terhapus, tangkap isi sebelum edit)
- Helper pencarian pesan
- Engine auto-reply
- Helper penjadwalan
- Manajer retry pesan

</td>
</tr>
</table>

---

## ✨ Peningkatan Eksklusif Wanns

### Perbaikan Status Grup Audio
Status audio memakai implementasi yang lebih kompatibel untuk menghindari error unsupported-version di klien WhatsApp lama.

### AIRich — builder pesan respons kaya
Builder chainable (`AIRich`, juga diekspor sebagai `AIWanns` / `LeafRich` / `WannsAI` / `WannsRich`) dengan 40+ method `add*()`/`set*()` yang mencakup heading, teks berformat (hyperlink/sitasi/LaTeX), blok kode, tabel, kartu gambar/video/produk/post, kartu tugas & progres, banner tips, dan saran quick-reply — tampilan kartu kaya yang biasanya cuma kamu lihat dari bot AI/asisten resmi. Lihat [Contoh Pemakaian](#airich--kartu-respons-kaya) di bawah.

### Ekspansi Native Flow

<table>
<tr>
<td valign="top" width="33%">

**Tombol & Aksi**
- cta_reminder
- cta_cancel_reminder
- otp_button
- authentication_button
- call_button
- url_button
- reply_button
- voice_call
- video_call_button

</td>
<td valign="top" width="33%">

**Alur Commerce**
- catalog_message
- mpm
- card_message
- order_details
- order_status
- review_and_pay
- payment_status
- payment_method

</td>
<td valign="top" width="33%">

**Navigasi & Lainnya**
- address_message
- send_location
- track_order
- reorder
- cancel_order
- clear_chat
- navigateToScreen
- flow (field payload: flow_action)

</td>
</tr>
</table>

### Filter Notifikasi Sistem

Setiap pesan menyertakan:

```js
message.isSystemNotification
```

Berguna untuk memfilter:

- Pemberitahuan E2E
- Pemberitahuan layanan Meta
- Pesan lain yang dihasilkan sistem

---

## 📦 Instalasi

```bash
npm install wanns-baileys
```

Langsung dari GitHub:

```bash
npm install github:Plenger-final/wanns-baileys
```

> Butuh **Node.js 20+** — dicek saat import dengan pesan error yang jelas (tanpa install script: paket ini sengaja **nol** hook `preinstall`/`postinstall`, jadi `npm ci --ignore-scripts` dan kebijakan supply-chain ketat langsung jalan).

> **Pindahan dari `@whiskeysockets/baileys`?** Migrasi biasanya cuma ganti satu baris import — lihat [MIGRATION.md](./MIGRATION.md).

### Peer dependency opsional

Semua di bawah ini **opsional** — socket tetap jalan tanpa satu pun. Install hanya yang dibutuhkan fitur yang kamu pakai; yang belum terinstall akan gagal dengan petunjuk install yang jelas, bukan crash diam-diam.

| Paket | Membuka fitur |
|---|---|
| `sharp` | Resize/proses gambar cepat (dipakai `Toolkit.resize` milik builder pesan) |
| `@napi-rs/image` | Alternatif native yang lebih ringan dari `sharp` |
| `jimp` | Fallback gambar pure-JS kalau dua di atas tidak terinstall |
| `fluent-ffmpeg` | Konversi audio/video untuk pesan media |
| `ffmpeg-static` | **Binary** ffmpeg terbundel — auto-terdeteksi, nol konfigurasi (~80MB; tidak tersedia untuk Termux/Android, pakai `pkg install ffmpeg` di sana) |
| `@ffmpeg-installer/ffmpeg` | Binary ffmpeg terbundel alternatif — juga auto-terdeteksi |
| `audio-decode` | Ekstraksi waveform/durasi audio (voice note, capture VoIP) |
| `link-preview-js` | Preview link kaya untuk URL di pesan teks keluar |
| `better-sqlite3` | Auth state SQLite, adapter store SQLite, **dan** `SQLiteStore`/`StatsManager` milik [Bot Framework](#-bot-framework) |
| `mongodb` | Adapter store MongoDB |
| `mysql2` | Adapter store MySQL |
| `pg` | Adapter store PostgreSQL |
| `ioredis` | Adapter store Redis |
| `@roamhq/wrtc` | Binding WebRTC native untuk [panggilan suara](#-panggilan-suara--video) |

#### ffmpeg: cara dia ditemukan

Semua fitur yang memanggil ffmpeg (thumbnail video, konversi stiker, konversi voice note, feeding audio VoIP) mencari binary lewat satu resolver terpusat, dengan urutan:

1. **Override kamu** — `setFfmpegPath('/path/ke/ffmpeg')` (diekspor dari paket) atau env var `FFMPEG_PATH`
2. **`ffmpeg-static`** — kalau terinstall, binary bundelannya dipakai otomatis
3. **`@ffmpeg-installer/ffmpeg`** — sama, sebagai alternatif
4. **`ffmpeg` sistem** di `PATH` kamu

Jadi di server biasa cukup `npm i ffmpeg-static` dan tidak perlu mikir lagi. Di **Termux/Android** (di mana kedua paket npm itu tidak punya binary) install versi sistem — otomatis kepakai:

```sh
pkg install ffmpeg
```

Kalau tidak ketemu sama sekali, fiturnya gagal dengan petunjuk install per-platform, bukan error misterius `spawn ffmpeg ENOENT`.

#### Cek lingkunganmu (doctor)

Bingung kenapa suatu fitur tidak jalan? Satu panggilan ini mendiagnosa semuanya — versi Node, dependency opsional mana yang terinstall, ffmpeg ketemu di mana, backend gambar yang aktif:

```js
import { printEnvironmentReport } from 'wanns-baileys'
await printEnvironmentReport() // cetak laporan lengkap + return snapshot-nya
// atau versi data mentah tanpa cetak:
import { checkEnvironment } from 'wanns-baileys'
const env = await checkEnvironment() // { ok, platform, node, ffmpeg, imageBackend, optionalDeps, warnings }
```

Atau langsung dari terminal, tanpa nulis kode:

```sh
npx wanns-baileys doctor    # exit code 0 = semua beres, 1 = ada warning
npx wanns-baileys version
```

---

## 🚀 Mulai Cepat

```js
import { makeWASocketAuto, useMultiFileAuthState } from 'wanns-baileys'

const { state, saveCreds } = await useMultiFileAuthState('auth_info')

// makeWASocketAuto mengambil versi WA Web terbaru sebelum konek
// (sw.js WA -> fork -> fallback), mencegah error 405 pairing karena versi basi.
// Lebih suka sync? `makeWASocket({ auth: state })` tetap jalan seperti biasa.
const sock = await makeWASocketAuto({
    auth: state
})

// simpan kredensial setiap kali Baileys memperbaruinya
sock.ev.on('creds.update', saveCreds)

sock.ev.on('connection.update', (update) => {
    const { connection, qr } = update

    // Paling gampang: kasih `printQRInTerminal: true` ke makeWASocket dan QR
    // digambar otomatis oleh renderer bawaan (nol dependency).
    // Render manual/custom dari event juga bisa:
    //   import { renderQRToTerminal, qrToSVG, qrToPNG } from 'wanns-baileys'
    //   if (qr) console.log(renderQRToTerminal(qr))          // terminal (▀▄█)
    //   if (qr) fs.writeFileSync('qr.svg', qrToSVG(qr))      // untuk web UI
    //   if (qr) fs.writeFileSync('qr.png', qrToPNG(qr))      // raster (kirim ke mana saja)
    if (qr) console.log('Dapat QR pairing')

    if (connection === 'open') console.log('🍃 Terhubung!')
})

sock.ev.on('messages.upsert', ({ messages }) => {
    const msg = messages[0]
    if (!msg.message || msg.key.fromMe) return
    console.log('Pesan baru dari', msg.key.remoteJid)
})
```

**Tips produksi** — bungkus socket dengan `autoReconnect()` dan urusan disconnect selesai otomatis (exponential backoff, tidak pernah reconnect saat `loggedOut`, reconnect langsung setelah pairing):

```js
import { makeWASocketAuto, autoReconnect, useMultiFileAuthState } from 'wanns-baileys'

const { state, saveCreds } = await useMultiFileAuthState('auth_info')
const manager = autoReconnect(() => makeWASocketAuto({ auth: state, printQRInTerminal: true }), {
    onSocket: sock => {
        sock.ev.on('creds.update', saveCreds)
        sock.ev.on('messages.upsert', handler) // dipasang ulang di setiap reconnect
    },
    onLoggedOut: () => console.log('hapus auth_info/ lalu pairing ulang'),
})
await manager.start()
```

Versi lengkap yang bisa langsung dijalankan: [`examples/auto-reconnect-bot.js`](./examples/auto-reconnect-bot.js).

### Login pakai pairing code (tanpa QR)

```js
import { makeWASocket, useMultiFileAuthState, formatPairingCode } from 'wanns-baileys'

const { state, saveCreds } = await useMultiFileAuthState('auth_info')
const sock = makeWASocket({ auth: state, printQRInTerminal: false })
sock.ev.on('creds.update', saveCreds)

if (!state.creds.registered) {
    const code = await sock.requestPairingCode('628123456789') // nomor internasional lengkap
    console.log('Pairing code:', formatPairingCode(code))      // "ABCD-EFGH"
}

// kode custom 8 karakter (Crockford base32: 1-9, A-Z tanpa I/O/U)
await sock.requestPairingCode('628123456789', 'WANNSWANNS12')
```

Input divalidasi di awal dengan error yang jelas, bukan gagal diam-diam di sisi server: karakter format (`+`, spasi, strip) dibersihkan, prefix telepon internasional `00` di depan dihapus otomatis, dan dua penyebab klasik langsung dilempar error — **nomor format lokal** (`08123...` padahal harusnya `628123...`, penyebab #1 "pairing code gak pernah dateng") dan nomor lebih dari 15 digit (batas maksimum E.164). Pengecekan yang sama tersedia mandiri sebagai `normalizePairingPhone(nomor)`. Untuk bot publik, batasi percobaan pairing dengan `withPairingGuard`.

**Observability** — pasang `createDebugMonitor()` untuk snapshot terstruktur yang aman
(status koneksi, alasan disconnect, uptime, persentil latensi pesan, hitungan retry kirim,
hitungan error Signal, status VoIP/WASM, memori). Snapshot ini **tidak pernah** berisi
payload QR, kode pairing, kunci auth, token, atau private key — seluruh snapshot melewati
`redactSecrets()` sebelum dikembalikan, jadi aman untuk di-log atau dilampirkan ke laporan
bug apa adanya:

```js
import { createDebugMonitor } from 'wanns-baileys'

const monitor = createDebugMonitor(sock)
// nanti — di health endpoint, log cron, atau crash handler:
console.log(JSON.stringify(monitor.getDebugInfo(), null, 2))
// { connection: { state, uptimeMs, lastDisconnect: { code, reason } },
//   messages: { received, decryptFailed, latencyMs: { p50, p90, p99 } },
//   sendRetries, signalErrors: { noSession, badMac, ... }, voip, memory }
```

**Protocol capture eksperimental** — fitur WhatsApp baru jangan ditebak dari asumsi;
pertama capture bentuk BinaryNode dari akun test yang memang kamu izinkan, rahasia
akan diredaksi, lalu baru buat wrapper high-level setelah kontrak wire-nya jelas:

```js
import { bindProtocolCapture } from 'wanns-baileys'

const capture = bindProtocolCapture(sock, { file: './wa-protocol.ndjson' })
// trigger fitur di official client / akun test yang paired
// tiap baris adalah JSON redacted: { direction, summary, node }
await capture.close()
```

---

## 🔐 Autentikasi

Empat backend auth-state tersedia langsung. Semuanya mengembalikan bentuk `{ state, saveCreds }` yang sama seperti yang diharapkan `makeWASocket({ auth })`, jadi bisa saling tukar tanpa ubah kode.

| Fungsi | Penyimpanan | Cocok untuk |
|---|---|---|
| `useMultiFileAuthState(folder)` | Satu file JSON per kunci, di disk | Pilihan default — sederhana, mudah di-debug, jalan di mana saja |
| `useSingleFileAuthState(namaFile)` | Satu file JSON, di disk | Bot kecil yang lebih mudah kelola/backup satu file |
| `useSqliteAuthState(opsi)` | SQLite (`better-sqlite3`) | Bot yang sudah pakai SQLite, atau mau auth di satu file DB embedded |
| `useCacheManagerAuthState(store, kunciSesi)` | Store apa pun yang kompatibel [`cacheable`](https://www.npmjs.com/package/@cacheable/node-cache) | Panel hosting multi-sesi, setup berbasis Redis |
| `useRedisAuthState(opsi)` | Redis (client `ioredis` **atau** node-redis) | Bot multi-instance, penyimpanan sesi bersama yang cepat |
| `useMongoAuthState(opsi)` | MongoDB (collection `mongodb`) | Bot yang sudah pakai Mongo; satu dokumen per key |
| `usePostgresAuthState(opsi)` | Postgres (`pg` Pool/Client) | Deployment produksi di Postgres; tabel dibuat otomatis |
| `useMySQLAuthState(opsi)` | MySQL/MariaDB (`mysql2/promise`) | Setup shared-hosting; tabel dibuat otomatis |
| `makeAuthStateFromStore(store)` | Backend key-value **apa pun** buatanmu | Database kustom — cukup implementasikan 5 method kecil |

```js
import { makeWASocket, useMultiFileAuthState } from 'wanns-baileys'

const { state, saveCreds } = await useMultiFileAuthState('auth_info')
const sock = makeWASocket({ auth: state })
sock.ev.on('creds.update', saveCreds)
```

```js
// Varian SQLite
import { makeWASocket, useSqliteAuthState } from 'wanns-baileys'

const { state, saveCreds } = await useSqliteAuthState({ database: './auth.db' })
const sock = makeWASocket({ auth: state })
sock.ev.on('creds.update', saveCreds)
```


Keempat adapter database menerima **client/collection yang sudah ada** (disarankan — kamu pegang kendali pooling & lifecycle) atau `uri` (driver di-import lazy hanya saat itu; tak ada yang jadi dependency wajib):

```js
// Varian Redis — jalan dengan ioredis DAN node-redis
import { makeWASocket, useRedisAuthState } from 'wanns-baileys'

const { state, saveCreds } = await useRedisAuthState({ client: myRedis, session: 'bot-1' })
const sock = makeWASocket({ auth: state })
sock.ev.on('creds.update', saveCreds)
```
`useMultiFileAuthState` juga mengekspor `pruneStaleAuthFiles(folder, opsi)` untuk membersihkan file sender-key lama secara terjadwal — berguna untuk bot yang jalan lama dan menumpuk ribuan file kunci basi.

---

## 🗄️ Backend Store

`makeInMemoryStore()` dari `lib/Store` memberikan cache chat/kontak/pesan in-memory klasik. Untuk apa pun yang harus selamat dari restart, `makePersistentStore()` (dari `PersistentStore.js`) membungkus salah satu dari lima backend di balik interface yang sama:

| Backend | Fungsi |
|---|---|
| SQLite | `createSqliteStoreAdapter(opsi)` |
| MongoDB | `createMongoStoreAdapter(opsi)` |
| MySQL | `createMysqlStoreAdapter(opsi)` |
| PostgreSQL | `createPostgresStoreAdapter(opsi)` |
| Redis | `createRedisStoreAdapter(opsi)` |

```js
import { makeWASocket, makeInMemoryStore } from 'wanns-baileys'

const store = makeInMemoryStore({})
store.readFromFile('./baileys_store.json')
setInterval(() => store.writeToFile('./baileys_store.json'), 10_000)

const sock = makeWASocket({ /* ...auth dll */ })
store.bind(sock.ev)
```

---

## 💡 Contoh Pemakaian

### Tombol & Native Flow

```js
import { Button } from 'wanns-baileys'

await new Button(sock)
    .setTitle('Promo Spesial')
    .setBody('Diskon 20% cuma hari ini')
    .setFooter('wanns-baileys')
    .addReply('Klaim Sekarang', 'claim_promo')
    .addUrl('Lihat Katalog', 'https://example.com/catalog')
    .addCall('Hubungi Kami', '628123456789')
    .send(jid)
```

### Poll

```js
import { Poll } from 'wanns-baileys'

await new Poll(sock)
    .setName('Mau makan apa hari ini?')
    .addOptions(['Nasi Goreng', 'Mie Ayam', 'Bakso'])
    .setSelectable(1)
    .send(jid)
```

> **v2.4.7** — builder poll sekarang memvalidasi sebelum mengirim. Opsi duplikat
> ditolak (hasil poll dikelompokkan berdasarkan teks opsi, jadi duplikat dulu menyatu
> jadi satu hasil), `setEndDate()` melempar error untuk tanggal yang tidak bisa
> diparsing alih-alih mengirim `endTime: NaN`, dan `setQuiz()` tidak lagi bisa
> digabung dengan `setAnnouncementGroup()` (jalur itu memakai
> `pollCreationMessageV2` yang tidak punya field `correctAnswer`, jadi mode kuis
> hilang diam-diam). Poll kuis juga akhirnya terbaca:
> `getAggregateVotesInPollMessage()` kini mengenali `pollCreationMessageV5`.

```js
const poll = new Poll(sock)
    .setName('Kuis: ibu kota Indonesia?')
    .addOptions(['Jakarta', 'Bandung', 'Surabaya'])
    .setQuiz('Jakarta')

poll.validate()        // [] kalau aman dikirim — mengumpulkan semua masalah sekaligus
poll.assertValid()     // melempar masalah pertama (dijalankan otomatis oleh build()/send())
poll.countOptions()    // 3
poll.getOptions()      // ['Jakarta', 'Bandung', 'Surabaya'] (salinan)
poll.removeOption('Surabaya')
Poll.MAX_OPTIONS       // 12 — ditegakkan, sama seperti MAX_NAME_LENGTH (255) / MAX_OPTION_LENGTH (100)

await poll.send(jid)
```

### Carousel

> Kartu biasanya dibuat dengan `Button(...).toCard()` dulu. Kartu media tetap jalan seperti sebelumnya, dan v2.4.7 juga mengizinkan kartu carousel text/button-only yang valid (WhatsApp memang merendernya) lewat `addTextCard()` atau kartu `Button(...).toCard()` tanpa header media.

```js
import { Button, Carousel } from 'wanns-baileys'

const kartuA = await new Button(sock)
    .setImage('https://example.com/a.jpg')
    .setTitle('Produk A')
    .addUrl('Lihat', 'https://example.com/a')
    .toCard()

const kartuB = await new Button(sock)
    .setImage('https://example.com/b.jpg')
    .setTitle('Produk B')
    .addUrl('Lihat', 'https://example.com/b')
    .toCard()

await new Carousel(sock)
    .setBody('Pilih salah satu produk di bawah ini')
    .addCard([kartuA, kartuB])
    .send(jid)

// Kartu text/button-only, tanpa gambar:
await new Carousel(sock)
    .setBody('Aksi cepat')
    .addTextCard({
        title: 'Bantuan',
        text: 'Pilih aksi',
        buttons: [
            { id: 'faq', text: 'FAQ' },
            { webview: 'https://example.com/help', text: 'Buka Bantuan' }
        ]
    })
    .send(jid)
```

### AIRich — kartu respons kaya

```js
import { AIRich } from 'wanns-baileys'

await new AIRich(sock)
    .addHeading('Ringkasan Order')
    .addText('Pesananmu sedang diproses.')
    .addTable([
        ['Item', 'Qty'],
        ['Kopi Susu', '2']
    ])
    .addTip('Pesanan biasanya siap dalam 15 menit')
    .addSuggest('Lacak Order')
    .send(jid)
```

Untuk kasus umum, v2.4.7 juga mengekspor wrapper one-liner di atas builder yang sama:

```js
import { sendWannsRich, wanns } from 'wanns-baileys'

await sendWannsRich(sock, jid, {
    title: 'Ringkasan Order',
    markdown: '# Lunas\nPesananmu sedang diproses.',
    actions: { text: 'Lacak', url: 'https://example.com/order/123' },
    suggestions: ['Lacak Order', 'Hubungi CS']
})

// Atau tetap chaining setelah shortcut membangun kartunya:
await wanns(sock, '# Laporan Cepat').addTip('Dibuat sekarang').send(jid)
```

Alias netral (`sendRich`, `Rich`, `createRich`, `buildRich`) tetap tersedia, tapi helper ber-brand WANNS (`wanns`, `wannsRich`, `createWannsRich`, `buildWannsRich`, `sendWannsRich`) adalah nama yang disarankan untuk kode baru.

`AIRich` mendukung `{ id, insertAt }` di setiap panggilan `add*()`/`set*()`, jadi kamu bisa menyisipkan blok relatif terhadap blok yang sudah ditambahkan sebelumnya, bukan selalu menambah di akhir — praktis untuk respons gaya streaming/edit-di-tempat yang dikombinasikan dengan `sendEdit(jid, id)`.

**`streamText()` — efek "AI lagi ngetik".** Satu bubble yang tumbuh lewat edit di tempat (persis cara Meta AI streaming jawabannya), bukan membanjiri chat:

```js
// kirim sekali, lalu patch bubble yang sama sampai teks lengkap keluar
await new AIRich(sock).streamText(jid, jawabanPanjang, {
    chunkSize: 120,  // ~karakter per tahap (dipotong di batas kata)
    intervalMs: 900, // jeda antar edit (min 300)
    cursor: ' ▍'     // tampil selama streaming, dihapus di akhir ('' menonaktifkan)
})
// bisa digabung blok lain: addHeading()/addTable() dulu, baru streamText()
```

**`readRichMessage()` — separuh pembacanya.** Parse kartu rich yang DITERIMA (dari bot AI/asisten mana pun) balik jadi blok terstruktur, bukan menatap proto mentah:

```js
import { readRichMessage } from 'wanns-baileys'

sock.ev.on('messages.upsert', ({ messages }) => {
    const rich = readRichMessage(messages[0])
    if (!rich.found) return
    rich.blocks      // [{ type: 'heading', text }, { type: 'code', language, code },
                     //  { type: 'table', rows, headerRows }, { type: 'text', text, entities }, …]
    rich.suggestions // teks semua pill saran
    rich.text        // render teks datar seluruh kartu
})
```

Mendukung dua bentuk wire (payload unified-response + fallback submessages proto), entity link inline dikembalikan jadi `[label](url)`, span kode ber-highlight digabung ulang, tidak pernah throw — input non-rich mengembalikan `{ found: false }`. Teruji roundtrip terhadap builder AIRich sendiri.

Builder lain yang layak diketahui: **`ButtonV2`** (tombol quick-reply sederhana), **`ButtonV3`** (`loadFrom(msg)` untuk mengedit pesan template yang sudah ada), dan **`Toolkit`** (helper statis: `Toolkit.resize()`, `Toolkit.fetchBuffer()`, `Toolkit.waitAllPromises()`, `Toolkit.extractIE()` untuk mem-parse link/sitasi/LaTeX `[label](url)` dari teks biasa).

### 📁 Peta Folder Builders (`lib/Builders/`)

Setiap builder pesan tinggal di file-nya sendiri di `lib/Builders/`, jadi kamu bisa melacak persis dari mana sebuah class berasal, bukan mengubek satu `MessageBuilder.js` raksasa. `index.js` hanyalah barrel file yang me-re-export semuanya (plus alias-aliasnya) untuk sintaks `import { ... } from 'wanns-baileys'` di level teratas.

| File | Ekspor | Untuk apa |
|---|---|---|
| `shared.js` | `Toolkit`, `BaseBuilder`, `RowBuilder` | Fondasi bersama semua builder lain. `BaseBuilder` memegang plumbing `send()`/context-info chainable yang umum, `RowBuilder` helper baris/section bersama, dan `Toolkit` kumpulan helper statis (`resize`, `fetchBuffer`, `waitAllPromises`, `extractIE`, helper durasi/preview media). Tidak ada yang dimaksudkan untuk dipakai langsung di kode bot — dia ada supaya `Button`, `Poll`, `Carousel`, dll. tidak mengimplementasi ulang plumbing yang sama. |
| `Button.js` | `Button`, `CardBuilder` | Builder tombol interaktif/native-flow utama — header (gambar/video/dokumen), helper CTA (`addUrl`, `addCall`, `addReply`, dan set native-flow yang lebih luas), plus `.toCard()` untuk mengubah pesan tombol menjadi kartu `Carousel`. |
| `ButtonV2.js` | `ButtonV2` | Varian legacy `buttonsMessage` yang lebih ringan dan terbatas maksimal 3 tombol quick-reply — punya `validate()`/`assertValid()`, `countButtons()`/`getButtons()`/`clearButtons()`, dan relay memakai envelope canonical `getBizBinaryNode()` yang sama dengan jalur socket. |
| `ButtonV3.js` | `ButtonV3` | Berpusat pada `loadFrom(msg)` — memuat `templateMessage` yang sudah ada (misalnya yang kamu fetch atau di-quote) supaya bisa diedit di tempat. Juga memvalidasi hydrated quick-reply/url/call button dan relay dengan biz node canonical. |
| `Carousel.js` | `Carousel` | Merangkai hasil `Button(...).toCard()` menjadi carousel kartu yang bisa digeser. Menerima kartu media dan kartu text/button-only (`addTextCard()`), memvalidasi sebelum kirim, dan dibatasi `Carousel.MAX_CARDS` (10) karena WhatsApp diam-diam memotong apa pun di atas itu. |
| `Poll.js` | `Poll` | Builder pesan poll/voting — pertanyaan, opsi, single/multi-select, mode pemilih tersembunyi, penandaan jawaban benar, kedaluwarsa. |
| `AIRich.js` | `AIRich` (+ alias `ORich`, `AIWanns`, `LeafRich`, `WannsAI`, `WannsRich`, `RichWanns`) | Builder respons gaya asisten AI yang dijelaskan di atas — heading, teks berformat, tabel, kartu media/produk/post, kartu tugas/progres, banner tips, saran quick-reply. |
| `Rich.js` | `wanns`, `wannsRich`, `createWannsRich`, `buildWannsRich`, `sendWannsRich` (+ alias netral `Rich`, `createRich`, `buildRich`, `sendRich`) | Wrapper one-liner di atas `AIRich` untuk kartu umum (`markdown`, `text`, `actions`, `suggestions`, media, dll.) tanpa mengganti builder chainable penuh. |
| `A2UI.js` | `A2UI`, `sendA2UIWidget` | Builder widget A2UI/Bloks level rendah. Membangun tree `components` flat (Column/Row → `children`, Card/Button → `child`, Modal → `trigger`/`content`) yang diharapkan widget Bloks dan mengirimnya lewat jalur `getBizBinaryNode()` yang sama dengan `Button`/`ButtonV2`, jadi node level wire selalu cocok dengan nama tombol yang benar-benar terkirim. |
| `WannsBaileys.js` | `WannsBaileys` | **Hub** builder terpadu — satu objek yang membungkus semua builder di atas di balik nama method pendek (`.button()`, `.buttonV2()`, `.buttonV3()`, `.carousel()`, `.poll()`, `.airich()`, `.rich()`, `.a2ui()`), plus alias PascalCase (`.Button()`, `.Carousel()`, `.Poll()`, `.AIRich()`, `.Rich()`, `.A2UI()`) untuk developer yang lebih suka gaya penamaan itu. |
| `index.js` | semua di atas, plus `MESSAGE_BUILDER_VERSION` | Barrel file — me-re-export setiap builder dan aliasnya supaya `import { Button, Poll, AIRich, WannsBaileys } from 'wanns-baileys'` jalan tanpa masuk ke file individual. `MESSAGE_BUILDER_VERSION` melacak versi permukaan API builder sendiri, terpisah dari versi paket. |

**Contoh hub terpadu** — berguna kalau lebih suka membawa satu objek daripada mengimpor tiap builder satu-satu:

```js
import { WannsBaileys } from 'wanns-baileys'

const vx = new WannsBaileys(sock)

await vx.button()
    .setTitle('Promo Spesial')
    .addReply('Klaim Sekarang', 'claim_promo')
    .send(jid)

await vx.poll()
    .setName('Mau makan apa hari ini?')
    .addOptions(['Nasi Goreng', 'Mie Ayam'])
    .send(jid)
```

---

### 📌 Pin / Keep in Chat

```js
// Pin pesan 7 hari (default 24 jam), unpin, keep / unkeep di chat menghilang
await sock.sendPin(jid, msg.key, { durationSec: 7 * 86400 })
await sock.sendUnpin(jid, msg.key)
await sock.sendKeep(jid, msg.key)
await sock.sendUnkeep(jid, msg.key)
```

### 📅 Event

```js
await sock.sendEvent(jid, {
    name: 'Rapat Mingguan',
    description: 'Bahas progres bot',
    startDate: new Date('2026-09-15T10:00:00+07:00'),
    endDate: new Date('2026-09-15T11:00:00+07:00'),
    location: { name: 'Kantor', address: 'Jakarta' },
    extraGuestsAllowed: true
})
```

### 📞 Panggilan Terjadwal

Pesan scheduled-call native (kartu "Jadwalkan panggilan" dengan pengingat join):

```js
// 'voice' (default) atau 'video'
await sock.sendScheduledCall(jid, {
    title: 'Standup harian',
    scheduledAt: new Date('2026-09-15T09:00:00+07:00'),
    callType: 'video'
})

// Batalkan nanti (butuh key dari pesan pembuatan)
await sock.cancelScheduledCall(jid, pesanPembuatan.key)
```

### 📱 Mini App

Dua mode — kirim `url`, `flow`, atau keduanya (dua tombol):

```js
import { sendMiniApp } from 'wanns-baileys'

await sendMiniApp(sock, jid, {
    title: 'Mini App Saya',
    body: 'Tekan tombol untuk membuka app 👇',
    // 1) mode webview: kartu kaya + CTA yang membuka web app kamu
    //    (webview dalam-app kalau didukung, kalau tidak lewat browser)
    url: 'https://myapp.example.com',
    params: { ref: 'wa-bot' }, // → ditambahkan sebagai ?ref=wa-bot
    buttonText: '🚀 Buka App',
    // 2) mode Flows: mini app native BENERAN di dalam chat (form/layar di dalam
    //    WhatsApp, tanpa browser). Butuh Flow ID yang sudah dipublish di Flows Manager.
    flow: { id: '123456789', cta: '📝 Isi Form', screen: 'WELCOME' },
    thumbnail: 'https://myapp.example.com/icon.png' // url atau Buffer
})
// atau sebagai method socket: await sock.sendMiniApp(jid, { ... })
```

---

## 📨 Helper Pesan

One-liner level tinggi untuk tipe pesan modern — tervalidasi, dengan alias ramah:

```js
await sock.sendLocation(jid, { lat: -6.2, lng: 106.8, name: 'Jakarta' });
await sock.sendContact(jid, { name: 'Budi', vcard: 'BEGIN:VCARD\n...' });
await sock.sendGroupInvite(jid, { code: 'AbC123', jid: groupJid, subject: 'Komunitas' });
await sock.sendPaymentRequest(jid, { currency: 'IDR', amount: 50000, note: 'kopi ☕' });
await sock.sendInvoice(jid, { note: 'INV-001' });
await sock.sendPollOption(jid, pollKey, ['Opsi baru']);
await sock.sendEventInvite(jid, { eventTitle: 'Pesta', startTime: new Date(...) });
await sock.sendNewsletterInvite(jid, { newsletterJid, newsletterName: 'Berita' });

// Upgrade poll (sudah tersambung end-to-end):
await sock.sendPoll(jid, {
  name: 'Jam berapa?', values: ['Pagi', 'Sore'],
  endDate: new Date('2026-09-16T00:00:00Z'), // auto-tutup
  hideVoter: true,      // poll anonim
  canAddOption: true,   // pemilih boleh menambah opsi
});
```

Pesan musik masih eksperimental — proto-nya benar tapi interop dengan klien resmi
belum terverifikasi (lihat [Yang jujur belum diimplementasi](#yang-jujur-belum-diimplementasi-dan-kenapa)):

```js
await sock.sendMusic(jid, { songUri, artworkUri, embeddedMusic: { songId, title, author } });
```

**Pintu darurat:** setiap kunci konten juga jalan inline via `sendMessage`, dan `{ raw: true, <FieldPesanApapun>: {...} }`
meneruskan field proto apa pun tanpa disentuh — cakupan `WAProto` penuh tanpa nunggu wrapper:

```js
await sock.sendMessage(jid, { raw: true, musicMessage: { songUri } });
```

Pengguna TypeScript dapat `AnyMessageContent` yang bertipe (`import type { AnyMessageContent } from 'wanns-baileys'`).

## 🧰 Channel, Riwayat & Transkrip

**Manajemen channel** (query langsung):

```js
await sock.newsletterDelete(channelJid)
await sock.newsletterAdminCount(channelJid)
await sock.newsletterJoinInvite('kode-undangan')
await sock.newsletterChangeOwner(channelJid, jidPemilikBaru) // eksperimental
await sock.communityGetInviteCode(communityJid)
// ...plus follow/unfollow/mute/react/fetch yang sudah ada + CRUD komunitas penuh
```

**Berbagi riwayat grup** untuk anggota baru (meneruskan pesan terakhir ke DM mereka):

```js
import { getGroupHistoryFromStore } from 'wanns-baileys'
const pesan = getGroupHistoryFromStore(store, groupJid, 10)
await sock.shareGroupHistory({ groupJid, members: jidAnggotaBaru, messages: pesan, greeting: true })
```

**Transkripsi voice note** (provider bisa diganti — Whisper cloud atau milikmu sendiri):

```js
import { openAIWhisperProvider } from 'wanns-baileys'
const provider = openAIWhisperProvider({ apiKey: process.env.OPENAI_API_KEY })
const { text } = await sock.transcribeMessage(pesanVoiceNote, { provider })
```

**Deep link mini-app** (parameter ber-HMAC yang bisa diverifikasi web app kamu):

```js
import { createMiniAppLink, parseMiniAppParams, buildFlowDataExchange } from 'wanns-baileys'
const link = createMiniAppLink('https://app.example.com/', { uid: '123' }, { secret: 's3cr3t' })
parseMiniAppParams(link, { secret: 's3cr3t' }) // → { uid: '123' } (throw kalau dimodifikasi)
buildFlowDataExchange('navigate', { screen: 'HOME' }) // payload data_exchange untuk Flows
```

**Widget A2UI** kini mencakup `Slider`, `Switch`, `List`, `ProgressBar`, `Avatar`,
`Badge`, `Spacer`, dan `Tabs` di samping set Text/Image/Video/Button/Card/Modal
yang sudah ada (semua divalidasi ref-nya saat `build()`).

## 🔐 Paket Keamanan

Pengerasan siap-pakai untuk auth state, rahasia, dan penyalahgunaan — semuanya di
`lib/Utils/auth-secure.js`, tercakup `tests/security.test.js` (termasuk fuzzing).

```js
import {
  useEncryptedFileAuthState, secureLogger, withPairingGuard,
  createQRGuard, backupAuthState, writeAuthIntegrity, repairAuthState, secureLogout
} from 'wanns-baileys'

// 1. Auth state terenkripsi AES-256-GCM (membaca plaintext lama, migrasi saat save)
const { state, saveCreds } = await useEncryptedFileAuthState('./auth', { password: process.env.AUTH_PW })
const sock = makeWASocket({
  auth: state,
  logger: secureLogger(pino({ level: 'info' })), // 7. meredaksi qr/token/kunci di setiap baris log
})

// 2. Rate limit kode pairing: 5/jam per nomor, jeda 30 detik antar percobaan
withPairingGuard(sock, { maxPerHour: 5, minIntervalMs: 30_000 })

// 3. QR first-guard: tangani QR pertama, telan re-emit selama 60 detik
const qrGuard = createQRGuard({ ttlMs: 60_000 })
sock.ev.on('connection.update', ({ qr }) => { qr = qrGuard.handle(qr); if (qr) tampilkan(qr) })

// 6/8. backup terenkripsi + snapshot integritas
await backupAuthState('./auth', './auth.jabackup', { password: process.env.BACKUP_PW })
await writeAuthIntegrity('./auth', { secret: process.env.INT_PW })

// 9. perbaiki store korup (karantina + pulihkan creds dari backup)
await repairAuthState('./auth', { password: process.env.AUTH_PW, backupFile: './auth.jabackup', backupPassword: process.env.BACKUP_PW })

// 4. logout + timpa/hapus semua file auth + bersihkan creds di memori
await secureLogout(sock, { authFolder: './auth' })
```

Varian satu file: `useEncryptedSingleFileAuthState(file, { password })`.

## 🆕 Kejar-tayang WA 2026

Fitur WhatsApp 2026, tersambung ke WANNS-Baileys. Semua di sini diaudit terhadap klien
resmi terbaru — hanya yang kurang yang ditambahkan; yang sudah jalan cukup didokumentasikan.

### Username (chat tanpa nomor telepon)

```js
await sock.checkUsername('wannsstore');            // ketersediaan
await sock.setUsername('wannsstore');              // klaim
await sock.reserveUsername('wannsstore');          // reservasi (alur reservasi 2026)
await sock.findUserByUsername('wannsstore');       // lookup USync → JID
const u = await sock.fetchContactUsernames(['62812@s.whatsapp.net']);
```

### Poll yang bisa diedit (`editPoll`)

Poll bisa diedit ~15 menit setelah dibuat (aturan sisi server):

```js
const terkirim = await sock.sendPoll(jid, { name: 'Jam berapa?', values: ['Pagi', 'Sore'] });
await sock.editPoll(jid, terkirim.key, { name: 'Jam berapa?', values: ['Pagi', 'Siang', 'Sore'] });
```

### Mention massal (`sendMentionAll`)

```js
await sock.sendMentionAll(groupJid, 'Pengumuman: rapat jam 9!');
```

> Di grup dengan 32+ anggota, `@all` khusus admin dan aturannya ditegakkan
> sisi server — panggilan dari non-admin dibuang diam-diam oleh WhatsApp.

### Mention di status (`sendStatusMention`)

Posting status sekaligus memberi tahu user atau seluruh grup — mereka dapat
bubble "menyebut Anda dalam statusnya" yang tertaut ke status kamu:

```js
// status teks, mention dua user
await sock.sendStatusMention({ text: 'Pengumuman besar! 🎉' }, [
    '62812xxx@s.whatsapp.net',
    '62813xxx@s.whatsapp.net',
])

// status gambar, mention seluruh grup (semua anggota diberi tahu)
await sock.sendStatusMention({ image: buffer, caption: 'Rilisan baru 🔥' }, [groupJid])
```

Mendukung semua konten status (`text`, `image`, `video`, `audio`). Atur jeda
notifikasi dengan `{ delayMs }` di options (default 1500 ms per jid).

### Pengingat event

```js
await sock.sendMessage(jid, {
  event: {
    title: 'Rapat', description: 'Q3', startDate: new Date('2026-09-15T09:00:00+07:00'),
    reminder: true, reminderOffsetSec: 1800, // ingatkan 30 menit sebelum mulai
  }
});
```

### Nomor pengirim dari event LID (`resolveSenderPn`)

Memperbaiki payload yang hanya berisi LID (mis. offer panggilan tanpa `caller_pn`):

```js
sock.ev.on('messages.upsert', async ({ messages }) => {
  for (const m of messages) console.log(await sock.resolveSenderPn(m)); // '62812…' | null
});
```

### Voice note sekali lihat

Konten `sendVoiceNote()` bisa dikombinasikan dengan `viewOnce`:

```js
await sock.sendMessage(jid, { ...(await buildVoiceNoteContent('./a.ogg')), viewOnce: true });
```

### Label anggota (grup)

Sudah tersedia — tanpa kode baru, cukup didokumentasikan di sini:

```js
await sock.updateMemberLabel({ groupJid, lid, label: 'Admin' });
```

### Yang jujur belum diimplementasi (dan kenapa)

- **Transkrip pesan suara** — dibuat on-device oleh klien resmi saja; tidak ada
  API transkrip di level wire.
- **Berbagi riwayat pesan grup (native)** — WhatsApp mulai merilis fitur resmi
  "Group Message History" (bagikan 25–100 pesan terakhir ke anggota yang baru
  ditambahkan, E2EE, dikontrol admin) pada Feb 2026. Format wire-nya masih belum
  berhasil di-capture library publik mana pun (diverifikasi ulang 28 Sep 2026 dengan men-download dan men-diff API upstream Baileys 7.0.0-rc14 plus 8 fork hidup terbesar — tidak ada yang membawanya). Sampai itu terjadi, repo ini
  menyediakan *workaround* yang jujur — `shareGroupHistory()` meneruskan pesan
  terakhir ke DM anggota baru — yang BUKAN alur native (tanpa bubble riwayat di grup,
  tanpa notifikasi "riwayat dibagikan"). Kalau butuh perilaku native, satu-satunya
  jalan hari ini adalah klien resmi.
- **Pesan musik (interoperabilitas)** — struct proto `MusicMessage` round-trip dengan
  baik dan `sendMusic()` mengirimkannya, tapi interop nyata butuh ID katalog provider
  (Spotify/Apple) plus alur upload artwork yang dinegosiasikan klien resmi secara
  privat; belum ada capture publik (diverifikasi ulang Sep 2026). Pesan dengan ID
  karangan tampil sebagai preview polos atau tidak tampil sama sekali di klien resmi —
  perlakukan `sendMusic()` sebagai eksperimental dan uji di perangkat nyata dulu.
  Yang *diperbaiki* di v2.4.1: field `embeddedMusic` yang tak dikenal dulu dibuang
  diam-diam oleh encoder proto (key typo hilang begitu saja dari wire) — sekarang
  langsung throw 400 dengan daftar field yang didukung. Untuk fitur musik-di-status
  modern, lihat `withMusicAttribution()`.
- **`mediaKeyDomain` — SUDAH DIIMPLEMENTASI.** Di-backport dari rc14 ke semua 5 tipe
  media (`Audio/Document/Image/Sticker/VideoMessage`, enum `UNSET/E2EE_CHAT/STATUS/CAPI/BOT`)
  dengan passthrough kirim: `sendMessage(jid, { image: buf, mediaKeyDomain: 1 })`.
  Default-nya tidak diset (direkomendasikan — server yang melabeli). Dilewati hanya di
  `MMSThumbnailMetadata`, karena field nomor 8 upstream bentrok dengan
  `messageHistoryMetadata` yang lebih baru di proto kita.

## 🆕 Utilitas Sehari-hari

One-liner untuk kerjaan bot harian (bisa juga standalone — lihat `examples/`):

```js
// 📊 Poll (chat/grup) + Kuis (khusus channel)
await sock.sendPoll(jid, { name: 'Makan apa?', options: ['Nasi', 'Mie'] })
await sock.sendQuiz(channelJid, { name: 'Kuis', options: ['A', 'B'], correctAnswer: 'A' })

// 🎙️ Voice note — otomatis konversi mp3/wav/… ke Opus PTT (butuh fluent-ffmpeg)
await sock.sendVoiceNote(jid, './halo.mp3') // path | Buffer | { url }

// 📞 Tag semua orang (daftar @ terlihat vs tersembunyi)
await sock.tagAll(groupJid, 'Rapat jam 10!')
await sock.hideTag(groupJid, 'Pengumuman 📢')

// 🔍 LID → nomor telepon (best-effort, null kalau tidak diketahui)
await sock.getPhoneNumber('12345@lid') // → '62812…'
await sock.getLidForPhone('62812…')    // lookup kebalikannya

// 🧍 Kirim manusiawi — mengetik… + jeda natural + antrean per-chat
await sock.sendHumanized(jid, { text: 'Halo!' })

// 🛡️ Send Guard — pacing anti-ban global langsung di dalam sendMessage()
const sock = makeWASocket({
    sendRateLimit: {
        messagesPerMinute: 20, // plafon global token-bucket (0 = mati)
        perChatDelayMs: 1500,  // jeda minimum antar kirim ke chat yang sama
        jitterRatio: 0.2       // ±20% acak biar timing tidak terlihat robotik
    }
})
await sock.sendMessage(jid, { text: 'otomatis di-pace 🛡️' })          // di-pace
await sock.sendMessage(jid, { text: 'sekarang!' }, { skipRateLimit: true }) // bypass

// ✅ Pelacakan pengiriman — tunggu ack server untuk pesan keluar
const msg = await sock.sendMessage(jid, { text: 'penting!' })
await sock.waitForMessageAck(msg.key.id) // resolve saat di-ack, reject saat
                                         // error server / timeout 60 detik

// ✅ Varian satu panggilan — kirim + tunggu ack, bebas race (waiter didaftarkan
// SEBELUM pesan keluar, jadi ack yang datang cepat tidak mungkin lolos)
const { message, ack } = await sock.sendMessageAcked(jid, { text: 'penting banget!' }, { ackTimeoutMs: 30_000 })

// 📣 Broadcast ke banyak jid — ada jeda, hasil per-jid, tidak mati di tengah jalan
const report = await sock.sendBroadcast(jids, { text: 'promo!' }, { delayMs: 1500 })
// { sent: [...], failed: [{ jid, error }], total }

// 🔗 Link undangan grup
extractGroupInviteCode('https://chat.whatsapp.com/AbCdEf…') // 'AbCdEf…'
await sock.joinGroupViaLink('https://chat.whatsapp.com/AbCdEf…')

// 🏷️ Parse @mention dari teks → siap dipakai sendMessage
const mentions = parseMentions(text) // ['62812…@s.whatsapp.net', …]
await sock.sendMessage(jid, { text, mentions })

// 🤖 Chat Meta AI (eksperimental — butuh Meta AI di akun/region)
const { text } = await sock.askMetaAI('Jelaskan black hole!')
```

**Command router** untuk bot berprefix (`!menu`, `.sticker`) dengan middleware + auto-help:

```js
import { createRouter } from 'wanns-baileys'
const router = createRouter({ prefix: '!' })
router.command('ping', async (ctx) => ctx.reply('pong! 🏓'), { desc: 'Cek bot' })
router.attach(sock) // → detach()
```

**Penjadwal status / channel** (in-memory):

```js
import { StatusScheduler, ChannelScheduler, StatusHelper } from 'wanns-baileys'
new StatusScheduler(sock).schedule(StatusHelper.text('Pagi! ☀️'), new Date('2026-09-11T06:00:00+07:00'))
new ChannelScheduler(sock).schedule(channelJid, { text: 'Update' }, Date.now() + 3600_000)
```

**Atribusi musik di status** (`StatusAttribution.Type.MUSIC` — fitur resmi WA
Des-2025 "tambah musik ke status", terverifikasi wire terhadap WAProto):

```js
import { StatusHelper, withMusicAttribution } from 'wanns-baileys'

const status = withMusicAttribution(
  StatusHelper.text('vibes 🎵'),
  { title: 'Nama Lagu', authorName: 'Artis', songId: '<catalog-id>' }
)
await StatusHelper.send(sock, status, jidList)
```

> Klien resmi me-resolve lagu lewat katalog berlisensi Meta, jadi `songId`
> harus id katalog asli agar chip musiknya muncul di sana. Struktur atribusinya
> sendiri wire-correct apa pun isinya (round-trip tercakup di test).

**Ekspor chat & statistik** (offline — format "Ekspor chat" resmi, JSON, CSV):

```js
import { exportChatAsText, exportChatAsCSV, chatStatistics } from 'wanns-baileys'

// messages: WAMessage[] dari store / cache anti-delete / messages.upsert
console.log(exportChatAsText(messages))
// 14/09/2026, 10.32 - Wanns: halo!
// 14/09/2026, 10.33 - Rina: <Media omitted>

fs.writeFileSync('chat.csv', exportChatAsCSV(messages))

const stats = chatStatistics(messages)
// { total, bySender, byKind, byHour[24], byWeekday[7], topWords, ... }
```

Bisa juga tanpa kode sama sekali: `npx wanns-baileys export dump.json --format text|json|csv`.

**Testing bot offline (`createMockSocket`)** — tes logika bot di CI tanpa akun
WhatsApp, tanpa jaringan, tanpa risiko banned:

```js
import { createMockSocket, createRouter } from 'wanns-baileys'
import assert from 'assert'

const mock = createMockSocket()
setupBotKu(mock.sock)              // kode bot asli, tanpa diubah

await mock.receiveText('628xx@s.whatsapp.net', '!ping')
const reply = await mock.waitForReply()
assert.equal(reply.content.text, 'pong! 🏓')
```

Permukaan `ev` dan signature `sendMessage()` sama dengan socket asli; pesan
keluar adalah `proto.WebMessageInfo` SUNGGUHAN lewat pipeline
`generateWAMessage()` yang sama. Mendukung injeksi grup, quoted reply, simulasi
lifecycle koneksi, capture read-receipt/presence, dan `reset()` antar tes.
Scope jujur: TIDAK mengemulasi server WhatsApp — rate limit, sesi, dan enkripsi
di luar cakupan by design.

`npm test` menjalankan suite offline (`tests/`, tanpa jaringan).

---

## 🆕 Baru di v2.4.5

Helper baru di rilis ini. Semua diekspor dari root paket dan sudah bertipe lengkap.

### 🗳️ Poll manager — lacak siapa memilih apa (`createPollManager`)

`getAggregateVotesInPollMessage` itu stateless dan menghitung ganda pemilih yang berubah pikiran (WhatsApp mengirim ulang *seluruh* pilihan pemilih tiap ada perubahan). `createPollManager` menyimpan state itu — tiap pemilih dihitung sekali, pilihan terakhir yang menang:

```js
import { createPollManager } from 'wanns-baileys'

const polls = createPollManager()
const sent = await sock.sendMessage(jid, { poll: { name: 'Makan apa?', values: ['Pizza', 'Sushi'], selectableCount: 1 } })
polls.register(sent) // ingat opsi + key

// beri vote yang sudah didekripsi (nama opsi, hash sha256 hex, atau Buffer hash mentah dari WA):
polls.applyVote(sent.key.id, voterJid, ['Pizza'])

polls.tally(sent.key.id)   // [{ name:'Pizza', count, voters:[] }, ...]
polls.winner(sent.key.id)  // { winners:['Pizza'], count } (sadar seri)
console.log(polls.render(sent.key.id)) // bar chart langsung
```

### ❤️‍🩹 Monitor kesehatan sesi (`createSessionHealthMonitor`)

Mendeteksi ledakan pesan yang gagal didekripsi (sesi Signal mati / Bad-MAC drift) per kontak lalu memberi peringatan — murni observasi, tidak pernah melempar error ke event loop:

```js
import { createSessionHealthMonitor } from 'wanns-baileys'

const health = createSessionHealthMonitor({ badMacThreshold: 3, windowMs: 60_000 })
health.bind(sock)
health.onUnhealthy(({ jid, failures }) => console.warn(`sesi ${jid} bermasalah (${failures} gagal dekripsi)`))
health.onRecover(({ jid }) => console.log(`${jid} pulih`))
```

Dilengkapi `canonicalizeJid()` dan `makeJidCanonicalizer(sock)` untuk menyatukan identitas kontak lintas pemisahan PN/LID.

### 🔁 Anti-duplikat pesan / idempotensi (`createMessageDedupe`)

Mencegah balasan dobel saat WhatsApp mengirim ulang pesan (reconnect, history sync, placeholder resend, retry):

```js
import { createMessageDedupe } from 'wanns-baileys'

const dedupe = createMessageDedupe({ maxSize: 5000 }) // opsional ttlMs
sock.ev.on('messages.upsert', ({ messages }) => {
  for (const m of messages) {
    if (dedupe.seen(m.key)) continue // sudah ditangani → lewati
    // ...tangani tepat sekali
  }
})
```

### 🔗 Helper LID ↔ PN di socket

Helper pemetaan kini jadi method socket kelas satu (tak perlu lagi menyentuh `signalRepository`):

```js
await sock.getLIDForPN('62812…@s.whatsapp.net') // → '…@lid' | null
await sock.getPNForLID('123…@lid')              // → '…@s.whatsapp.net' | null
await sock.getLIDsForPNs([...])                  // batch
await sock.getPNsForLIDs([...])                  // batch
await sock.storeLIDPNMappings([{ lid, pn }])     // isi cache
```

### 🧩 Helper toolkit kecil

Sepuluh helper murni & bertipe, diekspor dari root:

```js
import { partition, zip, formatCountdown, wordCount, ellipsisMiddle,
         jidType, randomString, isNumeric, firstEmoji, maskJid } from 'wanns-baileys'

partition([1, 2, 3, 4], n => n % 2 === 0) // [[2,4],[1,3]]
zip([1, 2], ['a', 'b'])                    // [[1,'a'],[2,'b']]
formatCountdown(90_061_000)                // '1d 01:01:01'
ellipsisMiddle('abcdefgh', 5)             // 'ab…gh'
jidType('123@g.us')                        // 'group'
maskJid('628123456789@s.whatsapp.net')     // '628******89@s.whatsapp.net'
```

---

## 📞 Panggilan Suara & Video

Dukungan panggilan audio eksperimental via call stack WASM terbundel + relay WebRTC. Butuh peer dependency opsional `@roamhq/wrtc`.

```js
import { VoipClient } from 'wanns-baileys'

const voip = new VoipClient({ resourcesPath: './voip-resources' })
await voip.connectWithSocket(sock)

const panggilan = await voip.call('628123456789')

panggilan.on('ringing', () => console.log('Berdering...'))
panggilan.on('connected', () => console.log('Panggilan tersambung'))
panggilan.on('ended', (alasan) => console.log('Panggilan berakhir:', alasan))
```

`ActiveCall` (dikembalikan `.call()`) dan `CallState` juga diekspor langsung kalau butuh kontrol status panggilan yang lebih detail.

**Menjawab panggilan masuk** — offer dilacak, jadi bot bisa mengangkat (1:1) atau join (grup):

```js
import { attachVoip } from 'wanns-baileys'
const voip = await attachVoip(sock) // juga disimpan sebagai sock.voip

voip.on('incoming-call', async ({ callId, from, isGroupCall, busy }) => {
    if (busy) return
    if (isGroupCall) await voip.joinGroupCall(callId, { audioSource: './salam.mp3' })
    else await voip.answerCall(callId, { audioSource: './salam.mp3' })
})

// ...atau sepenuhnya otomatis:
await attachVoip(sock, { autoAnswer: true })   // angkat panggilan 1:1
await attachVoip(sock, { autoJoinGroup: true }) // join panggilan grup
await attachVoip(sock, { autoReject: true, autoRejectText: 'Bot tidak bisa menerima panggilan 🙏' })

// offer yang masih menunggu (jawab sebelum `offerTtlMs`, default 45 detik):
voip.getPendingCalls() // → [{ callId, from, isGroupCall, ... }]
```

**Panggilan grup / multi-pihak:**

```js
const gcall = await voip.startGroupCall(groupJid, ['62812…', '62813…'], { chatName: 'Rapat' })
await voip.inviteToGroupCall('62814…')
await voip.removeGroupParticipant('62813@s.whatsapp.net')
await voip.rejoinGroupCall() // pemulihan setelah putus

voip.on('group-call-started', console.log)
voip.on('group-call-joined', console.log)
```

Panggilan juga mendukung reaksi, angkat tangan, rekaman, dan call link:

```js
const panggilan = await voip.call('628123456789', { audioSource: './salam.mp3' })
panggilan.react('👍')
panggilan.setHandRaised(true)
const stopRekam = panggilan.recordToFile('./panggilan.wav') // peer lawan → .wav
await voip.previewCallLink('token-call-link')

// 🔀 ganti audio yang diputar TANPA menutup panggilan (alur gaya IVR)
panggilan.setAudioSource('./menu.mp3')                  // file/URL
panggilan.setAudioSource({ data: buffer, ext: 'mp3' })  // audio in-memory
panggilan.setAudioSource('lavfi:sine=frequency=440')    // nada hasil generate
panggilan.setAudioSource('silence')                     // berhenti memutar, tetap di panggilan
```

**Reconnect & pemulihan** — watchdog memantau transport relay selama panggilan
(`watchdogIntervalMs`/`watchdogMaxSilent`); saat relay mati dia memancarkan `call-degraded`
dan otomatis mengirim ulang rekey kripto + offer. Kontrol manual:

```js
voip.on('call-degraded', ({ callId }) => console.log('relay mati, memulihkan', callId))
voip.on('call-recovery', (r) => console.log('hasil pemulihan', r))
await voip.recoverCall({}) // manual: { rekey: true, offer: true }
voip.getStats()            // { busy, callId, call, relay }
sock.ev.on('call', (calls) => { /* jalur offer/reject standar tetap jalan */ })
```

**Menyegarkan stack WASM** — kalau panggilan rusak setelah update WA Web, ambil ulang build VoIP resmi langsung dari bootloader endpoint WhatsApp Web:

```bash
npm run voip:fetch-wasm
```

Default-nya tidak perlu browser. Kalau suatu saat respons bootloader publik berubah, script masih bisa fallback ke sesi Chrome yang sudah login dengan `CALL_WASM_FETCH_MODE=browser` dan `--remote-debugging-port=9222`.

---

## 🔎 Query Sinkronisasi User

`WAUSync` (`USyncQuery` / `USyncUser` + protokol) memungkinkan kamu mengecek hal seperti registrasi WhatsApp, daftar perangkat, status, dan info username sebuah JID sebelum mengirim pesan — mekanisme yang sama di balik `sock.onWhatsApp()`.

```js
import { USyncQuery, USyncUser, USyncContactProtocol } from 'wanns-baileys'

const query = new USyncQuery()
    .withContext('interactive')
    .withMode('query')
    .withUser(new USyncUser().withPhone('628123456789'))

query.protocols.push(new USyncContactProtocol())

const hasil = await sock.executeUSyncQuery(query)
```

Protokol yang tersedia: `USyncContactProtocol`, `USyncDeviceProtocol`, `USyncStatusProtocol`, `USyncUsernameProtocol`, `USyncDisappearingModeProtocol`, `UsyncBotProfileProtocol`, `UsyncLIDProtocol`.

---

## 👤 Manajemen Username

Wrapper level tinggi di atas fitur username WhatsApp (handle `@username` yang bisa kamu pakai supaya nomor tidak terekspos), di atas `USyncUsernameProtocol`.

> ⚠️ **Rotasi query-ID.** Query ID GraphQL di balik panggilan-panggilan ini di-capture dari sesi WA Web live, dan WhatsApp merotasinya sewaktu-waktu. Kalau itu terjadi, panggilan gagal dengan `GraphQL server error: Bad Request` (atau `unexpected response structure`). Tidak perlu menunggu update paket — hot-patch ID yang dirotasi langsung saat runtime:
>
> ```js
> const sock = makeWASocket({
>     usernameQueryIds: { CHECK: '<id-baru>', SET: '<id-baru>' } // bisa override:
>     // CHECK, CHECK_MULTI, SET, GET, GET_RECOMMENDATIONS, PIN_SET
> })
> ```
>
> ID baru bisa di-capture dari sesi WA Web live (DevTools → Network → WS frames → cari query `xmlns="w:mex"`).

```js
// Cek ketersediaan + dapatkan saran kalau sudah dipakai
const cek = await sock.checkUsername('Wanns')
// { available: true, username: 'Wanns' }
// atau: { available: false, suggestions: [...], rejectionReasons: [...] }

// Klaim username
await sock.setUsername('Wanns', { source: sock.USERNAME_SOURCE.USER_INPUT })

// Kunci dengan PIN supaya tidak bisa diganti tanpa PIN
await sock.setUsernamePin('123456')

// Baca username sendiri / hapus
const punyaku = await sock.getMyUsername()
await sock.deleteUsername()

// Resolusi username ke JID (berbasis USync, seperti onWhatsApp() tapi via username)
const user = await sock.findUserByUsername('seseorang')
// { jid: '628...@s.whatsapp.net', contact: false }

// Resolusi massal username untuk daftar kontak yang dikenal
const usernames = await sock.fetchContactUsernames(jid1, jid2, jid3)

// Dapatkan saran dari WA sendiri (mis. untuk alur onboarding)
const rekomendasi = await sock.getUsernameRecommendations()
```

> Butuh akun tier Community/Contact dalam kondisi baik — akun yang kena pembatasan WA untuk nomor baru/belum terverifikasi bisa mendapat `INVALID` atau saran kosong terlepas dari ketersediaan username sebenarnya.

---

## 🤖 Bot Framework

Lapisan opsional level lebih tinggi di atas socket mentah: routing middleware, dispatcher `!command`, antrean pesan yang selamat dari disconnect, auto-reconnect exponential backoff, penyimpanan sesi per-JID, statistik aktivitas grup, dan helper konversi media (stiker/voice note) — supaya proyek bot baru tidak perlu bikin manajemen sesi/context dari nol setiap kali.

Butuh peer dependency `better-sqlite3` (penyimpanan sesi + statistik) dan `fluent-ffmpeg` (konversi stiker/voice note, sudah tercantum di atas) — keduanya gagal dengan petunjuk install, bukan crash, kalau kamu memakai fitur Framework yang membutuhkannya tanpa menginstall dulu.

```js
import { Bot } from 'wanns-baileys'

const bot = new Bot({
    socketConfig: { printQRInTerminal: true },
    dbPath: './bot.db',   // sesi + statistik, default 'baileys_store.db'
    enableStats: true     // leaderboard pesan/stiker grup + deteksi ghost
})

bot.command('!ping', async (ctx) => {
    await ctx.reply({ text: 'pong' })
})

bot.command('!sticker', async (ctx) => {
    if (!ctx.quoted?.imageMessage) return ctx.reply({ text: 'Reply gambar dengan !sticker' })
    // ctx.replySticker() mengurus konversi WebP untukmu
    await ctx.replySticker(bufferGambar, { packname: 'Wanns Pack', author: 'kamu' })
})

bot.onText(async (ctx) => {
    // ctx.session() / ctx.setSession() / ctx.updateSession() / ctx.clearSession()
    // menyimpan state kecil per-chat (mis. alur multi-langkah) ke SQLite otomatis
    const state = ctx.session()
    if (state?.awaitingReply) {
        ctx.updateSession((s) => ({ ...s, awaitingReply: false }))
    }
})

await bot.start()
```

`Context`, `SessionManager`, `StatsManager`, `MediaManager`, dan `SQLiteStore` juga diekspor sendiri-sendiri kalau kamu cuma butuh satu bagian, bukan class `Bot` penuh.

> File-file ini masih di-ship sebagai `.js` polos — deklarasi `.d.ts` tulisan tangan untuk modul Framework belum ditambahkan, berbeda dengan permukaan fork ini yang lain yang sudah bertipe penuh.

---

## 🧩 Modul Utilitas

<details>
<summary>📖 Buka referensi lengkap modul-utilitas (banyak konten)</summary>

<br/>

Sampel utilitas yang diekspor dari `lib/Utils` di luar builder pesan di atas:

| Modul | Fungsinya |
|---|---|
| `anti-delete` | Deteksi dan pulihkan pesan yang dihapus pengirim untuk semua orang |
| `anti-edit` | Tangkap isi pesan SEBELUM di-edit — teks before/after, riwayat revisi lengkap, edit berantai |
| `trackers` | Tracker reaksi / tanda terima / presence — siapa react apa, siapa sudah baca pesan grup, siapa online/ngetik |
| `serialize` | `serializeMessage` — objek pesan siap-bot dengan `.reply()`, `.react()`, `.download()`, quoted ke-unwrap |
| `call-guard` | Lacak panggilan masuk, auto-reject + pesan teks opsional, hitungan per penelepon, allowlist |
| `group-events` | Callback welcome/goodbye/promote/demote + log event per grup dari update grup |
| `view-once` | Deteksi, buka, dan tangkap pesan view-once sebelum hilang |
| `anti-link` | Deteksi (dan auto-hapus) link undangan grup/link apa pun di grup — allowlist chat & domain |
| `auto-read` | Auto centang-biru pesan masuk — filter grup/DM/status, allow/deny list, pause/resume |
| `afk` | Manajer AFK — tandai user pergi, tangkap @mention & reply selama pergi, auto welcome-back |
| `pairing-tools` | Siklus kode pairing — validasi/normalisasi kode custom, hitung mundur kedaluwarsa, alur sekali panggil `pairWithCode` |
| `flood-guard` | Deteksi spam per user — N pesan dalam satu jendela memicu satu alert per burst |
| `word-filter` | Moderasi kata/regex atas seluruh teks terekstrak (caption juga), auto-hapus, daftar kata runtime |
| `warn-manager` | Sistem strike — warn per user per chat, threshold, pardon, persistensi |
| `gatekeeper` | Ban user/chat dari bot; bungkus handler apa pun agar trafik banned tak pernah masuk |
| `level-system` | XP & level per user, event level-up, leaderboard global + per chat, persistensi |
| `sticker-exif` | Baca/tulis EXIF packname/author stiker di WebP murni JS — tanpa dependensi native, aman di Termux |
| `economy` | Saldo, transfer dengan fee, hadiah harian dengan bonus streak, leaderboard, persistensi |
| `group-scheduler` | Buka/tutup grup terjadwal harian ("mode malam"), filter hari |
| `verifier` | Captcha member baru grup — tantangan otomatis saat join, hook kick timeout/salah jawab |
| `command-stats` | Analitik command — command/user teratas, histogram per jam, middleware router, persistensi |
| `anti-tagall` | Tangkap spam mass-mention & hidetag tak terlihat dari member — threshold, pengecualian, auto-hapus |
| `shop` | Toko & inventory di atas economy — stok, consumable, jual balik, kirim item |
| `group-backup` | Snapshot setting + member grup ke JSON, diff dengan kondisi live, restore setting |
| `menfess` | Sesi relay DM anonim dua arah (bot "menfess") — alias, kata stop, TTL |
| `notes` | Catatan bernama per chat (`#save` / `#get`) — cari, rename, limit, persistensi |
| `birthday` | Buku ulang tahun — daftar hari ini/mendatang, ucapan otomatis sekali per tahun |
| `guess-game` | Engine tebak-tebakan — satu ronde per chat, tercepat menang, hadiah, jawaban dibuka saat timeout |
| `i18n` | Lapisan terjemahan mini — kamus, bahasa per chat, interpolasi `{var}` |
| `fancy-text` | Gaya teks Unicode untuk menu — 𝗯𝗼𝗹𝗱, 𝚖𝚘𝚗𝚘, ⓒⓘⓡⓒⓛⓔⓓ, ｆｕｌｌｗｉｄｔｈ, ꜱᴍᴀʟʟᴄᴀᴘꜱ (12 gaya) |
| `join-requests` | Auto setujui/tolak permintaan join grup — allowlist/denylist, routing manual, sweep pending |
| `session-tools` | Dokter sesi — analisis/perbaiki folder auth, export/import session-string portabel, migrasi antar backend |
| `shutdown` | Manajer shutdown rapi — creds diflush duluan, hook berurutan, tangani sinyal, jalan sekali |
| `conversation-flow` | Wizard multi-langkah per user — prompt, validasi, kata batal, timeout |
| `webhook-bridge` | POST event socket ke endpoint HTTP mana pun — tanda tangan HMAC, retry backoff |
| `wa-links` | Bangun/parse URL wa.me, undangan grup & channel; ekstrak URL dari teks |
| `media-probe` | Format + dimensi gambar murni JS (PNG/JPEG/GIF/WebP/BMP) — tanpa library gambar |
| `media-guard` | Blokir tipe media per chat ("dilarang stiker") — aturan per chat, auto-hapus |
| `health-monitor` | Kesehatan proses — memori, lag event-loop, probe custom, alert threshold |
| `text-extras` | Read-more, progress bar, durasi/ukuran manusiawi, pemenggalan, escape markdown, jarak fuzzy |
| `reminders` | "!remind 10m …" — parseDuration, timer, persistensi anti-restart (telat tetap bunyi) |
| `quota` | Jatah harian per user dengan tier — reset tengah malam, bonus, event kehabisan |
| `tiers` | Keanggotaan premium/VIP berkedaluwarsa — extend/stack, lifetime, penyapu expiry |
| `todo` | Daftar tugas bersama per chat — penanggung jawab, render ☐/☑, mention, persistensi |
| `url-watcher` | Pantau URL apa pun, alert saat konten berubah — extract view, diff SHA-256 |
| `bug-shield` | Deteksi pesan bug/crash — bom mention, zalgo, banjir karakter tak terlihat, spoof RTL; sanitizeText |
| `crash-guard` | Selamat dari exception/rejection tak tertangkap — alert owner, counter, safeStringify |
| `connection-watchdog` | Tangkap socket setengah-mati yang diam — alert stale sekali, re-arm saat aktif lagi |
| `secure-logger` | Logger pino dengan redaksi kredensial + redactSensitive() untuk objek apa pun |
| `call-log` | Riwayat panggilan + statistik per penelepon dari event `call` — hasil, durasi, persistensi |
| `always-online` | Titik hijau tetap nyala — penyegar presence dengan ganti mode live & counter gagal |
| `status-watcher` | Story sisi penerima — filter kontak, tipe media, hook download |
| `button-extras` | quickButtons, sendConfirm (ya/tidak), sendMenuButtons sekali panggil |
| `random-tools` | Notasi dadu, koin, pilihan berbobot, meter rate/"jodoh" deterministik |
| `jid-extras` | Konversi nomor↔jid, banding tanpa peduli device, cetak nomor cantik |
| `time-tools` | Waktu relatif ('5m ago'), jam, kejadian berikutnya, jendela lewat tengah malam, salam |
| `group-tools` | Helper groupMetadata murni — admin, owner, statistik, diff member, kartu info |
| `msg-tools` | messageTypeOf, info quoted, timestamp, preview pesan satu baris |
| `kv-store` | Database key-value JSON mini — namespace, counter, simpan atomik debounce |
| `warmup` | Pemanasan akun — naikkan volume kirim harian nomor baru bertahap (20→50→…→bebas) |
| `disconnect-classifier` | Error close → kategori + aksi yang disarankan (reconnect / pair ulang / stop) |
| `group-op-guard` | Tetap di bawah batas aksi grup WhatsApp (~3 add & 2 create per 10 menit) |
| `giveaway` | Undian masuk-via-keyword — undian adil, multi-pemenang, deadline, kartu status |
| `attendance` | Absen harian — jam check-in, daftar yang belum, render bernomor |
| `auction` | Lelang berwaktu — kenaikan minimum, perpanjangan anti-snipe, alert tersalip |
| `text-poll` | Polling balas-angka yang jalan di semua client — tally, bar, penanganan seri |
| `tictactoe` | Duel XO — tantang/terima, papan emoji, menang/seri/menyerah |
| `rps` | Suit batu-gunting-kertas — pilihan tersembunyi, alias Indonesia, taruhan |
| `word-games` | scrambleWord, generator soal matematika, engine "sambung kata" |
| `rental` | Sewa bot per chat — trial, peringatan kedaluwarsa, filter grup belum sewa |
| `message-counter` | Aktivitas harian per user — top chatter, rekap 🥇, riwayat harian |
| `command-lock` | Matikan command per chat/global + mode maintenance dengan bypass owner |
| `status-tools` | Auto-style status — font/warna acak untuk status teks, normalisasi media/audio (terpasang di jalur kirim status) |
| `newsletter-tools` | Operasi channel massal ber-jeda — follow/unfollow/mute banyak dengan hasil per-jid |
| `emoji-tools` | Deteksi/hitung/ekstrak/buang emoji, randomEmoji bertema |
| `array-tools` | chunk, unique-by, groupBy, sortBy, sample unik, range |
| `validate-tools` | isUrl/isEmail, parseBool id/en, clamp, ensureArray, pickFields |
| `timing-tools` | debounce, throttle, stopwatch lap, measureTime |
| `task-queue` | Job async konkuren terbatas + retry — aman untuk DM massal |
| `mask-tools` | maskPhone/maskEmail, censorText sadar batas kata |
| `math-eval` | Parser !calc AMAN (tanpa eval) + terbilang + angka Romawi |
| `chat-settings` | Toggle fitur per chat dengan default — tulang punggung !settings, kartu ✅/❌ |
| `voucher` | Buat & tukar kode (WANNS-X7K2-9QMD) — batas pakai, kedaluwarsa, sekali per user |
| `quiz` | Sesi kuis multi-soal — skor berjalan, skip, peringkat |
| `socket-preflight` | validateSocketConfig — tangkap config rusak sebelum jadi 405 misterius (otomatis di makeWASocket) |
| `group-cache` | createGroupMetadataCache — TTL-LRU untuk `cachedGroupMetadata` dengan invalidasi via event |
| `reputation` | +rep/-rep dengan cooldown per pemberi, leaderboard, kartu rep |
| `invite-tracker` | Siapa mengundang siapa — hitungan aktif-vs-total (loop join/leave tak dibayar), papan top inviter |
| `level-rewards` | attachLevelRewards — payout otomatis (saldo/tier/custom) di ambang level, sekali saja |
| `marriage` | Registri lamar/terima/cerai — monogami ketat, hari jadi, daftar pasangan |
| `ai-groups` | ⚠️ EKSPERIMENTAL: tambah/hapus Meta AI di grup, createAiGroup — digerbang server per-akun oleh rollout Meta (tanpa flag = server menolak; tidak ada verifikasi manual) |
| `auto-reply` | Engine auto-responder sederhana berbasis kata kunci/pola |
| `message-search` | Cari pesan di cache/store, membuka wrapper ephemeral/view-once dulu |
| `message-retry-manager` | Menangani protokol retry-receipt WhatsApp untuk pesan yang gagal didekripsi |
| `scheduling` | Jadwalkan pesan/aksi untuk dikirim nanti |
| `business` | Helper profil bisnis & katalog |
| `chat-control` | Helper pin, mute, arsip, dan tandai dibaca/belum |
| `chat-history-helpers` | Bekerja dengan payload riwayat chat tersinkron |
| `link-preview` | Membuat metadata preview link untuk pesan keluar |

```js
// anti-delete + anti-edit berbagi satu MessageStore
import { MessageStore, createMessageStoreHandler, createAntiDeleteUpsertHandler, createAntiEditUpsertHandler } from 'wanns-baileys'

const store = new MessageStore()
sock.ev.on('messages.upsert', createMessageStoreHandler(store))     // daftarkan DULUAN
sock.ev.on('messages.upsert', createAntiDeleteUpsertHandler(store, (info) => {
    console.log('terhapus:', info.originalMessage)                  // konten terpulihkan
}))
sock.ev.on('messages.upsert', createAntiEditUpsertHandler(store, (info) => {
    console.log(`edit #${info.editCount}: "${info.beforeText}" -> "${info.afterText}"`)
    info.history // semua revisi sebelumnya, dari yang paling lama
}))
```

```js
// tracker event — reaksi / tanda-baca / presence
import { createReactionTracker, createReceiptTracker, createPresenceTracker } from 'wanns-baileys'

const reaksi = createReactionTracker()
reaksi.bind(sock)                          // messages.reaction
reaksi.getSummary(msg.key)                 // { '👍': ['628…@s.whatsapp.net'], … }
reaksi.onReaction(({ user, emoji, removed }) => { /* update live */ })

const tandaTerima = createReceiptTracker()
tandaTerima.bind(sock)                     // message-receipt.update + messages.update
tandaTerima.getReceipts(msg.key)           // { delivered: [...], read: [...], played: [...] }
tandaTerima.isReadBy(msg.key, jid)         // user INI sudah baca?
tandaTerima.onRead(({ key, user }) => { /* sekali per pembaca */ })

const presence = createPresenceTracker()
presence.bind(sock)                        // presence.update
await sock.presenceSubscribe(jid)          // WA hanya kirim presence untuk jid yang di-subscribe
presence.isOnline(jid); presence.isTyping(jid); presence.get(jid)?.lastSeen
presence.onChange(({ user, presence }) => { /* transisi online/offline/ngetik */ })
```

```js
// toolkit bot — serializer, call guard, event grup, view-once, anti-link
import {
    serializeMessage, createCallGuard, createGroupEventsTracker,
    createViewOnceCapture, createAntiLinkGuard
} from 'wanns-baileys'

sock.ev.on('messages.upsert', async ({ messages }) => {
    const m = serializeMessage(sock, messages[0])
    if (!m || m.fromMe) return
    if (m.body === 'ping') await m.reply('pong')      // otomatis quote pesan asli
    if (m.isMedia) { const buf = await m.download() } // media jadi Buffer
    if (m.quoted) console.log('membalas:', m.quoted.body)
})

const panggilan = createCallGuard({ autoReject: true, rejectMessage: 'Bot tidak bisa angkat telepon.' })
panggilan.bind(sock)                                  // event 'call'
panggilan.onRejected(call => console.log('ditolak', call.from, call.isVideo ? '(video)' : ''))

const grup = createGroupEventsTracker()
grup.bind(sock)                                       // group-participants.update + groups.update
grup.onJoin(({ id, participants }) =>
    sock.sendMessage(id, { text: `Selamat datang ${participants.join(', ')}! 👋` }))
grup.onLeave(({ participants }) => console.log('keluar:', participants))

const brankas = createViewOnceCapture()
brankas.bind(sock)                                    // messages.upsert
brankas.onViewOnce(({ msg, unwrapped }) =>
    console.log('view-once', unwrapped.mediaType, 'dari', msg.key.remoteJid))

const antilink = createAntiLinkGuard({ autoDelete: true }) // link undangan di grup
antilink.bind(sock)
antilink.onDetected(({ chat, sender }) =>
    sock.sendMessage(chat, { text: `@${sender.split('@')[0]} dilarang share link grup!`, mentions: [sender] }))
```

```js
// auto-read, AFK & tag-all
import { createAutoRead, createAfkManager, sendMentionAll, sendHideTag } from 'wanns-baileys'

const reader = createAutoRead({ denylist: ['bos@s.whatsapp.net'] })
reader.bind(sock)                       // sisanya auto centang biru begitu masuk
reader.pause(); reader.resume()

const afk = createAfkManager()
afk.bind(sock)
afk.setAfk(sender, 'istirahat makan 🍜') // mis. dari command !afk
afk.onAfkMention(({ chat, afkUser, reason, msg }) =>
    sock.sendMessage(chat, { text: `@${afkUser.split('@')[0]} lagi AFK: ${reason}`, mentions: [afkUser] }, { quoted: msg }))
afk.onReturn(({ user, missed }) => console.log(user, 'sudah balik,', missed.length, 'ping selama pergi'))

await sendMentionAll(sock, groupJid, 'Rapat 5 menit lagi!')  // @everyone kelihatan
await sendHideTag(sock, groupJid, 'Pengumuman diam-diam')    // semua ke-ping, teks bersih

// upgrade serializeMessage: m.isViewOnce, m.viewOnce, m.expiration, m.forward(jid), m.delete()
```

```js
// pairing jadi nyaman — sekali panggil dari socket sampai terpasang
import { pairWithCode, getPairingCodeInfo } from 'wanns-baileys'

const hasil = await pairWithCode(sock, '628123456789', {
    customCode: 'abcd-efgh', // opsional — format bebas, dinormalisasi otomatis
    onCode: (code, formatted) => console.log('Masukkan di HP:', formatted)
})
if (hasil.restartRequired) { /* buat ulang socket — standar setelah pairing */ }

const info = getPairingCodeInfo(state.creds)
console.log(info.formatted, '— kedaluwarsa dalam', Math.round(info.remainingMs / 1000), 'detik')
// requestPairingCode sendiri kini juga menerima kode custom "abcd-efgh" / "ABCD EFGH"
```

```js
// paket komunitas & moderasi
import {
    createFloodGuard, createWordFilter, createWarnManager,
    createGatekeeper, createLevelSystem
} from 'wanns-baileys'

const flood = createFloodGuard({ maxMessages: 8, windowMs: 10_000 })
flood.bind(sock)
flood.onFlood(({ chat, user }) => warns.warn(user, { chat, reason: 'spam beruntun' }))

const filter = createWordFilter({ words: ['judol'], patterns: [/j\s*u\s*d\s*o\s*l/i], autoDelete: true })
filter.bind(sock)
filter.onMatch(({ chat, sender }) => warns.warn(sender, { chat, reason: 'kata terlarang' }))

const warns = createWarnManager({ threshold: 3 })
warns.onThreshold(async ({ user, chat }) => {
    await sock.groupParticipantsUpdate(chat, [user], 'remove') // tiga strike, keluar
    warns.reset(user, chat)
})

const gate = createGatekeeper()
gate.banUser('pengganggu@s.whatsapp.net', 'spam')
sock.ev.on('messages.upsert', gate.filter(async ({ messages }) => { /* hanya trafik bersih */ }))

const levels = createLevelSystem()
levels.bind(sock)
levels.onLevelUp(({ user, chat, level }) =>
    sock.sendMessage(chat, { text: `🎉 @${user.split('@')[0]} naik ke level ${level}!`, mentions: [user] }))
levels.getLeaderboard(10, chat) // top 10 di grup ini
```

```js
// branding stiker, economy, mode malam & captcha join
import {
    setStickerExif, readStickerExif, createEconomy,
    createGroupScheduler, createVerifier
} from 'wanns-baileys'

// murni JS — tanpa node-webpmux, jalan di webp statis DAN animasi
const stiker = setStickerExif(webpBuffer, { packName: 'Pack Gue', author: 'gue', emojis: ['🔥'] })
await sock.sendMessage(jid, { sticker })
readStickerExif(stiker) // { 'sticker-pack-name': 'Pack Gue', … }

const eco = createEconomy({ dailyAmount: [100, 200], streakBonus: 25, transferFee: 0.05 })
eco.claimDaily(user)          // { claimed, amount, streak } atau { remainingMs }
eco.transfer(userA, userB, 100)

const modeMalam = createGroupScheduler()
modeMalam.add({ group, action: 'close', at: '22:00' })  // hanya admin
modeMalam.add({ group, action: 'open',  at: '06:00' })  // semua bisa chat
modeMalam.start(sock)

const verifier = createVerifier({ timeoutMs: 120_000 })
verifier.bind(sock) // captcha matematika otomatis untuk member baru
verifier.onChallenge(({ chat, user, question }) =>
    sock.sendMessage(chat, { text: `👋 @${user.split('@')[0]} verifikasi: ${question}`, mentions: [user] }))
verifier.onFailed(({ chat, user }) => sock.groupParticipantsUpdate(chat, [user], 'remove'))

// upgrade router — guard & menu berkategori:
router.command('kick', handler, { adminOnly: true, category: 'Admin' })
router.command('shutdown', handler, { ownerOnly: true })         // owners: [...] di createRouter
router.command('daily', handler, { cooldownMs: 60_000, category: 'Economy' })
```

```js
// analitik, anti-tagall, toko, backup grup & menfess
import {
    createCommandStats, createAntiTagAllGuard, createShop,
    backupGroup, diffGroupBackup, restoreGroupSettings, createMenfessRelay
} from 'wanns-baileys'

const stats = createCommandStats()
router.use(stats.middleware())          // hitung setiap command yang jalan
stats.getTopCommands(5); stats.getBusiestHours()

const antiTag = createAntiTagAllGuard({ threshold: 5, autoDelete: true })
antiTag.bind(sock)
antiTag.onDetected(({ sender, hidden }) => console.log(sender, hidden ? 'hidetag!' : 'tag-all'))

const toko = createShop(eco)            // nyambung ke createEconomy()
toko.addItem({ id: 'potion', name: 'Potion', price: 250, consumable: true })
toko.buy(user, 'potion', 2); toko.useItem(user, 'potion')
eco.bet(user, 100, { winChance: 0.5, multiplier: 2 }) // upgrade economy

const backup = await backupGroup(sock, groupJid)      // setting + member, aman disimpan
const diff = await diffGroupBackup(sock, backup)      // joined/left/promoted/changed
await restoreGroupSettings(sock, backup)              // subjek, deskripsi, kunci grup

const menfess = createMenfessRelay()
menfess.bind(sock)
await menfess.start(sock, sender, targetJid, 'pesan anonim pertama')
// kedua pihak chat lewat bot sebagai Anon-1 / Anon-2 sampai kirim "stop"

// upgrade lain: verifier { challenge: 'emoji' }, rank level (Newbie→Legend)
```

```js
// catatan, ulang tahun, game, i18n, menu keren & permintaan join
import {
    createNotes, createBirthdayManager, createGuessGame,
    createI18n, styleText, createJoinRequestManager
} from 'wanns-baileys'

const notes = createNotes()
notes.set(chat, 'rules', 'Dilarang spam. Santun.')  // !save rules …
notes.get(chat, 'rules')?.content                   // !get rules

const ultah = createBirthdayManager()
ultah.set(user, { day: 17, month: 8, year: 2000, chat })
ultah.onBirthday(({ user, age, chat }) =>
    sock.sendMessage(chat, { text: `🎂 HBD @${user.split('@')[0]} (${age})!`, mentions: [user] }))
ultah.start()

const game = createGuessGame({ timeoutMs: 60_000 })
game.bind(sock)
game.start(chat, { answer: 'Jakarta', hint: 'ibukota', reward: 500 })
game.onCorrect(({ user, reward }) => eco.add(user, reward, 'menang kuis'))

const i18n = createI18n({ defaultLang: 'id' })
i18n.addLanguage('en', { greet: 'Hello {name}!' })
i18n.setChatLang(chat, 'en')                        // !lang en
i18n.tFor(chat, 'greet', { name: 'Budi' })

styleText('Menu Bot', 'bold')                       // 𝗠𝗲𝗻𝘂 𝗕𝗼𝘁

const joins = createJoinRequestManager({ denylist: [spammer] })
joins.bind(sock)                                    // event join-request live
joins.onRequest(({ user, approve, reject }) => approve())
await joins.sweep(sock, groupJid)                   // proses daftar pending

// upgrade CLI: npx wanns-baileys sticker in.webp out.webp --pack "Pack Gue" --author gue
```

```js
// perkakas sesi & sistem
import {
    analyzeAuthState, repairAuthFolder,
    exportAuthToString, importAuthFromString, migrateFolderToAuthState,
    backupAuthStateRotating, createShutdownManager
} from 'wanns-baileys'

const laporan = await analyzeAuthState('./auth')    // dokter sesi
laporan.registered; laporan.counts; laporan.corrupted
await repairAuthFolder('./auth')                    // karantina file rusak

// kirim seluruh login sebagai SATU string (pola SESSION_ID) — rahasiakan!
const sessionString = await exportAuthToString('./auth')
await importAuthFromString(sessionString, './auth') // di perangkat baru

// pindahkan sesi folder ke adapter apa pun (SQLite/Redis/Mongo/single-file):
const { state, saveCreds } = await useSQLiteAuthState('auth.db')
await migrateFolderToAuthState('./auth', state, saveCreds)

// backup terenkripsi bertimestamp yang bersih-bersih sendiri:
await backupAuthStateRotating('./auth', './backups', { password, keep: 5 })

const shutdown = createShutdownManager({ sock, saveCreds })
shutdown.register('tutup db', () => db.close())
shutdown.attach()                                   // SIGINT/SIGTERM → keluar rapi
```

```bash
# CLI: kelola sesi tanpa nulis kode
npx wanns-baileys session analyze ./auth
npx wanns-baileys session repair  ./auth
npx wanns-baileys session export  ./auth --out session.txt
npx wanns-baileys session import  session.txt ./auth-baru
```

```js
// wizard, webhook, link, perkakas media & kesehatan
import {
    createConversationFlow, createWebhookBridge, buildWaMeLink, parseWaLink,
    getImageDimensions, createMediaGuard, createHealthMonitor
} from 'wanns-baileys'

const flows = createConversationFlow()
flows.define('order', [
    { id: 'item', prompt: 'Mau pesan apa?' },
    { id: 'qty', prompt: 'Berapa banyak?', validate: t => /^\d+$/.test(t) || 'Angka saja!' }
])
flows.bind(sock)
await flows.start(sock, chat, sender, 'order')   // mis. dari command !order
flows.onComplete(({ answers }) => console.log(answers.qty, 'x', answers.item))

const bridge = createWebhookBridge('https://server.gue/hook', { secret, retries: 2 })
bridge.bind(sock)                                // pesan → backend/n8n lu

buildWaMeLink('+62 812-3456-7890', 'Halo!')      // https://wa.me/62812…?text=Halo%21
parseWaLink('https://chat.whatsapp.com/AbC…')    // { type: 'group-invite', code }

getImageDimensions(buffer)                       // { format: 'png', width, height }

const media = createMediaGuard({ blocked: ['sticker'], autoDelete: true })
media.bind(sock)                                 // "dilarang stiker di grup ini"

const health = createHealthMonitor({ thresholds: { heapUsedMb: 400, eventLoopLagMs: 200 } })
health.onAlert(({ metric, value }) => sock.sendMessage(owner, { text: `⚠️ ${metric}: ${value}` }))
health.start()
```

```js
// pengerasan keamanan & stabilitas
import {
    createBugShield, sanitizeText, installCrashGuard,
    createConnectionWatchdog, createSecureLogger,
    exportAuthToString, checkAuthPermissions, hardenAuthFolder, autoReconnect
} from 'wanns-baileys'

const shield = createBugShield({ autoDelete: true })   // anti pesan bug
shield.bind(sock)
shield.onDetected(({ sender, reasons }) => gate.banUser(sender, reasons.join(',')))
sanitizeText(teksKotor)                                // buang RTLO/zalgo/banjir invisible

installCrashGuard({                                     // bot tak pernah mati diam-diam
    onError: ({ type, error }) =>
        sock.sendMessage(owner, { text: `💥 ${type}: ${error?.message}` }).catch(() => {})
})

const watchdog = createConnectionWatchdog({ staleMs: 5 * 60_000 })
watchdog.bind(sock)
watchdog.onStale(() => sock.end(new Error('koneksi basi'))) // auto-reconnect ambil alih
watchdog.start()

const logger = createSecureLogger()                     // kredensial TAK PERNAH masuk log
const sock2 = makeWASocket({ auth: state, logger })

await exportAuthToString('./auth', { password })        // export WANNSSESS2 terenkripsi AES
await hardenAuthFolder('./auth')                        // chmod 700/600 semuanya
await checkAuthPermissions('./auth')                    // audit kebocoran izin file

autoReconnect(factory, {
    onGiveUp: ({ reason, attempts }) => kabariOwner(reason) // baru: hook nyerah + getStatus()
})
```

```js
// kartu WANNS AI dari markdown, perkakas panggilan, presence & pintasan button
import { AIRich, createCallLog, createCallGuard, createAlwaysOnline,
         createStatusWatcher, quickButtons, sendConfirm } from 'wanns-baileys'

// satu kartu AI utuh dari string markdown (heading/kode/tabel otomatis)
await AIRich.fromMarkdown('# Laporan\n\n```js\nconst x = 1\n```\n\n| A | B |\n|---|---|\n| 1 | 2 |', sock).send(jid)
new AIRich(sock).addChecklist([{ text: 'sudah', done: true }, 'belum'])
    .addKeyValue({ Nama: 'WANNS', Versi: '2.4.5' })
    .addProgressBar('Unduhan', 70, 100)

const callLog = createCallLog()                // siapa nelpon, hasil, durasi
callLog.bind(sock)
createCallGuard({                              // jam tenang + blokir keras
    autoReject: true,
    schedule: { from: '22:00', to: '06:00' },  // tolak hanya malam hari
    denylist: [pengganggu]                     // …kecuali mereka: selalu
}).bind(sock)

createAlwaysOnline(sock).start()               // titik hijau nyala terus
const statuses = createStatusWatcher()         // simpan story kontak
statuses.bind(sock)
statuses.onStatus(({ download }) => download())

await sendConfirm(sock, jid, 'Hapus semua data?')           // confirm_yes/confirm_no
await sendButtons(sock, jid, { text: 'Pilih', buttons: quickButtons(['A', 'B']) })

// ronde 50+ — perkakas harian:
import { rollDice, matchScore, phoneToJid, prettyPhone, formatRelative,
         getGroupAdmins, diffParticipants, summarizeMessage, createKVStore } from 'wanns-baileys'

rollDice('2d6+3')                       // { rolls: [4, 2], total: 9 }
matchScore('budi', 'ani')               // 0-100, "jodoh meter" deterministik
phoneToJid('+62 812-3456-7890')         // 6281234567890@s.whatsapp.net
prettyPhone('6281234567890')            // +62 812-3456-7890
formatRelative(msg.timestamp)           // '5m ago'
getGroupAdmins(await sock.groupMetadata(jid))
summarizeMessage(msg)                   // '📷 image: caption…' buat log

const db = await createKVStore('./botdata.json')   // DB persisten mini
db.namespace('settings').set(jid, { welcome: true })

// paket anti-ban — nomor baru, aksi grup aman, reconnect cerdas
import { createAccountWarmup, classifyDisconnect, explainDisconnect,
         createGroupOpGuard, randomGaussian, createPresenceCycler } from 'wanns-baileys'

const warmup = createAccountWarmup({ startedAt: loginPertamaTs })
if (warmup.trySend().allowed) await sock.sendMessage(jid, content)
// hari 1 → 20 pesan, lalu 50, 100, 200, 400, 800, bebas

sock.ev.on('connection.update', ({ connection, lastDisconnect }) => {
    if (connection !== 'close') return
    const verdict = classifyDisconnect(lastDisconnect)
    verdict.shouldReconnect ? restart() : console.log(explainDisconnect(lastDisconnect))
    // 🔑 [auth 401] Keluar dari HP — sesi hilang, pairing ulang.
})

const ops = createGroupOpGuard()
const safe = ops.wrap(sock)                        // otomatis dijaga
await safe.groupParticipantsUpdate(jid, users, 'add') // throw kalau lewat ~3 add/10 menit

await sleep(randomGaussian(2000, 600, { clamp: [500, 5000] })) // jeda ala manusia
createPresenceCycler(sock, { chats: [ownerJid] }).start()      // aktivitas opt-in

// acara komunitas — giveaway, absen, lelang, polling
import { createGiveaway, createAttendance, createAuction, createTextPoll } from 'wanns-baileys'

const giveaway = createGiveaway({ keyword: 'ikut' })
giveaway.bind(sock)
giveaway.start(chat, { prize: 'Voucher 50k', durationMs: 3600_000, winners: 2 })
giveaway.onEnd(({ winners }) => umumkan(winners))        // adil, RNG bisa diinjeksi

const absen = createAttendance()
absen.bind(sock)
absen.open(chat, { title: 'Absen Pagi 🌞' })             // member ketik "absen"
await sock.sendMessage(chat, { text: absen.render(chat), mentions: absen.getMentions(chat) })

const lelang = createAuction()
lelang.start(chat, { item: 'Akun ML', startBid: 50_000, minIncrement: 5_000, antiSnipeMs: 30_000 })
lelang.bid(chat, user, 60_000)                           // → accepted / too-low / already-leading
lelang.onEnd(({ winner, amount }) => terjual(winner, amount))

const polls = createTextPoll()
polls.bind(sock)                                          // vote = balasan angka "1".."9"
polls.start(chat, { question: 'Mabar jam?', options: ['19:00', '20:00', '21:00'] })
polls.onEnd(({ results }) => sock.sendMessage(chat, { text: polls.formatResults(results) }))

// paket game — duel & permainan kata
import { createTicTacToe, createRPS, scrambleWord, generateMathProblem,
         createWordChain } from 'wanns-baileys'

const ttt = createTicTacToe()
ttt.challenge(chat, penantang, lawan); ttt.accept(chat, lawan)
ttt.play(chat, user, 5)                      // kotak 1-9 → next/menang/seri
await sock.sendMessage(chat, { text: ttt.render(chat) }) // papan emoji ❌⭕3️⃣

const suit = createRPS()
suit.challenge(chat, a, b, { bet: 5000 }); suit.accept(chat, b)
suit.pick(chat, a, 'batu')                   // pilihan tetap rahasia
suit.onResult(({ winner, loser, bet }) => eco.transfer(loser, winner, bet))

game.start(chat, { answer: scrambleWord('bandung') })       // acak kata
game.start(chat, generateMathProblem('hard'))               // 17 × 8 - 24 = ?
const sambung = createWordChain()                           // sambung kata
sambung.start(chat, { firstWord: 'makan' })
await sambung.play(chat, user, 'nasi')       // ✅ n… — skor = panjang kata

eco.rob(maling, korban)  // upgrade: rampok dompet — uang bank tetap aman

// operasional bisnis bot — sewa, aktivitas, kunci
import { createRentalManager, createMessageCounter, createCommandLock } from 'wanns-baileys'

const sewa = createRentalManager()
sewa.add(groupJid, { days: 30 }); sewa.startTrial(grupBaru, { days: 3 })
sock.ev.on('messages.upsert', sewa.filter(handler))   // grup belum sewa diabaikan
sewa.onExpiring(({ chat }) => ingatkan(chat))          // pengingat perpanjang (24 jam)
sewa.onExpire(({ chat }) => sock.groupLeave(chat))
sewa.startSweeper()

const counter = createMessageCounter()
counter.bind(sock)
counter.renderDigest(chat)   // 🥇 @user — 42 pesan (top chatter harian)

const locks = createCommandLock({ owners: [ownerJid] })
locks.lock(chat, 'slot'); locks.lockGlobal('rob')
router.use(locks.middleware())                         // diblokir sebelum handler jalan
locks.setMaintenance(true, { message: '🛠️ maintenance' }) // owner tetap lolos

// SAPUAN UPGRADE BESAR (36 upgrade di seluruh toolkit):
// kv TTL + getOrSet · pin catatan 📌 · prioritas todo 🔴🟡 · pengingat
// berulang · warns.renderList · eco.getEconomyStats + eco.work() kerja ·
// shop.renderCatalog · tiers.extendAll (kompensasi downtime) ·
// quota.renderStatus · PRESTIGE level ⭐ · guess.revealHint('j_k__t_') ·
// rekor menang/kalah ttt + leaderboard · suit best-of-3 · syarat ikut
// giveaway (canJoin) · streak absen · harga beli-langsung lelang ·
// poll renderLive bar · menfess.listActiveSessions · afk.renderAfkList ·
// shield.getReasonStats · gate.banMany (bersih-bersih raid) · warmup.skip ·
// opGuard.waitAndAssert · watchdog autoRestart · sparkline kesehatan ▁▅▃█ ·
// command tersembunyi router + ctx.quotedText · i18n.addLanguages ·
// stats.renderTop · m.timestampMs · tag-all dipecah utk grup raksasa ·
// isForwarded/getForwardInfo · rental.renderList
//
// RONDE HUNT/UPDATE (ekosistem fork tuntas disapu — 0 gap tersisa):
// Versi WA → live 2.3000.1048680055 · backWords flow ('kembali' mundur) ·
// polling kondisional ETag/304 url-watcher · timeout probe health ·
// throttle alert crash-guard · batas body webhook · link bisnis
// wa.me/message/CODE · formatParticipantChanges(➕➖⬆️⬇️) · boxText('MENU') ╔═╗ ·
// reminders.renderList

// upgrade conversation-flow: langkah pilihan
flows.define('order', [{ id: 'size', prompt: 'Ukuran:', choices: ['S', 'M', 'L'] }])
// dirender bernomor; jawaban diterima via teks ATAU angka
// CLI: npx wanns-baileys wa → versi paket + versi WA Web bawaan

// +18 upgrade: titleCase/slugify/generateId, shop.updateItem, notes.exportText,
// warns.getTop, stats.getTopChats, i18n.formatNumber/formatDate, levels.getRankPosition,
// quota.getAllUsage, tiers.renderStatus, birthday.renderUpcoming, guess.startNumberGame,
// flood.getTopFlooders, gate.listBans, health.setThreshold, watchdog.getReport

// 10 upgrade lain: ban sementara gate.banUser(jid, r, { expiresInMs }),
// flood autoMuteMs + isMuted, eco.applyInterest(0.01) bunga bank,
// item toko maxPerUser, warns.decay(30 hari), levels.setMultiplier(2) event XP,
// quota.setLimit live, tiers.getExpiring(3 hari) cron perpanjangan,
// reminders.snooze(id, 10m), todos.setDue + getOverdue (⏰ di render)
```

#### Helper metadata grup / komunitas (v2.4.7)

```js
import { extractLIDPNPairs, GROUP_PARTICIPANTS_CHUNK_SIZE } from 'wanns-baileys'

// Semua pasangan LID↔PN yang sudah dibawa oleh satu kali fetch metadata —
// ternormalisasi + tanpa duplikat. Socket kini menyimpannya otomatis pada
// groupMetadata() / groupFetchAllParticipating() / communityMetadata(), jadi
// getLIDForPN() dan getPNForLID() langsung mengenali anggota grup tanpa
// round-trip USync tambahan.
const meta = await sock.groupMetadata(jid)
extractLIDPNPairs(meta)        // [{ lid: '999@lid', pn: '628…@s.whatsapp.net' }, …]
extractLIDPNPairs(cachedMeta)  // murni + aman-null — bisa untuk metadata cache

GROUP_PARTICIPANTS_CHUNK_SIZE  // 25 — array peserta dipecah per ukuran ini
```

> Ikut diperbaiki di v2.4.7: metadata grup tidak lagi mengembalikan `NaN` untuk
> `subjectTime` / `creation` / `descTime` saat WhatsApp tidak mengirimnya (sekarang
> `undefined`, jadi tidak tersimpan sebagai `null`), dan metadata komunitas akhirnya
> melaporkan `addressingMode` serta menghormati atribut `size` dari server — keduanya
> sebelumnya berbeda hasil dari parser grup untuk payload yang sama.

#### Helper notifikasi grup `w:gp2` (v2.4.7)

```js
import { resolveNotificationActors, extractNotificationLIDPNPairs,
         parseNotificationParticipants } from 'wanns-baileys'

// Siapa pelakunya dan siapa targetnya — diselesaikan sebagai SATU KESATUAN. Sebelum
// v2.4.7 kedua sisinya jatuh ke fallback secara terpisah, jadi permintaan gabung bisa
// melaporkan LID pemohon berdampingan dengan nomor telepon admin.
const actors = resolveNotificationActors(notificationNode, actionChild)
// { actingLid, actingPn, actingUsername, affectedLid, affectedPn, affectedIsActor }

parseNotificationParticipants(actionChild)        // bentuk messageStubParameters
extractNotificationLIDPNPairs(node, actionChild)  // [{ lid, pn }] — hanya pasangan konsisten

// Socket kini menyimpan pasangan itu otomatis pada setiap notifikasi grup, dan pasangan
// basi bisa dihapus setelah event ganti nomor:
await sock.signalRepository.lidMapping.removeMapping('628…@s.whatsapp.net')
```

#### Helper koneksi media & daftar perangkat (v2.4.7)

```js
import { parseMediaConnNode, isMediaConnExpired, MEDIA_CONN_DEFAULT_TTL,
         dedupeJidsByUser, dedupeDeviceList } from 'wanns-baileys'

// Handshake <media_conn>, diurai dengan aman. Sebelum v2.4.7 `ttl` yang hilang atau
// bukan angka menjadi NaN, dan `now - fetchDate > NaN * 1000` selalu false — jadi
// koneksi upload tak pernah di-refresh lagi dan terus memakai token auth basi.
const media = parseMediaConnNode(mediaConnNode)
// { hosts, auth, ttl, fetchDate } — ttl tak pernah NaN; jatuh ke 300 detik
MEDIA_CONN_DEFAULT_TTL              // 300

isMediaConnExpired(media)           // false selama masih segar
isMediaConnExpired({ ttl: NaN })    // true — apa pun yang tak terpakai dianggap kedaluwarsa

// Dedup yang mempertahankan urutan, dipakai fan-out perangkat USync. Mengirim pesan
// ke nomor sendiri dulu mendata (dan mengenkripsi ke) setiap perangkat Anda dua kali.
dedupeJidsByUser([{ jid: a }, { jid: a }, { jid: b }])   // → [a, b]
dedupeDeviceList(devices)  // kunci: user + indeks device; `u@s` === `u:0@s`
```

#### Membaca error USync (v2.4.7)

```js
import { extractUSyncErrors, hasUSyncQueryError, USyncQuery, USyncUser } from 'wanns-baileys'

const result = await sock.executeUSyncQuery(
    new USyncQuery().withContactProtocol().withUsers(
        new USyncUser().withPhone('+628111'),
        new USyncUser().withPhone('+628222')
    )
)

// Sebelum v2.4.7 query yang ditolak ("rate overlimit") terurai jadi list kosong yang
// persis sama dengan "tidak ada yang cocok". Kini error server ikut di hasil.
result.errors            // [{ code: 479, text: 'rate overlimit' }]
hasUSyncQueryError(result.errors)   // true -> seluruh query gagal, jangan percaya `list`
                                    // false -> hanya user tertentu yang gagal (entri punya `jid`)

extractUSyncErrors(rawIqNode)       // ekstraksi yang sama, mandiri dan null-safe

// onWhatsApp() kini benar-benar menerima argumen @lid (dulu dibuang diam-diam), selalu
// mengembalikan array, dan memberi tahu LID asal setiap entri:
await sock.onWhatsApp('628111@s.whatsapp.net', '99887766@lid')
// [{ jid: '628111@s.whatsapp.net', exists: true, lid: undefined }, …]
```

#### Helper kamus store & daftar peserta (v2.4.7)

```js
import { makeOrderedDictionary } from 'wanns-baileys'
import { upsertParticipants, removeParticipants, setParticipantsAdmin } from 'wanns-baileys'

// Memulihkan snapshot dulu mengganti array tapi tidak indeks id-nya, jadi setiap pesan
// kembali dalam keadaan tak terlihat oleh get() dan upsert ulang malah menambah duplikat.
const dict = makeOrderedDictionary(m => m.key.id)
dict.fromJSON(JSON.parse(snapshot))
dict.get('AAA')          // pesan yang dipulihkan, bukan undefined
dict.update(versiBaru)   // true kalau benar-benar ter-update (dulu selalu false)
dict.has('AAA')          // baru di v2.4.7
dict.size()              // baru di v2.4.7

// Mutasi daftar peserta: mempertahankan urutan, tidak memutasi input, dan mencocokkan
// orang lewat `id` ATAU `phoneNumber` (dua sisi pasangan LID<->PN = anggota yang sama).
upsertParticipants(list, [{ id: '2@lid' }])        // merge, tidak pernah duplikat
setParticipantsAdmin(list, [{ id: '1@lid' }], null) // demote -> admin: null (bukan false)
removeParticipants(list, [{ phoneNumber: '628…@s.whatsapp.net' }])
```

#### Round-trip repositori label (v2.4.7)

```js
import { ObjectRepository } from 'wanns-baileys'

// toJSON() menghasilkan array, tapi constructor-nya hanya paham map { id: entity }, jadi
// memasukkan snapshot kembali menghasilkan entri ber-key '0', '1', … dan semua label hilang.
const labels = new ObjectRepository({ L1: { id: 'L1', name: 'Work' } })
const restored = ObjectRepository.fromJSON(JSON.parse(JSON.stringify(labels)))
restored.findById('L1')   // { id: 'L1', name: 'Work' } — bukan undefined
restored.hasId('L1')      // baru di v2.4.7
restored.load([{ id: 'L2', name: 'Family' }])
restored.clear()
```

#### Klasifikasi daftar chat (v2.4.7)

```js
import { classifyMessage, isMissedCallMessage, MISSED_CALL_STUB_TYPES } from 'wanns-baileys'

// Sebelum v2.4.7 panggilan tak terjawab tak pernah bisa jadi pesan "nyata" — cek konten
// ikut di-AND ke cabang stub — jadi chat-nya tak pernah naik ke atas daftar.
classifyMessage(missedCallStub, meId)
// { isReal: true, isStub: true, isMissedCall: true, isAboutMe: false,
//   incrementsUnread: false, contentType: undefined }

classifyMessage(textMessage, meId).contentType   // 'conversation'
isMissedCallMessage(msg)                         // true untuk 4 stub panggilan tak terjawab
MISSED_CALL_STUB_TYPES                           // tabelnya sendiri
```

#### Membaca `messageStubParameters` (v2.4.7)

```js
import { parseStubParticipant, stubParticipantIdentities, stubParticipantsInclude } from 'wanns-baileys'

// Parameter stub bentuknya tak seragam: pasangan JSON untuk sebagian tipe, jid polos untuk lainnya.
parseStubParticipant('{"lid":"1@lid","pn":"2@s.whatsapp.net"}')  // { lid, pn }
parseStubParticipant('628111@s.whatsapp.net')                    // { phoneNumber }
stubParticipantIdentities(p)   // semua jid yang bisa dipakai menyapa orang ini

// "Apakah salah satunya saya?" — cek lid DAN pn, jadi grup ber-LID ikut cocok.
stubParticipantsInclude(msg.messageStubParameters, sock.user.id, sock.user.lid)
```

> Permintaan gabung lewat invite link kini juga memancarkan `group.join-request` (dulu
> hanya varian admin-add), jadi `createJoinRequestManager()` bisa melihatnya.

```js
// ronde 20+: perkakas teks, pengingat, jatah, tier, todo & lainnya
import {
    readMore, progressBar, formatDuration, chunkText, similarity,
    parseDuration, createReminderManager, createQuotaManager,
    createTierManager, createTodoList, createUrlWatcher, getZodiac
} from 'wanns-baileys'

readMore('Promo!', 'detail panjang…')     // tersembunyi di balik "Baca selengkapnya"
progressBar(70, 100)                      // ███████░░░ 70%
formatDuration(93_784_000)                // 1d 2h 3m
chunkText(teksPanjang, 4000)              // pecah sesuai batas WA

const reminders = createReminderManager()
reminders.add({ chat, user, text: 'angkat gorengan', inMs: parseDuration('10m') })
reminders.onDue(({ chat, user, text }) =>
    sock.sendMessage(chat, { text: `⏰ @${user.split('@')[0]} ${text}`, mentions: [user] }))

const tiers = createTierManager()
tiers.setTier(user, 'premium', { days: 30 })
const quota = createQuotaManager({ defaultLimit: 20, limits: { premium: 200 } })
if (!quota.consume(sender, tiers.getTier(sender)?.name).allowed) return ctx.reply('Jatah habis!')

const todos = createTodoList()
todos.add(chat, 'bayar wifi', { assignee: member })
await sock.sendMessage(chat, { text: todos.render(chat), mentions: todos.mentions(chat) })

const watcher = createUrlWatcher('https://api.contoh.com/status.json', { intervalMs: 60_000 })
watcher.onChange(({ body }) => sock.sendMessage(owner, { text: `🔔 berubah: ${body.slice(0, 300)}` }))
watcher.start()

// upgrade: eco.deposit/withdraw + eco.getRank, levels.renderRankCard,
// router { onUnknownCommand } + router.remove, i18n.tn bentuk jamak,
// styleText 'negativeSquared'/'boldFraktur', getZodiac(17, 8) → 'Leo',
// hint "dikit lagi!" guess-game, formatHealthSnapshot buat DM owner
```
| `stickerpack` | Bangun dan kirim paket stiker (termasuk animasi/Lottie) |
| `templates` | Helper pesan template WhatsApp Business lama |
| `vcard` | Bangun payload vCard (kartu kontak) |
| `status` | Posting dan kelola update Status WhatsApp |
| `event-buffer` | Buffer/gabungkan event socket bervolume tinggi untuk bot berat |
| `doctor` | `checkEnvironment()` / `printEnvironmentReport()` — diagnosa lingkungan sekali panggil |

Setiap modul di atas punya `.d.ts` pasangan, jadi editormu menampilkan dokumentasi hover lengkap apa pun yang kamu import.

</details>

<div align="right"><a href="#top">⬆ kembali ke atas</a></div>

---

## 🛠 Lingkungan yang Direkomendasikan

| Kebutuhan | Versi |
|---|---|
| Node.js | 20+ |
| Sistem modul | ESM |
| WhatsApp | Multi Device terbaru |

---

## 📘 Dukungan TypeScript

`.d.ts` penuh: setiap file `.js` yang di-ship punya deklarasi TypeScript pasangan (dijaga `tests/types-parity.test.js`), dan seluruh paket terverifikasi nol error di bawah `tsc --strict`. `import { ... } from 'wanns-baileys'` ter-resolve tanpa paket `@types/` tambahan (selain `@types/node` standar yang dimiliki semua proyek TS Node): `makeWASocket` termasuk method username dan konstanta `USERNAME_*`, semua definisi `Types/*`, `WAProto`, store, `Utils/*`, builder pesan (`Button`, `Poll`, `Carousel`, `AIRich`, `A2UI`, … dengan tipe node Bloks), Bot Framework (`Bot`, `Context`, …), dan klien VoIP (`VoipClient`, `ActiveCall`, …). Payload wire kompleks bertipe record longgar di bagian yang WhatsApp tidak mempublikasikan skemanya.

---

## ❓ FAQ & Troubleshooting

<details>
<summary><b>Koneksi terus putus / reconnect loop</b></summary>
<br/>

Cek `connection.update` untuk field `lastDisconnect.error`. Kalau status code-nya `401` (loggedOut), sesi memang sudah invalid dan perlu scan ulang QR — jangan auto-reconnect di kondisi ini. Untuk status lain (`428`, `440`, dsb.), reconnect dengan backoff biasanya cukup.

</details>

<details>
<summary><b>QR tidak muncul / tidak ke-scan</b></summary>
<br/>

Di upstream Baileys `printQRInTerminal` sudah dihapus, tapi di paket ini opsi tersebut **berfungsi lagi** — QR digambar otomatis oleh renderer bawaan (vendored [qrcodegen](https://github.com/nayuki/QR-Code-generator), tanpa dependency tambahan). Bisa juga render manual dari event `qr` dengan `renderQRToTerminal(qr)` / `qrToSVG(qr)` / `qrToPNG(qr)` / `qrToMatrix(qr)`. Kalau QR muncul tapi gagal linking, biasanya karena versi WA Web (`version` di `makeWASocket`) sudah kedaluwarsa; fetch versi terbaru lewat `fetchBestWaVersion()` (chain: sw.js WA → fork baileys → fallback). Framework `Bot` sudah melakukannya otomatis tiap `start()`/reconnect (matikan dengan `versionCheck: false`). QR kelihatan "kebalik" di terminal tema terang? Pakai `renderQRToTerminal(qr, { inverted: true })`.

</details>

<details>
<summary><b>Error "Bad MAC" / pesan gagal didekripsi</b></summary>
<br/>

Umumnya terjadi kalau folder auth state korup atau sesi dipakai di lebih dari satu proses secara bersamaan. Pastikan hanya satu instance yang menulis ke folder auth state yang sama, dan pertimbangkan `pruneStaleAuthFiles()` untuk membersihkan sender-key lama secara berkala.

</details>

<details>
<summary><b>Memory terus naik di bot yang jalan lama</b></summary>
<br/>

Kalau pakai `makeInMemoryStore()`, cache chat/message/contact akan terus tumbuh tanpa batas. Untuk bot yang jalan lama, pertimbangkan pindah ke salah satu backend `makePersistentStore()` (SQLite/Redis/dst) dan pakai `event-buffer` untuk meredam lonjakan event di trafik tinggi.

</details>

<details>
<summary><b>Voice call gagal connect</b></summary>
<br/>

Fitur ini masih experimental dan butuh peer dependency `@roamhq/wrtc` — pastikan sudah terinstall dan platform kamu didukung native binding-nya. Cek event `call.on('ended', reason => ...)` untuk detail penyebab gagalnya.

</details>

<details>
<summary><b>Fitur media error / "ffmpeg not found"</b></summary>
<br/>

Jalankan `printEnvironmentReport()` (lihat [doctor](#cek-lingkunganmu-doctor)) — dia menunjukkan persis apa yang kurang. Untuk ffmpeg: di server `npm i ffmpeg-static`, di Termux `pkg install ffmpeg` — dua-duanya auto-terdeteksi tanpa konfigurasi.

</details>

<details>
<summary><b>Banner startup mengganggu / mau dimatikan</b></summary>
<br/>

Banner adalah bagian dari identitas paket ini dan tampil sekali per proses. Dirancang supaya tidak mengganggu: di terminal interaktif tampil banner penuh; di log CI/pm2/pipe menyusut jadi satu baris teks polos (tanpa kode ANSI, jadi pipeline log JSON/terstruktur tidak pernah rusak). `NO_COLOR=1` menghilangkan pewarnaan, bukan banner-nya.

Sejak v2.4.3 banner sekaligus jadi kartu kesehatan startup — wordmark gradien plus panel info berbingkai: versi paket, versi WA Web bawaan, node/platform/pid, dan tagline harian yang berganti:

```text
       ██╗   █████╗   ██████╗
       ██║  ██╔══██╗  ██╔══██╗
       ██║  ███████║  ██████╔╝
  ██   ██║  ██╔══██║  ██╔═══╝
  ╚█████╔╝  ██║  ██║  ██║
   ╚════╝   ╚═╝  ╚═╝  ╚═╝

  ╭────────────────────────────────────────────────────────────────╮
  │ wanns-baileys v2.4.5   ● typed · extended · battle-tested    │
  │ WA Web 2.3000.1048680055   node 20.20.2 · linux/x64 · pid 1472 │
  │ ⚡ anti-ban toolkit   🛡️ bug-shield   📚 github.com/Plenger-final/wanns-baileys │
  ╰────────────────────────────────────────────────────────────────╯
   "from Termux to production."  — Made with 🍃 by Wanns
```

</details>

---

## 🤝 Kontribusi

Kontribusi dipersilakan, terutama untuk perbaikan bug, dokumentasi, dan enhancement pada `MessageBuilder` / `AIRich`.

1. Fork repo ini, buat branch dari `main` (`feat/nama-fitur` atau `fix/nama-bug`)
2. Pastikan perubahan tetap ESM-only dan menyertakan/menyesuaikan `.d.ts` terkait
3. Uji perubahan pada minimal satu jalur auth state + satu store backend sebelum PR
4. Buka Pull Request dengan deskripsi singkat: apa yang berubah dan kenapa

Untuk laporan bug, sertakan versi Node.js, cara reproduksi, dan potongan log `lastDisconnect.error` bila relevan — atau lebih baik lagi, lampirkan output `printEnvironmentReport()` dan `monitor.getDebugInfo()` (dua-duanya aman, rahasia sudah diredaksi otomatis).

---

## 🙏 Kredit

Dibangun di atas pundak komunitas open-source WhatsApp.

Detail lengkap dan ketentuan lisensi per komponen: lihat [`NOTICE.md`](./NOTICE.md).

---

## 👑 Maintainer

<table>
<tr>
<td width="180" align="center">
<img src="https://github.com/Plenger-final.png" width="160" alt="Avatar Wanns" style="border-radius:50%"/>
</td>
<td>

**Wanns**

- GitHub: [github.com/Plenger-final](https://github.com/Plenger-final)
- Paket: [`wanns-baileys`](https://www.npmjs.com/package/wanns-baileys)
- ✦ Merawat fork ini sendirian — issue & PR dipersilakan dan direview langsung.

</td>
</tr>
</table>

---

## 📝 Arsip Catatan Rilis

> Riwayat lengkap tiap versi ada di [CHANGELOG.md](./CHANGELOG.md). Di bawah ini ringkasan rilis-rilis sebelumnya.

<details>
<summary>🗂️ Buka ringkasan rilis lama (v2.4.2 & v2.4.3)</summary>

<br/>

### v2.4.3

- **Acara komunitas**: `createGiveaway` (undian adil), `createAttendance` (absen + streak), `createAuction` (anti-snipe + beli-langsung), `createTextPoll` (polling balas-angka, jalan di semua client).
- **Game**: `createTicTacToe` (rekor + leaderboard), `createRPS` (suit, pilihan rahasia, best-of-N), `createWordChain` (sambung kata), `scrambleWord`, `generateMathProblem`.
- **Bisnis bot**: `createRentalManager` (sewa per chat, trial sekali seumur hidup, filter grup belum-sewa), `createMessageCounter` (rekap harian 🥇), `createCommandLock` (+mode maintenance dengan bypass owner).
- **Ekosistem fork tuntas disapu** (upstream rc14 + 8 fork hidup di-download & di-diff API-nya — nol gap tersisa): diambil `status-tools` (status teks auto-bergaya, terpasang di jalur kirim status) dan `newsletter-tools` (batch follow/unfollow/mute ber-jeda).
- **Grup AI (eksperimental, digerbang server)**: `addAiBotToGroup` / `createAiGroup` — Meta AI di grup; diterima/tidaknya tergantung rollout per-akun dari Meta, penolakan muncul sebagai kode status.
- **Sapuan 36 upgrade** di seluruh toolkit (kv TTL, pin catatan, pengingat berulang, economy `work()`/`rob()`/bunga, PRESTIGE level ⭐, `revealHint`, ban sementara, `waitAndAssert`, watchdog `autoRestart`, sparkline, `ctx.quotedText`, polling ETag, throttle alert, `boxText`, dll) + 9 lanjutan.
- **Banner startup v2**: kartu kesehatan berbingkai (versi paket + WA Web, node/platform/pid, tagline harian).
- Versi WA Web → live `2.3000.1048680055`; CLI dapat `wa` dan `sticker`.

### v2.4.2

- **Paket anti-ban**: `createAccountWarmup` (ramp harian 20→50→…→bebas), `classifyDisconnect`/`explainDisconnect`, `createGroupOpGuard` (~3 add/2 create per 10 menit + `wrap(sock)`), jitter Gaussian, `createPresenceCycler` opt-in.
- **Keamanan & stabilitas**: `createBugShield` (bom mention/zalgo/RTLO + `sanitizeText`), `createSecureLogger` + `redactSensitive`, string sesi terenkripsi `WANNSSESS2`, `hardenAuthFolder`, `installCrashGuard` + `safeStringify`, `createConnectionWatchdog`.
- **Perkakas sesi & DB**: `analyzeAuthState` (dokter sesi), `repairAuthFolder`, export/import sesi portabel, `migrateFolderToAuthState`, `backupAuthStateRotating`, `createShutdownManager`, command CLI `session`.
- **Moderasi & komunitas**: flood/word-filter/warn/gatekeeper/level/quota/tier/economy+shop/command-stats/anti-tagall/verifier/join-requests/group-backup/menfess.
- **Toolkit bot**: `serializeMessage`, call guard + call log, group events, toolkit view-once, anti-link, anti-delete/edit, tracker reaction/receipt/presence, auto-read, AFK, tag-all/hidetag, pairing tools (`pairWithCode`), guard router, conversation flows, webhook bridge, health monitor, i18n, fancy-text — total 140+ modul utilitas.
- **EXIF stiker murni JS** — dependensi `node-webpmux` dihapus; branding stiker jalan di Termux; command CLI `sticker`.

</details>

<div align="right"><a href="#top">⬆ kembali ke atas</a></div>

---

## ⚠️ Disclaimer

Proyek ini adalah fork independen.
Gunakan dengan bertanggung jawab dan patuhi Ketentuan Layanan WhatsApp.

---

<div align="center">

Dibuat dengan 🍃 oleh **WANNS**

Terima kasih sudah mampir, sampai jumpa 👋

<a href="#top">⬆️ Kembali ke atas</a>

</div>



## 💡 Additional Feature Examples (v1.2.1)

### 1. Built-in Custom Pairing Code & Auto-Follow Channel
```javascript
import { makeWASocketAuto, useMultiFileAuthState, autoReconnect } from "wanns-baileys";

const { state, saveCreds } = await useMultiFileAuthState("./sesi");

const sock = await makeWASocketAuto({
    auth: state,
    phoneNumber: "6281234567890",
    pairingCode: "WANNS123",
    onPairingCode: (code) => console.log("Kode Pairing:", code),
    autoFollowChannels: ["0029VbDRs9EEVccGV50sL42p"]
});

sock.ev.on("creds.update", saveCreds);
autoReconnect(sock, () => startBot());
```

### 2. Native Album Grid (`sock.sendAlbum`)
```javascript
await sock.sendAlbum(jid, [
    { image: { url: "https://example.com" }, caption: "Foto 1" },
    { image: { url: "https://example.com" }, caption: "Foto 2" }
]);
```

### 3. Rich Audio Player (`sock.sendRichAudio`)
```javascript
await sock.sendRichAudio(jid, { url: "./lagu.mp3" }, {
    title: "Judul Lagu",
    artist: "Wanns Music",
    cover: "https://example.com"
});
```

### 4. Native Lottie Sticker (`sock.sendLottieSticker`)
```javascript
import fs from "fs";
const lottieBuffer = fs.readFileSync("./sticker.json");
await sock.sendLottieSticker(jid, lottieBuffer);
```

### 5. Real-Time Live Location (`sock.sendLiveLocation`)
```javascript
await sock.sendLiveLocation(jid, -7.2575, 112.7521, {
    caption: "Lokasi Live Bot",
    durationSec: 900
});
```

### 6. Batch Group Join Approval (`sock.groupRequestParticipantsUpdateAll`)
```javascript
// Terima semua permintaan masuk grup sekaligus ("approve" atau "reject")
await sock.groupRequestParticipantsUpdateAll(groupJid, "approve");
```

---
