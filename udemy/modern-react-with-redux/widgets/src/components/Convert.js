import axios from "axios";
import { useEffect } from "react";
const KEY = process.env.REACT_APP_GOOGLE_API_KEY;

// URL: https://translation.googleapis.com/language/translate/v2
const Convert = ({ language, text }) => {
  useEffect(() => {
    if (!language || !text) {
      return;
    }
    axios.post(
      `https://translation.googleapis.com/language/translate/v2`,
      {},
      {
        params: {
          key: KEY,
          target: language.value,
          q: text,
        },
      }
    );
  }, [language, text]);

  return <div></div>;
};

export default Convert;
