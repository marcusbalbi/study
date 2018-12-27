import React from 'react'
import { View, TextInput, Text } from 'react-native'


const Input = ({ label, placeholder, value, onChangeText}) => {
  return (
    <View style={Styles.view} >
      <Text style={Styles.label} >{label}</Text>
      <TextInput
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={Styles.input}
      />
    </View>
  )
}

const Styles = {
  label: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
    // borderWidth: 1
  },
  input: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 3
    // borderWidth: 1
    // height: 200
  },
  view: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    alignItems: 'center'
  }
}

export {Input}