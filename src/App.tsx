import React from "react";
import Search from "./components/Search";
import listItems from "./data/index";

function App() {
  return (
    <div className="flex justify-center items-center">
      <Search items={listItems} />
    </div>
  );
}

export default App;
