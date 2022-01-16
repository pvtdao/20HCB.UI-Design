import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'reactstrap';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { category } from '../../fakeData/category'
import { useNavigate } from 'react-router-dom';
function Footer(props) {
    const navigate = useNavigate()

    const directCategory = (name) => {
        console.log("cccasd")
        navigate(`/category/${name}`)
    }
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col lg={2}>
                        <div className="d-flex flex-column footer__col-1">
                            <h5>Trang chủ</h5>
                            <p>Bài nổi bật</p>
                            <p>Tin nhanh</p>
                            <p>Chuyên mục</p>
                            <p>Mới nhất</p>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <Row className="footer__col-2">
                            <Col lg={6}>
                                <div className="d-flex flex-column footer__col-2-2">
                                    {category.slice(1, 6).map(cate => <p key={cate.id} style={{ cursor: 'pointer' }} onClick={() => directCategory(cate.name)}>{cate.name}</p>)}

                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="d-flex flex-column footer__col-2-2">
                                    <div className="d-flex flex-column footer__col-2-2">
                                        {category.slice(6, 11).map(cate => <p key={cate.id} style={{ cursor: 'pointer' }} onClick={() => directCategory(cate.name)}>{cate.name}</p>)}

                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={5}>
                        <Row className="footer__col-3">
                            <Col lg={4}>
                                <div className="d-flex flex-column footer__col-3-2">
                                    <div className='flex-fill d-flex justify-content-start'>
                                        <img className="footer__col-3-img" src="https://seeklogo.com/images/N/nbc-news-logo-EDDBA8ADC9-seeklogo.com.png" alt='logo post' />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <div className="d-flex flex-column footer__col-3-2">
                                    <div className='footer__text-1 footer__text'>News tổng hợp và sắp xếp các thông tin và thu thập các bài viết cá nhân, tôn trọng và bảo vệ quyền sở hữu.</div>
                                    <div className='footer__text-2 footer__text'>
                                        Giấy phép số 1818/GP-TTĐT do Sở Thông tin và Truyền thông Hà Nội cấp ngày 05/05/2017
                                        Đơn vị chủ quản: AADDT * Chịu trách nhiệm: Bùi Hồng Ân
                                        Địa chỉ: Tầng 10, Tòa nhà Báo Sinh Viên VN, D29 Bùi Hồng Ân,  Đà Lạti
                                        Tel: (024) 3-112-3333, số máy lẻ 11111. contact.newsi@epi.com.vn
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={2}>
                        <div className="d-flex flex-column footer__col-4">
                            <h5>Liên hệ</h5>
                            <p>Giới thiệu</p>
                            <p>Điều khoản sử dụng</p>
                            <p>Quảng cáo</p>

                            <div className="subHeader__social d-flex align-items-center">
                                <div className="subHeader__social-icon subHeader__social-fb d-flex align-items-center justify-content-center mr-1">
                                    <FaFacebookF />
                                </div>
                                <div className="subHeader__social-icon subHeader__social-tw d-flex align-items-center justify-content-center mr-1">
                                    <FaTwitter />
                                </div>
                                <div className="subHeader__social-icon subHeader__social-ins d-flex align-items-center justify-content-center mr-1">
                                    <FaInstagram />
                                </div>
                                <div className="subHeader__social-icon subHeader__social-ytb d-flex align-items-center justify-content-center mr-1">
                                    <FaYoutube />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;