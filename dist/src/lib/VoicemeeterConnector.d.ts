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
            Shutdown: (value?: string | number | undefined) => any;
            Show: (value?: string | number | undefined) => any;
            Restart: (value?: string | number | undefined) => any;
            Eject: (value?: string | number | undefined) => any;
            Reset: (value?: string | number | undefined) => any;
            Save: (value?: string | number | undefined) => any;
            Load: (value?: string | number | undefined) => any;
            Lock: (value?: string | number | undefined) => any;
            Button: (i: number) => {
                State: (value?: string | number | undefined) => any;
                StateOnly: (value?: string | number | undefined) => any;
                Trigger: (value?: string | number | undefined) => any;
                Color: (value?: string | number | undefined) => any;
            };
            DialogShow: {
                VBANCHAT: (value?: string | number | undefined) => any;
            };
            SaveBUSEQ: (j: number) => (value?: string | number | undefined) => any;
            LoadBUSEQ: (j: number) => (value?: string | number | undefined) => any;
            SaveStripEQ: (j: number) => (value?: string | number | undefined) => any;
            LoadStripEQ: (j: number) => (value?: string | number | undefined) => any;
            Preset: (k: number) => {
                Recall: (value?: string | number | undefined) => any;
            };
        };
        Strip: (i: number) => {
            Mono: (value?: string | number | undefined) => any;
            Mute: (value?: string | number | undefined) => any;
            Solo: (value?: string | number | undefined) => any;
            MC: (value?: string | number | undefined) => any;
            Gain: (value?: string | number | undefined) => any;
            GainLayer: (j: number) => (value?: string | number | undefined) => any;
            Pan_x: (value?: string | number | undefined) => any;
            Pan_y: (value?: string | number | undefined) => any;
            Color_x: (value?: string | number | undefined) => any;
            Color_y: (value?: string | number | undefined) => any;
            fx_x: (value?: string | number | undefined) => any;
            fx_y: (value?: string | number | undefined) => any;
            Audibility: (value?: string | number | undefined) => any;
            Comp: {
                GainIn: (value?: string | number | undefined) => any;
                Ratio: (value?: string | number | undefined) => any;
                Threshold: (value?: string | number | undefined) => any; /**
                 * Getter $type
                 * @return {VoiceMeeterTypes}
                 */
                Attack: (value?: string | number | undefined) => any;
                Release: (value?: string | number | undefined) => any;
                Knee: (value?: string | number | undefined) => any;
                GainOut: (value?: string | number | undefined) => any;
                MakeUp: (value?: string | number | undefined) => any;
            };
            Gate: {
                Threshold: (value?: string | number | undefined) => any;
                Damping: (value?: string | number | undefined) => any;
                BPSidechain: (value?: string | number | undefined) => any;
                Attack: (value?: string | number | undefined) => any;
                Hold: (value?: string | number | undefined) => any;
                Release: (value?: string | number | undefined) => any;
            };
            Denoiser: {
                Threshold: (value?: string | number | undefined) => any;
            };
            Pitch: {
                On: (value?: string | number | undefined) => any;
                DryWet: (value?: string | number | undefined) => any;
                PitchValue: (value?: string | number | undefined) => any;
                LoFormant: (value?: string | number | undefined) => any;
                MedFormant: (value?: string | number | undefined) => any;
                HiFormant: (value?: string | number | undefined) => any;
            };
            Karaoke: (value?: string | number | undefined) => any;
            Limit: (value?: string | number | undefined) => any;
            EQGain1: (value?: string | number | undefined) => any;
            EQGain2: (value?: string | number | undefined) => any;
            EQGain3: (value?: string | number | undefined) => any;
            Label: (value?: string | number | undefined) => any;
            A1: (value?: string | number | undefined) => any;
            A2: (value?: string | number | undefined) => any;
            A3: (value?: string | number | undefined) => any;
            A4: (value?: string | number | undefined) => any;
            A5: (value?: string | number | undefined) => any;
            B1: (value?: string | number | undefined) => any;
            B2: (value?: string | number | undefined) => any;
            B3: (value?: string | number | undefined) => any;
            FadeTo: (value?: string | number | undefined) => any;
            FadeBy: (value?: string | number | undefined) => any;
            Reverb: (value?: string | number | undefined) => any;
            Delay: (value?: string | number | undefined) => any;
            Fx1: (value?: string | number | undefined) => any;
            Fx2: (value?: string | number | undefined) => any;
            /**
             * Checks whether properties has been changed and calls all event listeners
             */
            PostReverb: (value?: string | number | undefined) => any;
            PostDelay: (value?: string | number | undefined) => any;
            PostFx1: (value?: string | number | undefined) => any;
            PostFx2: (value?: string | number | undefined) => any;
            EQ: {
                on: (value?: string | number | undefined) => any;
                AB: (value?: string | number | undefined) => any;
                channel: (j: number) => {
                    cell: (k: number) => {
                        on: (value?: string | number | undefined) => any;
                        type: (value?: string | number | undefined) => any;
                        f: (value?: string | number | undefined) => any;
                        gain: (value?: string | number | undefined) => any;
                        q: (value?: string | number | undefined) => any;
                    };
                };
            };
            VAIO: (value?: string | number | undefined) => any;
            App: (k: number) => {
                Gain: (value?: string | number | undefined) => any;
                Mute: (value?: string | number | undefined) => any;
            };
            AppGain: (value?: string | number | undefined) => any;
            AppMute: (value?: string | number | undefined) => any;
            device: {
                name: (value?: string | number | undefined) => any;
                sr: (value?: string | number | undefined) => any;
                wdm: (value?: string | number | undefined) => any;
                ks: (value?: string | number | undefined) => any;
                mme: (value?: string | number | undefined) => any;
                asio: (value?: string | number | undefined) => any;
            };
        };
        Bus: (i: number) => {
            Mono: (value?: string | number | undefined) => any;
            Mute: (value?: string | number | undefined) => any;
            EQ: {
                on: (value?: string | number | undefined) => any;
                AB: (value?: string | number | undefined) => any;
                channel: (j: number) => {
                    cell: (k: number) => {
                        on: (value?: string | number | undefined) => any;
                        type: (value?: string | number | undefined) => any;
                        f: (value?: string | number | undefined) => any;
                        gain: (value?: string | number | undefined) => any;
                        q: (value?: string | number | undefined) => any;
                    };
                };
            };
            Gain: (value?: string | number | undefined) => any;
            Label: (value?: string | number | undefined) => any;
            mode: {
                normal: (value?: string | number | undefined) => any;
                Amix: (value?: string | number | undefined) => any;
                Bmix: (value?: string | number | undefined) => any;
                Repeat: (value?: string | number | undefined) => any;
                Composite: (value?: string | number | undefined) => any;
                TVMix: (value?: string | number | undefined) => any;
                UpMix21: (value?: string | number | undefined) => any;
                UpMix41: (value?: string | number | undefined) => any;
                UpMix61: (value?: string | number | undefined) => any;
                CenterOnly: (value?: string | number | undefined) => any;
                LFEOnly: (value?: string | number | undefined) => any;
                RearOnly: (value?: string | number | undefined) => any;
            };
            FadeTo: (value?: string | number | undefined) => any;
            FadeBy: (value?: string | number | undefined) => any;
            Sel: (value?: string | number | undefined) => any;
            ReturnReverb: (value?: string | number | undefined) => any;
            ReturnDelay: (value?: string | number | undefined) => any;
            ReturnFx1: (value?: string | number | undefined) => any;
            ReturnFx2: (value?: string | number | undefined) => any;
            Monitor: (value?: string | number | undefined) => any;
            VAIO: (value?: string | number | undefined) => any;
            device: {
                name: (value?: string | number | undefined) => any;
                sr: (value?: string | number | undefined) => any;
                wdm: (value?: string | number | undefined) => any;
                ks: (value?: string | number | undefined) => any;
                mme: (value?: string | number | undefined) => any;
                asio: (value?: string | number | undefined) => any;
            };
        };
        Fx: {
            Reverb: {
                On: (value?: string | number | undefined) => any;
                AB: (value?: string | number | undefined) => any;
            };
            Delay: {
                On: (value?: string | number | undefined) => any;
                AB: (value?: string | number | undefined) => any;
            };
        };
        patch: {
            asio: (i: number) => (value?: string | number | undefined) => any;
            OutA2: (i: number) => (value?: string | number | undefined) => any;
            OutA3: (i: number) => (value?: string | number | undefined) => any;
            OutA4: (i: number) => (value?: string | number | undefined) => any;
            OutA5: (i: number) => (value?: string | number | undefined) => any;
            composite: (j: number) => (value?: string | number | undefined) => any;
            insert: (k: number) => (value?: string | number | undefined) => any;
            PostFaderComposite: (value?: string | number | undefined) => any;
            PostFxInsert: (value?: string | number | undefined) => any;
        };
        Option: {
            sr: (value?: string | number | undefined) => any;
            ASIOsr: (value?: string | number | undefined) => any;
            delay: (i: number) => (value?: string | number | undefined) => any;
            buffer: {
                mme: (value?: string | number | undefined) => any;
                wdm: (value?: string | number | undefined) => any;
                ks: (value?: string | number | undefined) => any;
                asio: (value?: string | number | undefined) => any;
            };
            mode: {
                exclusif: (value?: string | number | undefined) => any;
                swift: (value?: string | number | undefined) => any;
            };
            MonitorOnSEL: (value?: string | number | undefined) => any;
            SliderMode: (value?: string | number | undefined) => any;
        };
        recorder: {
            stop: (value?: string | number | undefined) => any;
            play: (value?: string | number | undefined) => any;
            replay: (value?: string | number | undefined) => any;
            ff: (value?: string | number | undefined) => any;
            rew: (value?: string | number | undefined) => any;
            A1: (value?: string | number | undefined) => any;
            A2: (value?: string | number | undefined) => any;
            A3: (value?: string | number | undefined) => any;
            A4: (value?: string | number | undefined) => any;
            A5: (value?: string | number | undefined) => any;
            B1: (value?: string | number | undefined) => any;
            B2: (value?: string | number | undefined) => any;
            B3: (value?: string | number | undefined) => any;
            record: (value?: string | number | undefined) => any;
            pause: (value?: string | number | undefined) => any;
            goto: (value?: string | number | undefined) => any;
            load: (value?: string | number | undefined) => any;
            samplerate: (value?: string | number | undefined) => any;
            ArmStrip: (i: number) => (value?: string | number | undefined) => any;
            ArmBus: (i: number) => (value?: string | number | undefined) => any;
            mode: {
                recbus: (value?: string | number | undefined) => any;
                PlayOnLoad: (value?: string | number | undefined) => any;
                Loop: (value?: string | number | undefined) => any;
                MultiTrack: (value?: string | number | undefined) => any;
            };
            bitResolution: (value?: string | number | undefined) => any;
            Channel: (value?: string | number | undefined) => any;
            kbps: (value?: string | number | undefined) => any;
            FileType: (value?: string | number | undefined) => any;
            gain: (value?: string | number | undefined) => any;
        };
        vban: {
            Enable: (value?: string | number | undefined) => any;
            instream: (i: number) => {
                on: (value?: string | number | undefined) => any;
                name: (value?: string | number | undefined) => any;
                ip: (value?: string | number | undefined) => any;
                port: (value?: string | number | undefined) => any;
                sr: (value?: string | number | undefined) => any;
                channel: (value?: string | number | undefined) => any;
                bit: (value?: string | number | undefined) => any;
                quality: (value?: string | number | undefined) => any;
                route: (value?: string | number | undefined) => any;
            };
            outstream: (i: number) => {
                on: (value?: string | number | undefined) => any;
                name: (value?: string | number | undefined) => any;
                ip: (value?: string | number | undefined) => any;
                port: (value?: string | number | undefined) => any;
                sr: (value?: string | number | undefined) => any;
                channel: (value?: string | number | undefined) => any;
                bit: (value?: string | number | undefined) => any;
                quality: (value?: string | number | undefined) => any;
                route: (value?: string | number | undefined) => any;
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
