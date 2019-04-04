/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
// import the two exports from the last code snippet.
import { persistor, store } from './src/store';
// import your necessary custom components.
import LoadingView from './src/components/LoadingView'
import RootComponent from './src/components/RootComponent'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<LoadingView />} persistor={persistor}>
          <RootComponent />
        </PersistGate>
      </Provider>
    );
  }
}