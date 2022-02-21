import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Col, Container, Row } from 'reactstrap';
import CommonPost from './CommonPost';
import { topCateNews } from '../../fakeData/topCategory'


function TopCategory(props) {
    return (
        <div className="topCate mt-5">
            <Container >
                <Row>
                    <Col xs={12}>
                        <div className='border-bottom mb-3'>
                            <Badge color='danger' className='pd-1 bdr-none'>
                                Top chuyên mục
                            </Badge>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Row>
                        {topCateNews.map(item => {
                            return (
                                <Col lg={3} className='mt-4-5' key={item.slug}>
                                    <CommonPost news={item} />
                                </Col>
                            )
                        })}
                    </Row>
                </Row>
            </Container>
        </div>
    );
}

export default TopCategory;