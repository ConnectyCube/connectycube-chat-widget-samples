import type { ForceParams } from './common';
import type { ConnectyCubeUsers } from './users';
export declare enum AddressBookUserDataType {
    COMPACT = 1,
    FULL = 0
}
export declare namespace ConnectyCubeAddressBook {
    type Contact = {
        name: string;
        phone: string;
        destroy?: number | string;
    };
    type UploadParams = {
        udid?: string;
    } & ForceParams;
    type GetRegisteredUsersParams = boolean | {
        udid?: string;
        compact: AddressBookUserDataType | number;
    };
    type UploadResponse = {
        deleted: number;
        rejected: Record<string | number, string[]>;
        created: number;
        updated: number;
    };
    type GetRegisteredUsersResponse = {
        items: Partial<ConnectyCubeUsers.User> & {
            address_book_name: string;
        }[];
    };
}
//# sourceMappingURL=addressbook.d.ts.map