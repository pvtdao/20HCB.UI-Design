import React from 'react';
import { Container, Button, Input, InputGroup } from 'reactstrap';
import printDate from '../../uitl/printDate';
import { AiOutlineSearch } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function SubHeader(props) {
  const todayTime = new Date()
  const todayString = printDate(todayTime)

  return (
    <div className='subHeader'>
      <Container >
        <div className='subHeader__container d-flex justify-content-between align-items-center'>
          <div className="subHeader__date">
            {todayString}
          </div>
          <div className="subHeader__action d-flex align-items-center">
            <Button color='light' className='btn-sm ml-1'>
              Đăng nhập
            </Button>
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
      </Container>
    </div>
  );
}

export default SubHeader;
