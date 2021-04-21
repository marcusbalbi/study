import React from "react";
// import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
// import Search from "./components/Search"
const options = [
  {
    label: "Color Red",
    value: "red",
  },
  {
    label: "Color blue",
    value: "blue",
  },
  {
    label: "Color green",
    value: "green",
  },
];
const App = () => {
  return (
    <>
      <Dropdown options={options} />
      {/* <Accordion /> */}
    </>
  );
};

export default App;
