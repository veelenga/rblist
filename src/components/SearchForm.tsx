import React from "react";

interface IProps {
  totalFound: number;
  onSearch: (event: any) => void;
}

function SearchForm(props: IProps) {
  const { onSearch, totalFound } = props;

  return (
    <form className="w-60 mb-8 mt-1 w-sm text-lg m-auto">
      <div className="items-center border-b border-rose-400 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 ml-6 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Search for a company"
          aria-label="Search"
          onChange={onSearch}
        />
      </div>
      <p className="text-xs pt-2 text-gray-700 text-center italic">
        Total found: <span>{totalFound}</span>
      </p>
    </form>
  );
}

export default SearchForm;
