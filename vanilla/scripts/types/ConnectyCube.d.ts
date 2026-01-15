import type { Config } from './types';
import AddressBookService from './AddressBook';
import AuthService from './Auth';
import XMPPChatService from './messaging/xmpp';
import SAMAChatService from './messaging/sama';
import ConferenceClient from './videocalling_conference/ConferenceClient';
import DataService from './Data';
import MeetingsService from './Meetings';
import ProxyService from './Proxy';
import PushNotificationsService from './PushNotifications';
import StorageService from './Storage';
import UsersService from './Users';
import Utils from './Utils';
import WebRTCClient from './videocalling/WebRTCClient';
import WhiteboardService from './Whiteboard';
import LinkPreviewService from './LinkPreview';
export default class ConnectyCube<ChatService extends SAMAChatService | XMPPChatService> {
    ConnectyCube: typeof ConnectyCube;
    readonly version: string;
    readonly isWebRTCAvailable: boolean;
    utils: Utils;
    service: ProxyService;
    auth: AuthService;
    users: UsersService;
    storage: StorageService;
    pushnotifications: PushNotificationsService;
    data: DataService;
    addressbook: AddressBookService;
    chat: ChatService;
    meeting: MeetingsService;
    whiteboard: WhiteboardService;
    linkpreview: LinkPreviewService;
    videochat: WebRTCClient;
    videochatconference: ConferenceClient;
    setSession: AuthService['setSession'];
    getSession: AuthService['getSession'];
    createSession: AuthService['createSession'];
    destroySession: AuthService['destroySession'];
    /**
     * @deprecated ConnectyCube.login(user) is deprecated. Use `ConnectyCube.createSession(user)` or `ConnectyCube.auth.login(user)` instead.
     */
    login: AuthService['login'];
    /**
     * @deprecated ConnectyCube.logout() is deprecated. Use `ConnectyCube.destroySession()` or `ConnectyCube.auth.logout()` instead.
     */
    logout: AuthService['logout'];
    init(credentials: Config.Credentials, configMap?: Config.Options): void;
}
export { type XMPPChatService as XMPPChat, type SAMAChatService as SAMAChat };
//# sourceMappingURL=ConnectyCube.d.ts.map