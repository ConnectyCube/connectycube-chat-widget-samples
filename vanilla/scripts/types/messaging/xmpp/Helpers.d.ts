import Utils from '../../Utils';
import ChatUtils from './ChatUtils';
export default class ChatHelpers {
    xmppJID: string;
    get userCurrentJid(): string | '';
    set userCurrentJid(jid: string | null);
    getUniqueId: typeof ChatUtils.getUniqueId;
    isNumeric(value: string): boolean;
    jidOrUserId(jidOrUserId: string | number): string;
    typeChat(jidOrUserId: string | number): 'chat' | 'groupchat';
    getUserJid(userId: string | number): string;
    getUserNickWithMucDomain(userId: string | number): string;
    getUserIdFromJID(jid?: string): number | null;
    getDialogIdFromJID(jid: string): string | null;
    getRoomJidFromDialogId(dialogId: string): string;
    getRoomJid(jid: string): string;
    getIdFromResource(jid: string): number | null;
    getRoomJidFromRoomFullJid(jid: string): string | null;
    getBsonObjectId: typeof Utils.getBsonObjectId;
    getUserIdFromRoomJid(roomJid: string): number | null;
    getDialogJid(identifier: string): string;
}
//# sourceMappingURL=Helpers.d.ts.map