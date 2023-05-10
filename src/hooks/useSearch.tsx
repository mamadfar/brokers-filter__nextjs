import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "./storeHooks";
import debounce from "../utils/debounce.util";
import {getBrokersAsync, searchBrokersReducer} from "../store/brokerDataSlice";

const useSearch = () => {

    const [search, setSearch] = useState<string>("");

    const requestSource = useSelector(state => state.brokerData.requestSource);
    const dispatch = useDispatch();

    useEffect(() => {
        let debounceFn: ReturnType<typeof setTimeout>;
        if (requestSource === "api") {
            debounceFn = debounce(() => dispatch(getBrokersAsync(search.toLowerCase())), 800);
        } else {
            debounceFn = debounce(() => dispatch(searchBrokersReducer(search.toLowerCase())), 800);
        }
            return () => clearTimeout(debounceFn);
    }, [search])

    return {search, setSearch};
};

export default useSearch;
