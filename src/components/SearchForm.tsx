import React from "react";
import Tag from "./Tag";
import Status, { STATUSES } from "./Status";

interface IProps {
  totalFound: number;
  onSearch: (event: any) => void;
  allTags: Set<string>;
  selectedTags: Set<string>;
  onTagClicked: (name: string) => void;
  selectedStatuses: Set<string>;
  onStatusClicked: (name: string) => void;
}

function SearchForm(props: IProps) {
  const {
    onSearch,
    totalFound,
    allTags,
    selectedTags,
    onTagClicked,
    selectedStatuses,
    onStatusClicked,
  } = props;

  return (
    <form className="mb-8 mt-1 w-sm bg-white sticky top-0 shadow z-10">
      <div className="w-60 m-auto items-center border-b border-rose-400 py-2">
        <input
          className="appearance-none w-full text-gray-700 py-1 text-center focus:outline-none"
          type="search"
          placeholder="Search for a company"
          aria-label="Search"
          onChange={onSearch}
        />
      </div>

      <div className="text-xs p-4 text-gray-700 text-center">
        <div className="mb-4 w-full md:w-3/4 m-auto">
          {STATUSES.map((status) => (
            <Status
              key={status}
              name={status}
              selected={selectedStatuses.has(status)}
              onClicked={onStatusClicked}
            />
          ))}
        </div>

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
