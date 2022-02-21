import React from 'react';
import { Badge, Col, Container, Row } from 'reactstrap';
import CommonPost from './CommonPost';
import { newPosts } from '../../fakeData/newPost';

function NewPost(props) {
    const new_post = JSON.parse(localStorage.getItem('new_posts')) ?? newPosts;
    console.log("abc: ", new_post)
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
                    {new_post.filter(item => item.status !== "Đang chờ duyệt").slice(0, 8).map(item => {
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