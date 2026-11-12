import { WAMessage } from "../Types/index.js";
export declare function sendAlbumMessage(sock: any, jid: string, medias: Array<{ image?: any; video?: any; caption?: string }>, options?: any): Promise<{ album: WAMessage; items: WAMessage[] }>;
export declare function sendRichAudioMessage(sock: any, jid: string, audio: any, options?: { title?: string; artist?: string; cover?: string | Buffer; mimetype?: string; ptt?: boolean; url?: string; quoted?: WAMessage }): Promise<WAMessage>;
export declare function sendLottieStickerMessage(sock: any, jid: string, stickerBuffer: Buffer | { url: string }, options?: any): Promise<WAMessage>;
export declare function sendLiveLocationMessage(sock: any, jid: string, lat: number, lng: number, options?: { caption?: string; durationSec?: number; accuracy?: number; speed?: number; heading?: number; quoted?: WAMessage }): Promise<WAMessage>;
export declare function groupRequestParticipantsUpdateAll(sock: any, jid: string, action?: "approve" | "reject"): Promise<{ processed: number; jids: string[]; result?: any }>;
export declare function attachWannsFeatures(sock: any, config?: any): any;
