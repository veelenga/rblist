import React from "react";
import Card from "./Card";
import { ListItem } from "../data/index";

interface IProps {
  items: Array<ListItem>;
  onTagClick: (name: string) => void;
}

function SearchList(props: IProps) {
  const { items, onTagClick } = props;

  return (
    <div className="flex flex-wrap m-auto justify-center">
      {items.map((item) => (
        <Card key={item.name} item={item} onTagClick={onTagClick} />
      ))}
    </div>
  );
}

export default SearchList;
