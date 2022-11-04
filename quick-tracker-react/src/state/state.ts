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
  },
};

export const state = proxy<TState>(
  (JSON.parse(typeof localStorage !== "undefined" && localStorage.getItem(STATE_STORAGE_KEY)) as TState) || initialState
);

subscribe(state, () => {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(STATE_STORAGE_KEY, JSON.stringify(state));
  }
});

declare module "valtio" {
  function useSnapshot<T extends object>(p: T): T;
}
