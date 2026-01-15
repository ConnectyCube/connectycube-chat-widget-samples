import type { DateOrTimestamp } from './common';
import type { ConnectyCubeProxy } from './proxy';
export declare namespace ConnectyCubeStorage {
    type BlobObjectAccess = {
        id?: number;
        blob_id?: number;
        expires?: DateOrTimestamp;
        object_access_type?: string;
        params?: string;
        download_url?: string;
    };
    type Blob = {
        id: number;
        uid?: string;
        content_type?: string;
        name?: string;
        size?: number | null;
        created_at?: DateOrTimestamp;
        updated_at?: DateOrTimestamp;
        public?: boolean;
        blob_status?: string | null;
        set_completed_at?: DateOrTimestamp;
        blob_object_access?: BlobObjectAccess;
        account_id?: number;
        app_id?: number;
        [key: string]: any;
    };
    type ListParams = {
        current_page?: number;
        per_page?: number;
    };
    type CreateParams = {
        content_type: string;
        name: string;
        public: boolean;
    };
    type CreateAndUploadParams = {
        name: string;
        file: File | Buffer;
        type: string;
        size: number;
        public?: boolean;
        abort_id?: string | number;
    };
    type UploadParams = ConnectyCubeProxy.Params;
    type MarkUploadedParams = {
        id: number;
        size: number | string;
    };
    type GetFileObjectParams = {
        download_url?: string;
    };
    type UpdateParams = {
        id: number;
        name: string;
    };
    type ListResponse = {
        current_page: number;
        per_page: number;
        total_entries: number;
        items: Blob[];
    };
    type BlobResponse = {
        blob: Blob;
    };
}
//# sourceMappingURL=storage.d.ts.map