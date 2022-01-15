import React from 'react';
import { Badge, Col, Row } from 'reactstrap';

function RelateTag(props) {
    return (
        <div className='relateTag'>
            <div className='border-bottom mb-3'>
                <Badge color='danger' className='pd-1 bdr-none'>
                    Tag liên quan
                </Badge>
            </div>

            <Row className='mb-3'>
                <Col xs={3}>
                    <Badge className='pd-1'>
                        Khoa học
                    </Badge>
                </Col>
                <Col xs={3}>
                    <Badge className='pd-1'>
                        Đời sống
                    </Badge>
                </Col>
                <Col xs={3}>
                    <Badge className='pd-1'>
                        Thể thao
                    </Badge>
                </Col>
                <Col xs={3}>
                    <Badge className='pd-1'>
                        Dân trí
                    </Badge>
                </Col>
            </Row>
        </div>
    );
}

export default RelateTag;