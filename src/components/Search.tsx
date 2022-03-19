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
  const [tags, setTags] = useState<Set<string>>(new Set([]));

  const filteredItems = useMemo(() => {
    const newItems = items.filter((item) =>
      item.name.toLowerCase().includes(query)
    );

    return tags.size > 0
      ? newItems.filter((item) => containsTag(item, tags))
      : newItems;
  }, [query, tags, items]);

  const onSearch = useCallback(
    (event: any) => {
      setQuery(event.target.value.toLowerCase());
    },
    [setQuery]
  );

  const onTagAdded = useCallback(
    (name: string) => {
      const newTags = new Set(tags);
      newTags.add(name);
      setTags(newTags);
    },
    [tags, setTags]
  );

  const onTagRemoved = useCallback(
    (name: string) => {
      const newTags = new Set(tags);
      newTags.delete(name);
      setTags(newTags);
    },
    [tags, setTags]
  );

  return (
    <section className="pb-4">
      <SearchForm
        onSearch={onSearch}
        totalFound={filteredItems.length}
        tags={tags}
        onTagClick={onTagRemoved}
      />
      <SearchList items={filteredItems} onTagClick={onTagAdded} />
    </section>
  );
}

export default Search;
