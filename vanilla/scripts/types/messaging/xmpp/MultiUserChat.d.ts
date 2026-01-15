import type { XMPPClient } from './xmpp';
import type { Chat } from '../../types';
import ChatHelpers from './Helpers';
export default class MultiUserChat {
    readonly xmlns = "http://jabber.org/protocol/muc";
    helpers: ChatHelpers;
    xmppClient: XMPPClient;
    stanzasCallbacks: Chat.StanzasCallbacks;
    joinedRooms: {
        [jid: string]: boolean;
    };
    constructor(options: {
        helpers: ChatHelpers;
        xmppClient: XMPPClient;
        stanzasCallbacks: Chat.StanzasCallbacks;
    });
    join(dialogIdOrJid: string): Promise<void>;
    leave(dialogIdOrJid: string): Promise<void>;
    listOnlineUsers(dialogIdOrJid: string): Promise<number[]>;
}
//# sourceMappingURL=MultiUserChat.d.ts.map