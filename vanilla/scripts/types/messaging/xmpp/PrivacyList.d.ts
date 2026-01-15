import type { XMPPClient } from './xmpp';
import type { Chat } from '../../types';
import ChatHelpers from './Helpers';
export default class PrivacyList {
    readonly xmlns = "jabber:iq:privacy";
    helpers: ChatHelpers;
    xmppClient: XMPPClient;
    stanzasCallbacks: Chat.StanzasCallbacks;
    constructor(options: {
        helpers: ChatHelpers;
        xmppClient: XMPPClient;
        stanzasCallbacks: Chat.StanzasCallbacks;
    });
    create(list: Chat.PrivacyList): Promise<void>;
    getList(name: string): Promise<Chat.PrivacyList>;
    update(list: Chat.PrivacyList): Promise<void>;
    getNames(): Promise<Chat.PrivacyListNames>;
    delete(name: string): Promise<void>;
    setAsDefault(name: string | null): Promise<void>;
    private assignPrivacyItem;
}
//# sourceMappingURL=PrivacyList.d.ts.map