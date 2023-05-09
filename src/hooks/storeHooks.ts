import {
    useSelector as _useSelector,
    useDispatch as _useDispatch,
    TypedUseSelectorHook,
} from "react-redux";
import { AppDispatch, AppState } from "../store";

export const useSelector: TypedUseSelectorHook<AppState> = _useSelector;
export const useDispatch = () => _useDispatch<AppDispatch>();
