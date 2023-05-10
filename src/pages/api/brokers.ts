import {NextApiRequest, NextApiResponse} from "next";
import {exampleBrokerData} from "../../data/brokers";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const {filter} = req.query;
    const filteredBrokers = [...exampleBrokerData].filter(broker => broker.name.toLowerCase().includes(String(filter)))
    res.status(200).json(filter ? filteredBrokers : exampleBrokerData);
};
