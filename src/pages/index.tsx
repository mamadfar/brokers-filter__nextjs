import {Provider} from "react-redux";
import {useMemo} from "react";
import {makeStore} from "../redux/store";

export default function Home() {
    const store = useMemo(() => {
        return makeStore()
    }, []);

    return (
        <Provider store={store}>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
        </Provider>
    )
}
