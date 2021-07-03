import React, { useState } from "react";

const App = () => {
  const [language, setLanguage] = useState("english");

  return (
    <div className="ui container">
      <div>
        Select a Language:
        <i className="flag us" onClick={() => setLanguage("english")} />
        <i className="flag fr" onClick={() => setLanguage("french")} />
      </div>
    </div>
  );
};

export default App;
