import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { emailChange, passwordChange } from '../actions'
const LoginForm = (props) => {
  const onEmailChange = (value) => {
    props.emailChange(value)
  }
  const onPasswordChange = (value) => {
    props.passwordChange(value)
  }
  return (
    <View>
      <Text style={Styles.title} >Login Page</Text>
      <View style={Styles.formInput.container} >
        <Text style={Styles.formInput.text} >Email</Text>
        <TextInput 
          style={Styles.formInput.input} 
          onChangeText={onEmailChange.bind(this)}
          value={props.auth.email} />
      </View>
      <View style={Styles.formInput.container} >
        <Text style={Styles.formInput.text} >Password</Text>
        <TextInput
          secureTextEntry={true}
          style={Styles.formInput.input}
          onChangeText={onPasswordChange.bind(this)}
          value={props.auth.password} />
      </View>
      <View>
        <TouchableOpacity>
          <Text style={[Styles.formInput.text, Styles.formInput.button]}>Logon</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Styles = {
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
  }
}

export {LoginForm}
export default connect(MapStateToProsp, MapActionToProps)(LoginForm)