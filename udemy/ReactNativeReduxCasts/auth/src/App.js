import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { Header } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount () {
  
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