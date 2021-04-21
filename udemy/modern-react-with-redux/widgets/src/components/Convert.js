import axios from "axios";
import { useEffect, useState } from "react";
const KEY = process.env.REACT_APP_GOOGLE_API_KEY;

// URL: https://translation.googleapis.com/language/translate/v2
const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState();
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setDebouncedText(text);
    }, 500)
    return () => {
      clearTimeout(timerID);
    }
  }, [text])

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        `https://translation.googleapis.com/language/translate/v2`,
        {},
        {
          params: {
            key: KEY,
            target: language.value,
            q: debouncedText,
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    if (!language || !debouncedText) {
      return;
    }
    doTranslation();
  }, [language, debouncedText]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
