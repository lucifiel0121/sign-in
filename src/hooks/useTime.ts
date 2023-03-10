import { useReducer } from "react";
enum Time {
  morning = "上午",
  afternoon = "中午",
  evening = "晚上",
  invalid = "無效打卡",
}

const initialState = {
  sign: {
    morning: false,
    afternoon: false,
    evening: false,
  },
  time: new Date(""),
  display: { key: "morning", value: Time.morning },
};

export enum TimeKey {
  "morning",
  "afternoon",
  "evening",
  "invalid",
}

export type State =
  | {
      sign: {
        morning: boolean;
        afternoon: boolean;
        evening: boolean;
      };
      time: Date;
      display: {
        key: TimeKey;
        value: Time;
      };
    }
  | typeof initialState;

type Action =
  | { type: "morning"; time: Date; signState: boolean }
  | { type: "afternoon"; time: Date; signState: boolean }
  | { type: "evening"; time: Date; signState: boolean }
  | { type: "invalid"; time: Date; signState: boolean };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "morning":
      return {
        sign: { ...state.sign, morning: action.signState },
        time: action.time,
        display: { key: "morning", value: Time.morning },
      };
    case "afternoon":
      return {
        sign: { ...state.sign, afternoon: action.signState },
        time: action.time,
        display: { key: "afternoon", value: Time.afternoon },
      };
    case "evening":
      return {
        sign: { ...state.sign, evening: action.signState },
        time: action.time,
        display: { key: "evening", value: Time.evening },
      };
    case "invalid":
      return {
        sign: { ...state.sign },
        time: action.time,
        display: { key: "invalid", value: Time.invalid },
      };

    default:
      return { ...state };
  }
};

export const useTime = () => useReducer(reducer, initialState);
