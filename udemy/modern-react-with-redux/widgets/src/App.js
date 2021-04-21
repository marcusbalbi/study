import React, { useState } from "react";
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
  const [selected, setSelected] = useState(options[0]);
  return (
    <>
      <Dropdown 
        options={options}
        onSelectedChange={(item) => { setSelected(item) }}
        selected={selected} />
      {/* <Accordion /> */}
    </>
  );
};

export default App;
