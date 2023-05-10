import {IBroker} from "../broker.type";
import {REQUEST_SOURCE_TYPE} from "../common.type";
import {MeasurementId} from "../../logic/event";

export type COLLECTED_DATA_TYPE = {type: "click" | "impression", brokerId: number, measurementId: MeasurementId}

export interface IBrokersInitialState {
    requestSource: REQUEST_SOURCE_TYPE | undefined;
    brokers: ReadonlyArray<IBroker>;
    isLoading: boolean;
    topBrokers: ReadonlyArray<IBroker>;
    // collectedData: Parameters<typeof sendEvent> | [];
    collectedData: COLLECTED_DATA_TYPE[];
}
