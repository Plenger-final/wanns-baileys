import { generateWAMessageFromContent } from "./messages.js";

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
