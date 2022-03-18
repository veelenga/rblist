import React from "react";
import listItems from "./data/index";
import Search from "./components/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col flex-wrap min-h-screen">
      <Header />
      <div className="m-auto w-full border-y-4 border-y-red-400 grow">
        <Search items={listItems} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
