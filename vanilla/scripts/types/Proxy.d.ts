import type { Auth, Proxy } from './types';
import { ProxyMethod, ProxyType } from './types/enums';
import { FormDataImpl } from './platform';
export default class ProxyService {
    sdkInstance: Proxy.SDKInstance;
    requestsNumber: number;
    fetchImpl: typeof fetch;
    private currentUserId;
    private abortControllersMap;
    requestMethod: typeof ProxyMethod;
    responseType: typeof ProxyType;
    setSession(session: Partial<Auth.Session>): void;
    getSession(): Partial<Auth.Session> | null;
    setCurrentUserId(userId?: number | null): void;
    getCurrentUserId(): number | undefined;
    logRequest(params: Proxy.Params, requestId: number): void;
    logResponse(response: any, requestId: number): void;
    buildRequestAndURL(params: Proxy.Params): [any, string];
    buildRequestBody(params: Proxy.Params, isMultipartFormData: boolean, isPostOrPutType: boolean): typeof FormDataImpl | string | any;
    serializeQueryParams(obj: any, prefix: string, useArrayQuery: any, level?: number): string;
    encodeURIComponent(uriComponent: string | number | boolean): string;
    abortRequest(abortId: string | number): void;
    processSuccessfulOrFailedRequest(abort_id?: string | number): void;
    ajax<T>(params: Proxy.Params): Promise<T>;
    processAjaxResponse(body: any, resolve: (value: any) => void, requestId: number): void;
    processAjaxError(response: Response | null, body: any, error: any, reject: (reason?: any) => void, resolve: (value: any) => void, params: Proxy.Params, requestId: number): void;
    handleExpiredSessionResponse(error: any, response: any, reject: (reason?: any) => void, resolve: (value: any) => void, params: Proxy.Params): void;
    private isExpiredSessionError;
}
//# sourceMappingURL=Proxy.d.ts.map