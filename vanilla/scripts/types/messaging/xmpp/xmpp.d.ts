import type { Element } from '@xmpp/xml';
import type { Options } from '@xmpp/connection';
import type { Reconnect } from '@xmpp/reconnect';
import type { Middleware } from '@xmpp/middleware';
import type { StreamFeatures } from '@xmpp/stream-features';
import type { IQCaller } from '@xmpp/iq/caller.js';
import type { IQCallee } from '@xmpp/iq/callee.js';
import type { SASL2 } from '@xmpp/sasl2';
import type { SASL } from '@xmpp/sasl';
import type { Resource } from '@xmpp/resource-binding';
import type { Bind2 } from '@xmpp/client-core/src/bind2/bind2.js';
import type { Token, FAST } from '@xmpp/client-core/src/fast/fast.js';
import { jid, xml, Client } from '@xmpp/client-core';
import _websocket from '@xmpp/websocket';
import _resourceBinding from '@xmpp/resource-binding';
import SASLFactory from 'saslmechanisms';
export type XMPPResource = Resource | string | (() => Promise<string>) | undefined;
export type XMPPCredentialsProp = string | undefined;
export type XMPPCredentialsAuth = (credentials: Partial<XMPPCredentialsObj>, mechanism: string, userAgent?: XMPPUserAgent) => Promise<void>;
export type XMPPCredentials = Partial<XMPPCredentialsObj> | ((callback: XMPPCredentialsAuth, mechanism: string) => Promise<void>) | undefined;
export type XMPPUserAgent = Element | undefined;
export interface XMPPCredentialsObj {
    username: XMPPCredentialsProp;
    password: XMPPCredentialsProp;
    token: Token;
}
export interface XMPPOptions extends Options, Partial<XMPPCredentialsObj> {
    resource?: XMPPResource;
    credentials?: XMPPCredentials;
    userAgent?: XMPPUserAgent;
}
export interface XMPPClient extends Client {
    entity: Client;
    reconnect: Reconnect<Client>;
    websocket: ReturnType<typeof _websocket>;
    middleware: Middleware<Client>;
    streamFeatures: StreamFeatures<Client>;
    iqCaller: IQCaller<Client>;
    iqCallee: IQCallee<Client>;
    saslFactory: SASLFactory;
    sasl2: SASL2;
    sasl: SASL;
    resourceBinding: ReturnType<typeof _resourceBinding>;
    mechanisms: {
        [x: string]: any;
    }[];
    bind2: Bind2;
    fast: FAST;
    options: XMPPOptions;
    sendOnline: (element: Element, ...args: unknown[]) => Promise<void>;
}
declare function xmppClient(options: XMPPOptions): XMPPClient;
export { jid, xml, xmppClient };
//# sourceMappingURL=xmpp.d.ts.map