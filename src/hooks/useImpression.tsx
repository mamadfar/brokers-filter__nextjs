import {useEffect} from 'react';
import {useInView, IntersectionOptions} from "react-intersection-observer";
import {MeasurementId, sendEvent} from "../logic/event";
import {BROKER_SEARCH_LIST_ID} from "../types/store/store.type";
import {IBroker} from "../types/broker.type";

interface IUseImpressionProps extends IntersectionOptions{
    brokers: ReadonlyArray<IBroker>,
    measurementId: MeasurementId
}

const useImpression = ({brokers, measurementId, ...props}: IUseImpressionProps) => {

    const {ref, inView} = useInView({
        triggerOnce: true,
        ...props
    });

    useEffect(() => {
        if (brokers.length && inView) {
            sendEvent({type: "impression", brokerId: brokers[0]?.id, measurementId})
        }
    }, [inView, measurementId !== BROKER_SEARCH_LIST_ID && brokers])

    return {ref};
};

export default useImpression;
