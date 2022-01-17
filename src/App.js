import React, { useState } from "react";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";
import Translate from "./Components/Translate";
import Route from "./Components/Route";
import Header from "./Components/Header";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

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
      <Header />
      <Route path={"/"}>
        <Accordion items={items} />
      </Route>
      <Route path={"/list"}>
        <Dropdown
          label="Select a name"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path={"/search"}>
        <Search />
      </Route>
      <Route path={"/translate"}>
        <Translate />
      </Route>
    </div>
  );
};

export default App;
