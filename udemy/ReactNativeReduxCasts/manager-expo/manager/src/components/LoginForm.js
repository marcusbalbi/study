import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { emailChange, login, passwordChange } from '../actions'
import { CardSection, Input, Button } from '../common/components';

const LoginForm = (props) => {
  const onEmailChange = (value) => {
    props.emailChange(value)
  }
  const onPasswordChange = (value) => {
    props.passwordChange(value)
  }
  const login = () => {
    const { email, password } = props.auth
    props.login({ email, password })
  }
  const renderError = () => {
    if (props.auth.error) {
      return (
        <View style={Styles.formInput.container} >
          <Text style={Styles.formInput.errorText} >{props.auth.error}</Text>
        </View>
      )
    }
  }
  const renderAction = () => {
    if (props.auth.loading) {
      return (
        <ActivityIndicator size="large" color="#0000ff" />
      )
    } else {
      return (
        <Button text="Logon" onPress={login}/>
      )
    }
  } 
  return (
    <View style={Styles.container}>
      <CardSection>
        <Input label="Email" onTextChange={onEmailChange} value={props.auth.email} />
      </CardSection>
      <CardSection>
        <Input hide label="Password" onTextChange={onPasswordChange} value={props.auth.password} />
      </CardSection>
      {renderError()}
      <CardSection>
        {renderAction()}
      </CardSection>
    </View>
  )
}

const Styles = {
  container: {
    marginTop: 5
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20
  },
  formInput: {
    button: {
      borderWidth: 1,
      padding: 8,
      margin: 5,
      color: 'navy',
      fontWeight: '100',
      borderColor: 'navy',
      borderRadius: 5
    },
    text: {
      fontSize: 26,
      color: '#666',
      textAlign: 'center',
      marginBottom: 5
    },
    input: {
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#CCC',
      fontSize: 22,
      paddingLeft: 10
    },
    errorText: {
      fontSize: 22,
      textAlign: 'center',
      color: '#FF0000'
    },
    container: {
      marginBottom: 10
    }
  }
}

const MapStateToProsp = (state) => {
  return {
    auth: state.auth
  }
}

const MapActionToProps = (dispatch) => {
  return {
    emailChange: (email) => dispatch(emailChange(email)),
    passwordChange: (password) => dispatch(passwordChange(password)),
    login: (info) => dispatch(login(info))
  }
}

export {LoginForm}
export default connect(MapStateToProsp, MapActionToProps)(LoginForm)