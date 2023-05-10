import {FC} from 'react';
import useSearch from "../../hooks/useSearch";
import searchStyle from "./Search.module.scss";

interface ISearchProps {
    label: string;
    placeholder?: string;
}

const Search: FC<ISearchProps> = ({label, placeholder, ...props}) => {

    const {search, setSearch} = useSearch();

    return (
        <label htmlFor="search" className="flex flex-col w-4/6 md:w-3/6 mx-auto md:mx-0" {...props}>
            <small className="ml-1 mb-1">{label}</small>
            <input
                type="search" id="search"
                className={searchStyle.search}
                value={search} onChange={e => setSearch(e.target.value)} placeholder={placeholder}/>
        </label>
    );
};

export default Search;
