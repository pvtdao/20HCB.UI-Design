import React from 'react';
import { Col, Container, Row } from 'reactstrap';

function Comment(props) {
    return (
        <div className='comment mt-4'>
            <Row>
                <Col lg={1}>
                    <img className='comment__ava mt-1' src="https://kenh14cdn.com/zoom/460_289/203336854389633024/2022/1/10/photo1641787755234-1641787755408205526273.jpg" alt="avatar" />
                </Col>
                <Col lg={11}>
                    <p className='comment__user'>Người dùng 1</p>
                    <p className='comment__content'>Doanh nghiệp tạo mặt bằng giá mới và kiếm lãi ở những dự án đã mua trong khu vực trước đây với giá rẻ hơn.</p>
                    <p className="comment__time">14:39 20/12</p>
                </Col>
            </Row>
        </div >
    );
}

export default Comment;