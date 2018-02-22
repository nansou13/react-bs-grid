import { expect } from 'chai'

import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Container from './index'

configure({ adapter: new Adapter() })

describe('<Container />', () => {
  it('should render appropriately', () => {
    const wrapper = shallow(<Container />)
    expect(wrapper.html()).to.equal('<div class="container"></div>')
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
  it('should render appropriately with fluid props', () => {
    const wrapper = shallow(<Container fluid />)
    expect(wrapper.hasClass('container-fluid')).to.equal(true)
    expect(wrapper.hasClass('container')).to.equal(false)
    expect(wrapper.html()).to.equal('<div class="container-fluid"></div>')
  })
})
