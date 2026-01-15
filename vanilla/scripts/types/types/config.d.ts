import type { ConnectyCubeAuth } from './auth';
import type { Config } from '../config';
export declare enum ChatProtocol {
    BOSH = 1,
    WS = 2
}
export declare enum JanusDebugMode {
    ALL = "all",
    TRACE = "trace",
    DEBUG = "debug",
    VDEBUG = "vdebug",
    LOG = "log",
    WARN = "warn",
    ERROR = "error"
}
export declare enum ChatAPIs {
    SAMA = "sama",
    XMPP = "xmpp"
}
export declare namespace ConnectyCubeConfig {
    type Object = Partial<Config>;
    type Credentials = {
        appId: number | string;
        authKey?: string;
        token?: string;
        systemApiKey?: string;
        authSecret?: string;
    };
    type Endpoints = {
        api: string;
        api_url?: string;
        chat: string;
        chat_url?: string;
        muc?: string;
    };
    type ChatProtocolURLs = {
        bosh?: string;
        websocket?: string;
        active: ChatProtocol | number;
    };
    type ChatStreamManagement = {
        enable: boolean;
        acknowledgementTimeout?: number;
    };
    type ChatReconnect = {
        enable: boolean;
        timeInterval: number;
    };
    type Chat = {
        streamManagement?: ChatStreamManagement;
        reconnect?: ChatReconnect;
        apiImp?: ChatAPIs;
    };
    type VideochatIceServer = {
        urls: string | string[];
        url?: string;
        credential?: string;
        username?: string;
    };
    type Videochat = {
        alwaysRelayCalls?: boolean;
        answerTimeInterval?: number;
        dialingTimeInterval?: number;
        disconnectTimeInterval?: number;
        statsReportTimeInterval?: number | null;
        iceServers?: VideochatIceServer[];
    };
    type JanusDebug = JanusDebugMode | JanusDebugMode[] | boolean;
    type Conference = {
        server: string;
        debug?: JanusDebug;
    };
    type Whiteboard = {
        server: string;
    };
    type LinkPreview = {
        server: string;
    };
    type ApiRoutes = {
        session: string;
        login: string;
        users: string;
        chat: string;
        blobs: string;
        subscriptions: string;
        events: string;
        data: string;
        addressbook: string;
        meetings: string;
        whiteboards: string;
        unfurl: string;
        calls: string;
        type: string;
    };
    type SessionHandlerResponse = () => void;
    type SessionRetryCallback = (session: Partial<ConnectyCubeAuth.Session>) => void;
    type SessionExpiredListener = (handler: SessionHandlerResponse, retry: SessionRetryCallback) => void | Promise<void>;
    type XMPPDataListener = (size: number, data?: {
        body?: string;
        headers?: string;
    }) => number;
    type Listeners = {
        sessionExpired?: SessionExpiredListener;
        xmppDataWrite?: XMPPDataListener;
        xmppDataRead?: XMPPDataListener;
    };
    type Debug = {
        mode: number | boolean;
    };
    type Options = {
        creds?: Credentials;
        endpoints?: Endpoints;
        chatProtocol?: ChatProtocolURLs;
        chat?: Chat;
        videochat?: Videochat;
        conference?: Conference;
        whiteboard?: Whiteboard;
        on?: Listeners;
        timeout?: number;
        debug?: Debug;
    };
}
//# sourceMappingURL=config.d.ts.map