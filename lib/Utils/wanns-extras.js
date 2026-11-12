import { generateWAMessageFromContent, prepareWAMessageMedia, proto } from "../WABinary/index.js";
import * as MessagesUtils from "./messages.js";

/**
 * Mengirim Album Media (2 - 10 gambar/video dalam satu gelembung grid)
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
 * Mengirim Audio / Musik dengan Sampul Cover & Metadata Layaknya Pemutar Lagu
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
