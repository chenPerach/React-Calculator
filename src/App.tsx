import React,{FC} from "react";
import "./App.css";
import { Calculator } from "./Calculator";

const App : FC = ()=> {
  return <div className="center">
    <Calculator />
  </div>;
}

export default App;
