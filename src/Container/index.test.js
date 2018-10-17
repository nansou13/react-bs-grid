import { expect } from 'chai'

import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Container from './index'

configure({ adapter: new Adapter() })

describe('<Container />', () => {
  it('should render appropriately', () => {
    const wrapper = shallow(<Container />)
    expect(wrapper.props().direction).to.equal('row')
    expect(wrapper.props().wrap).to.equal('nowrap')
  })
  it('should render children', () => {
    const wrapper = shallow(<Container>test</Container>)
    expect(wrapper.text()).to.equal('test')
  })

  it('should render custom classes', () => {
    const wrapper = shallow(<Container className="test coucou" />)
    expect(wrapper.hasClass('test')).to.equal(true)
    expect(wrapper.hasClass('coucou')).to.equal(true)
  })
})
