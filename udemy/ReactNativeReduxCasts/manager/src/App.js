import React, { useEffect } from 'react'
import firebase from 'firebase'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers/index'
import config from 'react-native-config'
import thunk from 'redux-thunk';
import RouterComponent from './RouterComponent'

const store = createStore(reducers, applyMiddleware(thunk))

export default () => {
  var firebaseConfig = {
    apiKey: config.FIREBASE_API_KEY,
    authDomain: config.FIREBASE_AUTH_DOMAIN,
    databaseURL: config.FIREBASE_DATABASE_URL,
    projectId: config.FIREBASE_PROJECT_ID,
    storageBucket: config.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: config.FIREBASE_MESSAGING_SENDER_ID,
    appId: config.FIREBASE_APP_ID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  return (
    <Provider store={store} >
      <RouterComponent />
    </Provider>
  )
}