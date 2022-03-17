import React from "react";

interface IProps {
  onSearch: (event: any) => void;
}

function SearchForm(props: IProps) {
  const { onSearch } = props;

  return (
    <form className="w-full max-w-sm">
      <div className="flex items-center border-b border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 ml-4 py-1 px-2 leading-tight focus:outline-none"
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
