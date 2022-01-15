import React from 'react';
import { Badge, Col, Row } from 'reactstrap';
import MainPost from '../Post/MainPost';
import SubPost from '../Post/SubPost';
import { hotNews } from "../../fakeData/news"
function BreakingNews(props) {
  return <div className='breaking'>
    <div className="border-bottom mb-3">
      <Badge color="danger" className='pd-1 bdr-none'>
        Nổi bật
      </Badge>
    </div>

    <Row>
      <Col lg={6} xs="auto">
        <MainPost news={hotNews[0]} />
      </Col>
      <Col lg={6} xs="auto">
        {hotNews.slice(1).map((item) => {
          return (
            <Row className='mb-3' key={item.slug}>
              <Col xs={12}>
                <SubPost news={item} />
              </Col>
            </Row>
          )
        })}
      </Col>
    </Row>
  </div>;
}

export default BreakingNews;
