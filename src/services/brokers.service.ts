import {IBroker} from "../types/broker.type";
import API from "../config/API";
import {IResponse} from "../types/common.type";

//? Get all brokers
export const getBrokersService = (filter?: string): Promise<IResponse<ReadonlyArray<IBroker>>> => {
    return API.get(`/api/brokers${filter ? `?filter=${filter}` : ""}`);
};

//? Get top brokers
export const getTopBrokersService = (brokerType: "stock" | "forex"="stock"): Promise<IResponse<ReadonlyArray<IBroker>>> => {
    return API.get(`/api/brokers/${brokerType}`);
};
