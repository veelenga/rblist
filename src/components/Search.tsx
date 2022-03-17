import React, { useCallback } from "react";
import SearchForm from "./SearchForm";
import SearchList from "./SearchList";
import { ListItem } from "../data/index";

interface IProps {
  items: Array<ListItem>;
}

function Search(props: IProps) {
  const { items } = props;

  const onSearch = useCallback((event: any) => {
    console.log("searching for:", event.target.value);
  }, []);

  return (
    <section>
      <SearchForm onSearch={onSearch} />
      <SearchList items={items} />
    </section>
  );
}

export default Search;
