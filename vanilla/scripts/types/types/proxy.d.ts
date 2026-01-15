import type { ConnectyCubeConfig } from './config';
import type { ConnectyCubeAuth } from './auth';
export declare enum ProxyMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE",
    HEAD = "HEAD"
}
export declare enum ProxyType {
    JSON = "json",
    TEXT = "text"
}
export declare namespace ConnectyCubeProxy {
    type Params = {
        url: string;
        type?: ProxyMethod;
        data?: any;
        contentType?: boolean;
        dataType?: ProxyType;
        useArrayQuery?: boolean;
        fileToCustomObject?: boolean;
        authKey?: string;
        abort_id?: string | number;
    };
    type AbortControllersMap = {
        [key: string | number]: {
            controllers: AbortController[];
            doneRequestsCount?: number;
        };
    };
    type SDKInstance = {
        config: ConnectyCubeConfig.Object;
        session: Partial<ConnectyCubeAuth.Session> | null;
    };
    type ErrorObject = {
        code?: number;
        info?: {
            errors?: {
                base?: string[];
            };
        };
    };
}
//# sourceMappingURL=proxy.d.ts.map