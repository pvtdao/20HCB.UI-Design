import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Badge, Button, Col, Input, InputGroup, Row, Table } from 'reactstrap';
import { totalNews } from '../../fakeData/news';
import { RiDeleteBack2Line } from 'react-icons/ri';
import { allPost } from '../../fakeData/allPost';
import { useNavigate } from 'react-router-dom';
import { newPosts } from '../../fakeData/newPost';
import Swal from 'sweetalert2';
import Loader from '../Loader';

function PendingPost(props) {
  const navigate = useNavigate()

  const [filterValue, setFilterValue] = useState('');
  const [isLoad, setIsLoad] = React.useState(true);


  const all_post = JSON.parse(localStorage.getItem("all_post")) ?? allPost
  const new_post = JSON.parse(localStorage.getItem("new_posts")) ?? newPosts
  const role = JSON.parse(localStorage.getItem("@user"))["role"]
  let myNews = []

  if (role === "admin" || role === "editor") {
    myNews = all_post.filter(
      (news) => news.status === "Đang chờ duyệt"
    );
  }
  else {
    myNews = all_post.filter(
      (news) => news.author === JSON.parse(localStorage.getItem(`@user`))["full_name"] && news.status === "Đang chờ duyệt"
    );
  }

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoad(false);
    }, 1500);
  }, [isLoad])


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
          {JSON.parse(localStorage.getItem("@user"))["role"] === "admin" || JSON.parse(localStorage.getItem("@user"))["role"] === "editor"
            ? <th className='text-center' style={{ minWidth: "100px" }}>Actions</th>
            : <th className='text-center' style={{ minWidth: "100px" }}>Nhận xét</th>
          }

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
                <td className='text-center'>
                  {role === "admin" || role === "editor"
                    ? <div className='d-flex align-items-center justify-content-around'>
                      <Badge style={{ cursor: "pointer" }} onClick={() => handleOk(item.slug)} color='primary'>Duyệt</Badge>
                      <Badge style={{ cursor: "pointer" }} onClick={() => handleNo(item.slug)} color='danger'>Từ chối</Badge>
                    </div>
                    : ""}
                </td>
              </tr>
            );
          })}
      </tbody>
    );
  };

  const handleOk = (slug) => {
    const pendingPost = myNews.filter((item) => item.slug === slug)[0]
    pendingPost.status = "Hoạt động"

    console.log("abc: ", pendingPost)
    const indexAllPost = all_post.findIndex(post => post.slug === slug)
    const indexNewPost = new_post.findIndex(post => post.slug === slug)

    if (indexAllPost > -1) {
      // all_post.splice(index, 1); // 2nd parameter means remove one item only
      all_post[indexAllPost] = pendingPost
    }

    if (indexNewPost > -1) {
      new_post[indexNewPost] = pendingPost
    }

    localStorage.setItem("all_post", JSON.stringify(all_post))
    localStorage.setItem("new_posts", JSON.stringify(new_post))

    setIsLoad(true)


    setTimeout(() => {
      Swal.fire({
        icon: 'success',
        title: 'Thành công',
        text: 'Duyệt bài viết thành công!',
        confirmButtonText: 'Save',
      }).then((result) => {
        if (result.isConfirmed) {
          myNews.filter(item => item.slug !== slug)
          navigate(`/account/pending-posts`)
        }
      })
    }, 1500)
  }

  const handleNo = (slug) => {
    console.log("slug", slug)

  }

  const handleChange = (e) => {
    setFilterValue(e.target.value);
  };

  return (
    <>
      {isLoad ? <Loader /> :
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
      }
    </>
  );
}

export default PendingPost;
