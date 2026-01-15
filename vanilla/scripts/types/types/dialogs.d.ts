import type { ISODateString, SearchableProps, Timestamp } from './common';
import type { ConnectyCubeUsers } from './users';
export declare enum DialogType {
    PUBLIC = 1,
    GROUP = 2,
    PRIVATE = 3,
    BROADCAST = 4,
    MEETING = 5
}
export declare enum LastMessageMessageStatus {
    SENT = "sent",
    DELIVERED = "delivered",
    READ = "read"
}
export declare enum DialogDateProp {
    CREATED = "created_at",
    UPDATED = "updated_at",
    LAST_MESSAGE = "last_message_date_sent"
}
export declare namespace ConnectyCubeDialogs {
    type Dialog = {
        _id: string;
        name: string;
        description: string | null;
        photo: string | null;
        type: DialogType | number;
        user_id: number;
        created_at: ISODateString;
        updated_at: ISODateString;
        xmpp_room_jid?: string | null;
        admins_ids?: number[];
        last_message: string | null;
        last_message_date_sent?: Timestamp;
        last_message_id: string | null;
        last_message_user_id: number | null;
        last_message_status: LastMessageMessageStatus | string | null;
        occupants_ids: number[];
        occupants_count?: number;
        pinned_messages_ids?: string[];
        unread_messages_count: number;
        extensions?: {
            [key: string]: any;
        };
        permissions?: {
            allow_preview: boolean;
        };
    };
    type ListParams = SearchableProps<Dialog> & {
        skip?: number;
        limit?: number;
        count?: number;
        sort_asc?: DialogDateProp | string;
        sort_desc?: DialogDateProp | string;
    };
    type CreateParams = {
        type: DialogType;
        occupants_ids?: (string | number)[] | string;
        admins_ids?: (string | number)[] | string;
        name?: string;
        photo?: string | null;
        description?: string;
        extensions?: {
            [key: string]: any;
        };
        permissions?: {
            allow_preview: boolean;
        };
    };
    type UpdateParams = {
        push_all?: {
            occupants_ids?: (string | number)[];
            admins_ids?: (string | number)[];
            pinned_messages_ids?: string[];
        };
        pull_all?: {
            occupants_ids?: (string | number)[];
            admins_ids?: (string | number)[];
            pinned_messages_ids?: string[];
        };
        name?: string;
        photo?: string | null;
        description?: string;
        extensions?: {
            [key: string]: any;
        };
        permissions?: {
            allow_preview: boolean;
        };
    };
    type GetPublicOccupantsParams = {
        limit?: number;
        skip?: number;
    };
    type ListResponse = {
        total_entries: number;
        skip: number;
        limit: number;
        items: Dialog[];
    };
    type DeleteResponse = {
        SuccessfullyDeleted: {
            ids: string[];
        };
        NotFound: {
            ids: string[];
        };
        WrongPermissions: {
            ids: string[];
        };
    };
    type GetNotificationsSettingsResponse = {
        notifications: {
            enabled: number | string;
        };
    };
    type UpdateNotificationsSettingsResponse = {
        notifications: {
            enabled: number | string;
        };
    };
    type GetPublicOccupantsResponse = {
        items: ConnectyCubeUsers.User[];
    };
}
//# sourceMappingURL=dialogs.d.ts.map