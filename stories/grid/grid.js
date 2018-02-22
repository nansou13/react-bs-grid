import React from 'react'
import { storiesOf, action } from '@storybook/react'

import { Container, Col, Row } from '../../src'

const Repeat = ({ numTimes, render }) => {
  const items = []
  for (let i = 0; i < numTimes; i++) {
    items.push(render(i))
  }
  return <Row className="show-grid">{items}</Row>
}

storiesOf('Grid', module)
  .addWithInfo('Default Grid Desktop', () => (
    <Container>
      <Repeat
        numTimes={12}
        render={i => (
          <Col key={i} md={1}>
            .col-md-1
          </Col>
        )}
      />
      <Row className="show-grid">
        <Col md={8}>.col-md-8</Col>
        <Col md={4}>.col-md-4</Col>
      </Row>
      <Row className="show-grid">
        <Col md={4}>.col-md-4</Col>
        <Col md={4}>.col-md-4</Col>
        <Col md={4}>.col-md-4</Col>
      </Row>
      <Row className="show-grid">
        <Col md={6}>.col-md-6</Col>
        <Col md={6}>.col-md-6</Col>
      </Row>
    </Container>
  ))
  .addWithInfo('Exemple: Mobile & Desktop', () => (
    <Container>
      <Row className="show-grid">
        <Col xs={12} md={8}>
          .col-xs-12 .col-md-8
        </Col>
        <Col xs={6} md={4}>
          .col-xs-6 .col-md-4
        </Col>
      </Row>
      <Row className="show-grid">
        <Col xs={6} md={4}>
          .col-xs-6 .col-md-4
        </Col>
        <Col xs={6} md={4}>
          .col-xs-6 .col-md-4
        </Col>
        <Col xs={6} md={4}>
          .col-xs-6 .col-md-4
        </Col>
      </Row>
      <Row className="show-grid">
        <Col xs={6}>.col-xs-6</Col>
        <Col xs={6}>.col-xs-6</Col>
        <Col xs={6}>.col-xs-6</Col>
      </Row>
    </Container>
  ))
  .addWithInfo('Exemple: Mobile, Tablet, Desktop', () => (
    <Container>
      <Row className="show-grid">
        <Col xs={12} sm={6} md={8}>
          .col-xs-12 .col-sm-6 .col-md-8
        </Col>
        <Col xs={6} md={4}>
          .col-xs-6 .col-md-4
        </Col>
      </Row>
      <Row className="show-grid">
        <Col xs={6} sm={4}>
          .col-xs-6 .col-sm-4
        </Col>
        <Col xs={6} sm={4}>
          .col-xs-6 .col-sm-4
        </Col>
        <Col xs={6} sm={4}>
          .col-xs-6 .col-sm-4
        </Col>
      </Row>
    </Container>
  ))
  .addWithInfo('Offsetting columns', () => (
    <Container>
      <Row className="show-grid">
        <Col md={4}>.col-md-4</Col>
        <Col md={4} mdOffset={4}>
          .col-md-4 .col-md-offset-4
        </Col>
      </Row>
      <Row className="show-grid">
        <Col md={3} mdOffset={3}>
          .col-md-3 .col-md-offset-3
        </Col>
        <Col md={3} mdOffset={3}>
          .col-md-3 .col-md-offset-3
        </Col>
      </Row>
      <Row className="show-grid">
        <Col md={6} mdOffset={3}>
          .col-md-6 .col-md-offset-3
        </Col>
      </Row>
    </Container>
  ))
