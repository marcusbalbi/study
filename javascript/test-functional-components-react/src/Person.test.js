import React from 'react'
import { shallow } from 'enzyme'
import PersonCard from './PersonCard'

test('test PErsonCard render', () => {
  let wrapper = shallow(<PersonCard />)
  console.log(wrapper.state())
})
