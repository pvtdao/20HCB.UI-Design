import React from 'react';
import { useParams } from 'react-router-dom';
import { Col, Container, Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap';
import FastNews from '../FastNews';
import RelateTag from '../RelateTag';
import { totalNews } from '../../fakeData/news'
import CategoryItem from './CategoryItem';

function Category({ category }) {
    const { categorySlug } = useParams()
    const detail = totalNews.filter(item => item.category === categorySlug)
    return (
        <div className='category mt-4'>
            <Container>
                <Row>
                    <Col lg={8}>
                        <Row className='mb-4'>
                            <Col>
                                <h5 className='category__title'>
                                    Chuyên mục: {categorySlug}
                                </h5>
                            </Col>
                        </Row>

                        {detail.length === 0
                            ?
                            <h2>Chưa có bài báo thuộc chuyên mục</h2>
                            :
                            <>
                                {detail.map(news => {
                                    return (
                                        <CategoryItem news={news} key={news.slug} />
                                    )
                                })}

                                {/* <Row className='mt-5'>
                                    <Pagination>
                                        <PaginationItem>
                                            <PaginationLink
                                                first
                                                href="#"
                                            />
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink
                                                href="#"
                                                previous
                                            />
                                        </PaginationItem>
                                        <PaginationItem active>
                                            <PaginationLink href="#">
                                                1
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#">
                                                2
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#">
                                                3
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#">
                                                4
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#">
                                                5
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink
                                                href="#"
                                                next
                                            />
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink
                                                href="#"
                                                last
                                            />
                                        </PaginationItem>
                                    </Pagination>
                                </Row> */}
                            </>
                        }

                    </Col>

                    <Col lg={4}>
                        <FastNews />
                        {/* <RelateTag /> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Category;