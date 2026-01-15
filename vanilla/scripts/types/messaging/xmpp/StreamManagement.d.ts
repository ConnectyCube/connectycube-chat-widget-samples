import type { Chat } from '../../types';
import type XMPPChatService from '.';
export default class StreamManagement {
    private chat;
    readonly xmlns = "urn:xmpp:sm:3";
    private enabled;
    private clientHandledCounter;
    private serverHandledCounter;
    private messagesQueue;
    private messagesQueueClearTimer?;
    constructor(chat: XMPPChatService);
    get supported(): boolean;
    start(): void;
    stop(): void;
    sendAndCount(stanza: Chat.XmlElement, message: Chat.MessageParams): Promise<void>;
    private elementHandler;
    private markMessageAsSent;
    private markMessageAsLost;
    private markMessagesQueueAsSent;
    private markMessagesQueueAsLost;
    private markMessagesQueueAsLostByTimeout;
    private sendNonza;
    private removeElementHandler;
    private addElementHandler;
}
//# sourceMappingURL=StreamManagement.d.ts.map