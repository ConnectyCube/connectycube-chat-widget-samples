import type { Config, Janus } from '../types';
import { JanusEvent } from '../types/enums';
import EventEmitter from 'eventemitter3';
import JanusEngine from './janus.js';
export default class JanusClient {
    token: Config.Credentials['token'];
    server: Config.Conference['server'];
    debug: Config.JanusDebug;
    engine: JanusEngine;
    videoRoomPlugin: any;
    isOnlyAudio: boolean;
    currentRoomId: string | null;
    currentUserId: number | string | null;
    remoteFeeds: {
        [userId: number | string]: any;
    };
    remoteJseps: {
        [userId: number | string]: any;
    };
    remoteFeedsAttachingInProgress: {
        [userId: number | string]: any;
    };
    bitrateTimers: {
        [userId: number | string]: NodeJS.Timeout | number | null;
    };
    emitter: EventEmitter;
    constructor(token: Config.Credentials['token']);
    createSession({ success, error, destroyed, timeoutSessionCallback, }: Janus.InitCallbacks): void;
    getSessionId(): string | null;
    destroySession({ success, error }: Janus.SuccessErrorCallbacks): void;
    attachVideoConferencingPlugin(isRemote: boolean, userId: number, skipMedia: boolean, callbacks: Janus.PluginCallbacks): void;
    onLocalTrack(track: MediaStreamTrack, on: any): void;
    onRemoteTrack(remoteFeed: any, track: MediaStreamTrack, mid: any, on: any, metadata: any): void;
    getPluginId(): string | null;
    detachVideoConferencingPlugin(callbacks: Janus.SuccessErrorCallbacks): void;
    join(roomId: string, userId: number, isOnlyAudio: boolean, callbacks: Janus.RequestCallbacks): void;
    leave(callbacks: Janus.RequestCallbacks): void;
    listOnlineParticipants(roomId: string, callbacks: Janus.SuccessErrorCallbacks): void;
    toggleAudioMute(): boolean;
    isAudioMuted(): boolean;
    toggleRemoteAudioMute(userId: number): boolean;
    isRemoteAudioMuted(userId: number): boolean;
    toggleVideoMute(): boolean;
    isVideoMuted(): boolean;
    toggleRemoteVideoMute(userId: number): boolean;
    isRemoteVideoMuted(userId: number): boolean;
    sendKeyframeRequest(roomId: string, callbacks: Janus.SuccessErrorCallbacks): void;
    getTracksFromStream(stream: MediaStream): {
        type: string;
        capture: MediaStreamTrack;
        recv: boolean;
    }[];
    createOffer(mediaParams: {
        stream?: MediaStream;
        media: {
            audio: boolean;
            video: boolean;
        };
        replace?: boolean;
    }, callbacks: Janus.SuccessErrorCallbacks): void;
    getTracksMidsFromStream(stream: MediaStream): {
        type: string;
        mid: string;
        recv: boolean;
    }[];
    createAnswer({ remoteFeed, jsep }: any, existedStream: MediaStream, callbacks: Janus.SuccessErrorCallbacks): void;
    detachRemoteFeed(userId: number): boolean;
    getUserBitrate(userId: number): any;
    getVolume(resultCallback: (value: any) => void): void;
    getUserVolume(userId: number, resultCallback: (value: any) => void): void;
    showBitrate(userId: number, element: any): void;
    hideBitrate(userId: number, element: any): void;
    on(eventType: JanusEvent, listener: (...args: any[]) => void): EventEmitter;
    removeAllListeners(eventType?: JanusEvent): EventEmitter;
}
//# sourceMappingURL=JanusClient.d.ts.map