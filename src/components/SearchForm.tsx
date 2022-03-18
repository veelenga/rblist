import React from "react";

interface IProps {
  onSearch: (event: any) => void;
}

function SearchForm(props: IProps) {
  const { onSearch } = props;

  return (
    <form className="w-60 mb-8 mt-10 w-sm text-lg m-auto">
      <div className="flex items-center border-b border-rose-400 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 ml-6 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Search for a company"
          aria-label="Search"
          onChange={onSearch}
        />
      </div>
    </form>
  );
}

export default SearchForm;
