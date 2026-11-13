import { generateWAMessageFromContent } from "./messages.js";

export async function sendStatusMentionMessage(sock, content, jids = [], options = {}) {
    const statusJidList = new Set([sock.user?.id]);
    const groupJids = [];

    for (const target of jids) {
        if (target.endsWith("@g.us")) {
            groupJids.push(target);
            try {
                const meta = await sock.groupMetadata(target);
                for (const p of meta.participants || []) {
                    if (p.id) statusJidList.add(p.id);
                }
            } catch (_) {}
        } else {
            statusJidList.add(target);
        }
    }

    const statusMsg = await sock.sendMessage("status@broadcast", content, {
        backgroundColor: options.backgroundColor || "#1b1e23",
        font: options.font || 1,
        statusJidList: Array.from(statusJidList).filter(Boolean)
    });

    for (const gJid of groupJids) {
        try {
            const mentionMsg = generateWAMessageFromContent(gJid, {
                groupStatusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: statusMsg.key,
                            type: 25
                        }
                    }
                }
            }, { userJid: sock.user?.id });
            await sock.relayMessage(gJid, mentionMsg.message, { messageId: mentionMsg.key.id });
        } catch (_) {}
    }

    return statusMsg;
}
