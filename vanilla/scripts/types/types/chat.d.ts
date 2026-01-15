import type { Element, Node } from '@xmpp/xml';
import type { StatusEvents } from '@xmpp/connection';
import type { ConnectyCubeDialogs } from './dialogs';
import type { ConnectyCubeUsers } from './users';
export declare enum ChatType {
    CHAT = "chat",
    GROUPCHAT = "groupchat"
}
export declare enum ChatEvent {
    STATUS = "status",
    ERROR = "error",
    DISCONNECTED = "disconnected",
    RECONNECTED = "reconnected",
    MESSAGE = "message",
    SYSTEM_MESSAGE = "system-message",
    ERROR_MESSAGE = "error-message",
    TYPING_MESSAGE = "typing-message",
    UPDATE_MESSAGE = "update-message",
    DELETE_MESSAGE = "delete-message",
    REACTIONS_MESSAGE = "reactions-message",
    DELIVERED_MESSAGE = "delivered-message",
    READ_MESSAGE = "read-message",
    SENT_MESSAGE = "sent-message",
    USER_LAST_ACTIVITY = "user-last-activity",
    JOIN = "join",
    LEAVE = "leave",
    KICK = "kick"
}
export declare enum PrivacyListAction {
    ALLOW = "allow",
    DENY = "deny"
}
export declare namespace ConnectyCubeChat {
    type XmlElement = Element;
    type XmlNode = Node;
    type StanzaCallback = (stanza: Element) => void;
    type StanzasCallbacks = {
        [stanzaId: string]: StanzaCallback;
    };
    type ConnectionParams = {
        userId: number;
        password: string;
        deviceId?: string;
    };
    type ConnectionStatus = keyof StatusEvents;
    type MessageParams = {
        id?: string;
        type?: ChatType;
        body?: string | null;
        extension?: any;
    };
    type Message = {
        id: string;
        dialog_id: string | null;
        recipient_id?: string | number | null;
        is_forwarded?: boolean;
        type?: ChatType | string;
        body: string | null;
        extension: any;
        delay?: any;
    };
    type SystemMessageParams = {
        id?: string;
        body?: string | null;
        extension?: any;
    };
    type SystemMessage = {
        id: string;
        body: string;
        userId: number;
        extension: any;
    };
    type MessageStatusParams = {
        messageId: string;
        dialogId: string;
        userId: number;
    };
    type DialogReadParams = {
        dialogId: string;
    };
    type EditMessageParams = {
        to: string | number;
        dialogId: string;
        body: string;
        originMessageId: string;
        extension?: any;
        last?: boolean;
    };
    type DeleteMessageParams = {
        to: string;
        dialogId: string;
        messageId: string;
    };
    type LastActivity = {
        userId: number | null;
        seconds: number;
    };
    type SearchParams = {
        search_text?: string;
        start_date?: number | string | Date;
        end_date?: number | string | Date;
        chat_dialog_ids?: string | string[];
    };
    type SearchResult = {
        results: {
            dialogs: ConnectyCubeDialogs.Dialog[];
            messages: any[];
            users: ConnectyCubeUsers.User[];
        };
        [key: string]: any;
    };
    type UserJIDParams = {
        userId?: number;
        resource?: string;
        jid?: string;
        [key: string]: any;
    };
    type XMPPClientEvent = string | symbol;
    type XMPPClientListener = (...args: any[]) => void;
    type XMPPClientListeners = Map<XMPPClientEvent, XMPPClientListener>;
    type OnChatStatusListener = (status: ConnectionStatus) => void;
    type OnChatConnectionErrorListener = (error: Error) => void;
    type OnChatDisconnectedListener = () => void;
    type OnChatReconnectedListener = () => void;
    type OnMessageListener = (userId: number, message: Message) => void;
    type OnMessageSystemListener = (message: SystemMessage) => void;
    type OnMessageErrorListener = (messageId: string, error: {
        code: number;
        info: string;
    }) => void;
    type OnMessageTypingListener = (typing: boolean, userId: number, dialogId: string) => void;
    type OnMessageUpdateListener = (messageId: string, isLast: boolean, updatedBody: string, dialogId: string, userId: number, extraParams: object | null) => void;
    type OnMessageDeleteListener = (messageId: string, dialogId: string, userId: number) => void;
    type OnMessageReactionsListener = (messageId: string, userId: number, dialogId: string, add: string, remove: string) => void;
    type OnMessageDeliveredListener = (messageId: string, dialogId: string, userId: number) => void;
    type OnMessageReadListener = (messageId: string, dialogId: string, userId: number) => void;
    type OnMessageSentListener = (lost: MessageParams | null, sent: MessageParams | null) => void;
    type OnLastUserActivityListener = (userId: number, seconds: number) => void;
    type OnDialogJoinListener = (dialogId: string, userId: number) => void;
    type OnDialogLeaveListener = (dialogId: string, userId: number) => void;
    type OnDialogKickListener = (dialogId: string, initiatorId: number) => void;
    type Listeners = OnChatStatusListener | OnChatConnectionErrorListener | OnChatDisconnectedListener | OnChatReconnectedListener | OnMessageListener | OnMessageSystemListener | OnMessageErrorListener | OnMessageTypingListener | OnMessageUpdateListener | OnMessageDeleteListener | OnMessageReactionsListener | OnMessageDeliveredListener | OnMessageReadListener | OnMessageSentListener | OnLastUserActivityListener | OnDialogJoinListener | OnDialogLeaveListener | OnDialogKickListener;
    type ListenerName = 'onChatStatusListener' | 'onConnectionErrorListener' | 'onDisconnectedListener' | 'onReconnectListener' | 'onMessageListener' | 'onSystemMessageListener' | 'onMessageErrorListener' | 'onMessageTypingListener' | 'onMessageUpdateListener' | 'onMessageDeleteListener' | 'onMessageReactionsListener' | 'onDeliveredStatusListener' | 'onReadStatusListener' | 'onSentMessageCallback' | 'onLastUserActivityListener' | 'onJoinOccupant' | 'onLeaveOccupant' | 'onKickOccupant';
    type PrivacyListItem = {
        user_id: string | number;
        action: PrivacyListAction | string;
        mutualBlock?: boolean;
    };
    type PrivacyList = {
        name: string;
        items: PrivacyListItem[];
    };
    type PrivacyListNames = {
        default: string | null;
        active: string | null;
        names: string[];
    };
    type PrivacyListItemParams = {
        value: string;
        action: string;
        order: number;
        isMutual: boolean;
    };
    type DialogId = string;
    type UserId = number;
}
export interface IChatRealTimeService {
    onChatStatusListener: ConnectyCubeChat.OnChatStatusListener;
    onConnectionErrorListener: ConnectyCubeChat.OnChatConnectionErrorListener;
    onDisconnectedListener: ConnectyCubeChat.OnChatDisconnectedListener;
    onReconnectListener: ConnectyCubeChat.OnChatReconnectedListener;
    onMessageListener: ConnectyCubeChat.OnMessageListener;
    onSystemMessageListener: ConnectyCubeChat.OnMessageSystemListener;
    onMessageTypingListener: ConnectyCubeChat.OnMessageTypingListener;
    onMessageUpdateListener: ConnectyCubeChat.OnMessageUpdateListener;
    onMessageDeleteListener: ConnectyCubeChat.OnMessageDeleteListener;
    onMessageReactionsListener: ConnectyCubeChat.OnMessageReactionsListener;
    onReadStatusListener: ConnectyCubeChat.OnMessageReadListener;
    onLastUserActivityListener: ConnectyCubeChat.OnLastUserActivityListener;
    get connectionStatus(): string;
    get currentUserId(): ConnectyCubeChat.UserId;
    connect(params: ConnectyCubeChat.ConnectionParams): Promise<boolean>;
    disconnect(): Promise<boolean>;
    terminate(): void;
    ping(): Promise<void>;
    pingWithTimeout(timeout: number): Promise<unknown>;
    send(dialogId: ConnectyCubeChat.DialogId, message: ConnectyCubeChat.MessageParams): string | Promise<string>;
    sendSystemMessage(userId: ConnectyCubeChat.UserId, message: ConnectyCubeChat.SystemMessageParams): string | Promise<string>;
    sendWebRTCSignalingMessage(userId: ConnectyCubeChat.UserId, message: ConnectyCubeChat.SystemMessageParams): string | Promise<string>;
    sendIsTypingStatus(dialogId: ConnectyCubeChat.DialogId): void | Promise<void>;
    sendIsStopTypingStatus(dialogId: ConnectyCubeChat.DialogId): void | Promise<void>;
    sendDeliveredStatus(params: ConnectyCubeChat.MessageStatusParams): void;
    sendReadStatus(params: ConnectyCubeChat.MessageStatusParams): void;
    editMessage(params: ConnectyCubeChat.EditMessageParams): void;
    deleteMessage(params: ConnectyCubeChat.DeleteMessageParams): void;
    getLastUserActivity(userId: ConnectyCubeChat.UserId): Promise<ConnectyCubeChat.LastActivity>;
    subscribeToUserLastActivityStatus(userId: ConnectyCubeChat.UserId): void;
    unsubscribeFromUserLastActivityStatus(userId: ConnectyCubeChat.UserId): void;
    markActive(): void;
    markInactive(): void;
    addListener(name: ChatEvent, listener: ConnectyCubeChat.Listeners): () => void;
    removeListener(name: ChatEvent): void;
    removeAllListeners(): void;
}
//# sourceMappingURL=chat.d.ts.map