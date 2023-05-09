import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>BrokerChooser | Brokers</title>
            </Head>
            <div className="grid md:grid-cols-2">
                <div>left</div>
                <div>right</div>
            </div>
        </>
    )
}
