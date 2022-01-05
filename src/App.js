import React from "react";
// import Accordion from "./Components/Accordion";
import Search from "./Components/Search";

const items = [
  {
    title: "What is React?",
    content: "React is a framework",
  },
  {
    title: "This is the second object",
    content: "It is right",
  },
  {
    title: "How do you escape apostrophes?",
    content: "You cannot escape apostrophes",
  },
];

const App = () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};

export default App;
