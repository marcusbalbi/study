import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
const LoginForm = (props) => {
  console.log(props)
  return (
    <View>
      <Text>Login Form</Text>
    </View>
  )
}

const MapStateToProsp = (state) => {
  return {
    list: state.list
  }
}

export {LoginForm}
export default connect(MapStateToProsp)(LoginForm)