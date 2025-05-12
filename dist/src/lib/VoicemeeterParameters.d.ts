import Voicemeeter from "./VoicemeeterConnector";
declare type Value = string | number;
export declare function vmParameters(vm: Voicemeeter): {
    Command: {
        Shutdown: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        Show: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        Restart: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        Eject: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        Reset: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        Save: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        Load: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        Lock: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        Button: (i: number) => {
            State: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            StateOnly: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            Trigger: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            Color: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
        };
        DialogShow: {
            VBANCHAT: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
        };
        SaveBUSEQ: (j: number) => {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        LoadBUSEQ: (j: number) => {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        SaveStripEQ: (j: number) => {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        LoadStripEQ: (j: number) => {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        Preset: (k: number) => {
            Recall: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
        };
    };
    Strip: (i: number) => {
        Mono: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        Mute: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        Solo: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        MC: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        Gain: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        GainLayer: (j: number) => {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        Pan_x: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        Pan_y: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        Color_x: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        Color_y: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        fx_x: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        fx_y: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        Audibility: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        Comp: {
            GainIn: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            Ratio: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            Threshold: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            Attack: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            Release: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            Knee: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            GainOut: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            MakeUp: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
        };
        Gate: {
            Threshold: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            Damping: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            BPSidechain: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            Attack: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            Hold: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            Release: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
        };
        Denoiser: {
            Threshold: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
        };
        Pitch: {
            On: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            DryWet: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            PitchValue: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            LoFormant: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            MedFormant: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            HiFormant: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
        };
        Karaoke: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        Limit: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        EQGain1: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        EQGain2: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        EQGain3: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        Label: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        A1: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        A2: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        A3: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        A4: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        A5: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        B1: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        B2: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        B3: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        FadeTo: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        FadeBy: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        Reverb: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        Delay: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        Fx1: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        Fx2: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        PostReverb: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        PostDelay: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        PostFx1: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        PostFx2: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        EQ: {
            on: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            AB: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            channel: (j: number) => {
                cell: (k: number) => {
                    on: {
                        set: (value: Value) => Promise<any>;
                        get: () => any;
                    };
                    type: {
                        set: (value: Value) => Promise<any>;
                        get: () => any;
                    };
                    f: {
                        set: (value: Value) => Promise<any>;
                        get: () => any;
                    };
                    gain: {
                        set: (value: Value) => Promise<any>;
                        get: () => any;
                    };
                    q: {
                        set: (value: Value) => Promise<any>;
                        get: () => any;
                    };
                };
            };
        };
        VAIO: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        App: (k: number) => {
            Gain: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            Mute: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
        };
        AppGain: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        AppMute: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        device: {
            name: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            sr: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            wdm: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            ks: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            mme: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            asio: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
        };
    };
    Bus: (i: number) => {
        Mono: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        Mute: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        EQ: {
            on: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            AB: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            channel: (j: number) => {
                cell: (k: number) => {
                    on: {
                        set: (value: Value) => Promise<any>;
                        get: () => any;
                    };
                    type: {
                        set: (value: Value) => Promise<any>;
                        get: () => any;
                    };
                    f: {
                        set: (value: Value) => Promise<any>;
                        get: () => any;
                    };
                    gain: {
                        set: (value: Value) => Promise<any>;
                        get: () => any;
                    };
                    q: {
                        set: (value: Value) => Promise<any>;
                        get: () => any;
                    };
                };
            };
        };
        Gain: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        Label: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        mode: {
            normal: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            Amix: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            Bmix: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            Repeat: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            Composite: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            TVMix: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            UpMix21: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            UpMix41: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            UpMix61: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            CenterOnly: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            LFEOnly: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            RearOnly: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
        };
        FadeTo: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        FadeBy: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        Sel: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        ReturnReverb: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        ReturnDelay: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        ReturnFx1: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        ReturnFx2: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        Monitor: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        VAIO: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        device: {
            name: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            sr: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            wdm: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            ks: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            mme: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            asio: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
        };
    };
    Fx: {
        Reverb: {
            On: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            AB: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
        };
        Delay: {
            On: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            AB: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
        };
    };
    patch: {
        asio: (i: number) => {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        OutA2: (i: number) => {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        OutA3: (i: number) => {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        OutA4: (i: number) => {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        OutA5: (i: number) => {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        composite: (j: number) => {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        insert: (k: number) => {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        PostFaderComposite: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        PostFxInsert: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
    };
    Option: {
        sr: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        ASIOsr: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        delay: (i: number) => {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        buffer: {
            mme: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            wdm: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            ks: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            asio: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
        };
        mode: {
            exclusif: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            swift: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
        };
        MonitorOnSEL: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        SliderMode: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
    };
    recorder: {
        stop: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        play: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        replay: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        ff: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        rew: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        A1: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        A2: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        A3: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        A4: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        A5: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        B1: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        B2: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        B3: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        record: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        pause: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        goto: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        load: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        samplerate: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        ArmStrip: (i: number) => {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        ArmBus: (i: number) => {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        mode: {
            recbus: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            PlayOnLoad: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            Loop: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            MultiTrack: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
        };
        bitResolution: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        Channel: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        kbps: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        FileType: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        gain: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
    };
    vban: {
        Enable: {
            set: (value: Value) => Promise<any>;
            get: () => any;
        };
        instream: (i: number) => {
            on: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            name: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            ip: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            port: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            sr: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            channel: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            bit: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            quality: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            route: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
        };
        outstream: (i: number) => {
            on: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            name: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            ip: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            port: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            sr: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            channel: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            bit: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            quality: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
            route: {
                set: (value: Value) => Promise<any>;
                get: () => any;
            };
        };
    };
};
export {};
