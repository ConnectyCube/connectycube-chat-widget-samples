import type { Calls, Chat } from '../types';
import type { IChatRealTimeService } from '../types/chat';
import { CallSignalingType } from '../types/enums';
export default class WebRTCSignalingProvider {
    chatService: IChatRealTimeService;
    constructor(chatService: IChatRealTimeService);
    sendCandidate(userID: Chat.UserId, iceCandidates: RTCIceCandidateInit[], ext?: Calls.ExtensionParams): void;
    sendMessage(userID: Chat.UserId, ext: Calls.ExtensionParams, signalingType: CallSignalingType): void;
}
//# sourceMappingURL=WebRTCSignalingProvider.d.ts.map