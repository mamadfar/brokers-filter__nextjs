import React from 'react';
import RequestSource from "../RequestSource";

const Header = () => {
    return (
        <header className="relative grid grid-cols-1 place-content-center h-24 text-center">
            <RequestSource/>
            <h1 className="text-xl font-bold">Find the right broker and invest on your own</h1>
        </header>
    );
};

export default Header;
