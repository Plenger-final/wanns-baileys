import { generateWAMessageFromContent } from "./messages.js";

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
