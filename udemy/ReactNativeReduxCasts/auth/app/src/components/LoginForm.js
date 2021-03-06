import React, {Component} from 'react'
import { Card, CardSection, Button, Input, Spinner } from './common'
import { Text } from 'react-native'
import Login from '../models/Login'
import User from '../models/User'

class LoginForm extends Component {
  state = { email: 'balbimarcus@gmail.com', password: '', error: '', loading: false }

  async signIn () {
    const {email, password} = this.state
    this.setState({error: '', loading: true})
    Login.login( { email, password })
      .then((pRes) => {
        this.setState({ loading: false, error: '' }) 
      })
      .catch(async (perr) => {
        User.CreateUser({ email, password })
          .then((pRes) => { this.setState({ loading: false, error: '' }) })
          .catch((pErr) => { this.setState({ error: 'Falha ao Registrar usuário! tente outro email e senha', loading: false }) })
       })
  }
  renderButton () {
    if (this.state.loading) {
      return(
        <Spinner />
      )
    } else {
      return (
        <Button onPress={this.signIn.bind(this)}>
          Login!
        </Button>
      )
    }
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
          {this.renderButton()}
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
