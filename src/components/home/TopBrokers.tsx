import useTopBrokers from "../../hooks/useTopBrokers";
import {TOP_5_FOREX_TAB_LIST_ID, TOP_5_STOCK_TAB_LIST_ID} from "../../types/store/store.type";
import TopBrokersList from "./TopBrokersList";
import useImpression from "../../hooks/useImpression";

const TopBrokers = () => {

    const {topBrokersType, getTopBrokers, topBrokers, isLoading} = useTopBrokers();
    const {ref} = useImpression({brokers: topBrokers, measurementId: topBrokersType === "stock" ? TOP_5_STOCK_TAB_LIST_ID : TOP_5_FOREX_TAB_LIST_ID});

    return (
        <section
            className="bg-white/90 w-full max-w-[400px] h-fit p-5 shadow-xl rounded-lg mx-auto md:mx-0 md:ml-auto mt-6 mb-12 md:mb-0">
            <h2 className="text-2xl font-bold mb-6">Top 5 Brokers</h2>
            <div className="flex mb-6">
                <div
                    className="flex-1">
                    <button type="button" onClick={() => getTopBrokers("stock")}
                            className={`w-full text-center rounded-t-md font-bold py-2 transition delay-75 ${topBrokersType === "stock" ? "bg-gray-100 border-b-2 border-b-blue-700 text-blue-700" : " border-b-2 border-b-gray-200"}`}>Stock
                    </button>
                </div>
                <div className="flex-1">
                    <button type="button" onClick={() => getTopBrokers("forex")}
                            className={`w-full text-center rounded-t-md font-bold py-2 transition delay-75 ${topBrokersType === "forex" ? "bg-gray-100 border-b-2 border-b-blue-700 text-blue-700" : " border-b-2 border-b-gray-200"}`}>Forex
                    </button>
                </div>
            </div>
            {!isLoading ? (
                <div className="space-y-3" ref={ref}>
                    {topBrokers.map(({id, name, logoUrl, linkUrl, score, isForex, isStock}, index) => (
                        <TopBrokersList key={id} index={index} id={id} name={name} logoUrl={logoUrl} linkUrl={linkUrl}
                                        score={score} isStock={isStock} isForex={isForex}/>
                    ))}
                </div>
            ) : (
                <div className="space-y-3">
                    {Array(3).fill(null).map((_, index) => (
                        <div key={index} className="animate-pulse flex items-center space-x-4 border-b pb-3">
                            <div className="rounded-md bg-slate-300 h-8 w-8"></div>
                            <div className="flex-1">
                                <div className="h-2 bg-slate-300 rounded"></div>
                            </div>
                            <div className="flex-[0.1]">
                                <div className="h-2 bg-slate-300 rounded"></div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default TopBrokers;
