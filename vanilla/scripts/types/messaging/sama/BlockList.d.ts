import { SAMAClient } from '@sama-communications/sdk';
import type { Chat } from '../../types';
export default class BlockList {
    private samaClient;
    constructor(samaClient: SAMAClient);
    block(userId: Chat.UserId): Promise<void>;
    block(userIds: Chat.UserId[]): Promise<void>;
    unblock(userId: Chat.UserId): Promise<void>;
    unblock(userIds: Chat.UserId[]): Promise<void>;
    list(): Promise<Chat.UserId[]>;
}
//# sourceMappingURL=BlockList.d.ts.map