import React from "react";
import { ListItem } from "../data/index";
import Tag from "./Tag";

interface IProps {
  item: ListItem;
  onTagClick: (name: string) => void;
}

function Card(props: IProps) {
  const { item, onTagClick } = props;

  const logo = `/logo/${item.logo}`;
  return (
    <div className="h-36 w-80 px-2 rounded overflow-hidden shadow-lg">
      <div className="flex">
        <img
          className="h-20 pt-2 px-4 float-left"
          src={logo}
          alt="Company logo"
        />
        <div className="py-1 px-2">
          <div className="font-bold text-base">{item.name}</div>
          <p className="text-gray-700 text-xs h-14">{item.description}</p>
        </div>
      </div>

      <div className="pt-5 px-1 float-right">
        {item.tags.map((tag) => (
          <Tag name={tag} onTagClick={onTagClick} />
        ))}
      </div>
    </div>
  );
}

export default Card;
