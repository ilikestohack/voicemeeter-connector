import Voicemeeter from "./VoicemeeterConnector";
declare type Value = string | number | undefined;
export declare function vmParameters(vm: Voicemeeter): {
    Command: {
        Shutdown: (value?: Value) => Promise<any>;
        Show: (value?: Value) => Promise<any>;
        Restart: (value?: Value) => Promise<any>;
        Eject: (value?: Value) => Promise<any>;
        Reset: (value?: Value) => Promise<any>;
        Save: (value?: Value) => Promise<any>;
        Load: (value?: Value) => Promise<any>;
        Lock: (value?: Value) => Promise<any>;
        Button: (i: number) => {
            State: (value?: Value) => Promise<any>;
            StateOnly: (value?: Value) => Promise<any>;
            Trigger: (value?: Value) => Promise<any>;
            Color: (value?: Value) => Promise<any>;
        };
        DialogShow: {
            VBANCHAT: (value?: Value) => Promise<any>;
        };
        SaveBUSEQ: (j: number) => (value?: Value) => Promise<any>;
        LoadBUSEQ: (j: number) => (value?: Value) => Promise<any>;
        SaveStripEQ: (j: number) => (value?: Value) => Promise<any>;
        LoadStripEQ: (j: number) => (value?: Value) => Promise<any>;
        Preset: (k: number) => {
            Recall: (value?: Value) => Promise<any>;
        };
    };
    Strip: (i: number) => {
        Mono: (value?: Value) => Promise<any>;
        Mute: (value?: Value) => Promise<any>;
        Solo: (value?: Value) => Promise<any>;
        MC: (value?: Value) => Promise<any>;
        Gain: (value?: Value) => Promise<any>;
        GainLayer: (j: number) => (value?: Value) => Promise<any>;
        Pan_x: (value?: Value) => Promise<any>;
        Pan_y: (value?: Value) => Promise<any>;
        Color_x: (value?: Value) => Promise<any>;
        Color_y: (value?: Value) => Promise<any>;
        fx_x: (value?: Value) => Promise<any>;
        fx_y: (value?: Value) => Promise<any>;
        Audibility: (value?: Value) => Promise<any>;
        Comp: {
            GainIn: (value?: Value) => Promise<any>;
            Ratio: (value?: Value) => Promise<any>;
            Threshold: (value?: Value) => Promise<any>;
            Attack: (value?: Value) => Promise<any>;
            Release: (value?: Value) => Promise<any>;
            Knee: (value?: Value) => Promise<any>;
            GainOut: (value?: Value) => Promise<any>;
            MakeUp: (value?: Value) => Promise<any>;
        };
        Gate: {
            Threshold: (value?: Value) => Promise<any>;
            Damping: (value?: Value) => Promise<any>;
            BPSidechain: (value?: Value) => Promise<any>;
            Attack: (value?: Value) => Promise<any>;
            Hold: (value?: Value) => Promise<any>;
            Release: (value?: Value) => Promise<any>;
        };
        Denoiser: {
            Threshold: (value?: Value) => Promise<any>;
        };
        Pitch: {
            On: (value?: Value) => Promise<any>;
            DryWet: (value?: Value) => Promise<any>;
            PitchValue: (value?: Value) => Promise<any>;
            LoFormant: (value?: Value) => Promise<any>;
            MedFormant: (value?: Value) => Promise<any>;
            HiFormant: (value?: Value) => Promise<any>;
        };
        Karaoke: (value?: Value) => Promise<any>;
        Limit: (value?: Value) => Promise<any>;
        EQGain1: (value?: Value) => Promise<any>;
        EQGain2: (value?: Value) => Promise<any>;
        EQGain3: (value?: Value) => Promise<any>;
        Label: (value?: Value) => Promise<any>;
        A1: (value?: Value) => Promise<any>;
        A2: (value?: Value) => Promise<any>;
        A3: (value?: Value) => Promise<any>;
        A4: (value?: Value) => Promise<any>;
        A5: (value?: Value) => Promise<any>;
        B1: (value?: Value) => Promise<any>;
        B2: (value?: Value) => Promise<any>;
        B3: (value?: Value) => Promise<any>;
        FadeTo: (value?: Value) => Promise<any>;
        FadeBy: (value?: Value) => Promise<any>;
        Reverb: (value?: Value) => Promise<any>;
        Delay: (value?: Value) => Promise<any>;
        Fx1: (value?: Value) => Promise<any>;
        Fx2: (value?: Value) => Promise<any>;
        PostReverb: (value?: Value) => Promise<any>;
        PostDelay: (value?: Value) => Promise<any>;
        PostFx1: (value?: Value) => Promise<any>;
        PostFx2: (value?: Value) => Promise<any>;
        EQ: {
            on: (value?: Value) => Promise<any>;
            AB: (value?: Value) => Promise<any>;
            channel: (j: number) => {
                cell: (k: number) => {
                    on: (value?: Value) => Promise<any>;
                    type: (value?: Value) => Promise<any>;
                    f: (value?: Value) => Promise<any>;
                    gain: (value?: Value) => Promise<any>;
                    q: (value?: Value) => Promise<any>;
                };
            };
        };
        VAIO: (value?: Value) => Promise<any>;
        App: (k: number) => {
            Gain: (value?: Value) => Promise<any>;
            Mute: (value?: Value) => Promise<any>;
        };
        AppGain: (value?: Value) => Promise<any>;
        AppMute: (value?: Value) => Promise<any>;
        device: {
            name: (value?: Value) => Promise<any>;
            sr: (value?: Value) => Promise<any>;
            wdm: (value?: Value) => Promise<any>;
            ks: (value?: Value) => Promise<any>;
            mme: (value?: Value) => Promise<any>;
            asio: (value?: Value) => Promise<any>;
        };
    };
    Bus: (i: number) => {
        Mono: (value?: Value) => Promise<any>;
        Mute: (value?: Value) => Promise<any>;
        EQ: {
            on: (value?: Value) => Promise<any>;
            AB: (value?: Value) => Promise<any>;
            channel: (j: number) => {
                cell: (k: number) => {
                    on: (value?: Value) => Promise<any>;
                    type: (value?: Value) => Promise<any>;
                    f: (value?: Value) => Promise<any>;
                    gain: (value?: Value) => Promise<any>;
                    q: (value?: Value) => Promise<any>;
                };
            };
        };
        Gain: (value?: Value) => Promise<any>;
        Label: (value?: Value) => Promise<any>;
        mode: {
            normal: (value?: Value) => Promise<any>;
            Amix: (value?: Value) => Promise<any>;
            Bmix: (value?: Value) => Promise<any>;
            Repeat: (value?: Value) => Promise<any>;
            Composite: (value?: Value) => Promise<any>;
            TVMix: (value?: Value) => Promise<any>;
            UpMix21: (value?: Value) => Promise<any>;
            UpMix41: (value?: Value) => Promise<any>;
            UpMix61: (value?: Value) => Promise<any>;
            CenterOnly: (value?: Value) => Promise<any>;
            LFEOnly: (value?: Value) => Promise<any>;
            RearOnly: (value?: Value) => Promise<any>;
        };
        FadeTo: (value?: Value) => Promise<any>;
        FadeBy: (value?: Value) => Promise<any>;
        Sel: (value?: Value) => Promise<any>;
        ReturnReverb: (value?: Value) => Promise<any>;
        ReturnDelay: (value?: Value) => Promise<any>;
        ReturnFx1: (value?: Value) => Promise<any>;
        ReturnFx2: (value?: Value) => Promise<any>;
        Monitor: (value?: Value) => Promise<any>;
        VAIO: (value?: Value) => Promise<any>;
        device: {
            name: (value?: Value) => Promise<any>;
            sr: (value?: Value) => Promise<any>;
            wdm: (value?: Value) => Promise<any>;
            ks: (value?: Value) => Promise<any>;
            mme: (value?: Value) => Promise<any>;
            asio: (value?: Value) => Promise<any>;
        };
    };
    Fx: {
        Reverb: {
            On: (value?: Value) => Promise<any>;
            AB: (value?: Value) => Promise<any>;
        };
        Delay: {
            On: (value?: Value) => Promise<any>;
            AB: (value?: Value) => Promise<any>;
        };
    };
    patch: {
        asio: (i: number) => (value?: Value) => Promise<any>;
        OutA2: (i: number) => (value?: Value) => Promise<any>;
        OutA3: (i: number) => (value?: Value) => Promise<any>;
        OutA4: (i: number) => (value?: Value) => Promise<any>;
        OutA5: (i: number) => (value?: Value) => Promise<any>;
        composite: (j: number) => (value?: Value) => Promise<any>;
        insert: (k: number) => (value?: Value) => Promise<any>;
        PostFaderComposite: (value?: Value) => Promise<any>;
        PostFxInsert: (value?: Value) => Promise<any>;
    };
    Option: {
        sr: (value?: Value) => Promise<any>;
        ASIOsr: (value?: Value) => Promise<any>;
        delay: (i: number) => (value?: Value) => Promise<any>;
        buffer: {
            mme: (value?: Value) => Promise<any>;
            wdm: (value?: Value) => Promise<any>;
            ks: (value?: Value) => Promise<any>;
            asio: (value?: Value) => Promise<any>;
        };
        mode: {
            exclusif: (value?: Value) => Promise<any>;
            swift: (value?: Value) => Promise<any>;
        };
        MonitorOnSEL: (value?: Value) => Promise<any>;
        SliderMode: (value?: Value) => Promise<any>;
    };
    recorder: {
        stop: (value?: Value) => Promise<any>;
        play: (value?: Value) => Promise<any>;
        replay: (value?: Value) => Promise<any>;
        ff: (value?: Value) => Promise<any>;
        rew: (value?: Value) => Promise<any>;
        A1: (value?: Value) => Promise<any>;
        A2: (value?: Value) => Promise<any>;
        A3: (value?: Value) => Promise<any>;
        A4: (value?: Value) => Promise<any>;
        A5: (value?: Value) => Promise<any>;
        B1: (value?: Value) => Promise<any>;
        B2: (value?: Value) => Promise<any>;
        B3: (value?: Value) => Promise<any>;
        record: (value?: Value) => Promise<any>;
        pause: (value?: Value) => Promise<any>;
        goto: (value?: Value) => Promise<any>;
        load: (value?: Value) => Promise<any>;
        samplerate: (value?: Value) => Promise<any>;
        ArmStrip: (i: number) => (value?: Value) => Promise<any>;
        ArmBus: (i: number) => (value?: Value) => Promise<any>;
        mode: {
            recbus: (value?: Value) => Promise<any>;
            PlayOnLoad: (value?: Value) => Promise<any>;
            Loop: (value?: Value) => Promise<any>;
            MultiTrack: (value?: Value) => Promise<any>;
        };
        bitResolution: (value?: Value) => Promise<any>;
        Channel: (value?: Value) => Promise<any>;
        kbps: (value?: Value) => Promise<any>;
        FileType: (value?: Value) => Promise<any>;
        gain: (value?: Value) => Promise<any>;
    };
    vban: {
        Enable: (value?: Value) => Promise<any>;
        instream: (i: number) => {
            on: (value?: Value) => Promise<any>;
            name: (value?: Value) => Promise<any>;
            ip: (value?: Value) => Promise<any>;
            port: (value?: Value) => Promise<any>;
            sr: (value?: Value) => Promise<any>;
            channel: (value?: Value) => Promise<any>;
            bit: (value?: Value) => Promise<any>;
            quality: (value?: Value) => Promise<any>;
            route: (value?: Value) => Promise<any>;
        };
        outstream: (i: number) => {
            on: (value?: Value) => Promise<any>;
            name: (value?: Value) => Promise<any>;
            ip: (value?: Value) => Promise<any>;
            port: (value?: Value) => Promise<any>;
            sr: (value?: Value) => Promise<any>;
            channel: (value?: Value) => Promise<any>;
            bit: (value?: Value) => Promise<any>;
            quality: (value?: Value) => Promise<any>;
            route: (value?: Value) => Promise<any>;
        };
    };
};
export {};
