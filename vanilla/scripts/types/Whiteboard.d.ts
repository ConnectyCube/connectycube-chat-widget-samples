import type { EmptyResponse, Whiteboard } from './types';
import ProxyService from './Proxy';
export default class WhiteboardService {
    proxy: ProxyService;
    readonly route: string;
    readonly server: string;
    constructor(proxy: ProxyService);
    getURL({ id, title, username }: Whiteboard.GetUrlParams): string;
    get(paramsOrId: Whiteboard.GetParams): Promise<Whiteboard.Item[]>;
    create(params: Whiteboard.CreateParams): Promise<Whiteboard.Item>;
    update(id: string, params: Whiteboard.UpdateParams): Promise<Whiteboard.Item>;
    delete(id: string): Promise<EmptyResponse>;
}
//# sourceMappingURL=Whiteboard.d.ts.map