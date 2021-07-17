import React,{FC, useState} from 'react'
import './App.css';
interface CalculatorProps { 
    currentVal:number,
    prevCalc?:number,
}
export const Calculator :FC =() => {
    const [props] = useState<CalculatorProps>({currentVal: 0,prevCalc:10});

    return (
        <div className="calculator">
            <CalcScreen currentVal={props.currentVal} prevCalc={props.prevCalc} />
            <button className="cal_button action" id="add">+</button>
            <button className="cal_button action" id="sub">-</button>
            <button className="cal_button action" id="mul">x</button>
            <button className="cal_button action" id="dev">%</button>
            <button className="cal_button action" id="eq">=</button>
            <button className="cal_button text">1</button>
            <button className="cal_button text">2</button>
            <button className="cal_button text">3</button>
            <button className="cal_button text">4</button>
            <button className="cal_button text">5</button>
            <button className="cal_button text">6</button>
            <button className="cal_button text">7</button>
            <button className="cal_button text">8</button>
            <button className="cal_button text">9</button>
            <button className="cal_button text" id="dot">.</button>
        </div>
    )
}

const CalcScreen : FC<CalculatorProps> = ({currentVal,prevCalc}:CalculatorProps)=>{
    return (
     <div id="screen">
        <div className="screen_content">{currentVal}</div> <div className="screen_content prev">{prevCalc}</div>
     </div>
    );
}