import React,{FC, useState} from 'react'
import './App.css';
interface CalculatorProps { 
    currentVal:number,
    prevCalc?:number,
}
export const Calculator :FC =() => {
    const [props,_] = useState<CalculatorProps>({currentVal: 0,prevCalc:10});

    return (
        <div className="calculator">
            <CalcScreen currentVal={props.currentVal} prevCalc={props.prevCalc} />
            <div className="cal_button action" id="add">+</div>
            <div className="cal_button action" id="sub">-</div>
            <div className="cal_button action" id="mul">x</div>
            <div className="cal_button action" id="dev">%</div>
            <div className="cal_button action" id="eq">=</div>
            <div className="cal_button text">1</div>
            <div className="cal_button text">2</div>
            <div className="cal_button text">3</div>
            <div className="cal_button text">4</div>
            <div className="cal_button text">5</div>
            <div className="cal_button text">6</div>
            <div className="cal_button text">7</div>
            <div className="cal_button text">8</div>
            <div className="cal_button text">9</div>
            <div className="cal_button text" id="dot">.</div>
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