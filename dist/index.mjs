// src/lib/VoicemeeterConnector.ts
import koffi from "koffi";

// src/lib/DLLHandler.ts
import Registry from "winreg";
var DLLHandler = {
  getDLLPath: async () => {
    const regKey = new Registry({
      hive: Registry.HKLM,
      key: "\\SOFTWARE\\WOW6432Node\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\VB:Voicemeeter {17359A74-1236-5467}"
    });
    return new Promise((resolve) => {
      regKey.values((err, items) => {
        if (err) {
          throw new Error(err);
        }
        const unistallerPath = items.find((i) => i.name === "UninstallString").value;
        const fileNameIndex = unistallerPath.lastIndexOf("\\");
        resolve(unistallerPath.slice(0, fileNameIndex));
      });
    });
  }
};
var DLLHandler_default = DLLHandler;

// src/lib/VoicemeeterParameters.ts
function getOption(vm, ...args) {
  return vm.getOption(args.join("."));
}
async function runOption(vm, ...args) {
  if (!vm.isConnected) {
    throw new Error("Not connected ");
  }
  const value = args[args.length - 1];
  args.pop();
  await vm.setOption(`${args.join(".")}=${value}`);
  return getOption(vm, ...args);
}
function vmParameters(vm) {
  return {
    Command: {
      Shutdown: {
        set: (value) => runOption(vm, "Command", "Shutdown", value),
        get: () => getOption(vm, "Command", "Shutdown")
      },
      Show: { set: (value) => runOption(vm, "Command", "Show", value), get: () => getOption(vm, "Command", "Show") },
      Restart: { set: (value) => runOption(vm, "Command", "Restart", value), get: () => getOption(vm, "Command", "Restart") },
      Eject: { set: (value) => runOption(vm, "Command", "Eject", value), get: () => getOption(vm, "Command", "Eject") },
      Reset: { set: (value) => runOption(vm, "Command", "Reset", value), get: () => getOption(vm, "Command", "Reset") },
      Save: { set: (value) => runOption(vm, "Command", "Save", value), get: () => getOption(vm, "Command", "Save") },
      Load: { set: (value) => runOption(vm, "Command", "Load", value), get: () => getOption(vm, "Command", "Load") },
      Lock: { set: (value) => runOption(vm, "Command", "Lock", value), get: () => getOption(vm, "Command", "Lock") },
      Button: (i) => ({
        State: {
          set: (value) => runOption(vm, "Command", `Button[${i}]`, "State", value),
          get: () => getOption(vm, "Command", `Button[${i}]`, "State")
        },
        StateOnly: {
          set: (value) => runOption(vm, "Command", `Button[${i}]`, "StateOnly", value),
          get: () => getOption(vm, "Command", `Button[${i}]`, "StateOnly")
        },
        Trigger: {
          set: (value) => runOption(vm, "Command", `Button[${i}]`, "Trigger", value),
          get: () => getOption(vm, "Command", `Button[${i}]`, "Trigger")
        },
        Color: {
          set: (value) => runOption(vm, "Command", `Button[${i}]`, "Color", value),
          get: () => getOption(vm, "Command", `Button[${i}]`, "Color")
        }
      }),
      DialogShow: {
        VBANCHAT: {
          set: (value) => runOption(vm, "Command", "DialogShow", "VBANCHAT", value),
          get: () => getOption(vm, "Command", "DialogShow", "VBANCHAT")
        }
      },
      SaveBUSEQ: (j) => {
        return {
          set: (value) => runOption(vm, "Command", `SaveBUSEQ[${j}]`, value),
          get: () => getOption(vm, "Command", `SaveBUSEQ[${j}]`)
        };
      },
      LoadBUSEQ: (j) => {
        return {
          set: (value) => runOption(vm, "Command", `LoadBUSEQ[${j}]`, value),
          get: () => getOption(vm, "Command", `LoadBUSEQ[${j}]`)
        };
      },
      SaveStripEQ: (j) => {
        return {
          set: (value) => runOption(vm, "Command", `SaveStripEQ[${j}]`, value),
          get: () => getOption(vm, "Command", `SaveStripEQ[${j}]`)
        };
      },
      LoadStripEQ: (j) => {
        return {
          set: (value) => runOption(vm, "Command", `LoadStripEQ[${j}]`, value),
          get: () => getOption(vm, "Command", `LoadStripEQ[${j}]`)
        };
      },
      Preset: (k) => ({
        Recall: {
          set: (value) => runOption(vm, "Command", `Preset[${k}]`, "Recall", value),
          get: () => getOption(vm, "Command", `Preset[${k}]`, "Recall")
        }
      })
    },
    Strip: (i) => ({
      Mono: { set: (value) => runOption(vm, `Strip[${i}]`, "Mono", value), get: () => getOption(vm, `Strip[${i}]`, "Mono") },
      Mute: { set: (value) => runOption(vm, `Strip[${i}]`, "Mute", value), get: () => getOption(vm, `Strip[${i}]`, "Mute") },
      Solo: { set: (value) => runOption(vm, `Strip[${i}]`, "Solo", value), get: () => getOption(vm, `Strip[${i}]`, "Solo") },
      MC: { set: (value) => runOption(vm, `Strip[${i}]`, "MC", value), get: () => getOption(vm, `Strip[${i}]`, "MC") },
      Gain: { set: (value) => runOption(vm, `Strip[${i}]`, "Gain", value), get: () => getOption(vm, `Strip[${i}]`, "Gain") },
      GainLayer: (j) => {
        return {
          set: (value) => runOption(vm, `Strip[${i}]`, `GainLayer[${j}]`, value),
          get: () => getOption(vm, `Strip[${i}]`, `GainLayer[${j}]`)
        };
      },
      Pan_x: {
        set: (value) => runOption(vm, `Strip[${i}]`, "Pan_x", value),
        get: () => getOption(vm, `Strip[${i}]`, "Pan_x")
      },
      Pan_y: {
        set: (value) => runOption(vm, `Strip[${i}]`, "Pan_y", value),
        get: () => getOption(vm, `Strip[${i}]`, "Pan_y")
      },
      Color_x: {
        set: (value) => runOption(vm, `Strip[${i}]`, "Color_x", value),
        get: () => getOption(vm, `Strip[${i}]`, "Color_x")
      },
      Color_y: {
        set: (value) => runOption(vm, `Strip[${i}]`, "Color_y", value),
        get: () => getOption(vm, `Strip[${i}]`, "Color_y")
      },
      fx_x: { set: (value) => runOption(vm, `Strip[${i}]`, "fx_x", value), get: () => getOption(vm, `Strip[${i}]`, "fx_x") },
      fx_y: { set: (value) => runOption(vm, `Strip[${i}]`, "fx_y", value), get: () => getOption(vm, `Strip[${i}]`, "fx_y") },
      Audibility: {
        set: (value) => runOption(vm, `Strip[${i}]`, "Audibility", value),
        get: () => getOption(vm, `Strip[${i}]`, "Audibility")
      },
      Comp: {
        GainIn: {
          set: (value) => runOption(vm, `Strip[${i}]`, "Comp", "GainIn", value),
          get: () => getOption(vm, `Strip[${i}]`, "Comp", "GainIn")
        },
        Ratio: {
          set: (value) => runOption(vm, `Strip[${i}]`, "Comp", "Ratio", value),
          get: () => getOption(vm, `Strip[${i}]`, "Comp", "Ratio")
        },
        Threshold: {
          set: (value) => runOption(vm, `Strip[${i}]`, "Comp", "Threshold", value),
          get: () => getOption(vm, `Strip[${i}]`, "Comp", "Threshold")
        },
        Attack: {
          set: (value) => runOption(vm, `Strip[${i}]`, "Comp", "Attack", value),
          get: () => getOption(vm, `Strip[${i}]`, "Comp", "Attack")
        },
        Release: {
          set: (value) => runOption(vm, `Strip[${i}]`, "Comp", "Release", value),
          get: () => getOption(vm, `Strip[${i}]`, "Comp", "Release")
        },
        Knee: {
          set: (value) => runOption(vm, `Strip[${i}]`, "Comp", "Knee", value),
          get: () => getOption(vm, `Strip[${i}]`, "Comp", "Knee")
        },
        GainOut: {
          set: (value) => runOption(vm, `Strip[${i}]`, "Comp", "GainOut", value),
          get: () => getOption(vm, `Strip[${i}]`, "Comp", "GainOut")
        },
        MakeUp: {
          set: (value) => runOption(vm, `Strip[${i}]`, "Comp", "MakeUp", value),
          get: () => getOption(vm, `Strip[${i}]`, "Comp", "MakeUp")
        }
      },
      Gate: {
        Threshold: {
          set: (value) => runOption(vm, `Strip[${i}]`, "Gate", "Threshold", value),
          get: () => getOption(vm, `Strip[${i}]`, "Gate", "Threshold")
        },
        Damping: {
          set: (value) => runOption(vm, `Strip[${i}]`, "Gate", "Damping", value),
          get: () => getOption(vm, `Strip[${i}]`, "Gate", "Damping")
        },
        BPSidechain: {
          set: (value) => runOption(vm, `Strip[${i}]`, "Gate", "BPSidechain", value),
          get: () => getOption(vm, `Strip[${i}]`, "Gate", "BPSidechain")
        },
        Attack: {
          set: (value) => runOption(vm, `Strip[${i}]`, "Gate", "Attack", value),
          get: () => getOption(vm, `Strip[${i}]`, "Gate", "Attack")
        },
        Hold: {
          set: (value) => runOption(vm, `Strip[${i}]`, "Gate", "Hold", value),
          get: () => getOption(vm, `Strip[${i}]`, "Gate", "Hold")
        },
        Release: {
          set: (value) => runOption(vm, `Strip[${i}]`, "Gate", "Release", value),
          get: () => getOption(vm, `Strip[${i}]`, "Gate", "Release")
        }
      },
      Denoiser: {
        Threshold: {
          set: (value) => runOption(vm, `Strip[${i}]`, "Denoiser", "Threshold", value),
          get: () => getOption(vm, `Strip[${i}]`, "Denoiser", "Threshold")
        }
      },
      Pitch: {
        On: {
          set: (value) => runOption(vm, `Strip[${i}]`, "Pitch", "On", value),
          get: () => getOption(vm, `Strip[${i}]`, "Pitch", "On")
        },
        DryWet: {
          set: (value) => runOption(vm, `Strip[${i}]`, "Pitch", "DryWet", value),
          get: () => getOption(vm, `Strip[${i}]`, "Pitch", "DryWet")
        },
        PitchValue: {
          set: (value) => runOption(vm, `Strip[${i}]`, "Pitch", "PitchValue", value),
          get: () => getOption(vm, `Strip[${i}]`, "Pitch", "PitchValue")
        },
        LoFormant: {
          set: (value) => runOption(vm, `Strip[${i}]`, "Pitch", "LoFormant", value),
          get: () => getOption(vm, `Strip[${i}]`, "Pitch", "LoFormant")
        },
        MedFormant: {
          set: (value) => runOption(vm, `Strip[${i}]`, "Pitch", "MedFormant", value),
          get: () => getOption(vm, `Strip[${i}]`, "Pitch", "MedFormant")
        },
        HiFormant: {
          set: (value) => runOption(vm, `Strip[${i}]`, "Pitch", "HiFormant", value),
          get: () => getOption(vm, `Strip[${i}]`, "Pitch", "HiFormant")
        }
      },
      Karaoke: {
        set: (value) => runOption(vm, `Strip[${i}]`, "Karaoke", value),
        get: () => getOption(vm, `Strip[${i}]`, "Karaoke")
      },
      Limit: {
        set: (value) => runOption(vm, `Strip[${i}]`, "Limit", value),
        get: () => getOption(vm, `Strip[${i}]`, "Limit")
      },
      EQGain1: {
        set: (value) => runOption(vm, `Strip[${i}]`, "EQGain1", value),
        get: () => getOption(vm, `Strip[${i}]`, "EQGain1")
      },
      EQGain2: {
        set: (value) => runOption(vm, `Strip[${i}]`, "EQGain2", value),
        get: () => getOption(vm, `Strip[${i}]`, "EQGain2")
      },
      EQGain3: {
        set: (value) => runOption(vm, `Strip[${i}]`, "EQGain3", value),
        get: () => getOption(vm, `Strip[${i}]`, "EQGain3")
      },
      Label: {
        set: (value) => runOption(vm, `Strip[${i}]`, "Label", value),
        get: () => getOption(vm, `Strip[${i}]`, "Label")
      },
      A1: { set: (value) => runOption(vm, `Strip[${i}]`, "A1", value), get: () => getOption(vm, `Strip[${i}]`, "A1") },
      A2: { set: (value) => runOption(vm, `Strip[${i}]`, "A2", value), get: () => getOption(vm, `Strip[${i}]`, "A2") },
      A3: { set: (value) => runOption(vm, `Strip[${i}]`, "A3", value), get: () => getOption(vm, `Strip[${i}]`, "A3") },
      A4: { set: (value) => runOption(vm, `Strip[${i}]`, "A4", value), get: () => getOption(vm, `Strip[${i}]`, "A4") },
      A5: { set: (value) => runOption(vm, `Strip[${i}]`, "A5", value), get: () => getOption(vm, `Strip[${i}]`, "A5") },
      B1: { set: (value) => runOption(vm, `Strip[${i}]`, "B1", value), get: () => getOption(vm, `Strip[${i}]`, "B1") },
      B2: { set: (value) => runOption(vm, `Strip[${i}]`, "B2", value), get: () => getOption(vm, `Strip[${i}]`, "B2") },
      B3: { set: (value) => runOption(vm, `Strip[${i}]`, "B3", value), get: () => getOption(vm, `Strip[${i}]`, "B3") },
      FadeTo: {
        set: (value) => runOption(vm, `Strip[${i}]`, "FadeTo", value),
        get: () => getOption(vm, `Strip[${i}]`, "FadeTo")
      },
      FadeBy: {
        set: (value) => runOption(vm, `Strip[${i}]`, "FadeBy", value),
        get: () => getOption(vm, `Strip[${i}]`, "FadeBy")
      },
      Reverb: {
        set: (value) => runOption(vm, `Strip[${i}]`, "Reverb", value),
        get: () => getOption(vm, `Strip[${i}]`, "Reverb")
      },
      Delay: {
        set: (value) => runOption(vm, `Strip[${i}]`, "Delay", value),
        get: () => getOption(vm, `Strip[${i}]`, "Delay")
      },
      Fx1: { set: (value) => runOption(vm, `Strip[${i}]`, "Fx1", value), get: () => getOption(vm, `Strip[${i}]`, "Fx1") },
      Fx2: { set: (value) => runOption(vm, `Strip[${i}]`, "Fx2", value), get: () => getOption(vm, `Strip[${i}]`, "Fx2") },
      PostReverb: {
        set: (value) => runOption(vm, `Strip[${i}]`, "PostReverb", value),
        get: () => getOption(vm, `Strip[${i}]`, "PostReverb")
      },
      PostDelay: {
        set: (value) => runOption(vm, `Strip[${i}]`, "PostDelay", value),
        get: () => getOption(vm, `Strip[${i}]`, "PostDelay")
      },
      PostFx1: {
        set: (value) => runOption(vm, `Strip[${i}]`, "PostFx1", value),
        get: () => getOption(vm, `Strip[${i}]`, "PostFx1")
      },
      PostFx2: {
        set: (value) => runOption(vm, `Strip[${i}]`, "PostFx2", value),
        get: () => getOption(vm, `Strip[${i}]`, "PostFx2")
      },
      EQ: {
        on: {
          set: (value) => runOption(vm, `Strip[${i}]`, "EQ", "on", value),
          get: () => getOption(vm, `Strip[${i}]`, "EQ", "on")
        },
        AB: {
          set: (value) => runOption(vm, `Strip[${i}]`, "EQ", "AB", value),
          get: () => getOption(vm, `Strip[${i}]`, "EQ", "AB")
        },
        channel: (j) => ({
          cell: (k) => ({
            on: {
              set: (value) => runOption(vm, `Strip[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "on", value),
              get: () => getOption(vm, `Strip[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "on")
            },
            type: {
              set: (value) => runOption(vm, `Strip[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "type", value),
              get: () => getOption(vm, `Strip[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "type")
            },
            f: {
              set: (value) => runOption(vm, `Strip[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "f", value),
              get: () => getOption(vm, `Strip[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "f")
            },
            gain: {
              set: (value) => runOption(vm, `Strip[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "gain", value),
              get: () => getOption(vm, `Strip[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "gain")
            },
            q: {
              set: (value) => runOption(vm, `Strip[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "q", value),
              get: () => getOption(vm, `Strip[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "q")
            }
          })
        })
      },
      VAIO: { set: (value) => runOption(vm, `Strip[${i}]`, "VAIO", value), get: () => getOption(vm, `Strip[${i}]`, "VAIO") },
      App: (k) => ({
        Gain: {
          set: (value) => runOption(vm, `Strip[${i}]`, `App[${k}]`, "Gain", value),
          get: () => getOption(vm, `Strip[${i}]`, `App[${k}]`, "Gain")
        },
        Mute: {
          set: (value) => runOption(vm, `Strip[${i}]`, `App[${k}]`, "Mute", value),
          get: () => getOption(vm, `Strip[${i}]`, `App[${k}]`, "Mute")
        }
      }),
      AppGain: {
        set: (value) => runOption(vm, `Strip[${i}]`, "AppGain", value),
        get: () => getOption(vm, `Strip[${i}]`, "AppGain")
      },
      AppMute: {
        set: (value) => runOption(vm, `Strip[${i}]`, "AppMute", value),
        get: () => getOption(vm, `Strip[${i}]`, "AppMute")
      },
      device: {
        name: {
          set: (value) => runOption(vm, `Strip[${i}]`, "device", "name", value),
          get: () => getOption(vm, `Strip[${i}]`, "device", "name")
        },
        sr: {
          set: (value) => runOption(vm, `Strip[${i}]`, "device", "sr", value),
          get: () => getOption(vm, `Strip[${i}]`, "device", "sr")
        },
        wdm: {
          set: (value) => runOption(vm, `Strip[${i}]`, "device", "wdm", value),
          get: () => getOption(vm, `Strip[${i}]`, "device", "wdm")
        },
        ks: {
          set: (value) => runOption(vm, `Strip[${i}]`, "device", "ks", value),
          get: () => getOption(vm, `Strip[${i}]`, "device", "ks")
        },
        mme: {
          set: (value) => runOption(vm, `Strip[${i}]`, "device", "mme", value),
          get: () => getOption(vm, `Strip[${i}]`, "device", "mme")
        },
        asio: {
          set: (value) => runOption(vm, `Strip[${i}]`, "device", "asio", value),
          get: () => getOption(vm, `Strip[${i}]`, "device", "asio")
        }
      }
    }),
    Bus: (i) => ({
      Mono: { set: (value) => runOption(vm, `Bus[${i}]`, "Mono", value), get: () => getOption(vm, `Bus[${i}]`, "Mono") },
      Mute: { set: (value) => runOption(vm, `Bus[${i}]`, "Mute", value), get: () => getOption(vm, `Bus[${i}]`, "Mute") },
      EQ: {
        on: {
          set: (value) => runOption(vm, `Bus[${i}]`, "EQ", "on", value),
          get: () => getOption(vm, `Bus[${i}]`, "EQ", "on")
        },
        AB: {
          set: (value) => runOption(vm, `Bus[${i}]`, "EQ", "AB", value),
          get: () => getOption(vm, `Bus[${i}]`, "EQ", "AB")
        },
        channel: (j) => ({
          cell: (k) => ({
            on: {
              set: (value) => runOption(vm, `Bus[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "on", value),
              get: () => getOption(vm, `Bus[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "on")
            },
            type: {
              set: (value) => runOption(vm, `Bus[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "type", value),
              get: () => getOption(vm, `Bus[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "type")
            },
            f: {
              set: (value) => runOption(vm, `Bus[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "f", value),
              get: () => getOption(vm, `Bus[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "f")
            },
            gain: {
              set: (value) => runOption(vm, `Bus[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "gain", value),
              get: () => getOption(vm, `Bus[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "gain")
            },
            q: {
              set: (value) => runOption(vm, `Bus[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "q", value),
              get: () => getOption(vm, `Bus[${i}]`, "EQ", `channel[${j}]`, `cell[${k}]`, "q")
            }
          })
        })
      },
      Gain: { set: (value) => runOption(vm, `Bus[${i}]`, "Gain", value), get: () => getOption(vm, `Bus[${i}]`, "Gain") },
      Label: { set: (value) => runOption(vm, `Bus[${i}]`, "Label", value), get: () => getOption(vm, `Bus[${i}]`, "Label") },
      mode: {
        normal: {
          set: (value) => runOption(vm, `Bus[${i}]`, "mode", "normal", value),
          get: () => getOption(vm, `Bus[${i}]`, "mode", "normal")
        },
        Amix: {
          set: (value) => runOption(vm, `Bus[${i}]`, "mode", "Amix", value),
          get: () => getOption(vm, `Bus[${i}]`, "mode", "Amix")
        },
        Bmix: {
          set: (value) => runOption(vm, `Bus[${i}]`, "mode", "Bmix", value),
          get: () => getOption(vm, `Bus[${i}]`, "mode", "Bmix")
        },
        Repeat: {
          set: (value) => runOption(vm, `Bus[${i}]`, "mode", "Repeat", value),
          get: () => getOption(vm, `Bus[${i}]`, "mode", "Repeat")
        },
        Composite: {
          set: (value) => runOption(vm, `Bus[${i}]`, "mode", "Composite", value),
          get: () => getOption(vm, `Bus[${i}]`, "mode", "Composite")
        },
        TVMix: {
          set: (value) => runOption(vm, `Bus[${i}]`, "mode", "TVMix", value),
          get: () => getOption(vm, `Bus[${i}]`, "mode", "TVMix")
        },
        UpMix21: {
          set: (value) => runOption(vm, `Bus[${i}]`, "mode", "UpMix21", value),
          get: () => getOption(vm, `Bus[${i}]`, "mode", "UpMix21")
        },
        UpMix41: {
          set: (value) => runOption(vm, `Bus[${i}]`, "mode", "UpMix41", value),
          get: () => getOption(vm, `Bus[${i}]`, "mode", "UpMix41")
        },
        UpMix61: {
          set: (value) => runOption(vm, `Bus[${i}]`, "mode", "UpMix61", value),
          get: () => getOption(vm, `Bus[${i}]`, "mode", "UpMix61")
        },
        CenterOnly: {
          set: (value) => runOption(vm, `Bus[${i}]`, "mode", "CenterOnly", value),
          get: () => getOption(vm, `Bus[${i}]`, "mode", "CenterOnly")
        },
        LFEOnly: {
          set: (value) => runOption(vm, `Bus[${i}]`, "mode", "LFEOnly", value),
          get: () => getOption(vm, `Bus[${i}]`, "mode", "LFEOnly")
        },
        RearOnly: {
          set: (value) => runOption(vm, `Bus[${i}]`, "mode", "RearOnly", value),
          get: () => getOption(vm, `Bus[${i}]`, "mode", "RearOnly")
        }
      },
      FadeTo: {
        set: (value) => runOption(vm, `Bus[${i}]`, "FadeTo", value),
        get: () => getOption(vm, `Bus[${i}]`, "FadeTo")
      },
      FadeBy: {
        set: (value) => runOption(vm, `Bus[${i}]`, "FadeBy", value),
        get: () => getOption(vm, `Bus[${i}]`, "FadeBy")
      },
      Sel: { set: (value) => runOption(vm, `Bus[${i}]`, "Sel", value), get: () => getOption(vm, `Bus[${i}]`, "Sel") },
      ReturnReverb: {
        set: (value) => runOption(vm, `Bus[${i}]`, "ReturnReverb", value),
        get: () => getOption(vm, `Bus[${i}]`, "ReturnReverb")
      },
      ReturnDelay: {
        set: (value) => runOption(vm, `Bus[${i}]`, "ReturnDelay", value),
        get: () => getOption(vm, `Bus[${i}]`, "ReturnDelay")
      },
      ReturnFx1: {
        set: (value) => runOption(vm, `Bus[${i}]`, "ReturnFx1", value),
        get: () => getOption(vm, `Bus[${i}]`, "ReturnFx1")
      },
      ReturnFx2: {
        set: (value) => runOption(vm, `Bus[${i}]`, "ReturnFx2", value),
        get: () => getOption(vm, `Bus[${i}]`, "ReturnFx2")
      },
      Monitor: {
        set: (value) => runOption(vm, `Bus[${i}]`, "Monitor", value),
        get: () => getOption(vm, `Bus[${i}]`, "Monitor")
      },
      VAIO: { set: (value) => runOption(vm, `Bus[${i}]`, "VAIO", value), get: () => getOption(vm, `Bus[${i}]`, "VAIO") },
      device: {
        name: {
          set: (value) => runOption(vm, `Bus[${i}]`, "device", "name", value),
          get: () => getOption(vm, `Bus[${i}]`, "device", "name")
        },
        sr: {
          set: (value) => runOption(vm, `Bus[${i}]`, "device", "sr", value),
          get: () => getOption(vm, `Bus[${i}]`, "device", "sr")
        },
        wdm: {
          set: (value) => runOption(vm, `Bus[${i}]`, "device", "wdm", value),
          get: () => getOption(vm, `Bus[${i}]`, "device", "wdm")
        },
        ks: {
          set: (value) => runOption(vm, `Bus[${i}]`, "device", "ks", value),
          get: () => getOption(vm, `Bus[${i}]`, "device", "ks")
        },
        mme: {
          set: (value) => runOption(vm, `Bus[${i}]`, "device", "mme", value),
          get: () => getOption(vm, `Bus[${i}]`, "device", "mme")
        },
        asio: {
          set: (value) => runOption(vm, `Bus[${i}]`, "device", "asio", value),
          get: () => getOption(vm, `Bus[${i}]`, "device", "asio")
        }
      }
    }),
    Fx: {
      Reverb: {
        On: { set: (value) => runOption(vm, "Fx", "Reverb", "On", value), get: () => getOption(vm, "Fx", "Reverb", "On") },
        AB: { set: (value) => runOption(vm, "Fx", "Reverb", "AB", value), get: () => getOption(vm, "Fx", "Reverb", "AB") }
      },
      Delay: {
        On: { set: (value) => runOption(vm, "Fx", "Delay", "On", value), get: () => getOption(vm, "Fx", "Delay", "On") },
        AB: { set: (value) => runOption(vm, "Fx", "Delay", "AB", value), get: () => getOption(vm, "Fx", "Delay", "AB") }
      }
    },
    patch: {
      asio: (i) => {
        return {
          set: (value) => runOption(vm, "patch", `asio[${i}]`, value),
          get: () => getOption(vm, "patch", `asio[${i}]`)
        };
      },
      OutA2: (i) => {
        return {
          set: (value) => runOption(vm, "patch", `OutA2[${i}]`, value),
          get: () => getOption(vm, "patch", `OutA2[${i}]`)
        };
      },
      OutA3: (i) => {
        return {
          set: (value) => runOption(vm, "patch", `OutA3[${i}]`, value),
          get: () => getOption(vm, "patch", `OutA3[${i}]`)
        };
      },
      OutA4: (i) => {
        return {
          set: (value) => runOption(vm, "patch", `OutA4[${i}]`, value),
          get: () => getOption(vm, "patch", `OutA4[${i}]`)
        };
      },
      OutA5: (i) => {
        return {
          set: (value) => runOption(vm, "patch", `OutA5[${i}]`, value),
          get: () => getOption(vm, "patch", `OutA5[${i}]`)
        };
      },
      composite: (j) => {
        return {
          set: (value) => runOption(vm, "Patch", `composite[${j}]`, value),
          get: () => getOption(vm, "Patch", `composite[${j}]`)
        };
      },
      insert: (k) => {
        return {
          set: (value) => runOption(vm, "Patch", `insert[${k}]`, value),
          get: () => getOption(vm, "Patch", `insert[${k}]`)
        };
      },
      PostFaderComposite: {
        set: (value) => runOption(vm, "Patch", "PostFaderComposite", value),
        get: () => getOption(vm, "Patch", "PostFaderComposite")
      },
      PostFxInsert: {
        set: (value) => runOption(vm, "Patch", "PostFxInsert", value),
        get: () => getOption(vm, "Patch", "PostFxInsert")
      }
    },
    Option: {
      sr: { set: (value) => runOption(vm, "Option", "sr", value), get: () => getOption(vm, "Option", "sr") },
      ASIOsr: { set: (value) => runOption(vm, "Option", "ASIOsr", value), get: () => getOption(vm, "Option", "ASIOsr") },
      delay: (i) => {
        return {
          set: (value) => runOption(vm, "Option", `delay[${i}]`, value),
          get: () => getOption(vm, "Option", `delay[${i}]`)
        };
      },
      buffer: {
        mme: {
          set: (value) => runOption(vm, "Option", "buffer", "mme", value),
          get: () => getOption(vm, "Option", "buffer", "mme")
        },
        wdm: {
          set: (value) => runOption(vm, "Option", "buffer", "wdm", value),
          get: () => getOption(vm, "Option", "buffer", "wdm")
        },
        ks: {
          set: (value) => runOption(vm, "Option", "buffer", "ks", value),
          get: () => getOption(vm, "Option", "buffer", "ks")
        },
        asio: {
          set: (value) => runOption(vm, "Option", "buffer", "asio", value),
          get: () => getOption(vm, "Option", "buffer", "asio")
        }
      },
      mode: {
        exclusif: {
          set: (value) => runOption(vm, "Option", "mode", "exclusif", value),
          get: () => getOption(vm, "Option", "mode", "exclusif")
        },
        swift: {
          set: (value) => runOption(vm, "Option", "mode", "swift", value),
          get: () => getOption(vm, "Option", "mode", "swift")
        }
      },
      MonitorOnSEL: {
        set: (value) => runOption(vm, "Option", "MonitorOnSEL", value),
        get: () => getOption(vm, "Option", "MonitorOnSEL")
      },
      SliderMode: {
        set: (value) => runOption(vm, "Option", "SliderMode", value),
        get: () => getOption(vm, "Option", "SliderMode")
      }
    },
    recorder: {
      stop: { set: (value) => runOption(vm, "recorder", "stop", value), get: () => getOption(vm, "recorder", "stop") },
      play: { set: (value) => runOption(vm, "recorder", "play", value), get: () => getOption(vm, "recorder", "play") },
      replay: { set: (value) => runOption(vm, "recorder", "replay", value), get: () => getOption(vm, "recorder", "replay") },
      ff: { set: (value) => runOption(vm, "recorder", "ff", value), get: () => getOption(vm, "recorder", "ff") },
      rew: { set: (value) => runOption(vm, "recorder", "rew", value), get: () => getOption(vm, "recorder", "rew") },
      A1: { set: (value) => runOption(vm, "recorder", "A1", value), get: () => getOption(vm, "recorder", "A1") },
      A2: { set: (value) => runOption(vm, "recorder", "A2", value), get: () => getOption(vm, "recorder", "A2") },
      A3: { set: (value) => runOption(vm, "recorder", "A3", value), get: () => getOption(vm, "recorder", "A3") },
      A4: { set: (value) => runOption(vm, "recorder", "A4", value), get: () => getOption(vm, "recorder", "A4") },
      A5: { set: (value) => runOption(vm, "recorder", "A5", value), get: () => getOption(vm, "recorder", "A5") },
      B1: { set: (value) => runOption(vm, "recorder", "B1", value), get: () => getOption(vm, "recorder", "B1") },
      B2: { set: (value) => runOption(vm, "recorder", "B2", value), get: () => getOption(vm, "recorder", "B2") },
      B3: { set: (value) => runOption(vm, "recorder", "B3", value), get: () => getOption(vm, "recorder", "B3") },
      record: { set: (value) => runOption(vm, "recorder", "record", value), get: () => getOption(vm, "recorder", "record") },
      pause: { set: (value) => runOption(vm, "recorder", "pause", value), get: () => getOption(vm, "recorder", "pause") },
      goto: { set: (value) => runOption(vm, "Recorder", "goto", value), get: () => getOption(vm, "Recorder", "goto") },
      load: { set: (value) => runOption(vm, "Recorder", "load", value), get: () => getOption(vm, "Recorder", "load") },
      samplerate: {
        set: (value) => runOption(vm, "Recorder", "samplerate", value),
        get: () => getOption(vm, "Recorder", "samplerate")
      },
      ArmStrip: (i) => {
        return {
          set: (value) => runOption(vm, "Recorder", `ArmStrip(${i})`, value),
          get: () => getOption(vm, "Recorder", `ArmStrip(${i})`)
        };
      },
      ArmBus: (i) => {
        return {
          set: (value) => runOption(vm, "Recorder", `ArmBus(${i})`, value),
          get: () => getOption(vm, "Recorder", `ArmBus(${i})`)
        };
      },
      mode: {
        recbus: {
          set: (value) => runOption(vm, "Recorder", "mode", "recbus", value),
          get: () => getOption(vm, "Recorder", "mode", "recbus")
        },
        PlayOnLoad: {
          set: (value) => runOption(vm, "Recorder", "mode", "PlayOnLoad", value),
          get: () => getOption(vm, "Recorder", "mode", "PlayOnLoad")
        },
        Loop: {
          set: (value) => runOption(vm, "Recorder", "mode", "Loop", value),
          get: () => getOption(vm, "Recorder", "mode", "Loop")
        },
        MultiTrack: {
          set: (value) => runOption(vm, "Recorder", "mode", "MultiTrack", value),
          get: () => getOption(vm, "Recorder", "mode", "MultiTrack")
        }
      },
      bitResolution: {
        set: (value) => runOption(vm, "Recorder", "bitResolution", value),
        get: () => getOption(vm, "Recorder", "bitResolution")
      },
      Channel: {
        set: (value) => runOption(vm, "Recorder", "Channel", value),
        get: () => getOption(vm, "Recorder", "Channel")
      },
      kbps: { set: (value) => runOption(vm, "Recorder", "kbps", value), get: () => getOption(vm, "Recorder", "kbps") },
      FileType: {
        set: (value) => runOption(vm, "Recorder", "FileType", value),
        get: () => getOption(vm, "Recorder", "FileType")
      },
      gain: { set: (value) => runOption(vm, "Recorder", "gain", value), get: () => getOption(vm, "Recorder", "gain") }
    },
    vban: {
      Enable: { set: (value) => runOption(vm, "vban", "Enable", value), get: () => getOption(vm, "vban", "Enable") },
      instream: (i) => ({
        on: {
          set: (value) => runOption(vm, "vban", `instream[${i}]`, "on", value),
          get: () => getOption(vm, "vban", `instream[${i}]`, "on")
        },
        name: {
          set: (value) => runOption(vm, "vban", `instream[${i}]`, "name", value),
          get: () => getOption(vm, "vban", `instream[${i}]`, "name")
        },
        ip: {
          set: (value) => runOption(vm, "vban", `instream[${i}]`, "ip", value),
          get: () => getOption(vm, "vban", `instream[${i}]`, "ip")
        },
        port: {
          set: (value) => runOption(vm, "vban", `instream[${i}]`, "port", value),
          get: () => getOption(vm, "vban", `instream[${i}]`, "port")
        },
        sr: {
          set: (value) => runOption(vm, "vban", `instream[${i}]`, "sr", value),
          get: () => getOption(vm, "vban", `instream[${i}]`, "sr")
        },
        channel: {
          set: (value) => runOption(vm, "vban", `instream[${i}]`, "channel", value),
          get: () => getOption(vm, "vban", `instream[${i}]`, "channel")
        },
        bit: {
          set: (value) => runOption(vm, "vban", `instream[${i}]`, "bit", value),
          get: () => getOption(vm, "vban", `instream[${i}]`, "bit")
        },
        quality: {
          set: (value) => runOption(vm, "vban", `instream[${i}]`, "quality", value),
          get: () => getOption(vm, "vban", `instream[${i}]`, "quality")
        },
        route: {
          set: (value) => runOption(vm, "vban", `instream[${i}]`, "route", value),
          get: () => getOption(vm, "vban", `instream[${i}]`, "route")
        }
      }),
      outstream: (i) => ({
        on: {
          set: (value) => runOption(vm, "vban", `outstream[${i}]`, "on", value),
          get: () => getOption(vm, "vban", `outstream[${i}]`, "on")
        },
        name: {
          set: (value) => runOption(vm, "vban", `outstream[${i}]`, "name", value),
          get: () => getOption(vm, "vban", `outstream[${i}]`, "name")
        },
        ip: {
          set: (value) => runOption(vm, "vban", `outstream[${i}]`, "ip", value),
          get: () => getOption(vm, "vban", `outstream[${i}]`, "ip")
        },
        port: {
          set: (value) => runOption(vm, "vban", `outstream[${i}]`, "port", value),
          get: () => getOption(vm, "vban", `outstream[${i}]`, "port")
        },
        sr: {
          set: (value) => runOption(vm, "vban", `outstream[${i}]`, "sr", value),
          get: () => getOption(vm, "vban", `outstream[${i}]`, "sr")
        },
        channel: {
          set: (value) => runOption(vm, "vban", `outstream[${i}]`, "channel", value),
          get: () => getOption(vm, "vban", `outstream[${i}]`, "channel")
        },
        bit: {
          set: (value) => runOption(vm, "vban", `outstream[${i}]`, "bit", value),
          get: () => getOption(vm, "vban", `outstream[${i}]`, "bit")
        },
        quality: {
          set: (value) => runOption(vm, "vban", `outstream[${i}]`, "quality", value),
          get: () => getOption(vm, "vban", `outstream[${i}]`, "quality")
        },
        route: {
          set: (value) => runOption(vm, "vban", `outstream[${i}]`, "route", value),
          get: () => getOption(vm, "vban", `outstream[${i}]`, "route")
        }
      })
    }
  };
}

// src/lib/VoicemeeterConnector.ts
var libVM;
var instance;
var Voicemeeter = class _Voicemeeter {
  /**
   * Initializes the voice meeter dll connection.
   * This call is neccessary to use the api. It returns a promise with a VoiceMeeter instance
   */
  static async init() {
    const dllPath = await DLLHandler_default.getDLLPath();
    return new Promise((resolve) => {
      if (!instance) {
        instance = new _Voicemeeter();
      }
      const lib = koffi.load(`${dllPath}/VoicemeeterRemote64.dll`);
      libVM = {
        VBVMR_Login: lib.func("long __stdcall VBVMR_Login(void)"),
        VBVMR_Logout: lib.func("long __stdcall VBVMR_Logout(void)"),
        VBVMR_RunVoicemeeter: lib.func("long __stdcall VBVMR_RunVoicemeeter(long mode)"),
        VBVMR_IsParametersDirty: lib.func("long __stdcall VBVMR_IsParametersDirty(void)"),
        VBVMR_GetLevel: lib.func("long __stdcall VBVMR_GetLevel(long type, long channel, _Out_ float* value)"),
        VBVMR_GetParameterFloat: lib.func("long __stdcall VBVMR_GetParameterFloat(const char* param, _Out_ float* value)"),
        VBVMR_GetParameterStringA: lib.func("long __stdcall VBVMR_GetParameterStringA(const char* param, _Out_ char* value)"),
        VBVMR_SetParameters: lib.func("long __stdcall VBVMR_SetParameters(const char* param)"),
        VBVMR_Output_GetDeviceNumber: lib.func("long __stdcall VBVMR_Output_GetDeviceNumber(void)"),
        VBVMR_Output_GetDeviceDescA: lib.func(
          "long __stdcall VBVMR_Output_GetDeviceDescA(long index, _Out_ long* type, _Out_ char* name, _Out_ char* hardwareId)"
        ),
        VBVMR_Input_GetDeviceNumber: lib.func("long __stdcall VBVMR_Input_GetDeviceNumber(void)"),
        VBVMR_Input_GetDeviceDescA: lib.func(
          "long __stdcall VBVMR_Input_GetDeviceDescA(long index, long* type, char* name, char* hardwareId)"
        ),
        VBVMR_GetVoicemeeterType: lib.func("long __stdcall VBVMR_GetVoicemeeterType(_Out_ long* type)"),
        VBVMR_GetVoicemeeterVersion: lib.func("long __stdcall VBVMR_GetVoicemeeterVersion(_Out_ long* version)")
      };
      instance.isInitialised = true;
      resolve(instance);
    });
  }
  isConnected = false;
  isInitialised = false;
  outputDevices = [];
  inputDevices = [];
  version = "";
  type;
  eventPool = [];
  stringParameters = ["Label", "FadeTo", "FadeBy", "AppGain", "AppMute", "name", "ip"];
  /**
   * Starts a connection to VoiceMeeter
   */
  connect = () => {
    if (!this.isInitialised) {
      throw new Error("Await the initialisation before connect");
    }
    if (this.isConnected) {
      return;
    }
    if (libVM.VBVMR_Login() === 0) {
      this.isConnected = true;
      this.type = this.getVoicemeeterType();
      this.version = this.getVoicemeeterVersion();
      setInterval(this.checkPropertyChange, 10);
      return;
    }
    this.isConnected = false;
    throw new Error("Connection failed");
  };
  /**
   * Getter $outputDevices
   * @return {Device[] }
   */
  get $outputDevices() {
    return this.outputDevices;
  }
  /**
   * Getter $inputDevices
   * @return {Device[] }
   */
  get $inputDevices() {
    return this.inputDevices;
  }
  /**
   * Getter $version
   * @return {string }
   */
  get $version() {
    return this.version;
  }
  /**
   * Getter $type
   * @return {VoiceMeeterTypes}
   */
  get $type() {
    return this.type;
  }
  /**
   * Terminates the connection to VoiceMeeter
   */
  disconnect = () => {
    if (!this.isConnected) {
      throw new Error("Not connected ");
    }
    try {
      if (libVM.VBVMR_Logout() === 0) {
        this.isConnected = false;
        return;
      }
      throw new Error("Disconnect failed");
    } catch {
      throw new Error("Disconnect failed");
    }
  };
  /**
   * Updates all input and ouput devices
   */
  updateDeviceList = () => {
    if (!this.isConnected) {
      throw new Error("Not connected ");
    }
    this.outputDevices = [];
    this.inputDevices = [];
    const outputDeviceNumber = libVM.VBVMR_Output_GetDeviceNumber();
    for (let i = 0; i < outputDeviceNumber; i++) {
      const hardwareIdPtr = Buffer.alloc(256);
      const namePtr = Buffer.alloc(256);
      const typePtr = [0];
      libVM.VBVMR_Output_GetDeviceDescA(i, typePtr, namePtr, hardwareIdPtr);
      this.outputDevices.push({
        name: namePtr.toString().replace(/\u0000+$/g, ""),
        hardwareId: hardwareIdPtr.toString().replace(/\u0000+$/g, ""),
        type: typePtr[0]
      });
    }
    const inputDeviceNumber = libVM.VBVMR_Input_GetDeviceNumber();
    for (let i = 0; i < inputDeviceNumber; i++) {
      const hardwareIdPtr = Buffer.alloc(256);
      const namePtr = Buffer.alloc(256);
      const typePtr = [0];
      libVM.VBVMR_Input_GetDeviceDescA(i, typePtr, namePtr, hardwareIdPtr);
      this.inputDevices.push({
        name: namePtr.toString().replace(/\u0000+$/g, ""),
        hardwareId: hardwareIdPtr.toString().replace(/\u0000+$/g, ""),
        type: typePtr[0]
      });
    }
  };
  /**
   * Returns wheter a parameter has been changed
   */
  isParametersDirty = () => {
    return libVM.VBVMR_IsParametersDirty();
  };
  parameters = vmParameters(this);
  /**
   * @param  {()=>any} fn Function which should be called if something changes
   */
  attachChangeEvent = (fn) => {
    this.eventPool.push(fn);
  };
  /**
   * @param parameterName Name of the parameter that should be get
   * @returns {any} Parameter value
   */
  getOption = (parameterName) => {
    if (!this.isConnected) {
      throw new Error("Not correct connected ");
    }
    if (this.stringParameters.some((str) => parameterName.includes(str))) {
      const strPtr = Buffer.alloc(512);
      libVM.VBVMR_GetParameterStringA(parameterName, strPtr);
      return String.fromCharCode.apply(null, strPtr).split("").filter((e) => {
        return e !== "\0";
      }).join("");
    }
    const valuePtr = [0];
    libVM.VBVMR_GetParameterFloat(parameterName, valuePtr);
    return valuePtr[0];
  };
  /**
   * Sets an option.
   * @param {string} option Option to set
   */
  setOption = (option) => {
    const script = Buffer.alloc(option.length + 1);
    script.fill(0).write(option);
    libVM.VBVMR_SetParameters(script);
    return new Promise((resolve) => setTimeout(resolve, 200));
  };
  /**
   * Checks whether properties has been changed and calls all event listeners
   */
  checkPropertyChange = () => {
    if (this.isParametersDirty() === 1) {
      this.eventPool.forEach((eventListener) => {
        eventListener();
      });
    }
  };
  /**
   * Gets installed voicemeeter type.
   * Means Voicemeeter(normal,banana,potato)
   */
  getVoicemeeterType = () => {
    const typePtr = [0];
    if (libVM.VBVMR_GetVoicemeeterType(typePtr) !== 0) {
      throw new Error("running failed");
    }
    switch (typePtr[0]) {
      case 1:
        return "voicemeeter";
      case 2:
        return "voicemeeterBanana";
      case 3:
        return "voicemeeterPotato";
      default:
        throw new Error("Voicemeeter seems not to be installed");
    }
  };
  /**
   * Returns the installed voicemeeter version
   */
  getVoicemeeterVersion = () => {
    const versionPtr = [0];
    if (libVM.VBVMR_GetVoicemeeterVersion(versionPtr) !== 0) {
      throw new Error("running failed");
    }
    const version = `${(versionPtr[0] & 4278190080) >> 24}.${(versionPtr[0] & 16711680) >> 16}.${(versionPtr[0] & 65280) >> 8}.${versionPtr[0] & 255}`;
    return version;
  };
  /**
   * Gets realtime audio level see the VoicemeeterRemote API: [VoicemeeterRemote.h GetLevel](https://github.com/mirror/equalizerapo/blob/7aece1b788fce5aa11873f3842a0d01f7c78454b/VoicemeeterClient/VoicemeeterRemote.h#L284),
   * for more details about the parameters
   * @param {0|1|2|3} type 0 = pre fader input levels. 1 = post fader input levels. 2= post Mute input levels. 3= output levels
   * @param channel audio channel zero based index
   * @returns {float} Current audio level
   */
  getLevel = (type, channel) => {
    const levelPtr = [0];
    libVM.VBVMR_GetLevel(type, channel, levelPtr);
    return levelPtr[0];
  };
};

// src/types/VoicemeeterTypes.ts
var VoicemeeterTypes_exports = {};
export {
  Voicemeeter,
  VoicemeeterTypes_exports as types
};
//# sourceMappingURL=index.mjs.map