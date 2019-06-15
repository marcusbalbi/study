import React from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers/index'
import LoginForm from './components/LoginForm'
import config from 'react-native-config'

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

  firebase.database().ref('/test3').set('ok com config')
  return (
    <Provider store={createStore(reducers)} >
      <View>
        <Text>TESTING REACT NATIVE!!</Text>
        <LoginForm></LoginForm>
      </View>
    </Provider>
  )
}