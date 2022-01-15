import React from 'react';
import { Badge, Col, Container, Row } from 'reactstrap';
import CommonPost from './CommonPost';
import { newPost } from '../../fakeData/news'

function NewPost(props) {
    return (
        <div className="newPost mt-5">
            <Container >
                <Row>
                    <Col xs={12}>
                        <div className='border-bottom mb-3'>
                            <Badge color='danger' className='pd-1 bdr-none'>
                                Bài viết mới nhất
                            </Badge>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {newPost.map(item => {
                        return (
                            <Col lg={3} className='mt-4-5' key={item.slug}>
                                <CommonPost news={item} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default NewPost;