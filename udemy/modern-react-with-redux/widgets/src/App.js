import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React ?",
    content: "React is a Frontend javascript Framework",
  },
  {
    title: "Why use React ?",
    content: "React is a Favorite JS library among Frontend Engenieers",
  },
  {
    title: "How do you use React ?",
    content: "You use React by Creating components",
  },
];

const App = () => {
  return (
    <>
      <Accordion items={items} />
    </>
  );
};

export default App;
