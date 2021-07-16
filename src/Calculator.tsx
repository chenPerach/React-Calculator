import React,{FC, useState} from 'react'
interface CalculatorProps { 
    currentVal:number,
    prevCalc?:number,
}
export const Calculator :FC =() => {
    const [props,setProps] = useState<CalculatorProps>({currentVal: 0});
    return (
        <div>
            
        </div>
    )
}
