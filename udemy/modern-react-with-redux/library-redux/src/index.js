import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import BookList from './containers/BookList'
import BookDetail from './containers/BookDetail'

const createStoreWithMiddleware = applyMiddleware()(createStore);

const Root = () => {
  return  (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BookList />
      <BookDetail />
    </Provider>
  )
}

ReactDOM.render(<Root/>, document.querySelector('#root'))
