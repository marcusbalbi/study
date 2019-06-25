import React from 'react'
import { Scene, Router, Stack, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar >
        <Scene key="auth" >
          <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>
        <Scene key="main" >
          <Scene 
            key="employeeList" 
            component={EmployeeList} 
            title="EmployeeList"
            rightTitle="Add"
            onRight={() => { Actions.employeeCreate() }}
            initial
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Employee Form"
          />
        </Scene>
      </Stack>
    </Router>
  )
}

export default RouterComponent
