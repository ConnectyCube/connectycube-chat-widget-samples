import type { LinkPreview, LinkPreviewCache } from './types';
import ProxyService from './Proxy';
export default class LinkPreviewService {
    proxy: ProxyService;
    cache: LinkPreviewCache;
    readonly route: string;
    readonly server: string;
    constructor(proxy: ProxyService);
    get(url: string): Promise<LinkPreview>;
    private getHostFromUrl;
}
//# sourceMappingURL=LinkPreview.d.ts.map