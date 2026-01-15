import type { DateOrTimestamp } from './common';
import type { ConnectyCubeUsers } from './users';
export declare enum LoginProviderNames {
    FACEBOOK = "facebook",
    TWITTER = "twitter",
    FIREBASE_PHONE = "firebase_phone",
    FIREBASE_EMAIL = "firebase_email"
}
export declare namespace ConnectyCubeAuth {
    type Session = {
        id: number;
        user_id: number;
        application_id: string | number;
        token: string;
        ts: DateOrTimestamp;
        created_at: DateOrTimestamp;
        updated_at: DateOrTimestamp;
        user?: ConnectyCubeUsers.User | null;
    };
    type LoginProviderKeys = {
        token: string;
        secret?: string;
    };
    type LoginFirebaseKeys = {
        project_id: string | number;
        access_token: string;
    };
    type LoginByLogin = {
        login: string;
        password: string;
    };
    type LoginByEmail = {
        email: string;
        password: string;
    };
    type LoginByGuest = {
        guest: '1';
        full_name: string;
    };
    type LoginByFacebook = {
        provider: LoginProviderNames.FACEBOOK;
        keys: LoginProviderKeys;
    };
    type LoginByTwitter = {
        provider: LoginProviderNames.TWITTER;
        keys: LoginProviderKeys;
    };
    type LoginByFirebasePhone = {
        provider: LoginProviderNames.FIREBASE_PHONE;
        firebase_phone: LoginFirebaseKeys;
    };
    type LoginByFirebaseEmail = {
        provider: LoginProviderNames.FIREBASE_EMAIL;
        firebase_email: LoginFirebaseKeys;
    };
    type LoginParams = LoginByLogin | LoginByEmail | LoginByGuest | LoginByFacebook | LoginByTwitter | LoginByFirebasePhone | LoginByFirebaseEmail;
    type GeneratedSessionParams = {
        application_id: string | number;
        auth_key: string;
        user?: LoginByLogin | LoginByEmail | LoginByGuest;
        provider?: LoginProviderNames;
        keys?: LoginProviderKeys;
        firebase_phone?: LoginFirebaseKeys;
        firebase_email?: LoginFirebaseKeys;
    };
    type LoginRawResponse = {
        user: ConnectyCubeUsers.User;
        [key: string]: any;
    };
    type GetSessionRawResponse = {
        session: Session;
        [key: string]: any;
    };
}
//# sourceMappingURL=auth.d.ts.map