import React, {FC} from 'react';
import Image from "next/image";
import {IBroker} from "../../types/broker.type";

interface IBrokerLogoProps extends Pick<IBroker, "logoUrl" | "name">{
    width: number;
    height: number;
    radius: "sm" | "md" | "lg" | "xl" | "2xl"
    className?: string;
}

const BrokerLogo:FC<IBrokerLogoProps> = ({width, height, radius, className, logoUrl, name}) => {
    return (
        <div className={`relative w-fit rounded-${radius} ${className ? className : ""}`}>
            <Image src={logoUrl} alt={name} width={width} height={height}
                   className={`object-cover rounded-${radius}`}/>
        </div>
    );
};

export default BrokerLogo;
