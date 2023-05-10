import useBrokers from "../../hooks/useBrokers";
import {Search} from "../index";
import {BROKER_SEARCH_LIST_ID} from "../../types/store/store.type";
import BrokersList from "./BrokersList";
import useImpression from "../../hooks/useImpression";

const Brokers = () => {

    const {brokers} = useBrokers();
    const {ref} = useImpression({brokers, measurementId: BROKER_SEARCH_LIST_ID});

    return (
        <section className="order-last justify-center md:order-first">
            <Search label="Filter by name" placeholder="Type Broker Name"/>
            {brokers.length ? (
                <div className="space-y-3" ref={ref}>
                    {brokers.map(({id, name, logoUrl, linkUrl}) => (
                        <BrokersList key={id} id={id} name={name} logoUrl={logoUrl} linkUrl={linkUrl}/>
                    ))}
                </div>
            ) : (<h3>Loading...</h3>)}
        </section>
    );
};

export default Brokers;
