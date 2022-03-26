import React from "react";

interface IProps {
  url?: string | null;
  children: any
}

function LinkWithIcon(props: IProps) {
  let { url, children } = props

  if (!url) {
    return null
  }

  if (!url.startsWith("http")) {
    url = `https://${url}`
  }

  return (
    <a href={url} target="_blank" rel="noreferrer" className="mx-1">
      {children}
    </a>
  )
}

export default LinkWithIcon;
