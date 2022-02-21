import React from 'react';
import { Badge, Col, Row } from 'reactstrap';

function RelateTag({ relateTag }) {
    return (
        <div className='relateTag'>
            <div className='border-bottom mb-3'>
                <Badge color='danger' className='pd-1 bdr-none'>
                    Tag liên quan
                </Badge>
            </div>

            <Row className='mb-3'>
                {relateTag.map(tag =>
                    <Col xs="auto" key={tag.id}>
                        <Badge className='pd-1'>
                            {tag.tag}
                        </Badge>
                    </Col>
                )}
            </Row>
        </div>
    );
}

export default RelateTag;