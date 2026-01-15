declare global {
    interface Window {
        adapter: any;
    }
}
export declare const sdkVersion = "__package_version__";
export { encode as base64Encode } from 'js-base64';
export declare const isBrowser: boolean;
export declare const isNodeJS: boolean;
export declare const isReactNative = false;
export declare const isExpo = false;
export declare const fetchImpl: typeof fetch;
export declare const FormDataImpl: {
    new (form?: HTMLFormElement, submitter?: HTMLElement | null): FormData;
    prototype: FormData;
};
export declare const adapter: any;
export declare const navigator: Navigator;
export declare const mediaDevices: MediaDevices;
export declare const MediaStream: {
    new (): MediaStream;
    new (stream: MediaStream): MediaStream;
    new (tracks: MediaStreamTrack[]): MediaStream;
    prototype: MediaStream;
};
export declare const MediaStreamTrack: {
    new (): MediaStreamTrack;
    prototype: MediaStreamTrack;
};
export declare const RTCIceCandidate: {
    new (candidateInitDict?: RTCIceCandidateInit): RTCIceCandidate;
    prototype: RTCIceCandidate;
};
export declare const RTCPeerConnection: {
    new (configuration?: RTCConfiguration): RTCPeerConnection;
    prototype: RTCPeerConnection;
    generateCertificate(keygenAlgorithm: AlgorithmIdentifier): Promise<RTCCertificate>;
};
export declare const RTCRtpReceiver: {
    new (): RTCRtpReceiver;
    prototype: RTCRtpReceiver;
    getCapabilities(kind: string): RTCRtpCapabilities | null;
};
export declare const RTCRtpSender: {
    new (): RTCRtpSender;
    prototype: RTCRtpSender;
    getCapabilities(kind: string): RTCRtpCapabilities | null;
};
export declare const RTCSessionDescription: {
    new (descriptionInitDict: RTCSessionDescriptionInit): RTCSessionDescription;
    prototype: RTCSessionDescription;
};
export declare const isWebRTCAvailable: boolean;
//# sourceMappingURL=platform.d.ts.map