import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import BookList from './containers/BookList'

const createStoreWithMiddleware = applyMiddleware()(createStore);

const Root = () => {
  return  (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BookList />
    </Provider>
  )
}

ReactDOM.render(<Root/>, document.querySelector('#root'))
