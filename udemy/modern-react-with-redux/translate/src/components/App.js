import React, { useState } from "react";
import LanguageContext from "../contexts/LanguageContext";
import UserCreate from "./UserCreate";

const App = () => {
  const [language, setLanguage] = useState("english");

  return (
    <LanguageContext.Provider value={language}>
      <div className="ui container">
        <h2>
          {language === "english"
            ? "Select a Language:"
            : "Sélectionnez une langue"}
          <i className="flag us" onClick={() => setLanguage("english")} />
          <i className="flag fr" onClick={() => setLanguage("french")} />
        </h2>
        <UserCreate />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
