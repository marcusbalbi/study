import React from "react";

const Link = ({ to, children, ...rest }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, "", to);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a onClick={onClick} href={to} {...rest}>
      {children}
    </a>
  );
};

export default Link;
