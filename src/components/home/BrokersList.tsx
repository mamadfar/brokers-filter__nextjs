import React, {FC} from 'react';
import {BrokerLogo, BrokerName} from "../index";
import Link from "next/link";
import {sendEvent} from "../../logic/event";
import {BROKER_SEARCH_LIST_ID} from "../../types/store/store.type";
import {FiArrowRight} from "react-icons/fi";
import {IBroker} from "../../types/broker.type";

const BrokersList: FC<Omit<IBroker, "isStock" | "isForex" | "score">> = ({id, name, logoUrl, linkUrl}) => {
    return (
        <div className="flex items-center w-full max-w-[500px] mx-auto md:mx-0 p-4 bg-white/90 rounded-lg">
            <BrokerLogo className="mr-4 shadow-md" radius="lg" width={50} height={50}
                        name={name}
                        logoUrl={logoUrl}/>
            <BrokerName className="text-md font-bold" name={name}/>
            <div className="ml-auto flex-1">
                <Link role="button" href={linkUrl} target="_blank" onClick={() => sendEvent({
                    type: "click",
                    brokerId: id,
                    measurementId: BROKER_SEARCH_LIST_ID
                })}
                      className="flex items-center justify-center bg-blue-700 text-white w-full max-w-[150px] ml-auto py-1 rounded-lg capitalize whitespace-nowrap">Visit
                    Broker <FiArrowRight className="ml-2"/></Link>
            </div>
        </div>
    );
};

export default BrokersList;
