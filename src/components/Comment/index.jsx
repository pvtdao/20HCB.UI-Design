import React from 'react';
import { Col, Container, Row } from 'reactstrap';

function Comment({ comment }) {
    return (
        <div className='comment mt-4'>
            <Row>
                <Col lg={1}>
                    <img className='comment__ava mt-1' src="https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png" alt="avatar" />
                </Col>
                <Col lg={11}>
                    <div className="d-flex align-items-center">
                        <p className='comment__user mr-3'>{comment.userName}</p>
                        <p className="comment__time">14:39 20/12</p>
                    </div>

                    <p className='comment__content'>{comment.commentText}</p>
                </Col>
            </Row>
        </div >
    );
}

export default Comment;