import type { DateOrTimestamp, SearchCondition } from './common';
export declare enum MeetingDateMetric {
    MINUTES = "minutes",
    HOURS = "hours",
    DAYS = "days",
    WEEK = "weeks"
}
export declare namespace ConnectyCubeMeetings {
    type Attendee = {
        id?: number;
        email?: string;
    };
    type MeetingParams = {
        name?: string;
        start_date?: DateOrTimestamp;
        end_date?: DateOrTimestamp;
        attendees?: Attendee[];
        record?: boolean | null;
        public?: boolean;
        scheduled?: boolean;
        notify?: boolean;
        notify_before?: {
            metric: MeetingDateMetric | string;
            value: number;
        };
        timezone?: {
            offset: number;
            name: string;
        };
    };
    type Meeting = {
        _id: string;
        chat_dialog_id?: string | null;
        host_id: number;
        created_at: DateOrTimestamp;
        updated_at: DateOrTimestamp;
    } & MeetingParams;
    type Recording = {
        _id: string;
        room_id: string;
        participants_ids: number[];
        updated_at: string;
        created_at: string;
        download_url: string;
        participants_count: number;
        duration: number;
        size: number;
    };
    type GetParams = {
        _id?: string;
        limit?: number;
        offset?: number;
        start_at?: SearchCondition<DateOrTimestamp>;
        end_at?: SearchCondition<DateOrTimestamp>;
        updated_at?: SearchCondition<DateOrTimestamp>;
        created_at?: SearchCondition<DateOrTimestamp>;
        scheduled?: SearchCondition<boolean>;
    };
    type CreateParams = {
        chat?: boolean;
    } & MeetingParams;
}
//# sourceMappingURL=meetings.d.ts.map