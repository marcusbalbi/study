import React from "react";
import { BrowserRouter, Link, Route, useHistory, useParams } from "react-router-dom";

const PageOne = () => {
  const history = useHistory();
  return (
    <div>
      PAGE 1
      <button onClick={() => history.push("/page2/3")}>Go to Page 2</button>
      <br />
      <Link to="/page2/3">Go to Page 2</Link>
    </div>
  );
};

const PageTwo = () => {
  const history = useHistory();
  let { id } = useParams();
  console.log(id)
  return (
    <div>
      PAGE 2 <button onClick={() => history.push("/")}>Go to Page 1</button>
      <br />
      <Link to="/">Go to Page 1</Link>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={PageOne} />
      <Route exact path="/page2/:id" component={PageTwo} />
    </BrowserRouter>
  );
};

export default App;
