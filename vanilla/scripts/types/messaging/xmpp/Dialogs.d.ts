import type { Dialogs, EmptyResponse, ForceParams } from '../../types';
import ProxyService from '../../Proxy';
export default class DialogsService {
    proxy: ProxyService;
    readonly route: string;
    constructor(proxy: ProxyService);
    list(params?: Dialogs.ListParams): Promise<Dialogs.ListResponse>;
    create(params: Dialogs.CreateParams): Promise<Dialogs.Dialog>;
    update(id: string, params?: Dialogs.UpdateParams): Promise<Dialogs.Dialog>;
    delete(idOrIds: string | string[], params?: ForceParams): Promise<Dialogs.DeleteResponse | EmptyResponse>;
    addAdmins(id: string, admins_ids: number[]): Promise<Dialogs.Dialog>;
    removeAdmins(id: string, admins_ids: number[]): Promise<Dialogs.Dialog>;
    subscribe(id: string): Promise<Dialogs.Dialog>;
    subscribeToPublic: (id: string) => Promise<Dialogs.Dialog>;
    unsubscribe(id: string): Promise<EmptyResponse>;
    unsubscribeFromPublic: (id: string) => Promise<EmptyResponse>;
    updateNotificationsSettings(id: string, enabled: number | boolean): Promise<Dialogs.UpdateNotificationsSettingsResponse>;
    getNotificationsSettings(id: string): Promise<Dialogs.GetNotificationsSettingsResponse>;
    getPublicOccupants(id: string, params?: Dialogs.GetPublicOccupantsParams): Promise<Dialogs.GetPublicOccupantsResponse>;
    clearHistory(id: string): Promise<EmptyResponse>;
}
//# sourceMappingURL=Dialogs.d.ts.map