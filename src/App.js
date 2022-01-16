import React from "react";
// import Accordion from "./Components/Accordion";
// import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";
import { useState } from "react";
import Translate from "./Components/Translate";

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
  return (
    <div>
      <Translate />
    </div>
  );
};

export default App;
