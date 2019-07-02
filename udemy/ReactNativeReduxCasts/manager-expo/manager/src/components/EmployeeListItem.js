import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import CardSection from '../common/components/CardSection'

const EmployeeListItem = props => {
  return (
    <TouchableOpacity onPress={() => { props.onEmployeeSelected(props.employee) }} >
      <CardSection>
        <Text style={Styles.text} >{props.employee.name}</Text>
      </CardSection>
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
  text: {
    fontSize: 16,
    paddingLeft: 10
  }
})

EmployeeListItem.defaultProps = {
  onEmployeeSelected: () => {}
}

export default EmployeeListItem
