import React from 'react'
import { AppReduxProvider } from '../redux';
import { CommentBox } from './CommentBox';
import { CommentList } from './CommentList';

const App = () => {
  return (
    <AppReduxProvider>
      <div data-testid="app">
        <CommentBox />
        <CommentList />
      </div>
    </AppReduxProvider>
  );
}

export default App;
