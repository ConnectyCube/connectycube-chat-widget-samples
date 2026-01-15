import type { DateOrTimestamp, SearchCondition } from './common';
export declare enum DataPermission {
    CREATE = "create",
    READ = "read",
    UPDATE = "update",
    DELETE = "delete"
}
export declare enum DataPermissionAccess {
    OPEN = "open",
    OWNER = "owner",
    NOT_ALLOWED = "not_allowed",
    OPEN_FOR_GROUPS = "open_for_groups",
    OPEN_FOR_USERS_IDS = "open_for_users_ids"
}
export declare namespace ConnectyCubeData {
    type PermissionOptions = {
        access: DataPermissionAccess | string;
        user_ids?: string[];
        user_groups?: string[];
    };
    type Permissions = Record<DataPermission | string, PermissionOptions>;
    type CreateRecord = Record<string, any> & {
        permissions?: Permissions;
    };
    type DataRecord = Record<string, any> & {
        _id: string;
        _parent_id: string | null;
        created_at: DateOrTimestamp;
        updated_at: DateOrTimestamp;
        user_id: number;
        permissions: Permissions;
    };
    type CreateParams = CreateRecord | CreateRecord[];
    type ListParams = ({
        sort_asc?: string;
        sort_desc?: string;
        skip?: number;
        limit?: number;
        count?: number;
        output?: {
            include?: string[];
            exclude?: string[];
        };
        near?: string;
    } & SearchCondition<any>) | undefined;
    type ReadParams = {
        permissions: 1;
    };
    type UpdateOptions = {
        [key: string]: any;
        inc?: Record<string, number>;
        pull?: Record<string, any>;
        pull_with_filter?: Record<string, Record<string, any>>;
        pull_all?: Record<string, any[]>;
        pop?: Record<string, 1 | -1>;
        push?: Record<string, any[]>;
        add_to_set?: Record<string, any[]>;
        update_by_index?: Record<string, Record<number, any>>;
        search_criteria?: SearchCondition<any>;
    };
    type ListResponse = {
        class_name: string;
        items: DataRecord[];
    };
    type ReadPermissionsResponse = {
        record_id: string;
        permissions: Permissions;
    };
    type UpdateResponse = {
        class_name: string;
        skip?: number;
        limit?: number;
        total_found?: number;
        not_found?: {
            ids: string[];
        };
        items: DataRecord[];
    };
    type DeleteResponse = {
        SuccessfullyDeleted: {
            ids: string[];
        };
        WrongPermissions: {
            ids: string[];
        };
        NotFound: {
            ids: string[];
        };
    } | {
        total_deleted: number;
    };
}
//# sourceMappingURL=data.d.ts.map