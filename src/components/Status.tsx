import React from "react";

interface IProps {
  name: string;
  selected: boolean;
  onClicked: (name: string) => void;
}

export const STATUS_ORDER: { [key: string]: number } = {
  "Digging In": 0,
  "Buying Time": 1,
  "Scaling Back": 2,
  Suspension: 3,
  Withdrawal: 4
}

export const STATUS_COLOR: { [key: string]: string } = {
  "Digging In": "red-600",
  "Buying Time": "red-400",
  "Scaling Back": "red-200",
  Suspension: "orange-100",
  Withdrawal: "green-100",
};

export const BORDER_STATUS_COLOR: { [key: string]: string } = {
  "Digging In": "red-800",
  "Buying Time": "red-600",
  "Scaling Back": "red-400",
  Suspension: "orange-200",
  Withdrawal: "green-200",
};

export const STATUSES = Object.keys(STATUS_COLOR)

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
    "border-2"
  ];


  if (selected) {
    classes.push(`bg-${STATUS_COLOR[name]}`, `border-${BORDER_STATUS_COLOR[name]}`)
  } else {
    classes.push('bg-gray-200')
  }

  return (
    <span key={name} onClick={() => onClicked(name)} className={classes.join(" ")}>
      {name}
    </span>
  );
}

export default Status;
