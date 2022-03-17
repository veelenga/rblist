import React, { useCallback, useMemo, useState } from "react";
import SearchForm from "./SearchForm";
import SearchList from "./SearchList";
import { ListItem } from "../data/index";

interface IProps {
  items: Array<ListItem>;
}

function Search(props: IProps) {
  const { items } = props;
  const [query, setQuery] = useState<string>("");

  const filteredItems = useMemo(
    () =>
      items.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      ),
    [query, items]
  );

  const onSearch = useCallback(
    (event: any) => {
      setQuery(event.target.value);
    },
    [setQuery]
  );

  return (
    <section>
      <SearchForm onSearch={onSearch} />
      <SearchList items={filteredItems} />
    </section>
  );
}

export default Search;
