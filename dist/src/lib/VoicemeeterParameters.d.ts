import Voicemeeter from "./VoicemeeterConnector";
declare type Value = string | number | undefined;
export declare function vmParameters(vm: Voicemeeter): {
    Command: {
        Shutdown: (value?: Value) => any;
        Show: (value?: Value) => any;
        Restart: (value?: Value) => any;
        Eject: (value?: Value) => any;
        Reset: (value?: Value) => any;
        Save: (value?: Value) => any;
        Load: (value?: Value) => any;
        Lock: (value?: Value) => any;
        Button: (i: number) => {
            State: (value?: Value) => any;
            StateOnly: (value?: Value) => any;
            Trigger: (value?: Value) => any;
            Color: (value?: Value) => any;
        };
        DialogShow: {
            VBANCHAT: (value?: Value) => any;
        };
        SaveBUSEQ: (j: number) => (value?: Value) => any;
        LoadBUSEQ: (j: number) => (value?: Value) => any;
        SaveStripEQ: (j: number) => (value?: Value) => any;
        LoadStripEQ: (j: number) => (value?: Value) => any;
        Preset: (k: number) => {
            Recall: (value?: Value) => any;
        };
    };
    Strip: (i: number) => {
        Mono: (value?: Value) => any;
        Mute: (value?: Value) => any;
        Solo: (value?: Value) => any;
        MC: (value?: Value) => any;
        Gain: (value?: Value) => any;
        GainLayer: (j: number) => (value?: Value) => any;
        Pan_x: (value?: Value) => any;
        Pan_y: (value?: Value) => any;
        Color_x: (value?: Value) => any;
        Color_y: (value?: Value) => any;
        fx_x: (value?: Value) => any;
        fx_y: (value?: Value) => any;
        Audibility: (value?: Value) => any;
        Comp: {
            GainIn: (value?: Value) => any;
            Ratio: (value?: Value) => any;
            Threshold: (value?: Value) => any;
            Attack: (value?: Value) => any;
            Release: (value?: Value) => any;
            Knee: (value?: Value) => any;
            GainOut: (value?: Value) => any;
            MakeUp: (value?: Value) => any;
        };
        Gate: {
            Threshold: (value?: Value) => any;
            Damping: (value?: Value) => any;
            BPSidechain: (value?: Value) => any;
            Attack: (value?: Value) => any;
            Hold: (value?: Value) => any;
            Release: (value?: Value) => any;
        };
        Denoiser: {
            Threshold: (value?: Value) => any;
        };
        Pitch: {
            On: (value?: Value) => any;
            DryWet: (value?: Value) => any;
            PitchValue: (value?: Value) => any;
            LoFormant: (value?: Value) => any;
            MedFormant: (value?: Value) => any;
            HiFormant: (value?: Value) => any;
        };
        Karaoke: (value?: Value) => any;
        Limit: (value?: Value) => any;
        EQGain1: (value?: Value) => any;
        EQGain2: (value?: Value) => any;
        EQGain3: (value?: Value) => any;
        Label: (value?: Value) => any;
        A1: (value?: Value) => any;
        A2: (value?: Value) => any;
        A3: (value?: Value) => any;
        A4: (value?: Value) => any;
        A5: (value?: Value) => any;
        B1: (value?: Value) => any;
        B2: (value?: Value) => any;
        B3: (value?: Value) => any;
        FadeTo: (value?: Value) => any;
        FadeBy: (value?: Value) => any;
        Reverb: (value?: Value) => any;
        Delay: (value?: Value) => any;
        Fx1: (value?: Value) => any;
        Fx2: (value?: Value) => any;
        PostReverb: (value?: Value) => any;
        PostDelay: (value?: Value) => any;
        PostFx1: (value?: Value) => any;
        PostFx2: (value?: Value) => any;
        EQ: {
            on: (value?: Value) => any;
            AB: (value?: Value) => any;
            channel: (j: number) => {
                cell: (k: number) => {
                    on: (value?: Value) => any;
                    type: (value?: Value) => any;
                    f: (value?: Value) => any;
                    gain: (value?: Value) => any;
                    q: (value?: Value) => any;
                };
            };
        };
        VAIO: (value?: Value) => any;
        App: (k: number) => {
            Gain: (value?: Value) => any;
            Mute: (value?: Value) => any;
        };
        AppGain: (value?: Value) => any;
        AppMute: (value?: Value) => any;
        device: {
            name: (value?: Value) => any;
            sr: (value?: Value) => any;
            wdm: (value?: Value) => any;
            ks: (value?: Value) => any;
            mme: (value?: Value) => any;
            asio: (value?: Value) => any;
        };
    };
    Bus: (i: number) => {
        Mono: (value?: Value) => any;
        Mute: (value?: Value) => any;
        EQ: {
            on: (value?: Value) => any;
            AB: (value?: Value) => any;
            channel: (j: number) => {
                cell: (k: number) => {
                    on: (value?: Value) => any;
                    type: (value?: Value) => any;
                    f: (value?: Value) => any;
                    gain: (value?: Value) => any;
                    q: (value?: Value) => any;
                };
            };
        };
        Gain: (value?: Value) => any;
        Label: (value?: Value) => any;
        mode: {
            normal: (value?: Value) => any;
            Amix: (value?: Value) => any;
            Bmix: (value?: Value) => any;
            Repeat: (value?: Value) => any;
            Composite: (value?: Value) => any;
            TVMix: (value?: Value) => any;
            UpMix21: (value?: Value) => any;
            UpMix41: (value?: Value) => any;
            UpMix61: (value?: Value) => any;
            CenterOnly: (value?: Value) => any;
            LFEOnly: (value?: Value) => any;
            RearOnly: (value?: Value) => any;
        };
        FadeTo: (value?: Value) => any;
        FadeBy: (value?: Value) => any;
        Sel: (value?: Value) => any;
        ReturnReverb: (value?: Value) => any;
        ReturnDelay: (value?: Value) => any;
        ReturnFx1: (value?: Value) => any;
        ReturnFx2: (value?: Value) => any;
        Monitor: (value?: Value) => any;
        VAIO: (value?: Value) => any;
        device: {
            name: (value?: Value) => any;
            sr: (value?: Value) => any;
            wdm: (value?: Value) => any;
            ks: (value?: Value) => any;
            mme: (value?: Value) => any;
            asio: (value?: Value) => any;
        };
    };
    Fx: {
        Reverb: {
            On: (value?: Value) => any;
            AB: (value?: Value) => any;
        };
        Delay: {
            On: (value?: Value) => any;
            AB: (value?: Value) => any;
        };
    };
    patch: {
        asio: (i: number) => (value?: Value) => any;
        OutA2: (i: number) => (value?: Value) => any;
        OutA3: (i: number) => (value?: Value) => any;
        OutA4: (i: number) => (value?: Value) => any;
        OutA5: (i: number) => (value?: Value) => any;
        composite: (j: number) => (value?: Value) => any;
        insert: (k: number) => (value?: Value) => any;
        PostFaderComposite: (value?: Value) => any;
        PostFxInsert: (value?: Value) => any;
    };
    Option: {
        sr: (value?: Value) => any;
        ASIOsr: (value?: Value) => any;
        delay: (i: number) => (value?: Value) => any;
        buffer: {
            mme: (value?: Value) => any;
            wdm: (value?: Value) => any;
            ks: (value?: Value) => any;
            asio: (value?: Value) => any;
        };
        mode: {
            exclusif: (value?: Value) => any;
            swift: (value?: Value) => any;
        };
        MonitorOnSEL: (value?: Value) => any;
        SliderMode: (value?: Value) => any;
    };
    recorder: {
        stop: (value?: Value) => any;
        play: (value?: Value) => any;
        replay: (value?: Value) => any;
        ff: (value?: Value) => any;
        rew: (value?: Value) => any;
        A1: (value?: Value) => any;
        A2: (value?: Value) => any;
        A3: (value?: Value) => any;
        A4: (value?: Value) => any;
        A5: (value?: Value) => any;
        B1: (value?: Value) => any;
        B2: (value?: Value) => any;
        B3: (value?: Value) => any;
        record: (value?: Value) => any;
        pause: (value?: Value) => any;
        goto: (value?: Value) => any;
        load: (value?: Value) => any;
        samplerate: (value?: Value) => any;
        ArmStrip: (i: number) => (value?: Value) => any;
        ArmBus: (i: number) => (value?: Value) => any;
        mode: {
            recbus: (value?: Value) => any;
            PlayOnLoad: (value?: Value) => any;
            Loop: (value?: Value) => any;
            MultiTrack: (value?: Value) => any;
        };
        bitResolution: (value?: Value) => any;
        Channel: (value?: Value) => any;
        kbps: (value?: Value) => any;
        FileType: (value?: Value) => any;
        gain: (value?: Value) => any;
    };
    vban: {
        Enable: (value?: Value) => any;
        instream: (i: number) => {
            on: (value?: Value) => any;
            name: (value?: Value) => any;
            ip: (value?: Value) => any;
            port: (value?: Value) => any;
            sr: (value?: Value) => any;
            channel: (value?: Value) => any;
            bit: (value?: Value) => any;
            quality: (value?: Value) => any;
            route: (value?: Value) => any;
        };
        outstream: (i: number) => {
            on: (value?: Value) => any;
            name: (value?: Value) => any;
            ip: (value?: Value) => any;
            port: (value?: Value) => any;
            sr: (value?: Value) => any;
            channel: (value?: Value) => any;
            bit: (value?: Value) => any;
            quality: (value?: Value) => any;
            route: (value?: Value) => any;
        };
    };
};
export {};
