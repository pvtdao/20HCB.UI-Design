import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import Swal from "sweetalert2";
import uniqid from 'uniqid';
import { category } from '../../fakeData/category';
import { location } from '../../fakeData/location';
import getFullDate from '../../uitl/getFullDate';
import ButtonTag from '../Common/ButtonTag';
import EditorField from '../Common/Editor';
import Loader from '../Loader';

function CreatePost(props) {
  const [tag, setTag] = React.useState("")
  const [tagList, setTagList] = React.useState([])
  const [isErrorTag, setIsErrorTag] = React.useState(false)

  const fileRef = React.useRef();
  const navigate = useNavigate()
  const [isLoad, setIsLoad] = React.useState(false);

  const todayTime = new Date()
  const { date, month, year } = getFullDate(todayTime)
  const randomSlug = (Math.random() + 2).toString(36).substring(2);

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
    setTimeout(() => {
      setIsLoad(false);
    }, 1500);
  }, [isLoad])

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
      reporter_id: +JSON.parse(localStorage.getItem("@user"))["id"],
      evaluation_desc: "",
      author: JSON.parse(localStorage.getItem("@user"))["full_name"],
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
      const new_posts = JSON.parse(localStorage.getItem("new_posts"))
      const newAllPost = all_post.push(data)
      const newNewPosts = new_posts.unshift(data)

      localStorage.removeItem("all_post")
      localStorage.setItem("all_post", JSON.stringify(all_post))
      localStorage.setItem("new_posts", JSON.stringify(new_posts))

      setIsLoad(true)

      setTimeout(() => {
        Swal.fire({
          icon: 'success',
          title: 'Thành công',
          text: 'Đã thêm bài viết thành công!',
          confirmButtonText: 'Save',
        }).then((result) => {
          if (result.isConfirmed) {
            navigate(`/account/my-posts`)
          }
        })
      }, 1500)
    }
  }

  return <>
    {isLoad ? <Loader /> :
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
                      value={value.location}
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
                      value={value.linkNews}
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
                      value={value.logoNews}
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
                      value={value.category}
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
                        value={value.title}
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
                          ref={fileRef}
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
                      value={value.shortDes}
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
                    <EditorField onEditorStateChange={getDetailEditor} value={value.content} />
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
    }
  </>;
}

export default CreatePost;
