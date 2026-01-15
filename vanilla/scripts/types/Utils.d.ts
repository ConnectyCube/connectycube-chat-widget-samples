import type { Config } from './types';
export default class Utils {
    static loggers: Array<(args: any[]) => void>;
    static env: {
        isReactNative: boolean;
        isBrowser: boolean;
        isNodeJS: boolean;
        isExpo: boolean;
    };
    static safeCallbackCall(cb?: (...args: any[]) => void): (...args: any[]) => void;
    static getUrl(base: Config.ApiRoutes[keyof Config.ApiRoutes], res?: string | number, ext?: string | number): string;
    static isArray(arg: any): arg is any[];
    static isObject(obj: any): boolean;
    static getBsonObjectId(): string;
    static DLog(...args: any[]): void;
    static callTrafficUsageCallback(callbackName: 'xmppDataRead' | 'xmppDataWrite', data: any): void;
    static cloneObject<T>(obj?: T, escapeNull?: boolean): T;
}
//# sourceMappingURL=Utils.d.ts.map