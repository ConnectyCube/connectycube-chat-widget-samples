import type { Config as ConnectyCubeConfig } from './types';
export declare class Config {
    private static instance;
    version: string;
    creds: ConnectyCubeConfig.Credentials;
    endpoints: ConnectyCubeConfig.Endpoints;
    chatProtocol: ConnectyCubeConfig.ChatProtocolURLs;
    chat: ConnectyCubeConfig.Chat;
    videochat: ConnectyCubeConfig.Videochat;
    conference: ConnectyCubeConfig.Conference;
    whiteboard: ConnectyCubeConfig.Whiteboard;
    linkpreview: ConnectyCubeConfig.LinkPreview;
    readonly urls: ConnectyCubeConfig.ApiRoutes;
    on: ConnectyCubeConfig.Listeners;
    timeout: number | null;
    debug: ConnectyCubeConfig.Debug;
    private constructor();
    static getInstance(): Config;
    set(options: ConnectyCubeConfig.Options): void;
}
declare const _default: Config;
export default _default;
//# sourceMappingURL=config.d.ts.map