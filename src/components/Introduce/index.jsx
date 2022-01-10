import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import BreakingNews from '../BreakingNews';
import FastNews from '../FastNews';

function Introduce(props) {
    return (
        <div className='introduce mt-2'>
            <Container>
                <Row>
                    <Col xs="12" sm="auto" md="9" lg="9">
                        <BreakingNews />
                    </Col>
                    <Col xs="12" sm="auto" md="3" lg="3">
                        <FastNews />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Introduce;