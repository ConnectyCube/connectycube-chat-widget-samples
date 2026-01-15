import ProxyService from '../Proxy';
import WebRTCSession from './WebRTCSession';
import WebRTCSignalingProcessor from './WebRTCSignalingProcessor';
import WebRTCSignalingProvider from './WebRTCSignalingProvider';
import type { Calls, EmptyResponse } from '../types';
import type { IChatRealTimeService } from '../types/chat';
import { CallEvent, CallSessionConnectionState, CallType, PeerConnectionState } from '../types/enums';
export default class WebRTCClient {
    chatService: IChatRealTimeService;
    proxy: ProxyService;
    signalingProcessor: WebRTCSignalingProcessor;
    signalingProvider: WebRTCSignalingProvider;
    SessionConnectionState: typeof CallSessionConnectionState;
    PeerConnectionState: typeof PeerConnectionState;
    CallType: typeof CallType;
    sessions: {
        [key: string]: WebRTCSession;
    };
    onCallListener: Calls.OnCallListener;
    onAcceptCallListener: Calls.OnAcceptCallListener;
    onRejectCallListener: Calls.OnRejectCallListener;
    onStopCallListener: Calls.OnStopCallListener;
    onInvalidEventsListener: Calls.OnInvalidEventsListener;
    onUserNotAnswerListener: Calls.OnUserNotAnswerListener;
    onRemoteStreamListener: Calls.OnRemoteStreamListener;
    onSessionConnectionStateChangedListener: Calls.OnSessionConnectionStateChangedListener;
    onSessionCloseListener: Calls.OnSessionCloseListener;
    onCallStatsReport: Calls.OnCallStatsReportListener;
    onDevicesChangeListener: Calls.OnDevicesChangeListener;
    constructor(chatService: IChatRealTimeService, proxy: ProxyService);
    private get currentUserID();
    getMediaDevices(kind?: MediaDeviceKind): Promise<MediaDeviceInfo[]>;
    createNewSession(opponentsIDs: number[], callType: number, options?: {
        maxBandwidth?: number;
        bandwidth?: number;
    }): WebRTCSession;
    private createAndStoreSession;
    clearSession(sessionId: string): void;
    callRejectRequest(params: {
        sessionID: string;
        recipientId: number;
        platform: 'web' | 'android' | 'ios';
        userInfo?: Calls.UserInfo;
    }): Promise<EmptyResponse>;
    onCallHandler(userID: number, sessionID: string, extension: Calls.ExtensionParams): void;
    onAcceptHandler(userID: number, sessionID: string, extension: Calls.ExtensionParams): void;
    onRejectHandler(userID: number, sessionID: string, extension: Calls.ExtensionParams): void;
    onStopHandler(userID: number, sessionID: string, extension: Calls.ExtensionParams): void;
    onIceCandidatesHandler(userID: number, sessionID: string, extension: Calls.ExtensionParams): void;
    onIceRestartHandler(userID: number, sessionID: string, extension: Calls.ExtensionParams): void;
    onIceRestartAcceptHandler(userID: number, sessionID: string, extension: Calls.ExtensionParams): void;
    private getListenerByName;
    addListener(name: CallEvent, listener: Calls.Listeners): () => void;
    removeListener(name: CallEvent): void;
    removeAllListeners(): void;
}
//# sourceMappingURL=WebRTCClient.d.ts.map