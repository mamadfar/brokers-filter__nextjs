import {BROKER_SEARCH_LIST_ID, TOP_5_FOREX_TAB_LIST_ID, TOP_5_STOCK_TAB_LIST_ID} from "../types/store/store.type";
import {COLLECTED_DATA_TYPE} from "../types/store/brokerDataSlice.type";

export type MeasurementId =
    | typeof BROKER_SEARCH_LIST_ID
    | typeof TOP_5_STOCK_TAB_LIST_ID
    | typeof TOP_5_FOREX_TAB_LIST_ID

export const sendEvent = (arg: COLLECTED_DATA_TYPE) => {
    console.log("Event sent: ", arg)
}
