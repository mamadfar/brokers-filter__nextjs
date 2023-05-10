import {useEffect} from 'react';
import {useDispatch, useSelector} from "./storeHooks";
import {dataSourceHandlerReducer} from "../store/brokerDataSlice";

const useBrokers = () => {

    const {brokers} = useSelector(state => state.brokerData);
    const dispatch = useDispatch();

    useEffect(() => {
        if (typeof window !== "undefined" && !localStorage.getItem("req_src")) {
            dispatch(dataSourceHandlerReducer("local"));
        }
    }, []);

    return {brokers};
};

export default useBrokers;
