import React,{ useEffect } from 'react'
import { Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import EmployeeListItem from './EmployeeListItem'
import { fetchEmployees } from '../actions'

const EmployeeList = props => {
  const renderItem = ({item}) => {
    return (
      <EmployeeListItem employee={item} />
    )
  }
  if (props.employees.length <= 0) {
    return (
      <Text>Nenhum Funcionário...</Text>
    )
  }
  return (
    <FlatList
      data={props.employees}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  )
}

const MapActionsToProps = dispatch => {
  return {
    fetchEmployees: dispatch(fetchEmployees())
  }
}

const MapStateToProps = state => {
  return {
    employees: Object.keys(state.employeeList).map((key) => {
      return { ...state.employeeList[key], id: key }
    })
  }
}

export default connect(MapStateToProps, MapActionsToProps)(EmployeeList)
