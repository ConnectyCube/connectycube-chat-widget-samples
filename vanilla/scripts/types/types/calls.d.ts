import type WebRTCSession from '../videocalling/WebRTCSession';
import type WebRTCSignalingProvider from '../videocalling/WebRTCSignalingProvider';
export declare const CallSignalingModuleIdentifier = "WebRTCVideoChat";
export declare enum CallSignalingType {
    CALL = "call",
    ACCEPT = "accept",
    REJECT = "reject",
    STOP = "hangUp",
    RESTART = "iceRestart",
    RESTART_ACCEPT = "iceRestartAccept",
    CANDIDATE = "iceCandidates"
}
export declare enum CallSessionConnectionState {
    UNDEFINED = 0,
    CONNECTING = 1,
    CONNECTED = 2,
    FAILED = 3,
    DISCONNECTED = 4,
    CLOSED = 5,
    COMPLETED = 6
}
export declare enum CallSessionState {
    NEW = 1,
    ACTIVE = 2,
    STOPPED = 3,
    REJECTED = 4,
    CLOSED = 5
}
export declare enum CallType {
    VIDEO = 1,
    AUDIO = 2
}
export declare enum CallEvent {
    CALL = "call",
    ACCEPT = "accept",
    REJECT = "reject",
    STOP = "stop",
    INVALID = "invalid",
    NOT_ANSWER = "not-answer",
    REMOTE_STREAM = "remote-stream",
    CONNECTION_STATE = "connection-state",
    CLOSE = "close",
    STATS_REPORT = "stats-report",
    DEVICES = "devices"
}
export declare enum PeerConnectionState {
    NEW = 1,
    CONNECTING = 2,
    CHECKING = 3,
    CONNECTED = 4,
    DISCONNECTED = 5,
    FAILED = 6,
    CLOSED = 7,
    COMPLETED = 8
}
export declare namespace ConnectyCubeCalls {
    type UserInfo = {
        maxBandwidth?: number;
        bandwidth?: number;
        [key: string]: any;
    };
    type ExtensionParams = {
        callType?: CallType;
        callerID?: number;
        iceCandidates?: RTCIceCandidateInit[];
        opponentsIDs?: number[];
        userInfo?: UserInfo;
        sessionID?: string;
        [key: string]: any;
    };
    type Session = WebRTCSession;
    type SignalingProvider = WebRTCSignalingProvider;
    type SessionParams = {
        ID: string | null;
        initiatorID: number;
        opponentsIDs: number[];
        callType: CallType;
        signalingProvider: SignalingProvider;
        currentUserID: number;
        maxBandwidth: number;
    };
    type OnCallListener = (session: Session, userInfo: UserInfo) => void;
    type OnAcceptCallListener = (session: Session, userID: number, userInfo: UserInfo) => void;
    type OnRejectCallListener = (session: Session, userID: number, userInfo: UserInfo) => void;
    type OnStopCallListener = (session: Session, userID: number, userInfo: UserInfo) => void;
    type OnInvalidEventsListener = (session: Session, userID: number, userInfo: UserInfo) => void;
    type OnUserNotAnswerListener = (session: Session, userID: number) => void;
    type OnRemoteStreamListener = (session: Session, userID: number, stream: MediaStream) => void;
    type OnSessionConnectionStateChangedListener = (session: Session, userID: number, connectionState: CallSessionConnectionState) => void;
    type OnSessionCloseListener = (session: Session) => void;
    type OnCallStatsReportListener = (session: Session, userID: number, stats: any, error: Error) => void;
    type OnDevicesChangeListener = ((this: MediaDevices, ev: Event) => any) | ((ev: Event) => any);
    type Listeners = OnCallListener | OnAcceptCallListener | OnRejectCallListener | OnStopCallListener | OnInvalidEventsListener | OnUserNotAnswerListener | OnRemoteStreamListener | OnSessionConnectionStateChangedListener | OnSessionCloseListener | OnCallStatsReportListener | OnDevicesChangeListener;
    type ListenerName = 'onCallListener' | 'onAcceptCallListener' | 'onRejectCallListener' | 'onStopCallListener' | 'onInvalidEventsListener' | 'onUserNotAnswerListener' | 'onRemoteStreamListener' | 'onSessionConnectionStateChangedListener' | 'onSessionCloseListener' | 'onCallStatsReport' | 'onDevicesChangeListener';
}
//# sourceMappingURL=calls.d.ts.map