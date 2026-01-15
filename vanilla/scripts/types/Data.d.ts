import type { Data, EmptyResponse, SearchCondition } from './types';
import ProxyService from './Proxy';
export default class DataService {
    proxy: ProxyService;
    readonly route: string;
    constructor(proxy: ProxyService);
    create(className: string, params?: Data.CreateParams): Promise<Data.DataRecord>;
    list(className: string, params?: Data.ListParams): Promise<Data.ListResponse>;
    readPermissions(className: string, id: string): Promise<Data.ReadPermissionsResponse>;
    update(className: string, params?: Data.UpdateOptions | Data.UpdateOptions[]): Promise<Data.UpdateResponse | Data.DataRecord>;
    delete(className: string, params: string | string[] | SearchCondition<any>): Promise<Data.DeleteResponse | EmptyResponse>;
    private createRecord;
}
//# sourceMappingURL=Data.d.ts.map