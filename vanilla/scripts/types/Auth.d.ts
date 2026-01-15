import type { Auth, Users, EmptyResponse } from './types';
import ProxyService from './Proxy';
export default class AuthService {
    proxy: ProxyService;
    readonly routes: {
        session: string;
        login: string;
    };
    constructor(proxy: ProxyService);
    setSession: (session: Partial<Auth.Session>) => void;
    getSession: () => Promise<Auth.Session>;
    createSession: (params?: Auth.LoginParams | {}) => Promise<Auth.Session>;
    destroySession: () => Promise<EmptyResponse>;
    login: (params: Auth.LoginParams) => Promise<Users.User>;
    logout: () => Promise<EmptyResponse>;
    private generateCreateSessionParams;
}
//# sourceMappingURL=Auth.d.ts.map