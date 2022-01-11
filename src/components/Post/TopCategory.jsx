import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Col, Container, Row } from 'reactstrap';
import CommonPost from './CommonPost';

TopCategory.propTypes = {

};

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
                    <Col lg={3} className='mt-4-5'>
                        <CommonPost />
                    </Col>
                    <Col lg={3} className='mt-4-5'>
                        <CommonPost />
                    </Col>
                    <Col lg={3} className='mt-4-5'>
                        <CommonPost />
                    </Col>
                    <Col lg={3} className='mt-4-5'>
                        <CommonPost />
                    </Col>
                    <Col lg={3} className='mt-4-5'>
                        <CommonPost />
                    </Col>
                    <Col lg={3} className='mt-4-5'>
                        <CommonPost />
                    </Col>
                    <Col lg={3} className='mt-4-5'>
                        <CommonPost />
                    </Col>
                    <Col lg={3} className='mt-4-5'>
                        <CommonPost />
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default TopCategory;