import React, {Component} from 'react'
import { Card, CardSection, Button, Input, Spinner } from './common'
import { Text, View, Alert } from 'react-native'
import axios from 'axios'

class LoginForm extends Component {
  state = { email: 'balbimarcus@gmail.com', password: '', error: '', loading: false }

  async signIn () {
    const {email, password} = this.state
    this.setState({error: '', loading: true})
    axios.post('http://192.168.0.7:3000/login', { email, password })
      .then((pRes) => {
        console.log(pRes)
        Alert.alert('User Logged Success!'); 
        this.setState({ loading: false, error: '' }) 
      })
      .catch(async (perr) => {
        axios.post('http://192.168.0.7:3000/users', { email, password })
          .then((pRes) => { Alert.alert('User Created Success'); this.setState({ loading: false, error: '' }) })
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
