import type { DateOrTimestamp } from './common';
export declare namespace ConnectyCubeMessages {
    type MessageBase = {
        _id: string;
        created_at: DateOrTimestamp;
        updated_at: DateOrTimestamp;
        date_sent: DateOrTimestamp;
        message: string;
        sender_id: number;
        read_ids?: number[];
        delivered_ids?: number[];
        views_count?: number;
        attachments?: Attachment[];
        reactions?: Reactions;
        read?: number;
        [key: string]: any;
    };
    export type Message = (MessageBase & {
        chat_dialog_id: string;
        recipient_id?: number;
    }) | (MessageBase & {
        chat_dialog_id?: string;
        recipient_id: number;
    });
    export type Attachment = {
        type: string;
        uid?: string;
        url?: string;
        [key: string]: any;
    };
    export type Reactions = {
        own: string[];
        total: {
            [emoji: string]: number;
        };
    };
    export type ListParams = {
        chat_dialog_id?: string;
        sort_asc?: 'date_sent' | string;
        sort_desc?: 'date_sent' | string;
        limit?: number;
        skip?: number;
        mark_as_read?: number | string;
        preview?: number | string;
        [field_name: string]: any;
    };
    export type CreateParams = {
        chat_dialog_id?: string;
        recipient_id?: string | number;
        message?: string;
        attachments?: Attachment[];
        [key: string]: any;
    };
    export type UpdateParams = {
        chat_dialog_id?: string;
        read?: number | string;
        delivered?: number | string;
        message?: string;
    };
    export type CreateSystemParams = {
        recipientId: number;
        [key: string]: any;
    };
    export type UnreadCountParams = {
        chat_dialog_ids?: string | string[];
    };
    export type PutReactionParams = {
        add?: string;
        remove?: string;
    };
    export type ListResponse = {
        skip: number;
        limit: number;
        items: Message[];
    };
    export type DeleteResponse = {
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
    export type CreateSystemResponse = {
        messageId: string;
        recipientId: number;
        extensionParams?: {
            [key: string]: any;
        };
    };
    export type UnreadCountResponse = {
        total: number;
        [chat_dialog_id: string]: number;
    };
    export type ListReactionsResponse = {
        [emoji: string]: number[];
    };
    export {};
}
//# sourceMappingURL=messages.d.ts.map