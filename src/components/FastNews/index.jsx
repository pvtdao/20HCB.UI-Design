import React from 'react';
import { Badge, Col, Row } from 'reactstrap';
import SubPost2 from '../Post/SubPost2';

function FastNews(props) {
  return (
    <div className='fastNews'>
      <div className='border-bottom mb-3'>
        <Badge color='danger' className='pd-1 bdr-none'>
          Tin nhanh
        </Badge>
      </div>

      <Row className='mb-3'>
        <Col xs={12}>
          <SubPost2 />
        </Col>
      </Row>
      <Row className='mb-3'>
        <Col xs={12}>
          <SubPost2 />
        </Col>
      </Row>
      <Row className='mb-3'>
        <Col xs={12}>
          <SubPost2 />
        </Col>
      </Row>
      <Row className='mb-3'>
        <Col xs={12}>
          <SubPost2 />
        </Col>
      </Row>
      <Row className='mb-3'>
        <Col xs={12}>
          <SubPost2 />
        </Col>
      </Row>
    </div>
  );
}

export default FastNews;
