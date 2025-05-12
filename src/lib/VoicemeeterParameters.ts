/*
Top Level:
- Command
- Strip[i]
- Bus[i]
- Fx
- Patch
- Option
- Recorder
- vban
*/

import Voicemeeter from "./VoicemeeterConnector";

type Value = string | number | undefined;

function getOption(vm: Voicemeeter, args: Value[]) {
	return vm.getOption(args.join("."));
}

function runOption(vm: Voicemeeter, ...args: Value[]) {
	if (!vm.isConnected) {
		throw new Error("Not connected ");
	}

	const value = args[args.length - 1];
	args.pop(); // Removes undefined value and regular value to join differently
	if (value !== undefined) vm.setOption(`${args.join(".")}=${value}`);
	return getOption(vm, args); // Theres a race condition here so uh glhf
}

export function vmParameters(vm: Voicemeeter) {
	return {
		Command: {
			Shutdown: (value?: Value) => runOption(vm, "Command", "Shutdown", value),
			Show: (value?: Value) => runOption(vm, "Command", "Show", value),
			Restart: (value?: Value) => runOption(vm, "Command", "Restart", value),
			Eject: (value?: Value) => runOption(vm, "Command", "Eject", value),
			Reset: (value?: Value) => runOption(vm, "Command", "Reset", value),
			Save: (value?: Value) => runOption(vm, "Command", "Save", value),
			Load: (value?: Value) => runOption(vm, "Command", "Load", value),
			Lock: (value?: Value) => runOption(vm, "Command", "Lock", value),
			Button: (i: number) => ({
				State: (value?: Value) => runOption(vm, "Command", `Button[${i}]`, "State", value),
				StateOnly: (value?: Value) => runOption(vm, "Command", `Button[${i}]`, "StateOnly", value),
				Trigger: (value?: Value) => runOption(vm, "Command", `Button[${i}]`, "Trigger", value),
				Color: (value?: Value) => runOption(vm, "Command", `Button[${i}]`, "Color", value),
			}),
			DialogShow: {
				VBANCHAT: (value?: Value) => runOption(vm, "Command", "DialogShow", "VBANCHAT", value),
			},
			SaveBUSEQ: (j: number) => (value?: Value) => runOption(vm, "Command", `SaveBUSEQ[${j}]`, value),
			LoadBUSEQ: (j: number) => (value?: Value) => runOption(vm, "Command", `LoadBUSEQ[${j}]`, value),
			SaveStripEQ: (j: number) => (value?: Value) => runOption(vm, "Command", `SaveStripEQ[${j}]`, value),
			LoadStripEQ: (j: number) => (value?: Value) => runOption(vm, "Command", `LoadStripEQ[${j}]`, value),
			Preset: (k: number) => ({
				Recall: (value?: Value) => runOption(vm, "Command", `Preset[${k}]`, "Recall", value),
			}),
		},
		Strip: (i: number) => ({
			Mono: (value?: Value) => runOption(vm, `Strip[${i}]`, "Mono", value),
			Mute: (value?: Value) => runOption(vm, `Strip[${i}]`, "Mute", value),
			Solo: (value?: Value) => runOption(vm, `Strip[${i}]`, "Solo", value),
			MC: (value?: Value) => runOption(vm, `Strip[${i}]`, "MC", value),
			Gain: (value?: Value) => runOption(vm, `Strip[${i}]`, "Gain", value),
			GainLayer: (j: number) => (value?: Value) => runOption(vm, `Strip[${i}]`, `GainLayer[${j}]`, value),
			Pan_x: (value?: Value) => runOption(vm, `Strip[${i}]`, "Pan_x", value),
			Pan_y: (value?: Value) => runOption(vm, `Strip[${i}]`, "Pan_y", value),
			Color_x: (value?: Value) => runOption(vm, `Strip[${i}]`, "Color_x", value),
			Color_y: (value?: Value) => runOption(vm, `Strip[${i}]`, "Color_y", value),
			fx_x: (value?: Value) => runOption(vm, `Strip[${i}]`, "fx_x", value),
			fx_y: (value?: Value) => runOption(vm, `Strip[${i}]`, "fx_y", value),
			Audibility: (value?: Value) => runOption(vm, `Strip[${i}]`, "Audibility", value),
			Comp: {
				GainIn: (value?: Value) => runOption(vm, `Strip[${i}]`, "Comp", "GainIn", value),
				Ratio: (value?: Value) => runOption(vm, `Strip[${i}]`, "Comp", "Ratio", value),
				Threshold: (value?: Value) => runOption(vm, `Strip[${i}]`, "Comp", "Threshold", value),
				Attack: (value?: Value) => runOption(vm, `Strip[${i}]`, "Comp", "Attack", value),
				Release: (value?: Value) => runOption(vm, `Strip[${i}]`, "Comp", "Release", value),
				Knee: (value?: Value) => runOption(vm, `Strip[${i}]`, "Comp", "Knee", value),
				GainOut: (value?: Value) => runOption(vm, `Strip[${i}]`, "Comp", "GainOut", value),
				MakeUp: (value?: Value) => runOption(vm, `Strip[${i}]`, "Comp", "MakeUp", value),
			},
			Gate: {
				Threshold: (value?: Value) => runOption(vm, `Strip[${i}]`, "Gate", "Threshold", value),
				Damping: (value?: Value) => runOption(vm, `Strip[${i}]`, "Gate", "Damping", value),
				BPSidechain: (value?: Value) => runOption(vm, `Strip[${i}]`, "Gate", "BPSidechain", value),
				Attack: (value?: Value) => runOption(vm, `Strip[${i}]`, "Gate", "Attack", value),
				Hold: (value?: Value) => runOption(vm, `Strip[${i}]`, "Gate", "Hold", value),
				Release: (value?: Value) => runOption(vm, `Strip[${i}]`, "Gate", "Release", value),
			},
			Denoiser: {
				Threshold: (value?: Value) => runOption(vm, `Strip[${i}]`, "Denoiser", "Threshold", value),
			},
			Pitch: {
				On: (value?: Value) => runOption(vm, `Strip[${i}]`, "Pitch", "On", value),
				DryWet: (value?: Value) => runOption(vm, `Strip[${i}]`, "Pitch", "DryWet", value),
				PitchValue: (value?: Value) => runOption(vm, `Strip[${i}]`, "Pitch", "PitchValue", value),
				LoFormant: (value?: Value) => runOption(vm, `Strip[${i}]`, "Pitch", "LoFormant", value),
				MedFormant: (value?: Value) => runOption(vm, `Strip[${i}]`, "Pitch", "MedFormant", value),
				HiFormant: (value?: Value) => runOption(vm, `Strip[${i}]`, "Pitch", "HiFormant", value),
			},
			Karaoke: (value?: Value) => runOption(vm, `Strip[${i}]`, "Karaoke", value),
			Limit: (value?: Value) => runOption(vm, `Strip[${i}]`, "Limit", value),
			EQGain1: (value?: Value) => runOption(vm, `Strip[${i}]`, "EQGain1", value),
			EQGain2: (value?: Value) => runOption(vm, `Strip[${i}]`, "EQGain2", value),
			EQGain3: (value?: Value) => runOption(vm, `Strip[${i}]`, "EQGain3", value),
			Label: (value?: Value) => runOption(vm, `Strip[${i}]`, "Label", value),
			A1: (value?: Value) => runOption(vm, `Strip[${i}]`, "A1", value),
			A2: (value?: Value) => runOption(vm, `Strip[${i}]`, "A2", value),
			A3: (value?: Value) => runOption(vm, `Strip[${i}]`, "A3", value),
			A4: (value?: Value) => runOption(vm, `Strip[${i}]`, "A4", value),
			A5: (value?: Value) => runOption(vm, `Strip[${i}]`, "A5", value),
			B1: (value?: Value) => runOption(vm, `Strip[${i}]`, "B1", value),
			B2: (value?: Value) => runOption(vm, `Strip[${i}]`, "B2", value),
			B3: (value?: Value) => runOption(vm, `Strip[${i}]`, "B3", value),
			FadeTo: (value?: Value) => runOption(vm, `Strip[${i}]`, "FadeTo", value),
			FadeBy: (value?: Value) => runOption(vm, `Strip[${i}]`, "FadeBy", value),
			Reverb: (value?: Value) => runOption(vm, `Strip[${i}]`, "Reverb", value),
			Delay: (value?: Value) => runOption(vm, `Strip[${i}]`, "Delay", value),
			Fx1: (value?: Value) => runOption(vm, `Strip[${i}]`, "Fx1", value),
			Fx2: (value?: Value) => runOption(vm, `Strip[${i}]`, "Fx2", value),
			PostReverb: (value?: Value) => runOption(vm, `Strip[${i}]`, "PostReverb", value),
			PostDelay: (value?: Value) => runOption(vm, `Strip[${i}]`, "PostDelay", value),
			PostFx1: (value?: Value) => runOption(vm, `Strip[${i}]`, "PostFx1", value),
			PostFx2: (value?: Value) => runOption(vm, `Strip[${i}]`, "PostFx2", value),
			EQ: {
				on: (value?: Value) => runOption(vm, `Strip[${i}]`, "EQ", "on", value),
				AB: (value?: Value) => runOption(vm, `Strip[${i}]`, "EQ", "AB", value),
				channel: (j: number) => ({
					cell: (k: number) => ({
						on: (value?: Value) => runOption(vm, `Strip[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "on", value),
						type: (value?: Value) => runOption(vm, `Strip[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "type", value),
						f: (value?: Value) => runOption(vm, `Strip[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "f", value),
						gain: (value?: Value) => runOption(vm, `Strip[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "gain", value),
						q: (value?: Value) => runOption(vm, `Strip[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "q", value),
					}),
				}),
			},
			VAIO: (value?: Value) => runOption(vm, `Strip[${i}]`, "VAIO", value),
			App: (k: number) => ({
				Gain: (value?: Value) => runOption(vm, `Strip[${i}]`, `App[${k}]`, "Gain", value),
				Mute: (value?: Value) => runOption(vm, `Strip[${i}]`, `App[${k}]`, "Mute", value),
			}),
			AppGain: (value?: Value) => runOption(vm, `Strip[${i}]`, "AppGain", value),
			AppMute: (value?: Value) => runOption(vm, `Strip[${i}]`, "AppMute", value),
			device: {
				name: (value?: Value) => runOption(vm, `Strip[${i}]`, "device", "name", value),
				sr: (value?: Value) => runOption(vm, `Strip[${i}]`, "device", "sr", value),
				wdm: (value?: Value) => runOption(vm, `Strip[${i}]`, "device", "wdm", value),
				ks: (value?: Value) => runOption(vm, `Strip[${i}]`, "device", "ks", value),
				mme: (value?: Value) => runOption(vm, `Strip[${i}]`, "device", "mme", value),
				asio: (value?: Value) => runOption(vm, `Strip[${i}]`, "device", "asio", value),
			},
		}),
		Bus: (i: number) => ({
			Mono: (value?: Value) => runOption(vm, `Bus[${i}]`, "Mono", value),
			Mute: (value?: Value) => runOption(vm, `Bus[${i}]`, "Mute", value),
			EQ: {
				on: (value?: Value) => runOption(vm, `Bus[${i}]`, "EQ", "on", value),
				AB: (value?: Value) => runOption(vm, `Bus[${i}]`, "EQ", "AB", value),
				channel: (j: number) => ({
					cell: (k: number) => ({
						on: (value?: Value) => runOption(vm, `Bus[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "on", value),
						type: (value?: Value) => runOption(vm, `Bus[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "type", value),
						f: (value?: Value) => runOption(vm, `Bus[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "f", value),
						gain: (value?: Value) => runOption(vm, `Bus[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "gain", value),
						q: (value?: Value) => runOption(vm, `Bus[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "q", value),
					}),
				}),
			},
			Gain: (value?: Value) => runOption(vm, `Bus[${i}]`, "Gain", value),
			Label: (value?: Value) => runOption(vm, `Bus[${i}]`, "Label", value),
			mode: {
				normal: (value?: Value) => runOption(vm, `Bus[${i}]`, "mode", "normal", value),
				Amix: (value?: Value) => runOption(vm, `Bus[${i}]`, "mode", "Amix", value),
				Bmix: (value?: Value) => runOption(vm, `Bus[${i}]`, "mode", "Bmix", value),
				Repeat: (value?: Value) => runOption(vm, `Bus[${i}]`, "mode", "Repeat", value),
				Composite: (value?: Value) => runOption(vm, `Bus[${i}]`, "mode", "Composite", value),
				TVMix: (value?: Value) => runOption(vm, `Bus[${i}]`, "mode", "TVMix", value),
				UpMix21: (value?: Value) => runOption(vm, `Bus[${i}]`, "mode", "UpMix21", value),
				UpMix41: (value?: Value) => runOption(vm, `Bus[${i}]`, "mode", "UpMix41", value),
				UpMix61: (value?: Value) => runOption(vm, `Bus[${i}]`, "mode", "UpMix61", value),
				CenterOnly: (value?: Value) => runOption(vm, `Bus[${i}]`, "mode", "CenterOnly", value),
				LFEOnly: (value?: Value) => runOption(vm, `Bus[${i}]`, "mode", "LFEOnly", value),
				RearOnly: (value?: Value) => runOption(vm, `Bus[${i}]`, "mode", "RearOnly", value),
			},
			FadeTo: (value?: Value) => runOption(vm, `Bus[${i}]`, "FadeTo", value),
			FadeBy: (value?: Value) => runOption(vm, `Bus[${i}]`, "FadeBy", value),
			Sel: (value?: Value) => runOption(vm, `Bus[${i}]`, "Sel", value),
			ReturnReverb: (value?: Value) => runOption(vm, `Bus[${i}]`, "ReturnReverb", value),
			ReturnDelay: (value?: Value) => runOption(vm, `Bus[${i}]`, "ReturnDelay", value),
			ReturnFx1: (value?: Value) => runOption(vm, `Bus[${i}]`, "ReturnFx1", value),
			ReturnFx2: (value?: Value) => runOption(vm, `Bus[${i}]`, "ReturnFx2", value),
			Monitor: (value?: Value) => runOption(vm, `Bus[${i}]`, "Monitor", value),
			VAIO: (value?: Value) => runOption(vm, `Bus[${i}]`, "VAIO", value),
			device: {
				name: (value?: Value) => runOption(vm, `Bus[${i}]`, "device", "name", value),
				sr: (value?: Value) => runOption(vm, `Bus[${i}]`, "device", "sr", value),
				wdm: (value?: Value) => runOption(vm, `Bus[${i}]`, "device", "wdm", value),
				ks: (value?: Value) => runOption(vm, `Bus[${i}]`, "device", "ks", value),
				mme: (value?: Value) => runOption(vm, `Bus[${i}]`, "device", "mme", value),
				asio: (value?: Value) => runOption(vm, `Bus[${i}]`, "device", "asio", value),
			},
		}),
		Fx: {
			Reverb: {
				On: (value?: Value) => runOption(vm, "Fx", "Reverb", "On", value),
				AB: (value?: Value) => runOption(vm, "Fx", "Reverb", "AB", value),
			},
			Delay: {
				On: (value?: Value) => runOption(vm, "Fx", "Delay", "On", value),
				AB: (value?: Value) => runOption(vm, "Fx", "Delay", "AB", value),
			},
		},
		patch: {
			asio: (i: number) => (value?: Value) => runOption(vm, "patch", `asio[${i}]`, value),
			OutA2: (i: number) => (value?: Value) => runOption(vm, "patch", `OutA2[${i}]`, value),
			OutA3: (i: number) => (value?: Value) => runOption(vm, "patch", `OutA3[${i}]`, value),
			OutA4: (i: number) => (value?: Value) => runOption(vm, "patch", `OutA4[${i}]`, value),
			OutA5: (i: number) => (value?: Value) => runOption(vm, "patch", `OutA5[${i}]`, value),
			composite: (j: number) => (value?: Value) => runOption(vm, "Patch", `composite[${j}]`, value),
			insert: (k: number) => (value?: Value) => runOption(vm, "Patch", `insert[${k}]`, value),
			PostFaderComposite: (value?: Value) => runOption(vm, "Patch", "PostFaderComposite", value),
			PostFxInsert: (value?: Value) => runOption(vm, "Patch", "PostFxInsert", value),
		},
		Option: {
			sr: (value?: Value) => runOption(vm, "Option", "sr", value),
			ASIOsr: (value?: Value) => runOption(vm, "Option", "ASIOsr", value),
			delay: (i: number) => (value?: Value) => runOption(vm, "Option", `delay[${i}]`, value),
			buffer: {
				mme: (value?: Value) => runOption(vm, "Option", "buffer", "mme", value),
				wdm: (value?: Value) => runOption(vm, "Option", "buffer", "wdm", value),
				ks: (value?: Value) => runOption(vm, "Option", "buffer", "ks", value),
				asio: (value?: Value) => runOption(vm, "Option", "buffer", "asio", value),
			},
			mode: {
				exclusif: (value?: Value) => runOption(vm, "Option", "mode", "exclusif", value),
				swift: (value?: Value) => runOption(vm, "Option", "mode", "swift", value),
			},
			MonitorOnSEL: (value?: Value) => runOption(vm, "Option", "MonitorOnSEL", value),
			SliderMode: (value?: Value) => runOption(vm, "Option", "SliderMode", value),
		},
		recorder: {
			stop: (value?: Value) => runOption(vm, "recorder", "stop", value),
			play: (value?: Value) => runOption(vm, "recorder", "play", value),
			replay: (value?: Value) => runOption(vm, "recorder", "replay", value),
			ff: (value?: Value) => runOption(vm, "recorder", "ff", value),
			rew: (value?: Value) => runOption(vm, "recorder", "rew", value),
			A1: (value?: Value) => runOption(vm, "recorder", "A1", value),
			A2: (value?: Value) => runOption(vm, "recorder", "A2", value),
			A3: (value?: Value) => runOption(vm, "recorder", "A3", value),
			A4: (value?: Value) => runOption(vm, "recorder", "A4", value),
			A5: (value?: Value) => runOption(vm, "recorder", "A5", value),
			B1: (value?: Value) => runOption(vm, "recorder", "B1", value),
			B2: (value?: Value) => runOption(vm, "recorder", "B2", value),
			B3: (value?: Value) => runOption(vm, "recorder", "B3", value),
			record: (value?: Value) => runOption(vm, "recorder", "record", value),
			pause: (value?: Value) => runOption(vm, "recorder", "pause", value),
			goto: (value?: Value) => runOption(vm, "Recorder", "goto", value),
			load: (value?: Value) => runOption(vm, "Recorder", "load", value),
			samplerate: (value?: Value) => runOption(vm, "Recorder", "samplerate", value),
			ArmStrip: (i: number) => (value?: Value) => runOption(vm, "Recorder", `ArmStrip(${i})`, value),
			ArmBus: (i: number) => (value?: Value) => runOption(vm, "Recorder", `ArmBus(${i})`, value),
			mode: {
				recbus: (value?: Value) => runOption(vm, "Recorder", "mode", "recbus", value),
				PlayOnLoad: (value?: Value) => runOption(vm, "Recorder", "mode", "PlayOnLoad", value),
				Loop: (value?: Value) => runOption(vm, "Recorder", "mode", "Loop", value),
				MultiTrack: (value?: Value) => runOption(vm, "Recorder", "mode", "MultiTrack", value),
			},
			bitResolution: (value?: Value) => runOption(vm, "Recorder", "bitResolution", value),
			Channel: (value?: Value) => runOption(vm, "Recorder", "Channel", value),
			kbps: (value?: Value) => runOption(vm, "Recorder", "kbps", value),
			FileType: (value?: Value) => runOption(vm, "Recorder", "FileType", value),
			gain: (value?: Value) => runOption(vm, "Recorder", "gain", value),
		},
		vban: {
			Enable: (value?: Value) => runOption(vm, "vban", "Enable", value),
			instream: (i: number) => ({
				on: (value?: Value) => runOption(vm, "vban", `instream[${i}]`, "on", value),
				name: (value?: Value) => runOption(vm, "vban", `instream[${i}]`, "name", value),
				ip: (value?: Value) => runOption(vm, "vban", `instream[${i}]`, "ip", value),
				port: (value?: Value) => runOption(vm, "vban", `instream[${i}]`, "port", value),
				sr: (value?: Value) => runOption(vm, "vban", `instream[${i}]`, "sr", value),
				channel: (value?: Value) => runOption(vm, "vban", `instream[${i}]`, "channel", value),
				bit: (value?: Value) => runOption(vm, "vban", `instream[${i}]`, "bit", value),
				quality: (value?: Value) => runOption(vm, "vban", `instream[${i}]`, "quality", value),
				route: (value?: Value) => runOption(vm, "vban", `instream[${i}]`, "route", value),
			}),
			outstream: (i: number) => ({
				on: (value?: Value) => runOption(vm, "vban", `outstream[${i}]`, "on", value),
				name: (value?: Value) => runOption(vm, "vban", `outstream[${i}]`, "name", value),
				ip: (value?: Value) => runOption(vm, "vban", `outstream[${i}]`, "ip", value),
				port: (value?: Value) => runOption(vm, "vban", `outstream[${i}]`, "port", value),
				sr: (value?: Value) => runOption(vm, "vban", `outstream[${i}]`, "sr", value),
				channel: (value?: Value) => runOption(vm, "vban", `outstream[${i}]`, "channel", value),
				bit: (value?: Value) => runOption(vm, "vban", `outstream[${i}]`, "bit", value),
				quality: (value?: Value) => runOption(vm, "vban", `outstream[${i}]`, "quality", value),
				route: (value?: Value) => runOption(vm, "vban", `outstream[${i}]`, "route", value),
			}),
		},
	};
}
