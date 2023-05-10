import {NextApiRequest, NextApiResponse} from "next";
import {exampleBrokerData} from "../../../data/brokers";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const {brokerType} = <{ brokerType: "stock" | "forex" }>req.query;

    const topBrokers = [...exampleBrokerData].filter(broker => {
        return brokerType === "stock" ? broker.isStock : broker.isForex
    }).sort((a, b) => {
        if (a.score > b.score) return -1;
        else return 1;
    }).slice(0, 5);
    res.status(200).json(topBrokers);
};
