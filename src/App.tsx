import React from "react";
import listItems from "./data/index";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="m-auto border-t-4 border-t-red-400">
        <Search items={listItems} />
      </div>
    </div>
  );
}

export default App;
