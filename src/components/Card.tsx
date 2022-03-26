import React from "react";
import { ListItem } from "../data/index";
import Tag from "./Tag";
import { STATUS_COLOR } from "./Status";
import { FaExternalLinkAlt, FaTwitter, FaInstagram } from "react-icons/fa";
import LinkWithIcon from "./LinkWithIcon";

interface IProps {
  item: ListItem;
}

function Card(props: IProps) {
  const { item } = props;

  const logo = `/logo/${item.logo}`;
  const borderColor = STATUS_COLOR[item.status] || "gray-50";

  return (
    <div
      className={`h-36 w-80 px-2 m-1 rounded overflow-hidden border-2 border-${borderColor}`}
    >
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

      <div>
        <div className="px-1 mt-2 flex float-left text-neutral-500">
          <LinkWithIcon url={item.website}>
            <FaExternalLinkAlt size="12" />
          </LinkWithIcon>

          <LinkWithIcon url={item.twitter}>
            <FaTwitter size="12" />
          </LinkWithIcon>

          <LinkWithIcon url={item.instagram}>
            <FaInstagram size="12" />
          </LinkWithIcon>
        </div>

        {item.tags.length > 0 && (
          <div className="px-1 float-right">
            {item.tags.map((tag) => (
              <Tag key={`${item.name}-${tag}`} name={tag} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
