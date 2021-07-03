import React, { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";
import ThemeContext from "../contexts/ThemeContext";
const Button = () => {
  const language = useContext(LanguageContext);
  const theme = useContext(ThemeContext);
  const text = language === "french" ? "Envoyer" : "Send";
  return (
    <button
      className="ui button"
      style={{ backgroundColor: theme.primaryColor }}
    >
      {text}
    </button>
  );
};

export default Button;
