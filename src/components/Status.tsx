import React from "react";

interface IProps {
  name: string;
  selected: boolean;
  onClicked: (name: string) => void;
}

export const STATUS_COLOR: { [key: string]: string } = {
  "Digging In": "rgb(239 68 68)",
  "Buying Time": "rgb(252 165 165)",
  "Scaling Back": "rgb(254 226 226)",
  Suspension: "rgb(255 237 213)",
  Withdrawal: "rgb(220 252 231)",
};

export const STATUSES = Object.keys(STATUS_COLOR);

function Status(props: IProps) {
  const { name, selected, onClicked } = props;

  let classes = [
    "inline-block",
    "rounded-full",
    "px-2",
    "text-xs",
    "mr-1",
    "mb-1",
    "cursor-pointer",
    "md:text-sm",
  ];

  return (
    <span
      key={name}
      onClick={() => onClicked(name)}
      className={classes.join(" ")}
      style={{
        backgroundColor: selected ? STATUS_COLOR[name] : "rgb(229 231 235)",
      }}
    >
      {name}
    </span>
  );
}

export default Status;
