import brokerDataSlice from "./brokerDataSlice";
import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";

type AppThunkExtra = {}

const reducer = {
    brokerData: brokerDataSlice,
}
export const store = configureStore({
    reducer,
    devTools: {
        name: "BrokerChooser Homework",
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(),
});

export type AppStore = typeof store;

export type AppState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];

export type AppAsyncThunkConfig = {
    state: AppState
    dispatch: AppDispatch
    extra: AppThunkExtra
}

export const useAppDispatch = () => {
    return useDispatch<AppDispatch>()
}
