import { proxy, subscribe } from "valtio";
import { DEFAULT_FREQUENCY } from "../consts";

export const STATE_STORAGE_KEY = "tracker";

export type Frequency = 1 | 15 | 30 | 60;

export type TRange = {
  start: string;
  end: string;
};

export type TTrack = {
  id: string;
  startTime: Date;
  description: string;
  duration: Frequency;
  archived: boolean;
};
export type TState = {
  trackings: TTrack[];
  settings: TSettings;
};

export type TSettings = {
  frequency: Frequency;
  ranges: TRange[];
  alwaysOnTop: boolean
};

export const initialState: TState = {
  trackings: [],
  settings: {
    frequency: DEFAULT_FREQUENCY,
    ranges: [
      {
        start: "09:00",
        end: "18:00",
      },
    ],
    alwaysOnTop: false,
  },
};

let loadedFromDisk = false;
export const state = proxy<TState>(initialState);

subscribe(state, () => {
  if (loadedFromDisk) {
    Neutralino.filesystem.writeFile("./qts.json", JSON.stringify(state));
  }
});

declare module "valtio" {
  function useSnapshot<T extends object>(p: T): T;
}

export const loadFromDisk = async () => {
  try {
    const rawData = await Neutralino.filesystem.readFile("./qts.json");
    const data = JSON.parse(rawData);
    state.settings = data.settings ?? initialState.settings;
    state.trackings = data.trackings ?? initialState.trackings;
    loadedFromDisk = true;
  } catch (error) {
    console.error("Error while loading disk data", error);
    loadedFromDisk = true;
  }
};
