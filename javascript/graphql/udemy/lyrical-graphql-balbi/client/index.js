import './style/style.css'
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import {ApolloProvider} from 'react-apollo'
import SongListComponent from './components/SongListComponent'
import App from './components/App'
import SongCreate from './components/SongCreate'
import SongDetail from './components/SongDetail'
const client = new ApolloClient({})

const Root = () => {
  return <ApolloProvider client={client}>
    <div>
      <Router history={hashHistory}>
        <Route path="/" component={App} >
          <IndexRoute component={SongListComponent} ></IndexRoute>
          <Route path="/songs/new" component={SongCreate}></Route>
          <Route path="/songs/:id" component={SongDetail}></Route>
        </Route>
      </Router>
    </div>
  </ApolloProvider>
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
