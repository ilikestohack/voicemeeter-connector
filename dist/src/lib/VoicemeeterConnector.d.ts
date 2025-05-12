import { Device, VoiceMeeterTypes } from "../types/VoicemeeterTypes";
export default class Voicemeeter {
    /**
     * Initializes the voice meeter dll connection.
     * This call is neccessary to use the api. It returns a promise with a VoiceMeeter instance
     */
    static init(): Promise<Voicemeeter>;
    isConnected: boolean;
    private isInitialised;
    private outputDevices;
    private inputDevices;
    private version;
    private type;
    private eventPool;
    private stringParameters;
    /**
     * Starts a connection to VoiceMeeter
     */
    connect: () => void;
    /**
     * Getter $outputDevices
     * @return {Device[] }
     */
    get $outputDevices(): Device[];
    /**
     * Getter $inputDevices
     * @return {Device[] }
     */
    get $inputDevices(): Device[];
    /**
     * Getter $version
     * @return {string }
     */
    get $version(): string;
    /**
     * Getter $type
     * @return {VoiceMeeterTypes}
     */
    get $type(): VoiceMeeterTypes;
    /**
     * Terminates the connection to VoiceMeeter
     */
    disconnect: () => void;
    /**
     * Updates all input and ouput devices
     */
    updateDeviceList: () => void;
    /**
     * Returns wheter a parameter has been changed
     */
    isParametersDirty: () => any;
    parameters: {
        Command: {
            Shutdown: (value: string | number | undefined) => Promise<any>;
            Show: (value: string | number | undefined) => Promise<any>;
            Restart: (value: string | number | undefined) => Promise<any>;
            Eject: (value: string | number | undefined) => Promise<any>;
            Reset: (value: string | number | undefined) => Promise<any>;
            Save: (value: string | number | undefined) => Promise<any>;
            Load: (value: string | number | undefined) => Promise<any>;
            Lock: (value: string | number | undefined) => Promise<any>;
            Button: (i: number) => {
                State: (value: string | number | undefined) => Promise<any>;
                StateOnly: (value: string | number | undefined) => Promise<any>;
                Trigger: (value: string | number | undefined) => Promise<any>;
                Color: (value: string | number | undefined) => Promise<any>;
            };
            DialogShow: {
                VBANCHAT: (value: string | number | undefined) => Promise<any>;
            };
            SaveBUSEQ: (j: number) => (value: string | number | undefined) => Promise<any>;
            LoadBUSEQ: (j: number) => (value: string | number | undefined) => Promise<any>;
            SaveStripEQ: (j: number) => (value: string | number | undefined) => Promise<any>;
            LoadStripEQ: (j: number) => (value: string | number | undefined) => Promise<any>;
            Preset: (k: number) => {
                Recall: (value: string | number | undefined) => Promise<any>;
            };
        };
        Strip: (i: number) => {
            Mono: (value: string | number | undefined) => Promise<any>;
            Mute: (value: string | number | undefined) => Promise<any>;
            Solo: (value: string | number | undefined) => Promise<any>;
            MC: (value: string | number | undefined) => Promise<any>;
            Gain: (value: string | number | undefined) => Promise<any>;
            GainLayer: (j: number) => (value: string | number | undefined) => Promise<any>;
            Pan_x: (value: string | number | undefined) => Promise<any>;
            Pan_y: (value: string | number | undefined) => Promise<any>;
            Color_x: (value: string | number | undefined) => Promise<any>;
            Color_y: (value: string | number | undefined) => Promise<any>;
            fx_x: (value: string | number | undefined) => Promise<any>;
            fx_y: (value: string | number | undefined) => Promise<any>;
            Audibility: (value: string | number | undefined) => Promise<any>;
            Comp: {
                GainIn: (value: string | number | undefined) => Promise<any>;
                Ratio: (value: string | number | undefined) => Promise<any>;
                Threshold: (value: string | number | undefined) => Promise<any>;
                Attack: (value: string | number | undefined) => Promise<any>;
                Release: (value: string | number | undefined) => Promise<any>;
                Knee: (value: string | number | undefined) => Promise<any>;
                GainOut: (value: string | number | undefined) => Promise<any>;
                MakeUp: (value: string | number | undefined) => Promise<any>;
            };
            Gate: {
                Threshold: (value: string | number | undefined) => Promise<any>;
                Damping: (value: string | number | undefined) => Promise<any>;
                BPSidechain: (value: string | number | undefined) => Promise<any>;
                Attack: (value: string | number | undefined) => Promise<any>;
                Hold: (value: string | number | undefined) => Promise<any>;
                Release: (value: string | number | undefined) => Promise<any>;
            };
            Denoiser: {
                Threshold: (value: string | number | undefined) => Promise<any>;
            };
            Pitch: {
                On: (value: string | number | undefined) => Promise<any>;
                DryWet: (value: string | number | undefined) => Promise<any>;
                PitchValue: (value: string | number | undefined) => Promise<any>;
                LoFormant: (value: string | number | undefined) => Promise<any>;
                MedFormant: (value: string | number | undefined) => Promise<any>;
                HiFormant: (value: string | number | undefined) => Promise<any>;
            };
            Karaoke: (value: string | number | undefined) => Promise<any>;
            Limit: (value: string | number | undefined) => Promise<any>;
            EQGain1: (value: string | number | undefined) => Promise<any>;
            EQGain2: (value: string | number | undefined) => Promise<any>;
            EQGain3: (value: string | number | undefined) => Promise<any>;
            Label: (value: string | number | undefined) => Promise<any>;
            A1: (value: string | number | undefined) => Promise<any>;
            A2: (value: string | number | undefined) => Promise<any>;
            A3: (value: string | number | undefined) => Promise<any>;
            A4: (value: string | number | undefined) => Promise<any>;
            A5: (value: string | number | undefined) => Promise<any>;
            B1: (value: string | number | undefined) => Promise<any>;
            B2: (value: string | number | undefined) => Promise<any>;
            B3: (value: string | number | undefined) => Promise<any>;
            FadeTo: (value: string | number | undefined) => Promise<any>;
            FadeBy: (value: string | number | undefined) => Promise<any>;
            Reverb: (value: string | number | undefined) => Promise<any>;
            Delay: (value: string | number | undefined) => Promise<any>;
            Fx1: (value: string | number | undefined) => Promise<any>;
            Fx2: (value: string | number | undefined) => Promise<any>;
            PostReverb: (value: string | number | undefined) => Promise<any>;
            PostDelay: (value: string | number | undefined) => Promise<any>;
            PostFx1: (value: string | number | undefined) => Promise<any>;
            PostFx2: (value: string | number | undefined) => Promise<any>;
            EQ: {
                on: (value: string | number | undefined) => Promise<any>;
                AB: (value: string | number | undefined) => Promise<any>;
                channel: (j: number) => {
                    cell: (k: number) => {
                        on: (value: string | number | undefined) => Promise<any>;
                        type: (value: string | number | undefined) => Promise<any>;
                        f: (value: string | number | undefined) => Promise<any>;
                        gain: (value: string | number | undefined) => Promise<any>;
                        q: (value: string | number | undefined) => Promise<any>;
                    };
                };
            };
            VAIO: (value: string | number | undefined) => Promise<any>;
            App: (k: number) => {
                Gain: (value: string | number | undefined) => Promise<any>;
                Mute: (value: string | number | undefined) => Promise<any>;
            };
            AppGain: (value: string | number | undefined) => Promise<any>;
            AppMute: (value: string | number | undefined) => Promise<any>;
            device: {
                name: (value: string | number | undefined) => Promise<any>;
                sr: (value: string | number | undefined) => Promise<any>;
                wdm: (value: string | number | undefined) => Promise<any>;
                ks: (value: string | number | undefined) => Promise<any>;
                mme: (value: string | number | undefined) => Promise<any>;
                asio: (value: string | number | undefined) => Promise<any>;
            };
        };
        Bus: (i: number) => {
            Mono: (value: string | number | undefined) => Promise<any>;
            Mute: (value: string | number | undefined) => Promise<any>;
            EQ: {
                on: (value: string | number | undefined) => Promise<any>;
                AB: (value: string | number | undefined) => Promise<any>;
                channel: (j: number) => {
                    cell: (k: number) => {
                        on: (value: string | number | undefined) => Promise<any>;
                        type: (value: string | number | undefined) => Promise<any>;
                        f: (value: string | number | undefined) => Promise<any>;
                        gain: (value: string | number | undefined) => Promise<any>;
                        q: (value: string | number | undefined) => Promise<any>;
                    };
                };
            };
            Gain: (value: string | number | undefined) => Promise<any>;
            Label: (value: string | number | undefined) => Promise<any>;
            mode: {
                normal: (value: string | number | undefined) => Promise<any>;
                Amix: (value: string | number | undefined) => Promise<any>;
                Bmix: (value: string | number | undefined) => Promise<any>;
                Repeat: (value: string | number | undefined) => Promise<any>;
                Composite: (value: string | number | undefined) => Promise<any>;
                TVMix: (value: string | number | undefined) => Promise<any>;
                UpMix21: (value: string | number | undefined) => Promise<any>;
                UpMix41: (value: string | number | undefined) => Promise<any>;
                UpMix61: (value: string | number | undefined) => Promise<any>;
                CenterOnly: (value: string | number | undefined) => Promise<any>;
                LFEOnly: (value: string | number | undefined) => Promise<any>;
                RearOnly: (value: string | number | undefined) => Promise<any>;
            };
            FadeTo: (value: string | number | undefined) => Promise<any>;
            FadeBy: (value: string | number | undefined) => Promise<any>;
            Sel: (value: string | number | undefined) => Promise<any>;
            ReturnReverb: (value: string | number | undefined) => Promise<any>;
            ReturnDelay: (value: string | number | undefined) => Promise<any>;
            ReturnFx1: (value: string | number | undefined) => Promise<any>;
            ReturnFx2: (value: string | number | undefined) => Promise<any>;
            Monitor: (value: string | number | undefined) => Promise<any>;
            VAIO: (value: string | number | undefined) => Promise<any>;
            device: {
                name: (value: string | number | undefined) => Promise<any>;
                sr: (value: string | number | undefined) => Promise<any>;
                wdm: (value: string | number | undefined) => Promise<any>;
                ks: (value: string | number | undefined) => Promise<any>;
                mme: (value: string | number | undefined) => Promise<any>;
                asio: (value: string | number | undefined) => Promise<any>;
            };
        };
        Fx: {
            Reverb: {
                On: (value: string | number | undefined) => Promise<any>;
                AB: (value: string | number | undefined) => Promise<any>;
            };
            Delay: {
                On: (value: string | number | undefined) => Promise<any>;
                AB: (value: string | number | undefined) => Promise<any>;
            };
        };
        patch: {
            asio: (i: number) => (value: string | number | undefined) => Promise<any>;
            OutA2: (i: number) => (value: string | number | undefined) => Promise<any>;
            OutA3: (i: number) => (value: string | number | undefined) => Promise<any>;
            OutA4: (i: number) => (value: string | number | undefined) => Promise<any>;
            OutA5: (i: number) => (value: string | number | undefined) => Promise<any>;
            composite: (j: number) => (value: string | number | undefined) => Promise<any>;
            insert: (k: number) => (value: string | number | undefined) => Promise<any>;
            PostFaderComposite: (value: string | number | undefined) => Promise<any>;
            PostFxInsert: (value: string | number | undefined) => Promise<any>;
        };
        Option: {
            sr: (value: string | number | undefined) => Promise<any>;
            ASIOsr: (value: string | number | undefined) => Promise<any>;
            delay: (i: number) => (value: string | number | undefined) => Promise<any>;
            buffer: {
                mme: (value: string | number | undefined) => Promise<any>;
                wdm: (value: string | number | undefined) => Promise<any>;
                ks: (value: string | number | undefined) => Promise<any>;
                asio: (value: string | number | undefined) => Promise<any>;
            };
            mode: {
                exclusif: (value: string | number | undefined) => Promise<any>;
                swift: (value: string | number | undefined) => Promise<any>;
            };
            MonitorOnSEL: (value: string | number | undefined) => Promise<any>;
            SliderMode: (value: string | number | undefined) => Promise<any>;
        };
        recorder: {
            stop: (value: string | number | undefined) => Promise<any>;
            play: (value: string | number | undefined) => Promise<any>;
            replay: (value: string | number | undefined) => Promise<any>;
            ff: (value: string | number | undefined) => Promise<any>;
            rew: (value: string | number | undefined) => Promise<any>;
            A1: (value: string | number | undefined) => Promise<any>;
            A2: (value: string | number | undefined) => Promise<any>;
            A3: (value: string | number | undefined) => Promise<any>;
            A4: (value: string | number | undefined) => Promise<any>;
            A5: (value: string | number | undefined) => Promise<any>;
            B1: (value: string | number | undefined) => Promise<any>;
            B2: (value: string | number | undefined) => Promise<any>;
            B3: (value: string | number | undefined) => Promise<any>;
            record: (value: string | number | undefined) => Promise<any>;
            pause: (value: string | number | undefined) => Promise<any>;
            goto: (value: string | number | undefined) => Promise<any>;
            load: (value: string | number | undefined) => Promise<any>;
            samplerate: (value: string | number | undefined) => Promise<any>;
            ArmStrip: (i: number) => (value: string | number | undefined) => Promise<any>;
            ArmBus: (i: number) => (value: string | number | undefined) => Promise<any>;
            mode: {
                recbus: (value: string | number | undefined) => Promise<any>;
                PlayOnLoad: (value: string | number | undefined) => Promise<any>;
                Loop: (value: string | number | undefined) => Promise<any>;
                MultiTrack: (value: string | number | undefined) => Promise<any>;
            };
            bitResolution: (value: string | number | undefined) => Promise<any>;
            Channel: (value: string | number | undefined) => Promise<any>;
            kbps: (value: string | number | undefined) => Promise<any>;
            FileType: (value: string | number | undefined) => Promise<any>;
            gain: (value: string | number | undefined) => Promise<any>;
        };
        vban: {
            Enable: (value: string | number | undefined) => Promise<any>;
            instream: (i: number) => {
                on: (value: string | number | undefined) => Promise<any>;
                name: (value: string | number | undefined) => Promise<any>;
                ip: (value: string | number | undefined) => Promise<any>;
                port: (value: string | number | undefined) => Promise<any>;
                sr: (value: string | number | undefined) => Promise<any>;
                channel: (value: string | number | undefined) => Promise<any>;
                bit: (value: string | number | undefined) => Promise<any>;
                quality: (value: string | number | undefined) => Promise<any>;
                route: (value: string | number | undefined) => Promise<any>;
            };
            outstream: (i: number) => {
                on: (value: string | number | undefined) => Promise<any>;
                name: (value: string | number | undefined) => Promise<any>;
                ip: (value: string | number | undefined) => Promise<any>;
                port: (value: string | number | undefined) => Promise<any>;
                sr: (value: string | number | undefined) => Promise<any>;
                channel: (value: string | number | undefined) => Promise<any>;
                bit: (value: string | number | undefined) => Promise<any>;
                quality: (value: string | number | undefined) => Promise<any>;
                route: (value: string | number | undefined) => Promise<any>;
            };
        };
    };
    /**
     * @param  {()=>any} fn Function which should be called if something changes
     */
    attachChangeEvent: (fn: () => any) => void;
    /**
     * @param parameterName Name of the parameter that should be get
     * @returns {any} Parameter value
     */
    getOption: (parameterName: string) => any;
    /**
     * Sets an option.
     * @param {string} option Option to set
     */
    setOption: (option: string) => Promise<unknown>;
    /**
     * Checks whether properties has been changed and calls all event listeners
     */
    private checkPropertyChange;
    /**
     * Gets installed voicemeeter type.
     * Means Voicemeeter(normal,banana,potato)
     */
    private getVoicemeeterType;
    /**
     * Returns the installed voicemeeter version
     */
    private getVoicemeeterVersion;
    /**
     * Gets realtime audio level see the VoicemeeterRemote API: [VoicemeeterRemote.h GetLevel](https://github.com/mirror/equalizerapo/blob/7aece1b788fce5aa11873f3842a0d01f7c78454b/VoicemeeterClient/VoicemeeterRemote.h#L284),
     * for more details about the parameters
     * @param {0|1|2|3} type 0 = pre fader input levels. 1 = post fader input levels. 2= post Mute input levels. 3= output levels
     * @param channel audio channel zero based index
     * @returns {float} Current audio level
     */
    getLevel: (type: 0 | 1 | 2 | 3, channel: number) => number;
}
