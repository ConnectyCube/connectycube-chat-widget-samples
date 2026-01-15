import type { EmptyResponse, ForceParams, Messages } from '../../types';
import ProxyService from '../../Proxy';
export default class MessagesService {
    proxy: ProxyService;
    readonly route: string;
    constructor(proxy: ProxyService);
    list(params?: Messages.ListParams): Promise<Messages.ListResponse>;
    create(params?: Messages.CreateParams): Promise<Messages.Message>;
    update(id: string, params?: Messages.UpdateParams): Promise<EmptyResponse>;
    delete(ids: string | string[], params?: ForceParams): Promise<Messages.DeleteResponse>;
    createSystem(params: Messages.CreateSystemParams): Promise<Messages.CreateSystemResponse>;
    unreadCount(params?: Messages.UnreadCountParams): Promise<Messages.UnreadCountResponse>;
    listReactions(id?: string): Promise<Messages.ListReactionsResponse>;
    addReaction(id: string, reaction: string): Promise<EmptyResponse>;
    removeReaction(id: string, reaction: string): Promise<EmptyResponse>;
    updateReaction(id: string, add?: string, remove?: string): Promise<EmptyResponse>;
    private putReaction;
}
//# sourceMappingURL=Messages.d.ts.map