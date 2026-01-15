import type { EmptyResponse, PushNotifications } from './types';
import ProxyService from './Proxy';
export default class PushNotificationsService {
    proxy: ProxyService;
    subscriptions: SubscriptionsService;
    events: EventsService;
    constructor(proxy: ProxyService);
    base64Encode: (src: string, urlsafe?: boolean) => string;
}
declare class SubscriptionsService {
    proxy: ProxyService;
    readonly route: string;
    constructor(proxy: ProxyService);
    create(params: PushNotifications.SubscriptionsCreateParams): Promise<PushNotifications.Subscription>;
    list(): Promise<PushNotifications.Subscription[]>;
    delete(id: string | number): Promise<EmptyResponse>;
}
declare class EventsService {
    proxy: ProxyService;
    readonly route: string;
    constructor(proxy: ProxyService);
    create(event: PushNotifications.EventsCreateParams): Promise<PushNotifications.Event[]>;
}
export {};
//# sourceMappingURL=PushNotifications.d.ts.map