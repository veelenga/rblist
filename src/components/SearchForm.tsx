import React from "react";
import Tag from "./Tag";

interface IProps {
  totalFound: number;
  onSearch: (event: any) => void;
  tags: Set<string>;
  onTagClick: (name: string) => void;
}

function SearchForm(props: IProps) {
  const { onSearch, totalFound, tags, onTagClick } = props;

  return (
    <form className="mb-8 mt-1 w-sm text-lg">
      <div className="w-60 m-auto items-center border-b border-rose-400 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 ml-6 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Search for a company"
          aria-label="Search"
          onChange={onSearch}
        />
      </div>
      <div className="text-xs pt-2 text-gray-700 text-center italic">
        {tags.size > 0 && (
          <div>
            {Array.from(tags).map((tag: string) => (
              <Tag name={tag} onTagClick={onTagClick} />
            ))}
          </div>
        )}
        <span>Total found: {totalFound}</span>
      </div>
    </form>
  );
}

export default SearchForm;
