import React from "react";

function Footer() {
  const classes = [
    "py-1",
    "text-center",
    "border-t-4",
    "border-t-red-400",
    "bg-black",
    "text-neutral-100",
  ].join(" ");

  return (
    <div className={classes}>
      Built with{" "}
      <a className="underline" href="https://reactjs.org/">
        react
      </a>
      ,{" "}
      <a className="underline" href="https://tailwindcss.com/">
        tailwindcss
      </a>{" "}
      |{" "}
      <a className="underline" href="https://github.com/veelenga/rblist">
        Contribute
      </a>
    </div>
  );
}

export default Footer;
