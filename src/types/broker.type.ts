export interface IBroker {
    id: number;
    name: string;
    logoUrl: string;
    linkUrl: string;
    score: number;
    isForex?: boolean;
    isStock?: boolean;
}

export enum TOP_BROKERS_ENUM {
    STOCK="STOCK",
    FOREX="FOREX"
}

export type TOP_BROKERS_TYPE = "stock" | "forex";
