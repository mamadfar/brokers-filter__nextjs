import {FC, ReactNode} from 'react';
import {Footer, Header} from "../components";

const Layout: FC<{ children: ReactNode }> = ({children}) => {
    return (
        <div className="flex flex-col bg-sky-100 min-h-screen">
            <Header/>
            <main className="w-11/12 mx-auto">{children}</main>
            <Footer/>
        </div>
    );
};

export default Layout;
