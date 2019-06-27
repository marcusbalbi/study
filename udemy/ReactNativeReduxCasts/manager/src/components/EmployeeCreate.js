import React from 'react'
import { View, Picker, Text } from 'react-native'
import { Input, CardSection, Button } from '../common/components'
import { connect } from 'react-redux'
import { updateEmployee } from '../actions'

const EmployeeCreate = props => {
  return (
    <View>
      <CardSection>
        <Input label="Name" value={props.form.name} 
          onTextChange={text => props.updateEmployee('name', text)} />
      </CardSection>
      <CardSection>
        <Input label="Phone" value={props.form.phone} />
      </CardSection>
      <CardSection>
        <Text style={{
          fontSize: 26, color: '#666', textAlign: 'center', marginBottom: 5 }} >Shift</Text>
        <Picker selectedValue={props.form.shift}  onValueChange={value => { props.updateEmployee('shift', value) }} >
          <Picker.Item label="Sunday" value="SUNDAY"  />
          <Picker.Item label="Monday" value="MONDAY"  />
          <Picker.Item label="Tuesday" value="TUESDAY"  />
          <Picker.Item label="Wednesday" value="WEDNESDAY"  />
          <Picker.Item label="Thursday" value="THURSDAY"  />
          <Picker.Item label="Friday" value="FRIDAY"  />
          <Picker.Item label="Saturday" value="SATURDAY"  />
        </Picker>
      </CardSection>
      <CardSection>
        <Button text="Create Employee" />
      </CardSection>
    </View>
  )
}

const MapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm
  return {
    form: { name, phone, shift }
  }
}

const MapActionsToProps = (dispatch) => {
  return {
    updateEmployee: (prop, value) => dispatch(updateEmployee(prop, value)) 
  }
}

export default connect(MapStateToProps, MapActionsToProps)(EmployeeCreate)
