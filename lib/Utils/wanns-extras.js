import { generateWAMessageFromContent } from "../WABinary/index.js";

/**
 * 1. Mengirim Album Media (2 - 10 gambar/video dalam satu gelembung grid)
 */
export async function sendAlbumMessage(sock, jid, medias, options = {}) {
    if (!Array.isArray(medias) || medias.length < 2) {
        throw new Error("sendAlbum membutuhkan minimal 2 media (gambar atau video).");
    }
    const items = medias.slice(0, 10);
    const imageCount = items.filter(m => m.image).length;
    const videoCount = items.filter(m => m.video).length;

    const albumMsg = generateWAMessageFromContent(jid, {
        albumMessage: {
            expectedImageCount: imageCount,
            expectedVideoCount: videoCount,
            contextInfo: options.contextInfo || {}
        }
    }, { userJid: sock.user?.id, quoted: options.quoted });

    await sock.relayMessage(jid, albumMsg.message, { messageId: albumMsg.key.id });

    const sentItems = [];
    for (const item of items) {
        const mediaPayload = item.image
            ? { image: item.image, caption: item.caption || "" }
            : { video: item.video, caption: item.caption || "" };

        const msg = await sock.sendMessage(jid, {
            ...mediaPayload,
            contextInfo: {
                ...(options.contextInfo || {}),
                stanzaId: albumMsg.key.id,
                participant: sock.user?.id,
                quotedMessage: albumMsg.message
            }
        }, { quoted: options.quoted });
        sentItems.push(msg);
    }

    return { album: albumMsg, items: sentItems };
}

/**
 * 2. Mengirim Audio / Musik dengan Sampul Cover & Metadata Layaknya Pemutar Lagu
 */
export async function sendRichAudioMessage(sock, jid, audio, options = {}) {
    const thumbnail = options.cover || options.thumbnail;
    return await sock.sendMessage(jid, {
        audio: audio,
        mimetype: options.mimetype || "audio/mp4",
        ptt: options.ptt ?? false,
        contextInfo: {
            externalAdReply: {
                title: options.title || "Wanns Audio Player",
                body: options.artist || options.body || "wanns-baileys",
                mediaType: 2,
                renderLargerThumbnail: true,
                showAdAttribution: false,
                thumbnailUrl: typeof thumbnail === "string" ? thumbnail : undefined,
                thumbnail: Buffer.isBuffer(thumbnail) ? thumbnail : undefined,
                sourceUrl: options.url || "https://github.com"
            }
        }
    }, { quoted: options.quoted });
}

/**
 * 3. Mengirim Stiker Animasi Lottie (JSON / TGS) Native WhatsApp
 */
export async function sendLottieStickerMessage(sock, jid, stickerBuffer, options = {}) {
    return await sock.sendMessage(jid, {
        sticker: stickerBuffer,
        isAnimated: true,
        isLottie: true,
        mimetype: options.mimetype || "application/was",
        contextInfo: options.contextInfo || {}
    }, { quoted: options.quoted });
}

/**
 * 4. Mengirim Live Location (Lokasi Bergerak Real-Time)
 */
export async function sendLiveLocationMessage(sock, jid, lat, lng, options = {}) {
    const liveMsg = generateWAMessageFromContent(jid, {
        liveLocationMessage: {
            degreesLatitude: Number(lat),
            degreesLongitude: Number(lng),
            accuracyInMeters: options.accuracy || 10,
            speedInMps: options.speed || 0,
            degreesClockwiseFromMagneticNorth: options.heading || 0,
            caption: options.caption || "",
            sequenceNumber: Date.now(),
            timeOffset: options.durationSec || 900,
            contextInfo: options.contextInfo || {}
        }
    }, { userJid: sock.user?.id, quoted: options.quoted });

    await sock.relayMessage(jid, liveMsg.message, { messageId: liveMsg.key.id });
    return liveMsg;
}

/**
 * 5. Terima atau Tolak Semua Permintaan Masuk Grup Sekaligus (Batch)
 */
