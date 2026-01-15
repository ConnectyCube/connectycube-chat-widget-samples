import type WebRTCClient from './WebRTCClient';
import type { Calls } from '../types';
export default class WebRTCSignalingProcessor {
    delegate: WebRTCClient;
    constructor(delegate: WebRTCClient);
    onMessage: (userID: number, extension: Calls.ExtensionParams) => void;
}
//# sourceMappingURL=WebRTCSignalingProcessor.d.ts.map