import React from "react";
// import Accordion from "./Components/Accordion";
// import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";
import { useState } from "react";

// const items = [
//   {
//     title: "What is React?",
//     content: "React is a framework",
//   },
//   {
//     title: "This is the second object",
//     content: "It is right",
//   },
//   {
//     title: "How do you escape apostrophes?",
//     content: "You cannot escape apostrophes",
//   },
// ];

const options = [
  {
    label: "My name is Peter",
    value: "peter",
  },
  {
    label: "My name is Sam",
    value: "sam",
  },
  {
    label: "My name is Dave",
    value: "dave",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
    </div>
  );
};

export default App;
