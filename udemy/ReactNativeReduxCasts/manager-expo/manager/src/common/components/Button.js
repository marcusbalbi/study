import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
const Button = props => {
  return (
    <TouchableOpacity { ...props }>
      <Text style={[Styles.text, Styles.button]}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
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
})

export default Button
