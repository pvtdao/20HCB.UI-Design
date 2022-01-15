import React from 'react';
import { Badge, Col, Row } from 'reactstrap';
import SubPost2 from '../Post/SubPost2';
import { fastNews } from '../../fakeData/news'
function FastNews(props) {
  return (
    <div className='fastNews'>
      <div className='border-bottom mb-3'>
        <Badge color='danger' className='pd-1 bdr-none'>
          Tin nhanh
        </Badge>
      </div>

      {fastNews.map(item => {
        return <Row className='mb-3' key={item.slug}>
          <Col xs={12}>
            <SubPost2 news={item} />
          </Col>
        </Row>
      })}
    </div>
  );
}

export default FastNews;
