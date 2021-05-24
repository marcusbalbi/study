import React from "react";
import { BrowserRouter, Route, useHistory } from "react-router-dom";

const PageOne = () => {
  const history = useHistory();
  return (
    <div>
      PAGE 1{" "}
      <button onClick={() => history.push("/page2")}>Go to Page 2</button>{" "}
    </div>
  );
};

const PageTwo = () => {
  const history = useHistory();
  return (
    <div>
      PAGE 2 <button onClick={() => history.push("/")}>Go to Page 1</button>{" "}
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={PageOne} />
      <Route exact path="/page2" component={PageTwo} />
    </BrowserRouter>
  );
};

export default App;
