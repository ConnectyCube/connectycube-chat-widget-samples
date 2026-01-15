import type { XMPPClient, XMPPCredentials, XMPPOptions, XMPPUserAgent } from './xmpp';
export declare function createOnAuthenticate(credentials: XMPPCredentials, userAgent: XMPPUserAgent): (...args: any[]) => Promise<void>;
export declare function getMechanism(mechanisms: string[], entity: XMPPClient, options?: XMPPOptions): string;
export declare function getDomain(service: string): string;
export declare function setupIfAvailable(module?: any, ...args: any[]): any;
//# sourceMappingURL=xmpp.utils.d.ts.map