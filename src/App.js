import React from "react";
import Accordion from "./Components/Accordion";

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

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
