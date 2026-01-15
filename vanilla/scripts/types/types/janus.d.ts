import type ConferenceSession from '../videocalling_conference/ConferenceSession';
export declare enum DeviceInputType {
    VIDEO = "videoinput",
    AUDIO = "audioinput"
}
export declare enum JanusEvent {
    PARTICIPANT_JOINED = "participant_joined",
    PARTICIPANT_LEFT = "participant_left",
    LOCAL_STREAM = "local_stream",
    REMOTE_STREAM = "remote_stream",
    REMOTE_TRACKS_UPDATED = "remote_tracks_updated",
    DATA_CHANNEL_OPEN = "data_channel_open",
    DATA_CHANNEL_MESSAGE = "data_channel_message",
    ERROR = "error"
}
export declare enum JanusCallType {
    VIDEO = "video",
    AUDIO = "audio"
}
export declare enum JanusMediaTrackReason {
    CREATED = "created",
    ENDED = "ended",
    MUTE = "mute",
    UNMUTE = "unmute"
}
export declare enum ConferenceEvent {
    JOIN = "join",
    LEFT = "left",
    SLOW_LINK = "slow-link",
    REMOTE_TRACKS_UPDATED = "remote-tracks",
    REMOTE_STREAM = "remote-stream",
    REMOTE_CONNECTION_STATE = "remote-connection-state",
    DATA_CHANNEL_OPENED = "data-channel-opened",
    DATA_CHANNEL_MESSAGE = "data-channel-message",
    SESSION_CONNECTION_STATE = "session-connection-state",
    ERROR = "error"
}
export declare namespace ConnectyCubeJanus {
    interface SuccessErrorCallbacks {
        success?: (...args: any[]) => void;
        error?: (error: any) => void;
    }
    interface InitCallbacks extends SuccessErrorCallbacks {
        destroyed?: () => void;
        timeoutSessionCallback?: () => void;
    }
    interface PluginCallbacks extends SuccessErrorCallbacks {
        localStream?: MediaStream;
        displayName?: string;
        iceState?: (iceState: any) => void;
        slowLink?: (uplink: any, nacks: any) => void;
        consentDialog?: (on: any) => void;
        mediaState?: (medium: any, on: any) => void;
        webrtcState?: (on: any) => void;
        oncleanup?: () => void;
    }
    type Session = ConferenceSession;
    interface RequestCallbacks extends SuccessErrorCallbacks {
        displayName?: string;
    }
    type OnParticipantJoinedListener = (session: Session, userId: number, userName: string, isExist: boolean) => void;
    type OnParticipantLeftListener = (session: Session, ...args: any[]) => void;
    type OnSlowLinkListener = (session: Session, userId: number | null, uplink: any, nacks: any) => void;
    type OnRemoteStreamListener = (session: Session, userId: number, stream: MediaStream) => void;
    type OnRemoteTracksUpdatedListener = (session: Session, userId: number, track: MediaStreamTrack, eventType: any) => void;
    type OnRemoteConnectionStateChangedListener = (session: Session, userId: number, iceState: any) => void;
    type OnDataChannelOpenedListener = (session: Session, label: any) => void;
    type OnDataChannelMessageListener = (session: Session, label: any, data: any) => void;
    type OnSessionConnectionStateChangedListener = (session: Session, iceState: any) => void;
    type OnErrorListener = (session: Session, error: any) => void;
    type Listeners = OnParticipantJoinedListener | OnParticipantLeftListener | OnSlowLinkListener | OnRemoteStreamListener | OnRemoteTracksUpdatedListener | OnRemoteConnectionStateChangedListener | OnDataChannelOpenedListener | OnDataChannelMessageListener | OnSessionConnectionStateChangedListener | OnErrorListener;
    type ListenerName = 'onParticipantJoinedListener' | 'onParticipantLeftListener' | 'onSlowLinkListener' | 'onRemoteStreamListener' | 'onRemoteTracksUpdatedListener' | 'onRemoteConnectionStateChangedListener' | 'onDataChannelOpenedListener' | 'onDataChannelMessageListener' | 'onSessionConnectionStateChangedListener' | 'onErrorListener';
}
//# sourceMappingURL=janus.d.ts.map