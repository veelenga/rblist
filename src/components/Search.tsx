import React, { useCallback, useMemo, useState } from "react";
import SearchForm from "./SearchForm";
import SearchList from "./SearchList";
import { ListItem } from "../data/index";
import { STATUSES, STATUS_ORDER } from "./Status";

interface IProps {
  items: Array<ListItem>;
}

const containsTag = (item: ListItem, tags: Set<string>) =>
  item.tags.some((tag) => tags.has(tag));

const sortStatus = (item1: ListItem, item2: ListItem) => (
  STATUS_ORDER[item1.status] - STATUS_ORDER[item2.status]
)

const PER_PAGE = 40;

function Search(props: IProps) {
  const { items } = props;
  const [query, setQuery] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set([]));
  const [selectedStatuses, setSelectedStatuses] = useState<Set<string>>(new Set(STATUSES));
  const [currentPage, setCurrentPage] = useState<number>(1);

  const allTags = useMemo(
    () =>
      items.reduce((acc, item: ListItem) => {
        item.tags.forEach((tag: string) => acc.add(tag));
        return acc;
      }, new Set<string>([])),
    [items]
  );

  const filteredItems = useMemo(() => {
    let newItems = items
      .filter((item) => item.name.toLowerCase().includes(query))
      .sort(sortStatus);

    if (selectedStatuses.size > 0) {
      newItems = newItems.filter((item) => selectedStatuses.has(item.status))
    }

    return selectedTags.size > 0
      ? newItems.filter((item) => containsTag(item, selectedTags))
      : newItems;

  }, [query, selectedStatuses, selectedTags, items]);

  const paginatedItems = useMemo(
    () => filteredItems.slice(0, currentPage * PER_PAGE),
    [currentPage, filteredItems]
  );

  const onSearch = useCallback(
    (event: any) => {
      setQuery(event.target.value.toLowerCase());
    },
    [setQuery]
  );

  const onLoadMore = useCallback(
    () => setCurrentPage(currentPage + 1),
    [currentPage]
  );

  const onTagClicked = useCallback(
    (name: string) => {
      const newTags = new Set(selectedTags);
      newTags.has(name) ? newTags.delete(name) : newTags.add(name);
      setSelectedTags(newTags);
    },
    [selectedTags, setSelectedTags]
  );

  const onStatusClicked = useCallback(
    (name: string) => {
      const newStatuses = new Set(selectedStatuses);
      selectedStatuses.has(name) ? newStatuses.delete(name) : newStatuses.add(name);
      setSelectedStatuses(newStatuses);
    },
    [selectedStatuses, setSelectedStatuses]
  )

  return (
    <div className="m-auto w-full border-y-4 border-y-red-400 grow">
      <section className="pb-4">
        <SearchForm
          onSearch={onSearch}
          totalFound={filteredItems.length}
          allTags={allTags}
          selectedTags={selectedTags}
          onTagClicked={onTagClicked}
          selectedStatuses={selectedStatuses}
          onStatusClicked={onStatusClicked}
        />
        <SearchList items={paginatedItems} onLoadMore={onLoadMore} />
      </section>
    </div>
  );
}

export default Search;
