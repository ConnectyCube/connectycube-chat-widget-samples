import type { DateOrTimestamp, SearchableProps } from './common';
export declare namespace ConnectyCubeUsers {
    type User = {
        id: number;
        full_name: string | null;
        email: string | null;
        login: string | null;
        phone: string | null;
        website: string | null;
        created_at: DateOrTimestamp;
        updated_at: DateOrTimestamp;
        last_request_at: DateOrTimestamp;
        external_user_id: number | null;
        external_id: string | number | null;
        facebook_id: string | number | null;
        twitter_id: string | number | null;
        custom_data: string | null;
        blob_id: number | null;
        avatar: string | null;
        user_tags: string[] | null;
        timezone: number | null;
        is_guest?: boolean;
    };
    type UserFields = {
        login?: string | null;
        email?: string | null;
        full_name?: string | null;
        phone?: string | null;
        avatar?: string | null;
        blob_id?: number | null;
        website?: string | null;
        custom_data?: string | null;
        external_user_id?: number | null;
        external_id?: string | null;
        facebook_id?: string | number | null;
        twitter_id?: string | number | null;
        tag_list?: string[];
        timezone?: number | null;
    };
    type GetV2Params = SearchableProps<User> & {
        offset?: number;
        limit?: number;
        sort_asc?: keyof User;
        sort_desc?: keyof User;
    };
    type SignUpParams = Partial<UserFields> & ({
        login: string;
        password: string;
    } | {
        email: string;
        password: string;
    });
    type UpdateParams = UserFields & {
        password?: string;
        old_password?: string;
    };
    type ListOnlineParams = {
        limit?: number;
        offset?: number;
    };
    type GetV2Response = {
        limit: number;
        skip: number;
        total_entries: number;
        items: User[];
    };
    type UserResponse = {
        user: User;
    };
    type UsersResponse = {
        users: User[];
    };
    type OnlineCountResponse = {
        count: number;
    };
    type OldGetResponse = {
        current_page: number;
        per_page: number;
        total_entries: number;
        items: User[];
    };
}
//# sourceMappingURL=users.d.ts.map