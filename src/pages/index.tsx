import Head from "next/head";
import {Brokers, TopBrokers} from "../components";

export default function Home() {
    return (
        <>
            <Head>
                <title>BrokerChooser | Brokers</title>
            </Head>
            <div className="grid md:grid-cols-2">
                <Brokers/>
                <TopBrokers/>
            </div>
        </>
    )
}
