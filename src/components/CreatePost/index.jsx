import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Badge, Button, Col, Input, InputGroup, Row, Label, Form, FormGroup, Alert, UncontrolledAlert } from 'reactstrap';
import { totalNews } from '../../fakeData/news';
import { RiDeleteBack2Line } from 'react-icons/ri';
import { category } from '../../fakeData/category'
import { location } from '../../fakeData/location'
import ButtonTag from '../Common/ButtonTag';
import uniqid from 'uniqid';
import Swal from "sweetalert2"
import EditorField from '../Common/Editor';
import getFullDate from '../../uitl/getFullDate';
// import randomstring from "randomstring";

function CreatePost(props) {
  const [tag, setTag] = React.useState("")
  const [tagList, setTagList] = React.useState([])
  const [isErrorTag, setIsErrorTag] = React.useState(false)

  const todayTime = new Date()
  const { date, month, year } = getFullDate(todayTime)
  const randomSlug = (Math.random() + 2).toString(36).substring(2);

  const [allPost, setAllPost] = React.useState([])

  const [value, setValue] = React.useState({
    location: location[0].name,
    linkNews: "",
    logoNews: "",
    category: category[0].name,
    title: "",
    tag: [],
    shortDes: "",
    avatar: "",
    content: "",
    releaseDate: `${date}-${month}-${year}`
  })
  const tagInputRef = React.useRef(null)

  React.useEffect(() => {
    const all_post = JSON.parse(localStorage.getItem("all_post"))
    console.log("1:", all_post)
    console.log("2:", all_post.push("1"))
    console.log("3:", all_post)
    setAllPost(all_post)
  }, [])

  const handleAddTag = () => {
    if (!tag) {
      setIsErrorTag(true)
    } else {
      let error = false
      for (const item of tagList) {
        if (item.tag === tag) {
          error = true

          Swal.fire({
            icon: 'error',
            title: 'Có lỗi xảy ra',
            text: 'Tag đã tồn tại, vui lòng thử lại',
          })
        }
      }

      if (tag.length > 25) {
        Swal.fire({
          icon: 'error',
          title: 'Có lỗi xảy ra',
          text: 'Tag nên ngắn hơi 25 kí tự',
        })

        error = true
      }

      if (!error) {
        const id = uniqid()
        setTagList([...tagList, {
          id,
          tag
        }])
        setTag("")
        tagInputRef.current.focus()
      }
    }
  }

  const handleChangeTag = (e) => {
    const tagValue = e.target.value

    if (tagValue) {
      setIsErrorTag(false)
    }
    setTag(e.target.value)

  }

  const handleDelete = (id) => {
    const newTagList = tagList.filter(item => item.id !== id)
    setTagList(newTagList)
  }

  const handleOnChange = (e) => {
    const name = e.target.name
    const valueInput = e.target.value
    setValue({ ...value, [name]: valueInput })
  }

  const handleOnChangeImage = (e) => {
    const avatar = e.target.files[0]
    let avatarUrl = ""
    const fileReader = new FileReader()
    fileReader.readAsDataURL(avatar)

    fileReader.onloadend = (e) => {
      avatarUrl = e.target.result
      setValue({
        ...value, avatar: {
          src: avatarUrl
        }
      })

      console.log(value)
    }
  }

  const getDetailEditor = (content) => {
    setValue({
      ...value, content: {
        main: content
      }
    });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    const data = {
      ...value,
      slug: randomSlug,
      status: "Đang chờ duyệt",
      tag: tagList,
      reporter_id: +localStorage.getItem("@id"),
      evaluation_desc: "",
      author: localStorage.getItem("full_name"),
      comment: [],
      relaTag: tagList,
      pageRoot: value.linkNews.split("/")[2],
    }

    if (
      !data.avatar || !data.title || !data.linkNews || !data.logoNews || !data.shortDes || data.content.length === 0 ||
      data.content[0] === '' ||
      data.content[0] === '<p></p>'
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Có lỗi xảy ra',
        text: 'Vui lòng nhập đầy đủ thông tin',
      })
    }
    else {
      console.log("value: ", data)

      const all_post = JSON.parse(localStorage.getItem("all_post"))
      const newAllPost = all_post.push(data)

      localStorage.removeItem("all_post")
      localStorage.setItem("all_post", JSON.stringify(all_post))
      localStorage.setItem("new_post", JSON.stringify(data))
    }
  }

  return <>

    <Row className='mt-2 ' style={{ minHeight: '95vh' }}>
      <Col >
        <div
          className='myPosts pd-5 relative'
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.66)',
            minHeight: '100%',
          }}
        >
          <div className='d-flex align-items-center justify-content-between'>
            <h5 className='mg-0'>Bài viết</h5>
          </div>

          <Form className='mt-4' onSubmit={handleOnSubmit} >
            <Row>
              <Col xs={12} md="4">
                <FormGroup>
                  <Label for="location">
                    Chọn vị trí
                  </Label>
                  <Input
                    id="location"
                    name="location"
                    type="select"
                    onChange={handleOnChange}
                  >
                    {location.map(item => {
                      return <option key={item.id}>
                        {item.name}
                      </option>
                    })}
                  </Input>
                </FormGroup>
              </Col>
              <Col xs={12} md="4">
                <FormGroup>
                  <Label for="linkNews">
                    Link bài viết gốc
                  </Label>
                  <Input
                    id="linkNews"
                    name="linkNews"
                    type="text"
                    onChange={handleOnChange}
                  />
                </FormGroup>
              </Col>
              <Col xs={12} md="4">
                <FormGroup>
                  <Label for="logoNews">
                    Link logo báo
                  </Label>
                  <Input
                    id="logoNews"
                    name="logoNews"
                    type="text"
                    onChange={handleOnChange}
                  />
                </FormGroup>
              </Col>
            </Row>


            <Row>
              <Col xs={12} md={6}>
                <FormGroup>
                  <Label for="category">
                    Chọn chuyên mục
                  </Label>
                  <Input
                    id="category"
                    name="category"
                    type="select"
                    onChange={handleOnChange}
                  >
                    {category.map(item => {
                      return <option key={item.id}>
                        {item.name}
                      </option>
                    })}
                  </Input>
                </FormGroup>
              </Col>
              <Col xs={12} md={6} className='d-flex align-items-end'>
                <FormGroup className='flex-fill'>
                  <Label for="tag">
                    Nhập tên tag
                  </Label>
                  <Input
                    id="tag"
                    name="tag"
                    type="text"
                    onChange={handleChangeTag}
                    invalid={isErrorTag}
                    value={tag}
                    ref={tagInputRef}
                  />
                </FormGroup>
                <Button className='mb-3 ml-2' color="primary" onClick={handleAddTag}>Thêm</Button>
              </Col>
            </Row>

            {
              tagList.length !== 0 && <Row>
                <Col>
                  <FormGroup>
                    <Label>
                      Tag đã nhập (Tối đa 5 tag)
                    </Label>
                    <div>
                      {
                        tagList.map(item => {
                          return <ButtonTag key={item.id} name={item.tag} id={item.id} onDelete={(id) => handleDelete(id)} />
                        })
                      }
                    </div>

                  </FormGroup>
                </Col>
              </Row>
            }

            <Row>
              <Col xs={12} md={4} >
                <Row>
                  <Col> <FormGroup className='flex-fill'>
                    <Label for="title">
                      Tiêu đề bài viết
                    </Label>
                    <Input
                      id="title"
                      name="title"
                      type="text"
                      onChange={handleOnChange}
                    />
                  </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="avatar">
                        Ảnh đại diện
                      </Label>
                      <Input
                        id="avatar"
                        name="avatar"
                        type="file"
                        accept="image/png, image/gif, image/jpeg"
                        onChange={handleOnChangeImage}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={8}>
                <FormGroup>
                  <Label for="shortDes">
                    Tóm tắt nội dung
                  </Label>
                  <Input
                    id="shortDes"
                    name="shortDes"
                    type="textarea"
                    style={{ minHeight: "124px" }}
                    onChange={handleOnChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="content">
                    Nội dung chính
                  </Label>
                  <EditorField onEditorStateChange={getDetailEditor} />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col xs={12}
              >
                <Button className='w-100' color="primary" >Thêm bài viết</Button>
              </Col>
            </Row>
          </Form>


        </div>
      </Col>
    </Row>
  </>;
}

export default CreatePost;
