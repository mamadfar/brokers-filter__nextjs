import {FC} from "react";
import {useDispatch, useSelector} from "../hooks/storeHooks";
import {dataSourceHandlerReducer} from "../store/brokerDataSlice";
import {REQUEST_SOURCE_TYPE} from "../types/common.type";

const RequestOption:FC<{dispatch: any, requestSource: REQUEST_SOURCE_TYPE | undefined, name: REQUEST_SOURCE_TYPE}> = ({dispatch, requestSource, name}) => (
    <div>
        <input type="radio" id={name} name="req_src" className="peer hidden" value={requestSource}
               onChange={() => dispatch(dataSourceHandlerReducer(name))}
               checked={requestSource === name}/>
        <label htmlFor={name}
               className="block w-14 cursor-pointer select-none rounded-xl p-1 md:p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white text-xs md:text-base capitalize">{name}</label>
    </div>
)

const RequestSource = () => {

    const requestSource = useSelector(state => state.brokerData.requestSource);
    const dispatch = useDispatch();

    return (
        <div className="absolute inset-x-0 top-0 md:right-4 md:inset-x-auto md:top-7">
            <div
                className="flex justify-center w-full [&>div>input:not(:checked)~label]:shadow-lg [&>div>input:not(:checked):hover~label]:scale-110 transition">
                <RequestOption dispatch={dispatch} requestSource={requestSource} name="local"/>
                <RequestOption dispatch={dispatch} requestSource={requestSource} name="api"/>
            </div>
        </div>
    );
};

export default RequestSource;
