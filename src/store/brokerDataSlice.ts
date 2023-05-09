import {createSlice} from "@reduxjs/toolkit";

type BrokerDataSlice = {
}

const initialState: BrokerDataSlice = {
}

export const brokerDataSlice = createSlice({
    name: "brokerData",
    initialState,
    reducers: {},
});

export const {} = brokerDataSlice.actions;

export default brokerDataSlice.reducer;
