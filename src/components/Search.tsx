import React, { useCallback, useMemo } from "react";

type ListItem = {
  name: string;
  description: string;
  tags: string[];
};

interface IProps {
  items: Array<ListItem>;
}

function Search(props: IProps) {
  const { items } = props;

  const onSearch = useCallback((event: any) => {
    console.log("searching for:", event.target.value);
  }, []);

  const searchForm = useMemo(() => {
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
  }, [onSearch]);

  const dataList = useMemo(() => {}, [items]);

  return (
    <section>
      {searchForm}
      {dataList}
    </section>
  );
}

export default Search;
