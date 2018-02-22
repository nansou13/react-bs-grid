import { expect } from 'chai'

import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Row from './index'
import Col from '../Col'
import Container from '../Container'

configure({ adapter: new Adapter() })

describe('<Row />', () => {
  it('should render appropriately', () => {
    const wrapper = shallow(<Row />)
    expect(wrapper.html()).to.equal('<div class=""></div>')
  })
  it('should render right class from grid props', () => {
    const wrapper = shallow(<Row xs={8} sm={8} md={8} lg={8} />)
    expect(wrapper.hasClass('col-xs-8')).to.equal(true)
    expect(wrapper.hasClass('col-sm-8')).to.equal(true)
    expect(wrapper.hasClass('col-md-8')).to.equal(true)
    expect(wrapper.hasClass('col-lg-8')).to.equal(true)
  })
  it('should manage each grid number 1-12', () => {
    for (let i = 1; i <= 12; i++) {
      const wrapper = shallow(<Row md={i} />)
      expect(wrapper.hasClass(`col-md-${i}`)).to.equal(true)
    }
  })
  it('should manage each offset grid number 1-12', () => {
    for (let i = 1; i <= 12; i++) {
      const wrapper = shallow(<Row mdOffset={i} />)
      expect(wrapper.hasClass(`col-md-offset-${i}`)).to.equal(true)
    }
  })
  it('should manage hidden grid system', () => {
    const wrapper = shallow(<Row xsHidden smHidden mdHidden lgHidden />)
    expect(wrapper.hasClass('hidden-xs')).to.equal(true)
    expect(wrapper.hasClass('hidden-sm')).to.equal(true)
    expect(wrapper.hasClass('hidden-md')).to.equal(true)
    expect(wrapper.hasClass('hidden-lg')).to.equal(true)
  })
  it('should render children', () => {
    const wrapper = shallow(
      <Col>
        <div>test</div>
      </Col>
    )
    expect(wrapper.children().html()).to.equal('<div>test</div>')
  })
  it('should render custom classes', () => {
    const wrapper = shallow(<Col className="test coucou" />)
    expect(wrapper.hasClass('test')).to.equal(true)
    expect(wrapper.hasClass('coucou')).to.equal(true)
  })
})
