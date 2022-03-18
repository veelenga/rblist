import React from "react";
import listItems from "./data/index";
import Search from "./components/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="m-auto border-t-4 border-t-red-400 grow">
        <Search items={listItems} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
