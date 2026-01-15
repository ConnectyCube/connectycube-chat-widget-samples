import type { Chat } from '../../types/index';
export default class ChatUtils {
    static buildUserJid(params?: Chat.UserJIDParams): string | void;
    static buildUserJidLocalPart(userId: string | number): string;
    static createMessageStanza(attrs?: string | {
        [attrName: string]: any;
    }): Chat.XmlElement;
    static createIqStanza(attrs?: string | {
        [attrName: string]: any;
    }): Chat.XmlElement;
    static createPresenceStanza(attrs?: string | {
        [attrName: string]: any;
    }): Chat.XmlElement;
    static createNonza(name: string, attrs?: string | {
        [attrName: string]: any;
    }): Chat.XmlElement;
    static getAttr(element: Chat.XmlElement, name: string): any;
    static getElement(element: Chat.XmlElement, name: string): Chat.XmlElement | undefined;
    static getName(element: Chat.XmlElement): string | null;
    static getText(element: Chat.XmlElement): string | null;
    static getChildElements(element: Chat.XmlElement): Chat.XmlElement[];
    static isErrorStanza(element: Chat.XmlElement): boolean;
    static getAllElements(element: Chat.XmlElement, name: string): Chat.XmlElement[];
    static getElementText(element: Chat.XmlElement, name: string): string | null;
    static getElementTreePath(element: Chat.XmlElement, elementsPath: string[]): Chat.XmlElement | undefined;
    static assignObjectToXml(element: Chat.XmlElement, obj: {
        [key: string]: any;
    }, name: string): Chat.XmlElement;
    static assignExtraParamsToXml(element: Chat.XmlElement, extension: {
        [key: string]: any;
    }): Chat.XmlElement;
    static assignXmlToObject(element: Chat.XmlElement, obj: any): any;
    static parseExtraParams(element: Chat.XmlElement): {
        extension: any;
        dialogId: string | null;
    } | null;
    static buildErrorFromXMPPErrorStanza(errorStanza: Chat.XmlElement): {
        code: number;
        info: string | null;
    };
    static getUniqueId(suffix?: any): string;
    static parseReactions(element: Chat.XmlElement): {
        add: string;
        remove: string;
    };
}
//# sourceMappingURL=ChatUtils.d.ts.map