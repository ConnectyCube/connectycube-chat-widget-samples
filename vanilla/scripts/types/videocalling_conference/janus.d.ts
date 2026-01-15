export = Janus;
declare function Janus(gatewayCallbacks: any): {};
declare class Janus {
    constructor(gatewayCallbacks: any);
    destroyOnUnload: boolean;
    getServer: () => any;
    isConnected: () => boolean;
    reconnect: (callbacks: any) => void;
    getSessionId: () => any;
    getInfo: (callbacks: any) => void;
    destroy: (callbacks: any) => void;
    attach: (callbacks: any) => void;
}
declare namespace Janus {
    export let sessions: {};
    export { isReactNative as mobile };
    export function isExtensionEnabled(): any;
    export function useDefaultDependencies(deps: any): {
        newWebSocket: (server: any, proto: any) => any;
        extension: any;
        isArray: (arr: any) => arr is any[];
        webRTCAdapter: any;
        httpAPICall: (url: any, options: any) => any;
    };
    export function useOldDependencies(deps: any): {
        newWebSocket: (server: any, proto: any) => any;
        isArray: (arr: any) => any;
        extension: any;
        webRTCAdapter: any;
        httpAPICall: (url: any, options: any) => any;
    };
    export function mediaToTracks(media: any): {
        type: string;
    }[];
    export function trackConstraints(track: any): {
        audio: any;
        video: any;
    };
    export function noop(): void;
    export let dataChanDefaultLabel: string;
    export let endOfCandidates: any;
    export function stopAllTracks(stream: any): void;
    export function init(options: any): void;
    export function isWebrtcSupported(): boolean;
    export function isGetUserMediaAvailable(): (constraints?: MediaStreamConstraints) => Promise<MediaStream>;
    export function randomString(len: any): string;
}
import { isReactNative } from '../platform';
//# sourceMappingURL=janus.d.ts.map