import { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];
// URL: https://translation.googleapis.com/language/translate/v2

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState();
  return (
    <div>
      <div className="ui form">
        <div className="field" >
          <label>Enter Text</label>
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <hr />
        <h3 className="ui header" >Output</h3>
        <Convert language={language} text={text} />
      </div>
      <Dropdown
        selected={language}
        label="Select a Language"
        onSelectedChange={setLanguage}
        options={options}
      />
    </div>
  );
};

export default Translate;
