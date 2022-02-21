import React from 'react';
import { Container, Button, Input, InputGroup, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import printDate from '../../uitl/printDate';
import { AiOutlineSearch } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

function SubHeader(props) {
  const todayTime = new Date()
  const todayString = printDate(todayTime)
  const navigate = useNavigate()

  const directLogin = () => {
    navigate('/login')
  }
  const logged = localStorage.getItem("isLoggedIn") || 'false'

  const [isLoggedIn, setIsLoggedIn] = React.useState(logged)

  React.useEffect(() => {
    setIsLoggedIn(logged)
  }, [logged])


  const handleLogOut = () => {
    setIsLoggedIn('false')
    localStorage.setItem("isLoggedIn", false)
    localStorage.removeItem("@user")
  }
  return (
    <div className='subHeader'>
      <Container >
        <div className='subHeader__container d-flex justify-content-between align-items-center'>
          <div className="subHeader__date">
            {todayString}
          </div>
          <div className="subHeader__action d-flex align-items-center">
            {
              isLoggedIn === 'true'
                ?
                <div className='menu'>
                  <div className="d-flex align-items-center min-w-180">
                    <img className='menu__ava mt-1' src="https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png" alt="avatar" />
                    <p className='menu__name'>{JSON.parse(localStorage.getItem('@user'))["full_name"] || "unknown"}</p>
                  </div>

                  <div className="menu__item">
                    <p className='menu__item-link' onClick={() => navigate('/account')}>Tài khoản</p>
                    {JSON.parse(localStorage.getItem('@user'))["role"] === 'writer' || JSON.parse(localStorage.getItem('@user'))["role"] === 'admin' ?
                      <p className='menu__item-link'>Quản lý bài báo</p>
                      : ""
                    }
                    {JSON.parse(localStorage.getItem('@user'))["role"] === 'admin' ?
                      <p className='menu__item-link'>Quản lý</p>
                      : ""
                    }
                    {JSON.parse(localStorage.getItem('@user'))["role"] === 'editor' ?
                      <p className='menu__item-link'>Quản lý bài báo</p>
                      : ""
                    }
                    <p className='menu__item-link' onClick={handleLogOut}>Đăng xuất</p>
                  </div>
                </div>
                :
                <Button color='light' className='btn-sm ml-1' onClick={directLogin}>
                  Đăng nhập
                </Button>
            }



            <div className='subHeader__action-inputGroup'>
              <InputGroup>
                <Button color='light' className='border btn-sm'>
                  <AiOutlineSearch />
                </Button>
                <Input bsSize="sm" className='ml-3' placeholder='Tìm kiếm...' />
              </InputGroup>
            </div>
            <div className="subHeader__social d-flex align-items-center">
              <div className="subHeader__social-icon subHeader__social-fb d-flex align-items-center justify-content-center">
                <FaFacebookF />
              </div>
              <div className="subHeader__social-icon subHeader__social-tw d-flex align-items-center justify-content-center">
                <FaTwitter />
              </div>
              <div className="subHeader__social-icon subHeader__social-ins d-flex align-items-center justify-content-center">
                <FaInstagram />
              </div>
              <div className="subHeader__social-icon subHeader__social-ytb d-flex align-items-center justify-content-center">
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>
      </Container >
    </div >
  );
}

export default SubHeader;
