import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={StreamList} />
          <Route exact path="/streams/new" component={StreamCreate} />
          <Route exact path="/streams/delete/:id" component={StreamDelete} />
          <Route exact path="/streams/edit/:id" component={StreamEdit} />
          <Route exact path="/streams/show" component={StreamShow} />
          <Route exact path="/streams/:id" component={StreamShow} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
