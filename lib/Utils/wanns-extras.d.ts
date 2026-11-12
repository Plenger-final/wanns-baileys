import { AnyMessageContent, MiscMessageGenerationOptions, WAMessage } from "../Types/index.js";
export declare function sendAlbumMessage(sock: any, jid: string, medias: Array<{ image?: any; video?: any; caption?: string }>, options?: any): Promise<{ album: WAMessage; items: WAMessage[] }>;
export declare function sendRichAudioMessage(sock: any, jid: string, audio: any, options?: { title?: string; artist?: string; cover?: string | Buffer; mimetype?: string; ptt?: boolean; url?: string; quoted?: WAMessage }): Promise<WAMessage>;
