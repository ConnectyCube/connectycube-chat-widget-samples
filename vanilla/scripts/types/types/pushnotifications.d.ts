import type { DateOrTimestamp } from './common';
export declare enum NotificationChannel {
    APNS = "apns",
    VOIP = "apns_voip",
    GCM = "gcm",
    WEB = "web"
}
export declare enum DevicePlatform {
    IOS = "ios",
    ANDROID = "android",
    WEB = "web"
}
export declare enum PushEnvironment {
    DEV = "development",
    PROD = "production"
}
export declare namespace ConnectyCubePushNotifications {
    type Subscription = {
        subscription: {
            id: number | string;
            notification_channel: {
                name: NotificationChannel | string;
            };
            device: {
                udid: string;
                platform: {
                    name: DevicePlatform | string;
                };
            };
        };
    };
    type Event = {
        event: {
            id: number;
            event_type: string | null;
            message: string | null;
            date: DateOrTimestamp;
            period: DateOrTimestamp;
            name: string | null;
            occured_count?: number;
            created_at?: DateOrTimestamp;
            updated_at?: DateOrTimestamp;
            end_date?: DateOrTimestamp;
            active?: boolean | null;
            application_id: number | null;
            user_id: number | null;
            kind: string | null;
            environment: PushEnvironment | null;
            tag_query?: any;
            notification_channel?: {
                name?: NotificationChannel | null;
            };
        };
    };
    type PushTokenBaseParams = {
        environment: PushEnvironment | string;
    };
    type PushTokenMobileParams = PushTokenBaseParams & {
        client_identification_sequence: string;
        bundle_identifier?: string;
    };
    type PushTokenWebParams = PushTokenBaseParams & {
        web_endpoint: string;
        web_auth: string;
        web_p256dh: string;
    };
    type SubscriptionsCreateParams = {
        notification_channel: NotificationChannel | string;
        push_token: PushTokenMobileParams | PushTokenWebParams;
        device: {
            platform: DevicePlatform | string;
            udid: string;
        };
    };
    type EventsCreateParams = {
        notification_type: 'push' | string;
        push_type: NotificationChannel | string;
        environment: PushEnvironment | string;
        event_type?: 'one_shot' | string;
        message?: string | null;
        user?: {
            ids: string;
            tags?: {
                any?: string;
                all?: string;
                exclude?: string;
            };
        };
        external_user?: {
            ids: string;
        };
    };
}
//# sourceMappingURL=pushnotifications.d.ts.map