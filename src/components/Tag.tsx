import React from "react";

interface IProps {
  name: string;
  selected?: boolean;
  onTagClicked?: (name: string) => void;
}

function Tag(props: IProps) {
  const { name, selected, onTagClicked } = props;
  const onClick = onTagClicked ? () => onTagClicked(name) : undefined;
  const clickable = !!onClick;

  let tagClasses = [
    "inline-block",
    "rounded-full",
    "px-2",
    "text-xs",
    "mr-1",
    "mb-1",
  ];

  if (clickable) {
    tagClasses.push("cursor-pointer", "md:text-sm");
    selected || tagClasses.push("bg-gray-200");
  } else {
    tagClasses.push("text-neutral-400");
  }

  if (selected) {
    tagClasses.push("bg-blue-300");
  }

  return (
    <span key={name} onClick={onClick} className={tagClasses.join(" ")}>
      #{name}
    </span>
  );
}

export default Tag;
