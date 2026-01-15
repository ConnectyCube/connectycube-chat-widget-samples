import type { EmptyResponse, Meetings } from './types';
import ProxyService from './Proxy';
export default class MeetingsService {
    proxy: ProxyService;
    readonly route: string;
    constructor(proxy: ProxyService);
    get(params?: Meetings.GetParams): Promise<Meetings.Meeting | Meetings.Meeting[]>;
    create(params?: Meetings.CreateParams): Promise<Meetings.Meeting>;
    update(id: string | number, params: Meetings.MeetingParams): Promise<Meetings.Meeting>;
    delete(id: string | number): Promise<EmptyResponse>;
    getRecordings(id: string | number): Promise<Meetings.Recording[]>;
}
//# sourceMappingURL=Meetings.d.ts.map