import { BsSearch } from 'react-icons/bs';

const Search = (props) => {
    return (
        <div className="text-gray-800 flex relative">
            <input type="text" placeholder={props.value} className="w-full focus:outline-none p-4 rounded-xl" />
            <div className="absolute bg-secondary p-5 px-8 rounded-xl flex items-center right-0">
                <BsSearch color='white' />
            </div>
        </div>
    )
}

export default Search;
