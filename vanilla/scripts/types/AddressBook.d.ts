import type { AddressBook } from './types';
import ProxyService from './Proxy';
export default class AddressBookService {
    proxy: ProxyService;
    readonly route: string;
    constructor(proxy: ProxyService);
    uploadAddressBook(list?: AddressBook.Contact[], params?: AddressBook.UploadParams): Promise<AddressBook.UploadResponse>;
    get(udid?: string): Promise<AddressBook.Contact[]>;
    getRegisteredUsers(params?: AddressBook.GetRegisteredUsersParams): Promise<AddressBook.GetRegisteredUsersResponse>;
}
//# sourceMappingURL=AddressBook.d.ts.map