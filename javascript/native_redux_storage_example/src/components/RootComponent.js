import React from 'react'
import {connect} from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import faker from 'faker'

const RootComponent = (props) => {
  const renderTodos = () => {
    console.log(props)
    return props.todos.map((todo) => {
      return (
        <Text key={todo} >{todo}</Text>
      )
    })
  }
  return (
    <View>
      {renderTodos()}
      <TouchableOpacity onPress={() => { props.addTodo(faker.name.firstName()) }} >
        <Text>ADD TODO</Text>
      </TouchableOpacity>
    </View>
  )
}

const MapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const MapActionsToProps = dispatch => {
  return {
    addTodo: (todo) => {
      return dispatch({ type: 'ADD', payload: todo })
    }
  }
}

export default connect(MapStateToProps, MapActionsToProps)(RootComponent)