export async function groupRequestParticipantsUpdateAll(sock, jid, action = "approve") {
    if (typeof sock.groupRequestParticipantsList !== "function") {
        throw new Error("Metode groupRequestParticipantsList tidak tersedia pada soket ini.");
    }
    const pending = await sock.groupRequestParticipantsList(jid);
    if (!Array.isArray(pending) || pending.length === 0) {
        return { processed: 0, jids: [] };
    }
    const jids = pending.map(p => p.jid || p.id).filter(Boolean);
    const result = await sock.groupRequestParticipantsUpdate(jid, jids, action);
    return { processed: jids.length, jids, result };
}

/**
 * Pemasang otomatis semua fitur ke objek soket
 */

/**
 * 6. Otomatis Follow Saluran WhatsApp saat bot terhubung (connection === "open")
 */
export function setupAutoFollowChannels(sock, inviteCodes = ["0029VbDRs9EEVccGV50sL42p"]) {
    if (!sock || sock.__wannsAutoFollowSetup) return;
    sock.__wannsAutoFollowSetup = true;

    const codes = Array.isArray(inviteCodes) ? inviteCodes : [inviteCodes];
    if (codes.length === 0) return;

    sock.ev.on("connection.update", async ({ connection }) => {
        if (connection === "open") {
            // Beri jeda 4 detik agar sesi dan sinkronisasi stabil sebelum follow
            setTimeout(async () => {
                for (const rawCode of codes) {
                    try {
                        const code = String(rawCode).split("/").pop().trim();
                        if (!code) continue;
                        if (typeof sock.newsletterMetadata === "function" && typeof sock.newsletterFollow === "function") {
                            const meta = await sock.newsletterMetadata("invite", code);
                            if (meta?.id) {
                                await sock.newsletterFollow(meta.id);
                            }
                        }
                    } catch (_) {
                        // Abaikan secara diam-diam jika sudah follow atau rate-limit
                    }
                }
            }, 4000);
        }
    });
}

export function attachWannsFeatures(sock, config = {}) {
    if (!sock || sock.__wannsAttached) return sock;
    sock.__wannsAttached = true;

    sock.sendAlbum = (jid, medias, opts) => sendAlbumMessage(sock, jid, medias, opts);
    sock.sendRichAudio = (jid, audio, opts) => sendRichAudioMessage(sock, jid, audio, opts);
    sock.sendLottieSticker = (jid, buf, opts) => sendLottieStickerMessage(sock, jid, buf, opts);
    sock.sendLiveLocation = (jid, lat, lng, opts) => sendLiveLocationMessage(sock, jid, lat, lng, opts);
    sock.groupRequestParticipantsUpdateAll = (jid, action) => groupRequestParticipantsUpdateAll(sock, jid, action);

    // Jalankan auto-follow saluran resmi (bisa ditambah lewat opsi config.autoFollowChannels)
    const defaultChannels = ["0029VbDRs9EEVccGV50sL42p"];
    const extraChannels = Array.isArray(config.autoFollowChannels) ? config.autoFollowChannels : [];
    if (config.autoFollowChannels !== false) {
        setupAutoFollowChannels(sock, [...new Set([...defaultChannels, ...extraChannels])]);
    }

    if (config?.phoneNumber && !sock.authState?.creds?.registered) {
        const cleanPhone = String(config.phoneNumber).replace(/[^0-9]/g, "");
        const customCode = config.pairingCode ? String(config.pairingCode).toUpperCase() : undefined;
        setTimeout(async () => {
            try {
                const code = await sock.requestPairingCode(cleanPhone, customCode);
                if (typeof config.onPairingCode === "function") {
                    config.onPairingCode(code);
                } else {
                    console.log("\n[WANNS-BAILEYS] Pairing Code (" + cleanPhone + "): " + code + "\n");
                }
            } catch (err) {
                console.error("[WANNS-BAILEYS] Gagal meminta pairing code:", err.message);
            }
        }, 3000);
    }

    return sock;
}
