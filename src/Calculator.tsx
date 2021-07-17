import React,{FC, useState} from 'react'
import { preProcessFile } from 'typescript';
import './App.css';
interface CalculatorProps { 
    currentVal:number,
    prevCalc?:number,
}
export const Calculator :FC =() => {
    const [props,setProps] = useState<CalculatorProps>({currentVal: 0});

    return (
        <div className="calculator">
            <div id="screen">{props.currentVal}</div>
            <div className="cal_button action" id="add">+</div>
            <div className="cal_button action" id="sub">-</div>
            <div className="cal_button action" id="mul">x</div>
            <div className="cal_button action" id="dev">%</div>
            <div className="cal_button action" id="eq">=</div>
        </div>
    )
}
