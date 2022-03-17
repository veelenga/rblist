import React from "react";
import Search from "./components/Search";
import listItems from "./data/index";

function App() {
  return (
    <div className="m-auto w-11/12">
      <Search items={listItems} />
    </div>
  );
}

export default App;
