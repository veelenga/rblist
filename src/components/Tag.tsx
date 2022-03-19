import React from "react";

interface IProps {
  name: string;
  onTagClick: (name: string) => void;
}

const tagClasses = [
  "cursor-pointer",
  "inline-block",
  "bg-gray-200",
  "rounded-full",
  "px-2",
  "text-sm",
  "font-semibold",
  "text-gray-700",
  "mr-2",
  "mb-2",
].join(" ");

function Tag(props: IProps) {
  const { name, onTagClick } = props;
  return (
    <span key={name} onClick={() => onTagClick(name)} className={tagClasses}>
      #{name}
    </span>
  );
}

export default Tag;
