import React, {Component} from 'react'
import { Card, CardSection, Button } from './common'
import { Text, TextInput } from 'react-native'
class LoginForm extends Component {
  state = { text: '' }
  render () {
    return (
      <Card>
        <Text>{JSON.stringify(this.state)}</Text>
        <CardSection>
          <TextInput
            value={this.state.text}
            onChangeText={text => { this.setState({text}) }}
            style={{ height: 40, width: 350 }}
          />
        </CardSection>
        <CardSection />
        <CardSection>
          <Button>
            Login!
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm
