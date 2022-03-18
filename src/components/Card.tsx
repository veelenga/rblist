import React from "react";
import { ListItem } from "../data/index";

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
          <span className="inline-block bg-gray-200 rounded-full px-2 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Card;
