import React from "react";
import { BsSearch } from "react-icons/bs";

const Search = ({ value }) => {
  return (
    <div className="flex items-center">
      <div className="relative flex-grow">
        <input
          type="text"
          placeholder={value}
          className="w-full pr-12 py-4 pl-4 rounded-xl focus:outline-none text-gray-600"
        />
        <button className="absolute right-0 top-0 bottom-0 px-3 py-2 rounded-r-xl bg-secondary text-white">
          <BsSearch size={20} />
        </button>
      </div>
    </div>
  );
};

export default Search;
