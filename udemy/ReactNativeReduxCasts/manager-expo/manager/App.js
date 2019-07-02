import React, { useEffect } from 'react'
import firebase from 'firebase'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './src/reducers/index'
// import config from 'react-native-config'
import config from './.expo/firebase.json'
import thunk from 'redux-thunk';
import RouterComponent from './src/RouterComponent'

const store = createStore(reducers, applyMiddleware(thunk))

export default () => {
  var firebaseConfig = {
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    databaseURL: config.databaseURL,
    projectId: config.projectId,
    storageBucket: config.storageBucket,
    messagingSenderId: config.messagingSenderId,
    appId: config.appId
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  return (
    <Provider store={store} >
      <RouterComponent />
    </Provider>
  )
}