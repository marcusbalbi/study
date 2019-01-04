import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { Header, Button } from './components/common'
import LoginForm from './components/LoginForm'
import Login from './models/Login';

class App extends Component {
  state ={
    loggedIn: false
  }
  componentDidMount () {
    Login.onLoginStateChange((user) => {
      this.setState({ loggedIn: user !== null })
    })
  }
  renderContent () {
    if (this.state.loggedIn) {
      return <Button onPress={this.logout.bind(this)} >Logout!</Button>
    }
    return <LoginForm />
  }
  render () {
    return (
      <View>
        <Header title="Auth App" />
        {this.renderContent()}
      </View>
    )
  }
  logout() {
    Login.logout()
  }
}

export default App