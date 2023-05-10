import React, {useCallback, useEffect, useState} from 'react';
import {TOP_BROKERS_ENUM, TOP_BROKERS_TYPE} from "../types/broker.type";
import {useDispatch, useSelector} from "./storeHooks";
import debounce from "../utils/debounce.util";
import {getTopBrokersAsync, top5BrokersReducer} from "../store/brokerDataSlice";

const UseTopBrokers = () => {

    //* States
    const [topBrokersType, setTopBrokersType] = useState<TOP_BROKERS_TYPE>("stock");

    //* Hooks
    const {requestSource, isLoading, topBrokers} = useSelector(state => state.brokerData);
    const dispatch = useDispatch();

    //? Get top 5 brokers
    const getTopBrokers = useCallback((brokerType: TOP_BROKERS_TYPE) => {
        setTopBrokersType(brokerType);
        if (requestSource === "api") {
            debounce(() => dispatch(getTopBrokersAsync(brokerType)), 800); //! Async API
        } else {
            debounce(() => dispatch(top5BrokersReducer(brokerType === "stock" ? TOP_BROKERS_ENUM.STOCK : TOP_BROKERS_ENUM.FOREX)), 800); //! Local data
        }
    }, [dispatch, requestSource])

    useEffect(() => {
        let debounceFn: ReturnType<typeof setTimeout>;
        if (requestSource === "api") {
            debounceFn = debounce(() => dispatch(getTopBrokersAsync()), 800); //! Async API
        } else {
            debounceFn = debounce(() => dispatch(top5BrokersReducer(TOP_BROKERS_ENUM.STOCK)), 800); //! Local data
        }
        return () => clearTimeout(debounceFn);
    }, [dispatch])

    return {topBrokersType, getTopBrokers, isLoading, topBrokers};
};

export default UseTopBrokers;
