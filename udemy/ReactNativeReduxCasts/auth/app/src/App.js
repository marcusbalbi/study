import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { Header, Button, Card, CardSection } from './components/common'
import LoginForm from './components/LoginForm'
import Login from './models/Login';

class App extends Component {
  state ={
    loggedIn: false
  }
  componentWillMount () {
    Login.onLoginStateChange((user) => {
      this.setState({ loggedIn: user !== null })
    })
  }
  renderContent () {
    if (this.state.loggedIn) {
      return (
        <Card>
          <CardSection>
            <Button onPress={this.logout.bind(this)}>
              Logout!
            </Button>
          </CardSection>
        </Card>
     )
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
    Login.logout().catch((pErr) => console.log(pErr.response))
  }
}

export default App