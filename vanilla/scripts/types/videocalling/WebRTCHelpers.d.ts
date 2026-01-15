export default class WebRTCHelpers {
    static getUserJid(id: string | number): string;
    static getUserIdFromJID(jid: string): number | null;
    static trace(text: string): void;
    static traceWarning(text: string): void;
    static traceError(text: string): void;
    static get getVersionFirefox(): number;
    static get getVersionSafari(): number;
}
//# sourceMappingURL=WebRTCHelpers.d.ts.map