import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="relative text-center px-1 py-1 bg-black text-neutral-100">
      <h1 className="py-4 text-4xl font-bold text-red-500/80">
        Russia Block List
      </h1>
      <h2 className="pb-4 text-xl">
        List of companies who suspend their business in Russia.
        <br /> Do not support the agressor{" "}
        <span className="gradient-ua">#StandWithUkraine</span>
      </h2>
    </div>
  );
}

export default Header;
