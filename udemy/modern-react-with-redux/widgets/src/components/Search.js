import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(`https://www.mediawiki.org/w/api.php`, {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };
    const timeoutId = setTimeout(() => {
      if (term) {
        search();
      }
    }, 500)
    return () => {
      clearTimeout(timeoutId);
    }
  }, [term]);

  const renderedResults = results.map((item) => {
    return (
      <div className="item" key={item.pageid}>
        <div className="right floated content">
          <a  href={`https://en.mediawiki.org/?curid=${item.pageid}`} className="ui button">Go</a>
        </div>
        <div className="content">
          <div className="header">{item.title}</div>
        </div>
        <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
      </div>
    );
  });
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
