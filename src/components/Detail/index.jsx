import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Col, Container, Form, Input, Row } from 'reactstrap';
import Comment from '../Comment';
import FastNews from '../FastNews';
import { totalNews } from '../../fakeData/news'
import { useParams } from 'react-router-dom'
import RelateTag from '../RelateTag';

function Detail(props) {
  const { newsSlug } = useParams()

  const detail = totalNews.filter(item => item.slug === newsSlug)[0]
  return (
    <div className='detail mt-4'>
      <Container>
        <Row>
          <Col lg={8}>
            <Row>
              <Col>
                <Breadcrumb>
                  <BreadcrumbItem>
                    <a href={`/category/${detail.category}`}>
                      {detail.category}
                    </a>
                  </BreadcrumbItem>
                  <BreadcrumbItem active className='max-w-250 line-1'>
                    {detail.title}
                  </BreadcrumbItem>
                </Breadcrumb>
              </Col>
            </Row>

            <Row>
              <Col>
                <h2 className='detail__title'>
                  {detail.title}
                </h2>
              </Col>
            </Row>

            <Row>
              <Col>
                <p className='detail__shortDes'>
                  {detail.shortDescription}
                </p>
              </Col>
            </Row>

            <Row className='mt-3'>
              <Col>
                <img src={detail.mainImage} className='detail__main' alt='post' />

                <p className='detail__content mt-3'>
                  {detail.content}
                </p>

              </Col>
            </Row>

            <Row>
              <Col className='d-flex justify-content-between'>
                <p className="detail__author">
                  Tác giả: {detail.author}
                </p>
                <p className="detail__root">
                  Trích nguồn từ: <a href={detail.linkNews}>
                    {detail.pageRoot}
                  </a>
                </p>
              </Col>
            </Row>



            <Row className='mt-4'>
              <Col>
                <span className='mr-2'>Tags: </span>
                {detail.tag.map(tag => {
                  return <Button className='mr-1 btn-sm' key={tag.value}>{tag.label}</Button>
                })}
              </Col>
            </Row>

            <Row className='border-top mt-4'>
            </Row>

            <Row className='mt-4'>
              <Col>
                <h3 className='comment__title'>Bình luận</h3>
                {detail.comment.map(cmt => <Comment key={cmt.id} comment={cmt} />)}
              </Col>
            </Row>

            <Row className='mt-5'>
              <Col>
                <h3 className='comment__title'>Viết bình luận</h3>
                <Form>
                  <Input
                    id="exampleText"
                    name="text"
                    type="textarea"
                  />
                  <div className="mt-3 d-flex justify-content-end">
                    <Button color="primary">Bình luận</Button>
                  </div>
                </Form>
              </Col>
            </Row>

          </Col>

          <Col lg={4}>
            <FastNews />
            <RelateTag relateTag={detail.relaTag} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Detail;
