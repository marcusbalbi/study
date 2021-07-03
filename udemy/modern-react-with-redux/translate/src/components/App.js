import React, { useState } from "react";
import UserCreate from "./UserCreate";

const App = () => {
  const [language, setLanguage] = useState("english");

  return (
    <div className="ui container">
      <h2>
        Select a Language:
        <i className="flag us" onClick={() => setLanguage("english")} />
        <i className="flag fr" onClick={() => setLanguage("french")} />
      </h2>
      <UserCreate />
    </div>
  );
};

export default App;
