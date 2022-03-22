import React from "react";
import Card from "./Card";
import { ListItem } from "../data/index";
import InfiniteScroll from "react-infinite-scroll-component";

interface IProps {
  items: Array<ListItem>;
  onLoadMore: () => void;
}

function SearchList(props: IProps) {
  const { items, onLoadMore } = props;

  return (
    <InfiniteScroll
      className="flex flex-wrap m-auto justify-center"
      loader={""}
      hasMore={true}
      dataLength={items.length}
      next={onLoadMore}
    >
      {items.map((item) => (
        <Card key={item.name} item={item} />
      ))}
    </InfiniteScroll>
  );
}

export default SearchList;
