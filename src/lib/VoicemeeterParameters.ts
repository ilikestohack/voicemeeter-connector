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

type Value = string | number;

function getOption(vm: Voicemeeter, ...args: Value[]) {
	return vm.getOption(args.join("."));
}

async function runOption(vm: Voicemeeter, ...args: Value[]) {
	if (!vm.isConnected) {
		throw new Error("Not connected ");
	}

	const value = args[args.length - 1];
	args.pop(); // Removes value to have equal sign
	await vm.setOption(`${args.join(".")}=${value}`);
	return getOption(vm, ...args);
}

export function vmParameters(vm: Voicemeeter) {
	return {
		Command: {
			Shutdown: {
				set: (value: Value) => runOption(vm, "Command", "Shutdown", value),
				get: () => getOption(vm, "Command", "Shutdown"),
			},
			Show: { set: (value: Value) => runOption(vm, "Command", "Show", value), get: () => getOption(vm, "Command", "Show") },
			Restart: { set: (value: Value) => runOption(vm, "Command", "Restart", value), get: () => getOption(vm, "Command", "Restart") },
			Eject: { set: (value: Value) => runOption(vm, "Command", "Eject", value), get: () => getOption(vm, "Command", "Eject") },
			Reset: { set: (value: Value) => runOption(vm, "Command", "Reset", value), get: () => getOption(vm, "Command", "Reset") },
			Save: { set: (value: Value) => runOption(vm, "Command", "Save", value), get: () => getOption(vm, "Command", "Save") },
			Load: { set: (value: Value) => runOption(vm, "Command", "Load", value), get: () => getOption(vm, "Command", "Load") },
			Lock: { set: (value: Value) => runOption(vm, "Command", "Lock", value), get: () => getOption(vm, "Command", "Lock") },
			Button: (i: number) => ({
				State: {
					set: (value: Value) => runOption(vm, "Command", `Button[${i}]`, "State", value),
					get: () => getOption(vm, "Command", `Button[${i}]`, "State"),
				},
				StateOnly: {
					set: (value: Value) => runOption(vm, "Command", `Button[${i}]`, "StateOnly", value),
					get: () => getOption(vm, "Command", `Button[${i}]`, "StateOnly"),
				},
				Trigger: {
					set: (value: Value) => runOption(vm, "Command", `Button[${i}]`, "Trigger", value),
					get: () => getOption(vm, "Command", `Button[${i}]`, "Trigger"),
				},
				Color: {
					set: (value: Value) => runOption(vm, "Command", `Button[${i}]`, "Color", value),
					get: () => getOption(vm, "Command", `Button[${i}]`, "Color"),
				},
			}),
			DialogShow: {
				VBANCHAT: {
					set: (value: Value) => runOption(vm, "Command", "DialogShow", "VBANCHAT", value),
					get: () => getOption(vm, "Command", "DialogShow", "VBANCHAT"),
				},
			},
			SaveBUSEQ: (j: number) => {
				return {
					set: (value: Value) => runOption(vm, "Command", `SaveBUSEQ[${j}]`, value),
					get: () => getOption(vm, "Command", `SaveBUSEQ[${j}]`),
				};
			},
			LoadBUSEQ: (j: number) => {
				return {
					set: (value: Value) => runOption(vm, "Command", `LoadBUSEQ[${j}]`, value),
					get: () => getOption(vm, "Command", `LoadBUSEQ[${j}]`),
				};
			},
			SaveStripEQ: (j: number) => {
				return {
					set: (value: Value) => runOption(vm, "Command", `SaveStripEQ[${j}]`, value),
					get: () => getOption(vm, "Command", `SaveStripEQ[${j}]`),
				};
			},
			LoadStripEQ: (j: number) => {
				return {
					set: (value: Value) => runOption(vm, "Command", `LoadStripEQ[${j}]`, value),
					get: () => getOption(vm, "Command", `LoadStripEQ[${j}]`),
				};
			},
			Preset: (k: number) => ({
				Recall: {
					set: (value: Value) => runOption(vm, "Command", `Preset[${k}]`, "Recall", value),
					get: () => getOption(vm, "Command", `Preset[${k}]`, "Recall"),
				},
			}),
		},
		Strip: (i: number) => ({
			Mono: { set: (value: Value) => runOption(vm, `Strip[${i}]`, "Mono", value), get: () => getOption(vm, `Strip[${i}]`, "Mono") },
			Mute: { set: (value: Value) => runOption(vm, `Strip[${i}]`, "Mute", value), get: () => getOption(vm, `Strip[${i}]`, "Mute") },
			Solo: { set: (value: Value) => runOption(vm, `Strip[${i}]`, "Solo", value), get: () => getOption(vm, `Strip[${i}]`, "Solo") },
			MC: { set: (value: Value) => runOption(vm, `Strip[${i}]`, "MC", value), get: () => getOption(vm, `Strip[${i}]`, "MC") },
			Gain: { set: (value: Value) => runOption(vm, `Strip[${i}]`, "Gain", value), get: () => getOption(vm, `Strip[${i}]`, "Gain") },
			GainLayer: (j: number) => {
				return {
					set: (value: Value) => runOption(vm, `Strip[${i}]`, `GainLayer[${j}]`, value),
					get: () => getOption(vm, `Strip[${i}]`, `GainLayer[${j}]`),
				};
			},
			Pan_x: {
				set: (value: Value) => runOption(vm, `Strip[${i}]`, "Pan_x", value),
				get: () => getOption(vm, `Strip[${i}]`, "Pan_x"),
			},
			Pan_y: {
				set: (value: Value) => runOption(vm, `Strip[${i}]`, "Pan_y", value),
				get: () => getOption(vm, `Strip[${i}]`, "Pan_y"),
			},
			Color_x: {
				set: (value: Value) => runOption(vm, `Strip[${i}]`, "Color_x", value),
				get: () => getOption(vm, `Strip[${i}]`, "Color_x"),
			},
			Color_y: {
				set: (value: Value) => runOption(vm, `Strip[${i}]`, "Color_y", value),
				get: () => getOption(vm, `Strip[${i}]`, "Color_y"),
			},
			fx_x: { set: (value: Value) => runOption(vm, `Strip[${i}]`, "fx_x", value), get: () => getOption(vm, `Strip[${i}]`, "fx_x") },
			fx_y: { set: (value: Value) => runOption(vm, `Strip[${i}]`, "fx_y", value), get: () => getOption(vm, `Strip[${i}]`, "fx_y") },
			Audibility: {
				set: (value: Value) => runOption(vm, `Strip[${i}]`, "Audibility", value),
				get: () => getOption(vm, `Strip[${i}]`, "Audibility"),
			},
			Comp: {
				GainIn: {
					set: (value: Value) => runOption(vm, `Strip[${i}]`, "Comp", "GainIn", value),
					get: () => getOption(vm, `Strip[${i}]`, "Comp", "GainIn"),
				},
				Ratio: {
					set: (value: Value) => runOption(vm, `Strip[${i}]`, "Comp", "Ratio", value),
					get: () => getOption(vm, `Strip[${i}]`, "Comp", "Ratio"),
				},
				Threshold: {
					set: (value: Value) => runOption(vm, `Strip[${i}]`, "Comp", "Threshold", value),
					get: () => getOption(vm, `Strip[${i}]`, "Comp", "Threshold"),
				},
				Attack: {
					set: (value: Value) => runOption(vm, `Strip[${i}]`, "Comp", "Attack", value),
					get: () => getOption(vm, `Strip[${i}]`, "Comp", "Attack"),
				},
				Release: {
					set: (value: Value) => runOption(vm, `Strip[${i}]`, "Comp", "Release", value),
					get: () => getOption(vm, `Strip[${i}]`, "Comp", "Release"),
				},
				Knee: {
					set: (value: Value) => runOption(vm, `Strip[${i}]`, "Comp", "Knee", value),
					get: () => getOption(vm, `Strip[${i}]`, "Comp", "Knee"),
				},
				GainOut: {
					set: (value: Value) => runOption(vm, `Strip[${i}]`, "Comp", "GainOut", value),
					get: () => getOption(vm, `Strip[${i}]`, "Comp", "GainOut"),
				},
				MakeUp: {
					set: (value: Value) => runOption(vm, `Strip[${i}]`, "Comp", "MakeUp", value),
					get: () => getOption(vm, `Strip[${i}]`, "Comp", "MakeUp"),
				},
			},
			Gate: {
				Threshold: {
					set: (value: Value) => runOption(vm, `Strip[${i}]`, "Gate", "Threshold", value),
					get: () => getOption(vm, `Strip[${i}]`, "Gate", "Threshold"),
				},
				Damping: {
					set: (value: Value) => runOption(vm, `Strip[${i}]`, "Gate", "Damping", value),
					get: () => getOption(vm, `Strip[${i}]`, "Gate", "Damping"),
				},
				BPSidechain: {
					set: (value: Value) => runOption(vm, `Strip[${i}]`, "Gate", "BPSidechain", value),
					get: () => getOption(vm, `Strip[${i}]`, "Gate", "BPSidechain"),
				},
				Attack: {
					set: (value: Value) => runOption(vm, `Strip[${i}]`, "Gate", "Attack", value),
					get: () => getOption(vm, `Strip[${i}]`, "Gate", "Attack"),
				},
				Hold: {
					set: (value: Value) => runOption(vm, `Strip[${i}]`, "Gate", "Hold", value),
					get: () => getOption(vm, `Strip[${i}]`, "Gate", "Hold"),
				},
				Release: {
					set: (value: Value) => runOption(vm, `Strip[${i}]`, "Gate", "Release", value),
					get: () => getOption(vm, `Strip[${i}]`, "Gate", "Release"),
				},
			},
			Denoiser: {
				Threshold: {
					set: (value: Value) => runOption(vm, `Strip[${i}]`, "Denoiser", "Threshold", value),
					get: () => getOption(vm, `Strip[${i}]`, "Denoiser", "Threshold"),
				},
			},
			Pitch: {
				On: {
					set: (value: Value) => runOption(vm, `Strip[${i}]`, "Pitch", "On", value),
					get: () => getOption(vm, `Strip[${i}]`, "Pitch", "On"),
				},
				DryWet: {
					set: (value: Value) => runOption(vm, `Strip[${i}]`, "Pitch", "DryWet", value),
					get: () => getOption(vm, `Strip[${i}]`, "Pitch", "DryWet"),
				},
				PitchValue: {
					set: (value: Value) => runOption(vm, `Strip[${i}]`, "Pitch", "PitchValue", value),
					get: () => getOption(vm, `Strip[${i}]`, "Pitch", "PitchValue"),
				},
				LoFormant: {
					set: (value: Value) => runOption(vm, `Strip[${i}]`, "Pitch", "LoFormant", value),
					get: () => getOption(vm, `Strip[${i}]`, "Pitch", "LoFormant"),
				},
				MedFormant: {
					set: (value: Value) => runOption(vm, `Strip[${i}]`, "Pitch", "MedFormant", value),
					get: () => getOption(vm, `Strip[${i}]`, "Pitch", "MedFormant"),
				},
				HiFormant: {
					set: (value: Value) => runOption(vm, `Strip[${i}]`, "Pitch", "HiFormant", value),
					get: () => getOption(vm, `Strip[${i}]`, "Pitch", "HiFormant"),
				},
			},
			Karaoke: {
				set: (value: Value) => runOption(vm, `Strip[${i}]`, "Karaoke", value),
				get: () => getOption(vm, `Strip[${i}]`, "Karaoke"),
			},
			Limit: {
				set: (value: Value) => runOption(vm, `Strip[${i}]`, "Limit", value),
				get: () => getOption(vm, `Strip[${i}]`, "Limit"),
			},
			EQGain1: {
				set: (value: Value) => runOption(vm, `Strip[${i}]`, "EQGain1", value),
				get: () => getOption(vm, `Strip[${i}]`, "EQGain1"),
			},
			EQGain2: {
				set: (value: Value) => runOption(vm, `Strip[${i}]`, "EQGain2", value),
				get: () => getOption(vm, `Strip[${i}]`, "EQGain2"),
			},
			EQGain3: {
				set: (value: Value) => runOption(vm, `Strip[${i}]`, "EQGain3", value),
				get: () => getOption(vm, `Strip[${i}]`, "EQGain3"),
			},
			Label: {
				set: (value: Value) => runOption(vm, `Strip[${i}]`, "Label", value),
				get: () => getOption(vm, `Strip[${i}]`, "Label"),
			},
			A1: { set: (value: Value) => runOption(vm, `Strip[${i}]`, "A1", value), get: () => getOption(vm, `Strip[${i}]`, "A1") },
			A2: { set: (value: Value) => runOption(vm, `Strip[${i}]`, "A2", value), get: () => getOption(vm, `Strip[${i}]`, "A2") },
			A3: { set: (value: Value) => runOption(vm, `Strip[${i}]`, "A3", value), get: () => getOption(vm, `Strip[${i}]`, "A3") },
			A4: { set: (value: Value) => runOption(vm, `Strip[${i}]`, "A4", value), get: () => getOption(vm, `Strip[${i}]`, "A4") },
			A5: { set: (value: Value) => runOption(vm, `Strip[${i}]`, "A5", value), get: () => getOption(vm, `Strip[${i}]`, "A5") },
			B1: { set: (value: Value) => runOption(vm, `Strip[${i}]`, "B1", value), get: () => getOption(vm, `Strip[${i}]`, "B1") },
			B2: { set: (value: Value) => runOption(vm, `Strip[${i}]`, "B2", value), get: () => getOption(vm, `Strip[${i}]`, "B2") },
			B3: { set: (value: Value) => runOption(vm, `Strip[${i}]`, "B3", value), get: () => getOption(vm, `Strip[${i}]`, "B3") },
			FadeTo: {
				set: (value: Value) => runOption(vm, `Strip[${i}]`, "FadeTo", value),
				get: () => getOption(vm, `Strip[${i}]`, "FadeTo"),
			},
			FadeBy: {
				set: (value: Value) => runOption(vm, `Strip[${i}]`, "FadeBy", value),
				get: () => getOption(vm, `Strip[${i}]`, "FadeBy"),
			},
			Reverb: {
				set: (value: Value) => runOption(vm, `Strip[${i}]`, "Reverb", value),
				get: () => getOption(vm, `Strip[${i}]`, "Reverb"),
			},
			Delay: {
				set: (value: Value) => runOption(vm, `Strip[${i}]`, "Delay", value),
				get: () => getOption(vm, `Strip[${i}]`, "Delay"),
			},
			Fx1: { set: (value: Value) => runOption(vm, `Strip[${i}]`, "Fx1", value), get: () => getOption(vm, `Strip[${i}]`, "Fx1") },
			Fx2: { set: (value: Value) => runOption(vm, `Strip[${i}]`, "Fx2", value), get: () => getOption(vm, `Strip[${i}]`, "Fx2") },
			PostReverb: {
				set: (value: Value) => runOption(vm, `Strip[${i}]`, "PostReverb", value),
				get: () => getOption(vm, `Strip[${i}]`, "PostReverb"),
			},
			PostDelay: {
				set: (value: Value) => runOption(vm, `Strip[${i}]`, "PostDelay", value),
				get: () => getOption(vm, `Strip[${i}]`, "PostDelay"),
			},
			PostFx1: {
				set: (value: Value) => runOption(vm, `Strip[${i}]`, "PostFx1", value),
				get: () => getOption(vm, `Strip[${i}]`, "PostFx1"),
			},
			PostFx2: {
				set: (value: Value) => runOption(vm, `Strip[${i}]`, "PostFx2", value),
				get: () => getOption(vm, `Strip[${i}]`, "PostFx2"),
			},
			EQ: {
				on: {
					set: (value: Value) => runOption(vm, `Strip[${i}]`, "EQ", "on", value),
					get: () => getOption(vm, `Strip[${i}]`, "EQ", "on"),
				},
				AB: {
					set: (value: Value) => runOption(vm, `Strip[${i}]`, "EQ", "AB", value),
					get: () => getOption(vm, `Strip[${i}]`, "EQ", "AB"),
				},
				channel: (j: number) => ({
					cell: (k: number) => ({
						on: {
							set: (value: Value) => runOption(vm, `Strip[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "on", value),
							get: () => getOption(vm, `Strip[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "on"),
						},
						type: {
							set: (value: Value) => runOption(vm, `Strip[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "type", value),
							get: () => getOption(vm, `Strip[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "type"),
						},
						f: {
							set: (value: Value) => runOption(vm, `Strip[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "f", value),
							get: () => getOption(vm, `Strip[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "f"),
						},
						gain: {
							set: (value: Value) => runOption(vm, `Strip[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "gain", value),
							get: () => getOption(vm, `Strip[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "gain"),
						},
						q: {
							set: (value: Value) => runOption(vm, `Strip[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "q", value),
							get: () => getOption(vm, `Strip[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "q"),
						},
					}),
				}),
			},
			VAIO: { set: (value: Value) => runOption(vm, `Strip[${i}]`, "VAIO", value), get: () => getOption(vm, `Strip[${i}]`, "VAIO") },
			App: (k: number) => ({
				Gain: {
					set: (value: Value) => runOption(vm, `Strip[${i}]`, `App[${k}]`, "Gain", value),
					get: () => getOption(vm, `Strip[${i}]`, `App[${k}]`, "Gain"),
				},
				Mute: {
					set: (value: Value) => runOption(vm, `Strip[${i}]`, `App[${k}]`, "Mute", value),
					get: () => getOption(vm, `Strip[${i}]`, `App[${k}]`, "Mute"),
				},
			}),
			AppGain: {
				set: (value: Value) => runOption(vm, `Strip[${i}]`, "AppGain", value),
				get: () => getOption(vm, `Strip[${i}]`, "AppGain"),
			},
			AppMute: {
				set: (value: Value) => runOption(vm, `Strip[${i}]`, "AppMute", value),
				get: () => getOption(vm, `Strip[${i}]`, "AppMute"),
			},
			device: {
				name: {
					set: (value: Value) => runOption(vm, `Strip[${i}]`, "device", "name", value),
					get: () => getOption(vm, `Strip[${i}]`, "device", "name"),
				},
				sr: {
					set: (value: Value) => runOption(vm, `Strip[${i}]`, "device", "sr", value),
					get: () => getOption(vm, `Strip[${i}]`, "device", "sr"),
				},
				wdm: {
					set: (value: Value) => runOption(vm, `Strip[${i}]`, "device", "wdm", value),
					get: () => getOption(vm, `Strip[${i}]`, "device", "wdm"),
				},
				ks: {
					set: (value: Value) => runOption(vm, `Strip[${i}]`, "device", "ks", value),
					get: () => getOption(vm, `Strip[${i}]`, "device", "ks"),
				},
				mme: {
					set: (value: Value) => runOption(vm, `Strip[${i}]`, "device", "mme", value),
					get: () => getOption(vm, `Strip[${i}]`, "device", "mme"),
				},
				asio: {
					set: (value: Value) => runOption(vm, `Strip[${i}]`, "device", "asio", value),
					get: () => getOption(vm, `Strip[${i}]`, "device", "asio"),
				},
			},
		}),
		Bus: (i: number) => ({
			Mono: { set: (value: Value) => runOption(vm, `Bus[${i}]`, "Mono", value), get: () => getOption(vm, `Bus[${i}]`, "Mono") },
			Mute: { set: (value: Value) => runOption(vm, `Bus[${i}]`, "Mute", value), get: () => getOption(vm, `Bus[${i}]`, "Mute") },
			EQ: {
				on: {
					set: (value: Value) => runOption(vm, `Bus[${i}]`, "EQ", "on", value),
					get: () => getOption(vm, `Bus[${i}]`, "EQ", "on"),
				},
				AB: {
					set: (value: Value) => runOption(vm, `Bus[${i}]`, "EQ", "AB", value),
					get: () => getOption(vm, `Bus[${i}]`, "EQ", "AB"),
				},
				channel: (j: number) => ({
					cell: (k: number) => ({
						on: {
							set: (value: Value) => runOption(vm, `Bus[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "on", value),
							get: () => getOption(vm, `Bus[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "on"),
						},
						type: {
							set: (value: Value) => runOption(vm, `Bus[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "type", value),
							get: () => getOption(vm, `Bus[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "type"),
						},
						f: {
							set: (value: Value) => runOption(vm, `Bus[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "f", value),
							get: () => getOption(vm, `Bus[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "f"),
						},
						gain: {
							set: (value: Value) => runOption(vm, `Bus[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "gain", value),
							get: () => getOption(vm, `Bus[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "gain"),
						},
						q: {
							set: (value: Value) => runOption(vm, `Bus[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "q", value),
							get: () => getOption(vm, `Bus[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "q"),
						},
					}),
				}),
			},
			Gain: { set: (value: Value) => runOption(vm, `Bus[${i}]`, "Gain", value), get: () => getOption(vm, `Bus[${i}]`, "Gain") },
			Label: { set: (value: Value) => runOption(vm, `Bus[${i}]`, "Label", value), get: () => getOption(vm, `Bus[${i}]`, "Label") },
			mode: {
				normal: {
					set: (value: Value) => runOption(vm, `Bus[${i}]`, "mode", "normal", value),
					get: () => getOption(vm, `Bus[${i}]`, "mode", "normal"),
				},
				Amix: {
					set: (value: Value) => runOption(vm, `Bus[${i}]`, "mode", "Amix", value),
					get: () => getOption(vm, `Bus[${i}]`, "mode", "Amix"),
				},
				Bmix: {
					set: (value: Value) => runOption(vm, `Bus[${i}]`, "mode", "Bmix", value),
					get: () => getOption(vm, `Bus[${i}]`, "mode", "Bmix"),
				},
				Repeat: {
					set: (value: Value) => runOption(vm, `Bus[${i}]`, "mode", "Repeat", value),
					get: () => getOption(vm, `Bus[${i}]`, "mode", "Repeat"),
				},
				Composite: {
					set: (value: Value) => runOption(vm, `Bus[${i}]`, "mode", "Composite", value),
					get: () => getOption(vm, `Bus[${i}]`, "mode", "Composite"),
				},
				TVMix: {
					set: (value: Value) => runOption(vm, `Bus[${i}]`, "mode", "TVMix", value),
					get: () => getOption(vm, `Bus[${i}]`, "mode", "TVMix"),
				},
				UpMix21: {
					set: (value: Value) => runOption(vm, `Bus[${i}]`, "mode", "UpMix21", value),
					get: () => getOption(vm, `Bus[${i}]`, "mode", "UpMix21"),
				},
				UpMix41: {
					set: (value: Value) => runOption(vm, `Bus[${i}]`, "mode", "UpMix41", value),
					get: () => getOption(vm, `Bus[${i}]`, "mode", "UpMix41"),
				},
				UpMix61: {
					set: (value: Value) => runOption(vm, `Bus[${i}]`, "mode", "UpMix61", value),
					get: () => getOption(vm, `Bus[${i}]`, "mode", "UpMix61"),
				},
				CenterOnly: {
					set: (value: Value) => runOption(vm, `Bus[${i}]`, "mode", "CenterOnly", value),
					get: () => getOption(vm, `Bus[${i}]`, "mode", "CenterOnly"),
				},
				LFEOnly: {
					set: (value: Value) => runOption(vm, `Bus[${i}]`, "mode", "LFEOnly", value),
					get: () => getOption(vm, `Bus[${i}]`, "mode", "LFEOnly"),
				},
				RearOnly: {
					set: (value: Value) => runOption(vm, `Bus[${i}]`, "mode", "RearOnly", value),
					get: () => getOption(vm, `Bus[${i}]`, "mode", "RearOnly"),
				},
			},
			FadeTo: {
				set: (value: Value) => runOption(vm, `Bus[${i}]`, "FadeTo", value),
				get: () => getOption(vm, `Bus[${i}]`, "FadeTo"),
			},
			FadeBy: {
				set: (value: Value) => runOption(vm, `Bus[${i}]`, "FadeBy", value),
				get: () => getOption(vm, `Bus[${i}]`, "FadeBy"),
			},
			Sel: { set: (value: Value) => runOption(vm, `Bus[${i}]`, "Sel", value), get: () => getOption(vm, `Bus[${i}]`, "Sel") },
			ReturnReverb: {
				set: (value: Value) => runOption(vm, `Bus[${i}]`, "ReturnReverb", value),
				get: () => getOption(vm, `Bus[${i}]`, "ReturnReverb"),
			},
			ReturnDelay: {
				set: (value: Value) => runOption(vm, `Bus[${i}]`, "ReturnDelay", value),
				get: () => getOption(vm, `Bus[${i}]`, "ReturnDelay"),
			},
			ReturnFx1: {
				set: (value: Value) => runOption(vm, `Bus[${i}]`, "ReturnFx1", value),
				get: () => getOption(vm, `Bus[${i}]`, "ReturnFx1"),
			},
			ReturnFx2: {
				set: (value: Value) => runOption(vm, `Bus[${i}]`, "ReturnFx2", value),
				get: () => getOption(vm, `Bus[${i}]`, "ReturnFx2"),
			},
			Monitor: {
				set: (value: Value) => runOption(vm, `Bus[${i}]`, "Monitor", value),
				get: () => getOption(vm, `Bus[${i}]`, "Monitor"),
			},
			VAIO: { set: (value: Value) => runOption(vm, `Bus[${i}]`, "VAIO", value), get: () => getOption(vm, `Bus[${i}]`, "VAIO") },
			device: {
				name: {
					set: (value: Value) => runOption(vm, `Bus[${i}]`, "device", "name", value),
					get: () => getOption(vm, `Bus[${i}]`, "device", "name"),
				},
				sr: {
					set: (value: Value) => runOption(vm, `Bus[${i}]`, "device", "sr", value),
					get: () => getOption(vm, `Bus[${i}]`, "device", "sr"),
				},
				wdm: {
					set: (value: Value) => runOption(vm, `Bus[${i}]`, "device", "wdm", value),
					get: () => getOption(vm, `Bus[${i}]`, "device", "wdm"),
				},
				ks: {
					set: (value: Value) => runOption(vm, `Bus[${i}]`, "device", "ks", value),
					get: () => getOption(vm, `Bus[${i}]`, "device", "ks"),
				},
				mme: {
					set: (value: Value) => runOption(vm, `Bus[${i}]`, "device", "mme", value),
					get: () => getOption(vm, `Bus[${i}]`, "device", "mme"),
				},
				asio: {
					set: (value: Value) => runOption(vm, `Bus[${i}]`, "device", "asio", value),
					get: () => getOption(vm, `Bus[${i}]`, "device", "asio"),
				},
			},
		}),
		Fx: {
			Reverb: {
				On: { set: (value: Value) => runOption(vm, "Fx", "Reverb", "On", value), get: () => getOption(vm, "Fx", "Reverb", "On") },
				AB: { set: (value: Value) => runOption(vm, "Fx", "Reverb", "AB", value), get: () => getOption(vm, "Fx", "Reverb", "AB") },
			},
			Delay: {
				On: { set: (value: Value) => runOption(vm, "Fx", "Delay", "On", value), get: () => getOption(vm, "Fx", "Delay", "On") },
				AB: { set: (value: Value) => runOption(vm, "Fx", "Delay", "AB", value), get: () => getOption(vm, "Fx", "Delay", "AB") },
			},
		},
		patch: {
			asio: (i: number) => {
				return {
					set: (value: Value) => runOption(vm, "patch", `asio[${i}]`, value),
					get: () => getOption(vm, "patch", `asio[${i}]`),
				};
			},
			OutA2: (i: number) => {
				return {
					set: (value: Value) => runOption(vm, "patch", `OutA2[${i}]`, value),
					get: () => getOption(vm, "patch", `OutA2[${i}]`),
				};
			},
			OutA3: (i: number) => {
				return {
					set: (value: Value) => runOption(vm, "patch", `OutA3[${i}]`, value),
					get: () => getOption(vm, "patch", `OutA3[${i}]`),
				};
			},
			OutA4: (i: number) => {
				return {
					set: (value: Value) => runOption(vm, "patch", `OutA4[${i}]`, value),
					get: () => getOption(vm, "patch", `OutA4[${i}]`),
				};
			},
			OutA5: (i: number) => {
				return {
					set: (value: Value) => runOption(vm, "patch", `OutA5[${i}]`, value),
					get: () => getOption(vm, "patch", `OutA5[${i}]`),
				};
			},
			composite: (j: number) => {
				return {
					set: (value: Value) => runOption(vm, "Patch", `composite[${j}]`, value),
					get: () => getOption(vm, "Patch", `composite[${j}]`),
				};
			},
			insert: (k: number) => {
				return {
					set: (value: Value) => runOption(vm, "Patch", `insert[${k}]`, value),
					get: () => getOption(vm, "Patch", `insert[${k}]`),
				};
			},
			PostFaderComposite: {
				set: (value: Value) => runOption(vm, "Patch", "PostFaderComposite", value),
				get: () => getOption(vm, "Patch", "PostFaderComposite"),
			},
			PostFxInsert: {
				set: (value: Value) => runOption(vm, "Patch", "PostFxInsert", value),
				get: () => getOption(vm, "Patch", "PostFxInsert"),
			},
		},
		Option: {
			sr: { set: (value: Value) => runOption(vm, "Option", "sr", value), get: () => getOption(vm, "Option", "sr") },
			ASIOsr: { set: (value: Value) => runOption(vm, "Option", "ASIOsr", value), get: () => getOption(vm, "Option", "ASIOsr") },
			delay: (i: number) => {
				return {
					set: (value: Value) => runOption(vm, "Option", `delay[${i}]`, value),
					get: () => getOption(vm, "Option", `delay[${i}]`),
				};
			},
			buffer: {
				mme: {
					set: (value: Value) => runOption(vm, "Option", "buffer", "mme", value),
					get: () => getOption(vm, "Option", "buffer", "mme"),
				},
				wdm: {
					set: (value: Value) => runOption(vm, "Option", "buffer", "wdm", value),
					get: () => getOption(vm, "Option", "buffer", "wdm"),
				},
				ks: {
					set: (value: Value) => runOption(vm, "Option", "buffer", "ks", value),
					get: () => getOption(vm, "Option", "buffer", "ks"),
				},
				asio: {
					set: (value: Value) => runOption(vm, "Option", "buffer", "asio", value),
					get: () => getOption(vm, "Option", "buffer", "asio"),
				},
			},
			mode: {
				exclusif: {
					set: (value: Value) => runOption(vm, "Option", "mode", "exclusif", value),
					get: () => getOption(vm, "Option", "mode", "exclusif"),
				},
				swift: {
					set: (value: Value) => runOption(vm, "Option", "mode", "swift", value),
					get: () => getOption(vm, "Option", "mode", "swift"),
				},
			},
			MonitorOnSEL: {
				set: (value: Value) => runOption(vm, "Option", "MonitorOnSEL", value),
				get: () => getOption(vm, "Option", "MonitorOnSEL"),
			},
			SliderMode: {
				set: (value: Value) => runOption(vm, "Option", "SliderMode", value),
				get: () => getOption(vm, "Option", "SliderMode"),
			},
		},
		recorder: {
			stop: { set: (value: Value) => runOption(vm, "recorder", "stop", value), get: () => getOption(vm, "recorder", "stop") },
			play: { set: (value: Value) => runOption(vm, "recorder", "play", value), get: () => getOption(vm, "recorder", "play") },
			replay: { set: (value: Value) => runOption(vm, "recorder", "replay", value), get: () => getOption(vm, "recorder", "replay") },
			ff: { set: (value: Value) => runOption(vm, "recorder", "ff", value), get: () => getOption(vm, "recorder", "ff") },
			rew: { set: (value: Value) => runOption(vm, "recorder", "rew", value), get: () => getOption(vm, "recorder", "rew") },
			A1: { set: (value: Value) => runOption(vm, "recorder", "A1", value), get: () => getOption(vm, "recorder", "A1") },
			A2: { set: (value: Value) => runOption(vm, "recorder", "A2", value), get: () => getOption(vm, "recorder", "A2") },
			A3: { set: (value: Value) => runOption(vm, "recorder", "A3", value), get: () => getOption(vm, "recorder", "A3") },
			A4: { set: (value: Value) => runOption(vm, "recorder", "A4", value), get: () => getOption(vm, "recorder", "A4") },
			A5: { set: (value: Value) => runOption(vm, "recorder", "A5", value), get: () => getOption(vm, "recorder", "A5") },
			B1: { set: (value: Value) => runOption(vm, "recorder", "B1", value), get: () => getOption(vm, "recorder", "B1") },
			B2: { set: (value: Value) => runOption(vm, "recorder", "B2", value), get: () => getOption(vm, "recorder", "B2") },
			B3: { set: (value: Value) => runOption(vm, "recorder", "B3", value), get: () => getOption(vm, "recorder", "B3") },
			record: { set: (value: Value) => runOption(vm, "recorder", "record", value), get: () => getOption(vm, "recorder", "record") },
			pause: { set: (value: Value) => runOption(vm, "recorder", "pause", value), get: () => getOption(vm, "recorder", "pause") },
			goto: { set: (value: Value) => runOption(vm, "Recorder", "goto", value), get: () => getOption(vm, "Recorder", "goto") },
			load: { set: (value: Value) => runOption(vm, "Recorder", "load", value), get: () => getOption(vm, "Recorder", "load") },
			samplerate: {
				set: (value: Value) => runOption(vm, "Recorder", "samplerate", value),
				get: () => getOption(vm, "Recorder", "samplerate"),
			},
			ArmStrip: (i: number) => {
				return {
					set: (value: Value) => runOption(vm, "Recorder", `ArmStrip(${i})`, value),
					get: () => getOption(vm, "Recorder", `ArmStrip(${i})`),
				};
			},
			ArmBus: (i: number) => {
				return {
					set: (value: Value) => runOption(vm, "Recorder", `ArmBus(${i})`, value),
					get: () => getOption(vm, "Recorder", `ArmBus(${i})`),
				};
			},
			mode: {
				recbus: {
					set: (value: Value) => runOption(vm, "Recorder", "mode", "recbus", value),
					get: () => getOption(vm, "Recorder", "mode", "recbus"),
				},
				PlayOnLoad: {
					set: (value: Value) => runOption(vm, "Recorder", "mode", "PlayOnLoad", value),
					get: () => getOption(vm, "Recorder", "mode", "PlayOnLoad"),
				},
				Loop: {
					set: (value: Value) => runOption(vm, "Recorder", "mode", "Loop", value),
					get: () => getOption(vm, "Recorder", "mode", "Loop"),
				},
				MultiTrack: {
					set: (value: Value) => runOption(vm, "Recorder", "mode", "MultiTrack", value),
					get: () => getOption(vm, "Recorder", "mode", "MultiTrack"),
				},
			},
			bitResolution: {
				set: (value: Value) => runOption(vm, "Recorder", "bitResolution", value),
				get: () => getOption(vm, "Recorder", "bitResolution"),
			},
			Channel: {
				set: (value: Value) => runOption(vm, "Recorder", "Channel", value),
				get: () => getOption(vm, "Recorder", "Channel"),
			},
			kbps: { set: (value: Value) => runOption(vm, "Recorder", "kbps", value), get: () => getOption(vm, "Recorder", "kbps") },
			FileType: {
				set: (value: Value) => runOption(vm, "Recorder", "FileType", value),
				get: () => getOption(vm, "Recorder", "FileType"),
			},
			gain: { set: (value: Value) => runOption(vm, "Recorder", "gain", value), get: () => getOption(vm, "Recorder", "gain") },
		},
		vban: {
			Enable: { set: (value: Value) => runOption(vm, "vban", "Enable", value), get: () => getOption(vm, "vban", "Enable") },
			instream: (i: number) => ({
				on: {
					set: (value: Value) => runOption(vm, "vban", `instream[${i}]`, "on", value),
					get: () => getOption(vm, "vban", `instream[${i}]`, "on"),
				},
				name: {
					set: (value: Value) => runOption(vm, "vban", `instream[${i}]`, "name", value),
					get: () => getOption(vm, "vban", `instream[${i}]`, "name"),
				},
				ip: {
					set: (value: Value) => runOption(vm, "vban", `instream[${i}]`, "ip", value),
					get: () => getOption(vm, "vban", `instream[${i}]`, "ip"),
				},
				port: {
					set: (value: Value) => runOption(vm, "vban", `instream[${i}]`, "port", value),
					get: () => getOption(vm, "vban", `instream[${i}]`, "port"),
				},
				sr: {
					set: (value: Value) => runOption(vm, "vban", `instream[${i}]`, "sr", value),
					get: () => getOption(vm, "vban", `instream[${i}]`, "sr"),
				},
				channel: {
					set: (value: Value) => runOption(vm, "vban", `instream[${i}]`, "channel", value),
					get: () => getOption(vm, "vban", `instream[${i}]`, "channel"),
				},
				bit: {
					set: (value: Value) => runOption(vm, "vban", `instream[${i}]`, "bit", value),
					get: () => getOption(vm, "vban", `instream[${i}]`, "bit"),
				},
				quality: {
					set: (value: Value) => runOption(vm, "vban", `instream[${i}]`, "quality", value),
					get: () => getOption(vm, "vban", `instream[${i}]`, "quality"),
				},
				route: {
					set: (value: Value) => runOption(vm, "vban", `instream[${i}]`, "route", value),
					get: () => getOption(vm, "vban", `instream[${i}]`, "route"),
				},
			}),
			outstream: (i: number) => ({
				on: {
					set: (value: Value) => runOption(vm, "vban", `outstream[${i}]`, "on", value),
					get: () => getOption(vm, "vban", `outstream[${i}]`, "on"),
				},
				name: {
					set: (value: Value) => runOption(vm, "vban", `outstream[${i}]`, "name", value),
					get: () => getOption(vm, "vban", `outstream[${i}]`, "name"),
				},
				ip: {
					set: (value: Value) => runOption(vm, "vban", `outstream[${i}]`, "ip", value),
					get: () => getOption(vm, "vban", `outstream[${i}]`, "ip"),
				},
				port: {
					set: (value: Value) => runOption(vm, "vban", `outstream[${i}]`, "port", value),
					get: () => getOption(vm, "vban", `outstream[${i}]`, "port"),
				},
				sr: {
					set: (value: Value) => runOption(vm, "vban", `outstream[${i}]`, "sr", value),
					get: () => getOption(vm, "vban", `outstream[${i}]`, "sr"),
				},
				channel: {
					set: (value: Value) => runOption(vm, "vban", `outstream[${i}]`, "channel", value),
					get: () => getOption(vm, "vban", `outstream[${i}]`, "channel"),
				},
				bit: {
					set: (value: Value) => runOption(vm, "vban", `outstream[${i}]`, "bit", value),
					get: () => getOption(vm, "vban", `outstream[${i}]`, "bit"),
				},
				quality: {
					set: (value: Value) => runOption(vm, "vban", `outstream[${i}]`, "quality", value),
					get: () => getOption(vm, "vban", `outstream[${i}]`, "quality"),
				},
				route: {
					set: (value: Value) => runOption(vm, "vban", `outstream[${i}]`, "route", value),
					get: () => getOption(vm, "vban", `outstream[${i}]`, "route"),
				},
			}),
		},
	};
}
