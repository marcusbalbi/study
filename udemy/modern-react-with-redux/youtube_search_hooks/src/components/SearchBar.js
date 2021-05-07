import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const search = (ev) => {
    setTerm(ev.target.value);
    onSearch(term);
  };
  return (
    <div className="search-bar">
      <input type="text" value={term} onChange={search} />
    </div>
  );
};
export default SearchBar;
