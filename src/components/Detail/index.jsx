import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Col, Container, Form, Input, Row } from 'reactstrap';
import Comment from '../Comment';
import FastNews from '../FastNews';

function Detail(props) {
  return (
    <div className='detail mt-4'>
      <Container>
        <Row>
          <Col lg={8}>
            <Row>
              <Col>
                <Breadcrumb>
                  <BreadcrumbItem>
                    <a href="/#">
                      Kinh doanh
                    </a>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>
                    Bất động sản
                  </BreadcrumbItem>
                </Breadcrumb>
              </Col>
            </Row>

            <Row>
              <Col>
                <h2 className='detail__title'>
                  Sân bay Quảng Trị được đầu tư theo hình thức PPP
                </h2>
              </Col>
            </Row>

            <Row>
              <Col>
                <p className='detail__shortDes'>
                  Cách trung tâm thành phố 30km, hơn 20 năm qua hàng chục nghìn dân ở dự án Khu đô thị Tây Bắc sống khổ khi nhà đất không thể sửa chữa, tách thừa, chuyển nhượng
                </p>
              </Col>
            </Row>

            <Row className='mt-3'>
              <Col>
                <img src="https://kenh14cdn.com/zoom/460_289/203336854389633024/2022/1/10/photo1641787755234-1641787755408205526273.jpg" className='detail__main' alt='post' />

                <p className='detail__content mt-3'>
                  Sau bao lần vướng đủ mọi thể loại `phốt` từ tài năng đến thái độ, công chúng Hàn Quốc lẫn quốc tế dường như đã bắt đầu có cái nhìn khắt khe hơn đối với tân binh thị phi IVE. Một trong những vấn đề khiến cho netizen không ngừng `cà khịa` nhóm chính là khả năng ca hát của các thành viên. Jang Wonyoung nhiều lần bị phát hiện hát live thều thào trên sân khấu encore, các thành viên còn lại của IVE cũng ít khi gây được ấn tượng tốt đẹp về tài ca hát. Tân binh thị phi IVE cover nhạc Taeyeon (SNSD): Vắng bà chúa thều thào Wonyoung nên nghe mượt hẳn, vocal có thảm hoạ như lời đồn? - Ảnh 1. Wonyoung được xem là lỗ hổng vocal của IVE với nhiều lần hát live thều thào, không thành tiếng. Giữa lúc tranh cãi về vocal `thảm hoạ` của IVE vẫn còn là đề tài nóng trên mạng xã hội, mới đây, netizen đã bàn luận về 1 video cover của 2 thành viên Ahn Yujin và Liz. Cụ thể, hai cô nàng trổ tài cover ca khúc Four Seasons của đàn chị Taeyeon (SNSD) trong chương trình phát thanh FM4U Good Morning FM của đài MBC vào ngày 6/12 hồi tháng trước.
                </p>
                <p className='detail__content mt-3'>
                  Sau bao lần vướng đủ mọi thể loại `phốt` từ tài năng đến thái độ, công chúng Hàn Quốc lẫn quốc tế dường như đã bắt đầu có cái nhìn khắt khe hơn đối với tân binh thị phi IVE. Một trong những vấn đề khiến cho netizen không ngừng `cà khịa` nhóm chính là khả năng ca hát của các thành viên. Jang Wonyoung nhiều lần bị phát hiện hát live thều thào trên sân khấu encore, các thành viên còn lại của IVE cũng ít khi gây được ấn tượng tốt đẹp về tài ca hát. Tân binh thị phi IVE cover nhạc Taeyeon (SNSD): Vắng bà chúa thều thào Wonyoung nên nghe mượt hẳn, vocal có thảm hoạ như lời đồn? - Ảnh 1. Wonyoung được xem là lỗ hổng vocal của IVE với nhiều lần hát live thều thào, không thành tiếng. Giữa lúc tranh cãi về vocal `thảm hoạ` của IVE vẫn còn là đề tài nóng trên mạng xã hội, mới đây, netizen đã bàn luận về 1 video cover của 2 thành viên Ahn Yujin và Liz. Cụ thể, hai cô nàng trổ tài cover ca khúc Four Seasons của đàn chị Taeyeon (SNSD) trong chương trình phát thanh FM4U Good Morning FM của đài MBC vào ngày 6/12 hồi tháng trước.
                </p>
              </Col>
            </Row>

            <Row>
              <Col className='d-flex justify-content-between'>
                <p className="detail__author">
                  Tác giả: Nguyễn Văn A
                </p>
                <p className="detail__root">
                  Trích nguồn từ: <a href='https://kenh14.vn/tan-binh-thi-phi-ive-cover-nhac-taeyeon-snsd-vang-ba-chua-theu-thao-wonyoung-nen-nghe-muot-han-vocal-co-tham-hoa-nhu-loi-don-20220112150954297.chn'>
                    kenh14.vn
                  </a>
                </p>
              </Col>
            </Row>

            <Row>
              <Col>
                <Button>Tải xuống</Button>
              </Col>
            </Row>

            <Row className='mt-4'>
              <Col>
                <span className='mr-2'>Tags: </span>
                <Button className='mr-1 btn-sm'>Kinh tế</Button>
                <Button className='mr-1 btn-sm'>Đời sống</Button>
                <Button className='mr-1 btn-sm'>Sức khỏe</Button>
              </Col>
            </Row>

            <Row className='border-top mt-4'>
            </Row>

            <Row className='mt-4'>
              <Col>
                <h3 className='comment__title'>Bình luận</h3>
                <Comment />
                <Comment />
                <Comment />
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
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Detail;
