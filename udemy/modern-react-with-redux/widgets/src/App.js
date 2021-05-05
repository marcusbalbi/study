import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Search from "./components/Search";
import Route from "./components/Route";
import Header from "./components/Header";

const dropDownOptions = [
  { label: "Black", value: "#0000" },
  { label: "White", value: "#FFFF" },
];

const App = () => {
  const [selected, setSelected] = useState(dropDownOptions[0]);
  return (
    <>
      <Header />
      <Route path="/">
        <Accordion />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown label="select color" selected={selected} options={dropDownOptions} onSelectedChange={setSelected}  />
      </Route>
    </>
  );
};

export default App;
