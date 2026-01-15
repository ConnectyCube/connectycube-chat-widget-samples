import ProxyService from '../Proxy';
import DialogsService from './xmpp/Dialogs';
import MessagesService from './xmpp/Messages';
import WebRTCSignalingProcessor from '../videocalling/WebRTCSignalingProcessor';
import type { Chat } from '../types';
import { ChatEvent } from '../types/enums';
export default abstract class AbstractChatService {
    proxy: ProxyService;
    dialog: DialogsService;
    message: MessagesService;
    webrtcSignalingProcessor: WebRTCSignalingProcessor;
    isConnected: boolean;
    protected isConnecting: boolean;
    protected isLogout: boolean;
    protected isReconnect: boolean;
    onChatStatusListener: Chat.OnChatStatusListener;
    onConnectionErrorListener: Chat.OnChatConnectionErrorListener;
    onDisconnectedListener: Chat.OnChatDisconnectedListener;
    onReconnectListener: Chat.OnChatReconnectedListener;
    onMessageListener: Chat.OnMessageListener;
    onSystemMessageListener: Chat.OnMessageSystemListener;
    onMessageTypingListener: Chat.OnMessageTypingListener;
    onMessageUpdateListener: Chat.OnMessageUpdateListener;
    onMessageDeleteListener: Chat.OnMessageDeleteListener;
    onMessageReactionsListener: Chat.OnMessageReactionsListener;
    onReadStatusListener: Chat.OnMessageReadListener;
    onLastUserActivityListener: Chat.OnLastUserActivityListener;
    constructor(proxy: ProxyService);
    search(params: Chat.SearchParams): Promise<Chat.SearchResult>;
    abstract ping(): Promise<void>;
    pingWithTimeout(timeout?: number): Promise<unknown>;
    protected getListenerByName(name: ChatEvent): Chat.ListenerName | null;
    addListener(name: ChatEvent, listener: Chat.Listeners): () => void;
    removeListener(name: ChatEvent): void;
    removeAllListeners(): void;
}
//# sourceMappingURL=AbstractChatService.d.ts.map