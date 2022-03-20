import React from "react";

interface IProps {
  name: string;
  selected?: boolean;
  onTagClicked?: (name: string) => void;
}

function Tag(props: IProps) {
  const { name, selected, onTagClicked } = props;
  const onClick = onTagClicked ? () => onTagClicked(name) : undefined;

  let tagClasses = [
    "inline-block",
    "rounded-full",
    "px-2",
    "text-sm",
    "font-semibold",
    "text-gray-700",
    "mr-2",
    "mb-2",
  ];

  if (onTagClicked) {
    tagClasses.push("cursor-pointer");
  }

  if (selected) {
    tagClasses.push("bg-blue-300");
  } else {
    tagClasses.push("bg-gray-200");
  }

  return (
    <span key={name} onClick={onClick} className={tagClasses.join(" ")}>
      #{name}
    </span>
  );
}

export default Tag;
