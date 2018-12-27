import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { Header } from './components/common'
class App extends Component {
  render () {
    return (
      <View>
        <Header title="Auth App" ></Header>
        <Text>OLA MUNDO!</Text>
      </View>
    )
  }
}

export default App