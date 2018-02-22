import { expect } from 'chai'

import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Row from './index'

configure({ adapter: new Adapter() })

describe('<Row />', () => {
  it('should render appropriately', () => {
    const wrapper = shallow(<Row />)
    expect(wrapper.html()).to.equal('<div class="row"></div>')
  })
  it('should render children', () => {
    const wrapper = shallow(
      <Row>
        <div>test</div>
      </Row>
    )
    expect(wrapper.children().html()).to.equal('<div>test</div>')
  })
  it('should render custom classes', () => {
    const wrapper = shallow(<Row className="test coucou" />)
    expect(wrapper.hasClass('test')).to.equal(true)
    expect(wrapper.hasClass('coucou')).to.equal(true)
  })
})
