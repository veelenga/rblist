import React from "react";
import { ListItem } from "../data/index";
import Tag from "./Tag";

interface IProps {
  item: ListItem;
}

function Card(props: IProps) {
  const { item } = props;

  const logo = `/logo/${item.logo}`;
  return (
    <div className="h-36 w-80 px-2 rounded overflow-hidden shadow-lg">
      <div className="flex">
        <img
          className="w-28 h-full pt-2 px-4 float-left"
          src={logo}
          alt="Company logo"
        />
        <div className="py-1 px-2 h-28">
          <div className="font-bold text-base">{item.name}</div>
          <p className="text-gray-700 text-xs h-14">{item.description}</p>
        </div>
      </div>

      {item.tags.length > 0 &&
        <div className="px-1 float-right">
          {item.tags.map((tag) => (
            <Tag key={`${item.name}-${tag}`} name={tag} />
          ))}
        </div>
      }
    </div>
  );
}

export default Card;
