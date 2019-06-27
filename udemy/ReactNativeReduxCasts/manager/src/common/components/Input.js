import React from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'

const Input = props => {
  return (
    <View style={Styles.container} >
      <Text style={Styles.text} >{props.label}</Text>
      <TextInput
        secureTextEntry={props.hide}
        style={Styles.input}
        onChangeText={props.onTextChange}
        value={props.value} />
    </View>
  )
}

const Styles = StyleSheet.create({
  text: {
    fontSize: 26,
    color: '#666',
    textAlign: 'center',
    marginBottom: 5
  },
  input: {
    borderLeftWidth: 3,
    borderColor: '#CCC',
    fontSize: 22,
    paddingLeft: 10
  },
  container: {
    marginBottom: 10
  }
})

Input.defaultProps = {
  hide: false,
  value: '',
  label: 'Text',
  onTextChange: () => {}
}

export default Input
