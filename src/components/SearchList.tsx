import React from "react";
import Card from "./Card";
import { ListItem } from "../data/index";

interface IProps {
  items: Array<ListItem>;
}

function SearchList(props: IProps) {
  const { items } = props;

  return (
    <div className="flex flex-wrap">
      {items.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
}

export default SearchList;
