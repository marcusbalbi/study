import React from 'react'
import { Text, StyleSheet } from 'react-native'
import CardSection from '../common/components/CardSection'

const EmployeeListItem = props => {
  return (
    <CardSection>
      <Text style={Styles.text} >{props.employee.name}</Text>
    </CardSection>
  )
}

const Styles = StyleSheet.create({
  text: {
    fontSize: 16,
    paddingLeft: 10
  }
})

export default EmployeeListItem
