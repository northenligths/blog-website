import React from "react";

const Search = () => {
  return (
    <>
      <div className="search flex py-20 items-center gap-2 px-2 md:justify-center ">
        <input
          type="search"
          className="py-2 bg-slate-50 border shadow-lg rounded-lg max-w-[240px] px-2 md:px-[500px]"
          placeholder="Search..."
        />
        <button className="bg-blue-700 rounded-lg py-3 px-7 text-white font-bold shadow-sm">
          Search
        </button>
      </div>
    </>
  );
};

export default Search;
