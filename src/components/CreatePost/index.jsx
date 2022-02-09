import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Badge, Button, Col, Input, InputGroup, Row, Table } from 'reactstrap';
import { totalNews } from '../../fakeData/news';
import { RiDeleteBack2Line } from 'react-icons/ri';

function CreatePost(props) {
  return <>
    <Row className='mt-2' style={{ minHeight: '95vh' }}>
      <Col>
        <div
          className='myPosts pd-5'
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.66)',
            minHeight: '100%',
          }}
        >
          <div className='d-flex align-items-center justify-content-between'>
            <h5 className='mg-0'>Bài viết</h5>
          </div>


        </div>
      </Col>
    </Row>
  </>;
}

export default CreatePost;
