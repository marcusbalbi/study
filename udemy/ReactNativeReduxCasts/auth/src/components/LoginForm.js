import React, {Component} from 'react'
import { Card, CardSection, Button, Input } from './common'
import { Text } from 'react-native'
import firebase from 'firebase'
import 'firebase/firestore'

class LoginForm extends Component {
  state = { email: '', password: '', error: '' }

  signIn () {
    const {email, password} = this.state
    this.setState({error: ''})
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((ms) => { this.setState({error: 'TESTE LOGOU'}) })
      .catch((pErr) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((ms) => { this.setState({ error: 'TESTE CRIOU' }) })
          .catch((pErr) => {
            this.setState({ error: 'Athentication failed!' })
          })
      })
  }
  render () {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@gmail.com"
            value={this.state.email}
            onChangeText={email => { this.setState({ email}) }}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Passoword"
            placeholder="password"
            value={this.state.password}
            onChangeText={password => { this.setState({ password }) }}
          />
        </CardSection>

        <Text style={Style.errorStyle} >
          {this.state.error}
        </Text>

        <CardSection>
          <Button onPress={this.signIn.bind(this)}>
            Login!
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const Style = {
  errorStyle: {
    color: 'red',
    fontSize: 18,
    alignSelf: 'center'
  }
}

export default LoginForm
