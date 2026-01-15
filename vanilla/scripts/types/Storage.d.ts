import type { EmptyResponse, Proxy, Storage } from './types';
import ProxyService from './Proxy';
export default class StorageService {
    proxy: ProxyService;
    readonly route: string;
    constructor(proxy: ProxyService);
    list(params?: Storage.ListParams): Promise<Storage.ListResponse>;
    create(params?: Storage.CreateParams): Promise<Storage.BlobResponse>;
    delete(id: number | string): Promise<EmptyResponse>;
    createAndUpload(params: Storage.CreateAndUploadParams): Promise<Storage.Blob>;
    upload(params: Proxy.Params): Promise<any>;
    markUploaded(params: Storage.MarkUploadedParams): Promise<EmptyResponse>;
    getInfo(id: number | string): Promise<Storage.BlobResponse>;
    getFile(uid: string): Promise<Storage.BlobResponse>;
    getFileObject(uid: string, params: Storage.GetFileObjectParams): Promise<Storage.BlobResponse>;
    update(params: Storage.UpdateParams): Promise<Storage.BlobResponse>;
    privateUrl(fileUID?: string): string;
    publicUrl(fileUID?: string): string;
    private parseUri;
}
//# sourceMappingURL=Storage.d.ts.map