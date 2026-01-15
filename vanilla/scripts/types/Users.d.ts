import type { EmptyResponse, Users } from './types';
import ProxyService from './Proxy';
export default class UsersService {
    proxy: ProxyService;
    readonly route: string;
    constructor(proxy: ProxyService);
    getV2(params: Users.GetV2Params): Promise<Users.GetV2Response>;
    signup(user: Users.SignUpParams, auth_key?: string): Promise<Users.UserResponse>;
    update(user?: Users.UpdateParams): Promise<Users.UserResponse>;
    delete(): Promise<EmptyResponse>;
    resetPassword(email?: string): Promise<EmptyResponse>;
    listOnline(params?: Users.ListOnlineParams): Promise<Users.UsersResponse>;
    getOnlineCount(): Promise<Users.OnlineCountResponse>;
    /**
     * @deprecated Use `getV2(params)` instead.
     */
    get(params: any): Promise<Users.OldGetResponse | Users.UserResponse>;
}
//# sourceMappingURL=Users.d.ts.map