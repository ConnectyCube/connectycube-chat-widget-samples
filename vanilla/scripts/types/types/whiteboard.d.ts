import type { DateOrTimestamp } from './common';
export declare namespace ConnectyCubeWhiteboard {
    type Item = {
        _id: string;
        name: string;
        chat_dialog_id: string;
        user_id: number;
        created_at: DateOrTimestamp;
        updated_at: DateOrTimestamp;
        [key: string]: any;
    };
    type GetUrlParams = {
        id: string;
        title: string;
        username: string;
    };
    type GetParams = {
        chat_dialog_id: string;
    } | string;
    type CreateParams = {
        chat_dialog_id: string;
        name: string;
    };
    type UpdateParams = {
        name: string;
    };
}
//# sourceMappingURL=whiteboard.d.ts.map