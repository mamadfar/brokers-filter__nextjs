import React, {FC} from 'react';
import Link from "next/link";
import {sendEvent} from "../../logic/event";
import {TOP_5_FOREX_TAB_LIST_ID, TOP_5_STOCK_TAB_LIST_ID} from "../../types/store/store.type";
import {BrokerLogo, BrokerName} from "../index";
import {FiChevronRight} from "react-icons/fi";
import {IBroker} from "../../types/broker.type";

interface ITopBrokersListProps extends IBroker {
    index: number;
}

const TopBrokersList: FC<ITopBrokersListProps> = ({id, name, logoUrl, linkUrl, score, isForex, isStock, index}) => {
    return (
        <div className="border-b last:border-b-0 last:pb-6">
            <Link href={linkUrl} target="_blank" onClick={() => sendEvent({
                type: "click",
                brokerId: id,
                measurementId: isStock ? TOP_5_STOCK_TAB_LIST_ID : TOP_5_FOREX_TAB_LIST_ID
            })}>
                <div className="flex items-center pb-3">
                    <b>{index + 1}.</b>
                    <BrokerLogo className="ml-4 mr-2 shadow-md" radius="sm" width={25} height={25}
                                name={name}
                                logoUrl={logoUrl}/>
                    <BrokerName className="text-sm font-bold" name={name}/>
                    <div className="flex items-center">
                        <small className="font-bold mr-2">{score}</small><FiChevronRight
                        className="text-lg font-bold"/>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default TopBrokersList;
