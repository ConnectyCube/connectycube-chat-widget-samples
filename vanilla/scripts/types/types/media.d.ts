export declare enum MediaType {
    AUDIO = "audio",
    VIDEO = "video",
    NONE = "none"
}
export declare namespace ConnectyCubeMedia {
    interface ElementOptions {
        muted?: boolean;
        mirror?: boolean;
    }
    interface ElementParams {
        elementId?: string;
        options?: ElementOptions;
    }
    interface DisplayParams extends DisplayMediaStreamOptions, ElementParams {
    }
    interface UserParams extends MediaStreamConstraints, ElementParams {
    }
    type DeviceIdOrTrackConstraints = MediaTrackConstraints | string;
    type TrackConstraintsOrDeviceIds = {
        audio?: DeviceIdOrTrackConstraints;
        video?: DeviceIdOrTrackConstraints;
    };
}
//# sourceMappingURL=media.d.ts.map