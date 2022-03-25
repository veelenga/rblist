import React from "react";
import listItems from "./data/index";
import Search from "./components/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GithubCorner from "react-github-corner";

function App() {
  return (
    <div className="flex flex-col flex-wrap min-h-screen">
      <Header />
      <Search items={listItems} />
      <Footer />
      <GithubCorner bannerColor="#fff" octoColor="#151513" href="https://github.com/veelenga/rblist" />
    </div>
  );
}

export default App;
