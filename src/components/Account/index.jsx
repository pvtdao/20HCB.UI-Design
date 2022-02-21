import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Col, Container, Form, Input, Row } from 'reactstrap';
import { RiDashboardLine } from "react-icons/ri"; import { IoExitOutline } from "react-icons/io5";
import { BsListTask } from "react-icons/bs"; import { FaUser, FaHome, FaPlus } from "react-icons/fa";
import { NavLink, Outlet } from 'react-router-dom';
function Account(props) {
    return (
        <div className='account bg-e5'>
            <Container>
                <Row>
                    <Col lg={3} className='bg-fff relative account__left '>
                        <Row>
                            <Col className="account__info d-flex justify-content-center flex-column mt-3">
                                <div className='d-flex justify-content-center'>
                                    <img className="account__info-avar" src="https://seeklogo.com/images/N/nbc-news-logo-EDDBA8ADC9-seeklogo.com.png" alt='logo post' />
                                </div>
                                <div className="account__info-main justify-content-start d-flex align-items-center mt-3">
                                    <img className='comment__ava mt-1' src="https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png" alt="avatar" />
                                    <div className="d-flex flex-column ml-2">
                                        <p className="account__info-name bold">{localStorage.getItem('full_name')}</p>
                                        <p className="account__info-email">{localStorage.getItem('email')}</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row className='mt-5 fixed'>
                            <Col>
                                <NavLink className={props => { return `${props.isActive ? `isActive account__menu d-flex align-items-center mt-4 ml-4` : "account__menu d-flex align-items-center mt-4 ml-4"}` }} to={`/account/my-posts`}>
                                    <RiDashboardLine className='account__menu-icon' />
                                    <p className='account__menu-text'>Bài viết</p>
                                </NavLink>
                                <NavLink className={props => { return `${props.isActive ? `isActive account__menu d-flex align-items-center mt-4 ml-4` : "account__menu d-flex align-items-center mt-4 ml-4"}` }} to={`/account/pending-posts`}>
                                    <BsListTask className='account__menu-icon' />
                                    <p className='account__menu-text'>Chờ duyệt</p>
                                </NavLink>
                                <NavLink className={props => { return `${props.isActive ? `isActive account__menu d-flex align-items-center mt-4 ml-4` : "account__menu d-flex align-items-center mt-4 ml-4"}` }} to={`/account/my-infor`}>
                                    <FaUser className='account__menu-icon' />
                                    <p className='account__menu-text'>Thông tin cá nhân</p>
                                </NavLink>
                                <NavLink className={props => { return `${props.isActive ? `isActive account__menu d-flex align-items-center mt-4 ml-4` : "account__menu d-flex align-items-center mt-4 ml-4"}` }} to={`/account/new-post`}>
                                    <FaPlus className='account__menu-icon' />
                                    <p className='account__menu-text'>Thêm bài viết</p>
                                </NavLink>
                                <NavLink className={props => { return `${props.isActive ? `isActive account__menu d-flex align-items-center mt-4 ml-4` : "account__menu d-flex align-items-center mt-4 ml-4"}` }} to={`/`}>
                                    <IoExitOutline className='account__menu-icon' />
                                    <p className='account__menu-text'>Quay lại</p>
                                </NavLink>
                            </Col>
                        </Row>

                    </Col>
                    <Col lg={9} className='bg-e5 min-h-100vh'>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Account;