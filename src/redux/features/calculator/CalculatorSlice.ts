import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export interface CalculatorState {
  prevValue?: string;
  currentValue: string;
  action?: string;
}

const initialState: CalculatorState = {
  currentValue: "",
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addSymbol: (state, action: PayloadAction<string>) => {
      if (action.payload === ".") {
        state.currentValue += action.payload;
        return;
      }
      state.currentValue += action.payload;
      state.currentValue = Number.parseFloat(state.currentValue).toString();
    },
    addAction: (state, action: PayloadAction<string>) => {
      if (state.prevValue && state.currentValue) {
        state.prevValue = preformAction(
          action.payload,
          Number(state.prevValue),
          Number(state.currentValue)
        ).toFixed(4);
        state.currentValue = "";
        state.action = "";
      } else {
        state.prevValue = state.currentValue;
        state.action = action.payload;
        state.currentValue = "";
      }
    },
    eq: (state) => {
      if (state.prevValue && state.currentValue && state.action) {
        state.prevValue = state.prevValue = preformAction(
          state.action,
          Number(state.prevValue),
          Number(state.currentValue)
        ).toFixed(4);
        state.action = "";
        state.currentValue = "";
      }
    },
  },
});

function preformAction(action: string, val1: number, val2: number) {
  var rtv = 0;
  switch (action) {
    case "*":
      rtv = val1 * val2;
      break;
    case "/":
      rtv = val1 / val2;
      break;
    case "+":
      rtv = val1 + val2;
      break;
    case "-":
      rtv = val1 - val2;
      break;
    default:
      break;
  }
  return rtv;
}
export const { addAction, addSymbol, eq } = calculatorSlice.actions;
