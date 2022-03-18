import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="relative text-center px-1 py-1 bg-black text-neutral-100">
      <a href="/" className="py-4 align-center inline-block">
        <img src="/logo.svg" alt="logo" className="h-16 inline-block" />
        <h1 className="gradient-title px-4 text-4xl font-bold inline-block align-middle">
          Russia Block List
        </h1>
      </a>
      <h2 className="pb-4 text-xl">
        List of companies who suspend their business in Russia.
        <br /> Do not support the agressor{" "}
        <span className="gradient-ua">#StandWithUkraine</span>
      </h2>
    </div>
  );
}

export default Header;
