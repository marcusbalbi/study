import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import { emailChange, passwordChange, login } from '../actions'

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
        <View>
          <TouchableOpacity onPress={login}>
            <Text style={[Styles.formInput.text, Styles.formInput.button]}>Logon</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }
  return (
    <View style={Styles.container}>
      <View style={Styles.formInput.container} >
        <Text style={Styles.formInput.text} >Email</Text>
        <TextInput 
          style={Styles.formInput.input} 
          onChangeText={onEmailChange}
          value={props.auth.email} />
      </View>
      <View style={Styles.formInput.container} >
        <Text style={Styles.formInput.text} >Password</Text>
        <TextInput
          secureTextEntry={true}
          style={Styles.formInput.input}
          onChangeText={onPasswordChange}
          value={props.auth.password} />
      </View>
      {renderError()}
      {renderAction()}
    </View>
  )
}

const Styles = {
  container: {
    marginTop: 20
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