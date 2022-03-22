import React, { useCallback, useMemo, useState } from "react";
import SearchForm from "./SearchForm";
import SearchList from "./SearchList";
import { ListItem } from "../data/index";

interface IProps {
  items: Array<ListItem>;
}

const containsTag = (item: ListItem, tags: Set<string>) =>
  item.tags.some((tag) => tags.has(tag));

function Search(props: IProps) {
  const { items } = props;
  const [query, setQuery] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set([]));

  const allTags = useMemo(
    () =>
      items.reduce((acc, item: ListItem) => {
        item.tags.forEach((tag: string) => acc.add(tag));
        return acc;
      }, new Set<string>([])),
    [items]
  );

  const filteredItems = useMemo(() => {
    const newItems = items
      .filter((item) => item.name.toLowerCase().includes(query))
      .sort((a, b) => a.name.localeCompare(b.name));

    return selectedTags.size > 0
      ? newItems.filter((item) => containsTag(item, selectedTags))
      : newItems;
  }, [query, selectedTags, items]);

  const onSearch = useCallback(
    (event: any) => {
      setQuery(event.target.value.toLowerCase());
    },
    [setQuery]
  );

  const onTagClicked = useCallback(
    (name: string) => {
      const newTags = new Set(selectedTags);
      newTags.has(name) ? newTags.delete(name) : newTags.add(name);
      setSelectedTags(newTags);
    },
    [selectedTags, setSelectedTags]
  );

  return (
    <section className="pb-4">
      <SearchForm
        onSearch={onSearch}
        totalFound={filteredItems.length}
        allTags={allTags}
        selectedTags={selectedTags}
        onTagClicked={onTagClicked}
      />
      <SearchList items={filteredItems} />
    </section>
  );
}

export default Search;
