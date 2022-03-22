import React from "react";
import Tag from "./Tag";

interface IProps {
  totalFound: number;
  onSearch: (event: any) => void;
  allTags: Set<string>;
  selectedTags: Set<string>;
  onTagClicked: (name: string) => void;
}

function SearchForm(props: IProps) {
  const { onSearch, totalFound, allTags, selectedTags, onTagClicked } = props;

  return (
    <form className="mb-8 mt-1 w-sm bg-white sticky top-0 shadow">
      <div className="w-60 m-auto items-center border-b border-rose-400 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 ml-6 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Search for a company"
          aria-label="Search"
          onChange={onSearch}
        />
      </div>
      <div className="text-xs p-2 text-gray-700 text-center">
        {allTags.size > 0 && (
          <div className="w-full md:w-3/4 m-auto">
            {Array.from(allTags)
              .sort()
              .map((tag: string) => (
                <Tag
                  key={tag}
                  name={tag}
                  selected={selectedTags.has(tag)}
                  onTagClicked={onTagClicked}
                />
              ))}
          </div>
        )}
        <span className="italic">Total found: {totalFound}</span>
      </div>
    </form>
  );
}

export default SearchForm;
