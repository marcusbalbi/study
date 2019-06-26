import React from 'react'
import { View, StyleSheet } from 'react-native'
const CardSection = props => {
  return (
    <View style={Style.container} >
      {props.children}
    </View>
  )
}

const Style = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 10,
    borderColor: '#CCC',
    borderBottomWidth: 1
  }
})

export default CardSection