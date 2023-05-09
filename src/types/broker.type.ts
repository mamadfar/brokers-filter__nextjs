export interface IBroker {
    id: number;
    name: string;
    logoUrl: string;
    linkUrl: string;
    score: number;
    isForex?: boolean;
    isStock?: boolean;
}
