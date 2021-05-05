import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">Accordion</Link>
      <Link to="/translate" className="item">Translate</Link>
      <Link to="/list" className="item">Search</Link>
      <Link to="/dropdown" className="item">Dropdown</Link>
    </div>
  );
};

export default Header;
