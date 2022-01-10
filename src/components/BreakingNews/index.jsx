import React from 'react';
import { Badge, Col, Row } from 'reactstrap';
import MainPost from '../Post/MainPost';
import SubPost from '../Post/SubPost';

function BreakingNews(props) {
  return <div className='breaking'>
    <div className="border-bottom mb-3">
      <Badge color="danger" className='pd-1 bdr-none'>
        Nổi bật
      </Badge>
    </div>

    <Row>
      <Col lg={6} xs="auto">
        <MainPost />
      </Col>
      <Col lg={6} xs="auto">
        <Row className='mb-3'>
          <Col xs={12}>
            <SubPost />
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col xs={12}>
            <SubPost />
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col xs={12}>
            <SubPost />
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col xs={12}>
            <SubPost />
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col xs={12}>
            <SubPost />
          </Col>
        </Row>
      </Col>
    </Row>
  </div>;
}

export default BreakingNews;
