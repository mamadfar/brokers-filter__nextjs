import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {COLLECTED_DATA_TYPE, IBrokersInitialState} from "../types/store/brokerDataSlice.type";
import {getBrokersService, getTopBrokersService} from "../services/brokers.service";
import {exampleBrokerData} from "../data/brokers";
import {TOP_BROKERS_ENUM} from "../types/broker.type";
import {REQUEST_SOURCE_TYPE} from "../types/common.type";

//* Initial states
const initialState: IBrokersInitialState = {
    brokers: [],
    requestSource: (typeof window !== "undefined" && localStorage.getItem("req_src") as REQUEST_SOURCE_TYPE) || undefined,
    isLoading: false,
    topBrokers: [],
    collectedData: [],
}

//? Get all brokers with API
export const getBrokersAsync = createAsyncThunk(
    "Get/BROKERS",
    async (filter: (string | undefined), {rejectWithValue}: any) => {
        try {
            const {data} = await getBrokersService(filter);
            return {
                data
            }
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);

//? Get top 5 brokers with API
export const getTopBrokersAsync = createAsyncThunk(
    "Get/TOP_BROKERS",
    async (brokerType: "stock" | "forex" = "stock", {rejectWithValue}: any) => {
        try {
            const {data} = await getTopBrokersService(brokerType);
            return {
                data
            }
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);

export const brokerDataSlice = createSlice({
    name: "brokerData",
    initialState,
    reducers: {
        getBrokersReducer: (state) => {
            state.brokers = [...exampleBrokerData];
        },
        searchBrokersReducer: (state, action) => {
            state.brokers = [...exampleBrokerData].filter(broker => broker.name.toLowerCase().includes(action.payload));
        },
        top5BrokersReducer: (state, action: PayloadAction<TOP_BROKERS_ENUM>) => {
            state.topBrokers = [...exampleBrokerData].filter(broker => {
                return action.payload === TOP_BROKERS_ENUM.STOCK ? broker.isStock : broker.isForex
            }).sort((a, b) => {
                if (a.score > b.score) return -1;
                else return 1;
            }).slice(0, 5);
        },
        dataSourceHandlerReducer: (state, action:PayloadAction<REQUEST_SOURCE_TYPE>) => {
            localStorage.setItem("req_src", action.payload);
            state.requestSource = action.payload;
        },
        dataCollectorReducer: (state, action: PayloadAction<COLLECTED_DATA_TYPE>) => {
            state.collectedData = [...state.collectedData, action.payload];
        }
    },
    extraReducers: (builder => builder
            // .addCase(getBrokersAsync.pending, state => {
            //     state.isLoading = true;
            // })
            .addCase(getBrokersAsync.fulfilled, (state, action) => {
                // state.isLoading = false;
                state.brokers = action.payload.data;
            })
            .addCase(getBrokersAsync.rejected, state => {
                // state.isLoading = false;
                state.brokers = [];
            })
            .addCase(getTopBrokersAsync.pending, state => {
                state.isLoading = true;
            })
            .addCase(getTopBrokersAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.topBrokers = action.payload.data;
            })
            .addCase(getTopBrokersAsync.rejected, state => {
                state.isLoading = false;
                state.topBrokers = [];
            })
    )
});

export const {getBrokersReducer, searchBrokersReducer, top5BrokersReducer, dataSourceHandlerReducer, dataCollectorReducer} = brokerDataSlice.actions;

export default brokerDataSlice.reducer;
