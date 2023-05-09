import {BROKER_SEARCH_LIST_ID, TOP_5_FOREX_TAB_LIST_ID, TOP_5_STOCK_TAB_LIST_ID} from "../types/store/store.type";

export type MeasurementId =
    | typeof BROKER_SEARCH_LIST_ID
    | typeof TOP_5_STOCK_TAB_LIST_ID
    | typeof TOP_5_FOREX_TAB_LIST_ID

export const sendEvent = (arg: {
    type: "click" | "impression",
    brokerId: number,
    measurementId: MeasurementId
}) => {
    console.log("Event sent: ", arg)
}
