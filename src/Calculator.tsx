import React, { FC } from "react";
import "./App.css";
import {
  addAction,
  addSymbol,
  CalculatorState,
  eq,
} from "./redux/features/calculator/CalculatorSlice";
import { useAppSelector, useCalculatorDispatch } from "./redux/hooks";
import { RootState } from "./redux/store";

export const Calculator: FC = () => {
  const dispatch = useCalculatorDispatch();
  const props: CalculatorState = useAppSelector((state:RootState) => state.calculator);

  return (
    <div className="calculator">
      <CalcScreen
        currentValue={props.currentValue}
        prevValue={props.prevValue}
      />
      <button onClick={()=>dispatch(addAction("+"))} className="cal_button action" id="add">
        +
      </button>
      <button onClick={()=>dispatch(addAction("-"))} className="cal_button action" id="sub">
        -
      </button>
      <button onClick={()=>dispatch(addAction("*"))} className="cal_button action" id="mul">
        x
      </button>
      <button onClick={()=>dispatch(addAction("/"))} className="cal_button action" id="dev">
        %
      </button>
      <button onClick={()=>dispatch(eq())} className="cal_button action" id="eq">
        =
      </button>
      <button
        onClick={() => {
            console.log("here");
          dispatch(addSymbol("1"));
        }}
        className="cal_button text"
      >
        1
      </button>
      <button
        onClick={() => dispatch(addSymbol("2"))}
        className="cal_button text"
      >
        2
      </button>
      <button
        onClick={() => dispatch(addSymbol("3"))}
        className="cal_button text"
      >
        3
      </button>
      <button
        onClick={() => dispatch(addSymbol("4"))}
        className="cal_button text"
      >
        4
      </button>
      <button
        onClick={() => dispatch(addSymbol("5"))}
        className="cal_button text"
      >
        5
      </button>
      <button
        onClick={() => dispatch(addSymbol("6"))}
        className="cal_button text"
      >
        6
      </button>
      <button
        onClick={() => dispatch(addSymbol("7"))}
        className="cal_button text"
      >
        7
      </button>
      <button
        onClick={() => dispatch(addSymbol("8"))}
        className="cal_button text"
      >
        8
      </button>
      <button
        onClick={() => dispatch(addSymbol("9"))}
        className="cal_button text"
      >
        9
      </button>
      <button
        onClick={() => dispatch(addSymbol("0"))}
        className="cal_button text"
      >
        0
      </button>
      <button
        onClick={() => dispatch(addSymbol("."))}
        className="cal_button text"
      >
        .
      </button>
    </div>
  );
};

const CalcScreen: FC<CalculatorState> = ({
  currentValue,
  prevValue,
  action,
}: CalculatorState) => {
  return (
    <div id="screen">
      <div className="screen_content">{currentValue}</div>{" "}
      <div className="screen_content prev">{prevValue}</div>
    </div>
  );
};
