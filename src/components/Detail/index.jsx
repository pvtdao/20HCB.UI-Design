import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Col, Container, Form, Input, Row } from 'reactstrap';
import Comment from '../Comment';
import FastNews from '../FastNews';
import { totalNews } from '../../fakeData/news'
import { allPost } from '../../fakeData/allPost'
import { useParams } from 'react-router-dom'
import RelateTag from '../RelateTag';
import Loader from '../Loader';

function Detail(props) {
  const { newsSlug } = useParams()
  const [isLoad, setIsLoad] = React.useState(true);
  const [comment, setComment] = React.useState("")

  const randomID = (Math.random() + 2).toString(36).substring(2);
  const userName = JSON.parse(localStorage.getItem(`@user`))["full_name"]

  const all_post = JSON.parse(localStorage.getItem("all_post")) ?? allPost

  const detail = all_post.filter(item => item.slug === newsSlug)[0]

  React.useEffect(() => {
    window.scrollTo(0, 0)

    setIsLoad(true)
    setComment("")
  }, [newsSlug])

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoad(false);
    }, 1500);
  }, [isLoad])

  const handleOnChange = (e) => {
    const valueInput = e.target.value
    setComment(valueInput)
  }

  const handleOnSubmit = (e) => {
    const d = new Date();
    let hours = d.getHours();
    let minute = d.getMinutes();
    let date = d.getDate();
    let month = d.getMonth();

    e.preventDefault()

    const indexAllPost = all_post.findIndex(post => post.slug === newsSlug)

    console.log(indexAllPost)
    detail.comment.push({
      id: randomID,
      comment,
      userName,
      hours,
      minute,
      date,
      month: month + 1

    })


    console.log("cmt: ", detail.comment)

    if (indexAllPost > -1) {
      all_post[indexAllPost] = detail
    }

    localStorage.setItem("all_post", JSON.stringify(all_post))
    setIsLoad(true)
    setComment("")
  }

  return (
    <>
      {isLoad ? <Loader /> :
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
                      {detail.shortDes}
                    </p>
                  </Col>
                </Row>

                <Row className='mt-3'>
                  <Col>
                    <img src={detail.avatar.src} className='detail__main' alt='post' />

                    <p className='detail__content mt-3' dangerouslySetInnerHTML={{
                      __html: detail.content.main,
                    }}>
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
                      return <Button className='mr-1 btn-sm' key={tag.id}>{tag.tag}</Button>
                    })}
                  </Col>
                </Row>

                <Row className='border-top mt-4'>
                </Row>

                <Row className='mt-4'>
                  <Col>
                    <h3 className='comment__title'>Bình luận</h3>
                    {detail.comment.length === 0 ? "Chưa có bình luận" :
                      <div>
                        {detail.comment.map(cmt => {
                          console.log("cmt: ", cmt)
                          return <Comment key={cmt.id} comment={cmt} />
                        }
                        )}
                      </div>
                    }
                  </Col>
                </Row>

                <Row className='mt-5'>
                  <Col>
                    <h3 className='comment__title'>Viết bình luận</h3>
                    <Form onSubmit={handleOnSubmit}>
                      <Input
                        id="exampleText"
                        name="text"
                        type="textarea"
                        onChange={handleOnChange}
                        value={comment}
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
                <RelateTag relateTag={detail.tag} />
              </Col>
            </Row>
          </Container>
        </div>
      }
    </>

  );
}

export default Detail;
