declare type VoiceMeeterTypes = "voicemeeter" | "voicemeeterBanana" | "voicemeeterPotato" | undefined;
interface VMLibrary {
    VBVMR_Login: any;
    VBVMR_Logout: any;
    VBVMR_RunVoicemeeter: (voicemeeterType: any) => number;
    VBVMR_IsParametersDirty: any;
    VBVMR_GetLevel: any;
    VBVMR_GetParameterFloat: any;
    VBVMR_GetParameterStringA: any;
    VBVMR_SetParameters: any;
    VBVMR_Output_GetDeviceNumber: any;
    VBVMR_Output_GetDeviceDescA: any;
    VBVMR_Input_GetDeviceNumber: any;
    VBVMR_Input_GetDeviceDescA: any;
    VBVMR_GetVoicemeeterType: any;
    VBVMR_GetVoicemeeterVersion: (versionPtr: any) => number;
}
interface Device {
    name: string;
    hardwareId: string;
    type: number;
}

type VoicemeeterTypes_Device = Device;
type VoicemeeterTypes_VMLibrary = VMLibrary;
type VoicemeeterTypes_VoiceMeeterTypes = VoiceMeeterTypes;
declare namespace VoicemeeterTypes {
  export type { VoicemeeterTypes_Device as Device, VoicemeeterTypes_VMLibrary as VMLibrary, VoicemeeterTypes_VoiceMeeterTypes as VoiceMeeterTypes };
}

declare class Voicemeeter {
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
            Shutdown: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            Show: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            Restart: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            Eject: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            Reset: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            Save: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            Load: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            Lock: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            Button: (i: number) => {
                State: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                StateOnly: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                Trigger: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                Color: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
            };
            DialogShow: {
                VBANCHAT: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
            };
            SaveBUSEQ: (j: number) => {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            LoadBUSEQ: (j: number) => {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            SaveStripEQ: (j: number) => {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            /**
             * Getter $outputDevices
             * @return {Device[] }
             */
            LoadStripEQ: (j: number) => {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            Preset: (k: number) => {
                Recall: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
            };
        };
        Strip: (i: number) => {
            Mono: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            Mute: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            Solo: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            MC: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            Gain: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            GainLayer: (j: number) => {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            Pan_x: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            Pan_y: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            Color_x: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            Color_y: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            fx_x: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            fx_y: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            Audibility: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            Comp: {
                GainIn: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                Ratio: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                Threshold: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                Attack: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                Release: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                Knee: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                GainOut: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                MakeUp: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
            };
            Gate: {
                Threshold: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                Damping: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                BPSidechain: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                Attack: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                Hold: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                Release: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
            };
            Denoiser: {
                Threshold: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                }; /**
                 * Gets realtime audio level see the VoicemeeterRemote API: [VoicemeeterRemote.h GetLevel](https://github.com/mirror/equalizerapo/blob/7aece1b788fce5aa11873f3842a0d01f7c78454b/VoicemeeterClient/VoicemeeterRemote.h#L284),
                 * for more details about the parameters
                 * @param {0|1|2|3} type 0 = pre fader input levels. 1 = post fader input levels. 2= post Mute input levels. 3= output levels
                 * @param channel audio channel zero based index
                 * @returns {float} Current audio level
                 */
            };
            Pitch: {
                On: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                DryWet: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                PitchValue: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                LoFormant: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                MedFormant: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                HiFormant: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
            };
            Karaoke: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            Limit: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            EQGain1: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            EQGain2: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            EQGain3: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            Label: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            A1: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            A2: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            A3: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            A4: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            A5: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            B1: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            B2: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            B3: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            FadeTo: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            FadeBy: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            Reverb: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            Delay: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            Fx1: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            Fx2: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            PostReverb: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            PostDelay: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            PostFx1: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            PostFx2: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            EQ: {
                on: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                AB: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                channel: (j: number) => {
                    cell: (k: number) => {
                        on: {
                            set: (value: string | number) => Promise<any>;
                            get: () => any;
                        };
                        type: {
                            set: (value: string | number) => Promise<any>;
                            get: () => any;
                        };
                        f: {
                            set: (value: string | number) => Promise<any>;
                            get: () => any;
                        };
                        gain: {
                            set: (value: string | number) => Promise<any>;
                            get: () => any;
                        };
                        q: {
                            set: (value: string | number) => Promise<any>;
                            get: () => any;
                        };
                    };
                };
            };
            VAIO: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            App: (k: number) => {
                Gain: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                Mute: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
            };
            AppGain: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            AppMute: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            device: {
                name: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                sr: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                wdm: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                ks: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                mme: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                asio: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
            };
        };
        Bus: (i: number) => {
            Mono: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            Mute: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            EQ: {
                on: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                AB: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                channel: (j: number) => {
                    cell: (k: number) => {
                        on: {
                            set: (value: string | number) => Promise<any>;
                            get: () => any;
                        };
                        type: {
                            set: (value: string | number) => Promise<any>;
                            get: () => any;
                        };
                        f: {
                            set: (value: string | number) => Promise<any>;
                            get: () => any;
                        };
                        gain: {
                            set: (value: string | number) => Promise<any>;
                            get: () => any;
                        };
                        q: {
                            set: (value: string | number) => Promise<any>;
                            get: () => any;
                        };
                    };
                };
            };
            Gain: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            Label: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            mode: {
                normal: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                Amix: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                Bmix: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                Repeat: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                Composite: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                TVMix: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                UpMix21: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                UpMix41: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                UpMix61: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                CenterOnly: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                LFEOnly: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                RearOnly: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
            };
            FadeTo: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            FadeBy: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            Sel: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            ReturnReverb: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            ReturnDelay: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            ReturnFx1: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            ReturnFx2: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            Monitor: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            VAIO: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            device: {
                name: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                sr: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                wdm: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                ks: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                mme: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                asio: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
            };
        };
        Fx: {
            Reverb: {
                On: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                AB: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
            };
            Delay: {
                On: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                AB: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
            };
        };
        patch: {
            asio: (i: number) => {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            OutA2: (i: number) => {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            OutA3: (i: number) => {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            OutA4: (i: number) => {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            OutA5: (i: number) => {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            composite: (j: number) => {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            insert: (k: number) => {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            PostFaderComposite: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            PostFxInsert: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
        };
        Option: {
            sr: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            ASIOsr: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            delay: (i: number) => {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            buffer: {
                mme: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                wdm: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                ks: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                asio: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
            };
            mode: {
                exclusif: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                swift: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
            };
            MonitorOnSEL: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            SliderMode: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
        };
        recorder: {
            stop: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            play: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            replay: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            ff: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            rew: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            A1: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            A2: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            A3: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            A4: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            A5: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            B1: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            B2: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            B3: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            record: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            pause: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            goto: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            load: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            samplerate: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            ArmStrip: (i: number) => {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            ArmBus: (i: number) => {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            mode: {
                recbus: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                PlayOnLoad: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                Loop: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                MultiTrack: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
            };
            bitResolution: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            Channel: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            kbps: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            FileType: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            gain: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
        };
        vban: {
            Enable: {
                set: (value: string | number) => Promise<any>;
                get: () => any;
            };
            instream: (i: number) => {
                on: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                name: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                ip: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                port: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                sr: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                channel: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                bit: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                quality: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                route: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
            };
            outstream: (i: number) => {
                on: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                name: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                ip: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                port: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                sr: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                channel: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                bit: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                quality: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
                route: {
                    set: (value: string | number) => Promise<any>;
                    get: () => any;
                };
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

export { Voicemeeter, VoicemeeterTypes as types };
