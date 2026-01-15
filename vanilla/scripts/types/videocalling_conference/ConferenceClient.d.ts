import type { Janus } from '../types';
import { JanusCallType, ConferenceEvent, DeviceInputType } from '../types/enums';
import ConferenceSession from './ConferenceSession';
import ProxyService from '../Proxy';
export default class ConferenceClient {
    proxy: ProxyService;
    DeviceInputType: typeof DeviceInputType;
    JanusCallType: typeof JanusCallType;
    sessionsStore: {
        [id: ConferenceSession['id']]: ConferenceSession;
    };
    onParticipantJoinedListener: Janus.OnParticipantJoinedListener;
    onParticipantLeftListener: Janus.OnParticipantLeftListener;
    onSlowLinkListener: Janus.OnSlowLinkListener;
    onRemoteStreamListener: Janus.OnRemoteStreamListener;
    onRemoteTracksUpdatedListener: Janus.OnRemoteTracksUpdatedListener;
    onRemoteConnectionStateChangedListener: Janus.OnRemoteConnectionStateChangedListener;
    onDataChannelOpenedListener: Janus.OnDataChannelOpenedListener;
    onDataChannelMessageListener: Janus.OnDataChannelMessageListener;
    onSessionConnectionStateChangedListener: Janus.OnSessionConnectionStateChangedListener;
    onErrorListener: Janus.OnErrorListener;
    constructor(proxy: ProxyService);
    createNewSession(): ConferenceSession;
    getMediaDevices(kind?: DeviceInputType): Promise<MediaDeviceInfo[]>;
    clearSession(session_id: ConferenceSession['id']): void;
    getCurrentSessionToken(): string;
    private getListenerByName;
    addListener(name: ConferenceEvent, listener: Janus.Listeners): () => void;
    removeListener(name: ConferenceEvent): void;
    removeAllListeners(): void;
}
//# sourceMappingURL=ConferenceClient.d.ts.map