import React, {Component} from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'
import 'firebase/firestore'
import { Header } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount () {
    firebase.initializeApp({
      apiKey: "AIzaSyCfJF1EHgH4jMENMvWgYbOqoe9e1Yj4gAc",
      authDomain: "auth-a7e9f.firebaseapp.com",
      databaseURL: "https://auth-a7e9f.firebaseio.com",
      projectId: "auth-a7e9f",
      storageBucket: "auth-a7e9f.appspot.com",
      messagingSenderId: "838324345376"
    })
  }
  render () {
    return (
      <View>
        <Header title="Auth App" />
        <LoginForm />
      </View>
    )
  }
}

export default App