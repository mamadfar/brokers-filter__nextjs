import React, {FC} from 'react';
import {IBroker} from "../../types/broker.type";

interface IBrokerNameProps extends Pick<IBroker, "name">{
    className?: string;
}

const BrokerName:FC<IBrokerNameProps> = ({className, name}) => {
    return (
        <div className="flex-1">
            <span className={className}>{name}</span>
        </div>
    );
};

export default BrokerName;
