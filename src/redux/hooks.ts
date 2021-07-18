import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { CalculatorDispatch, RootState } from "./store";

export const useCalculatorDispatch = () => useDispatch<CalculatorDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;