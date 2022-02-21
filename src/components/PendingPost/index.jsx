import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Badge, Button, Col, Input, InputGroup, Row, Table } from 'reactstrap';
import { totalNews } from '../../fakeData/news';
import { RiDeleteBack2Line } from 'react-icons/ri';
import { allPost } from '../../fakeData/allPost';
import { useNavigate } from 'react-router-dom';

function PendingPost(props) {
  const navigate = useNavigate()

  const [filterValue, setFilterValue] = useState('');
  const myNews = allPost.filter(
    (news) => news.author === localStorage.getItem(`full_name`) && news.status === "Đang chờ duyệt"
  );

  function directCreatePost() {
    navigate(`/account/new-post`)
  }

  const renderHeaderTable = () => {
    return (
      <thead>
        <tr>
          <th className='text-center'>STT</th>
          <th className='text-center'>Tiêu đề</th>
          <th className='text-center' style={{ minWidth: "100px" }}>Ngày soạn</th>
          <th className='text-center' style={{ minWidth: "100px" }}>Trạng thái</th>
          <th className='text-center' style={{ minWidth: "100px" }}>Nhận xét</th>
        </tr>
      </thead>
    );
  };

  const renderBodyTable = () => {
    return (
      <tbody>
        {myNews
          .filter((value) => {
            if (filterValue === '') {
              return value;
            } else if (
              value.title.toLowerCase().includes(filterValue.toLowerCase())
            ) {
              return value;
            }
          })
          .map((item, index) => {
            return (
              <tr key={item.slug}>
                <th scope='row' className='text-center'>
                  {index + 1}
                </th>
                <td className='text-center line-1'>{item.title}</td>
                <td className='text-center'>{item.releaseDate}</td>
                <td className='text-center'>
                  <Badge
                    color={
                      item.status === 'Hoạt động'
                        ? 'primary'
                        : item.status === 'Đang chờ duyệt'
                          ? 'secondary'
                          : 'danger'
                    }
                    className='align-items-center'
                  >
                    {item.status}
                  </Badge>
                </td>
                <td className='text-center'></td>
              </tr>
            );
          })}
      </tbody>
    );
  };

  const handleChange = (e) => {
    setFilterValue(e.target.value);
  };

  return (
    <>
      <Row className='mt-2'>
        <Col>
          <InputGroup>
            <Button color='light' className='border btn-lg'>
              <AiOutlineSearch />
            </Button>
            <Input
              bsSize='lg'
              className='ml-3'
              placeholder='Tìm kiếm...'
              value={filterValue}
              onChange={handleChange}
            />
            <Button color='light' className='border btn-lg'>
              <RiDeleteBack2Line onClick={() => setFilterValue('')} />
            </Button>
          </InputGroup>
        </Col>
      </Row>

      <Row className='mt-3 ' style={{ minHeight: '85vh' }}>
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
              <Button className='btn-sm' color='primary' onClick={directCreatePost}>
                Thêm bài viết
              </Button>
            </div>

            {myNews.length === 0
              ?
              <h3 className='mt-2'>Chưa có bài viết</h3>
              :
              <Table
                hover
                borderless
                size='sm'
                className='mt-3 bg-fff'
                bordered
                responsive
              >
                {renderHeaderTable()}
                {renderBodyTable()}
              </Table>
            }
          </div>
        </Col>
      </Row>
    </>
  );
}

export default PendingPost;
