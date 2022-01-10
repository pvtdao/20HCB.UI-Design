import React from 'react';
import {
  Collapse, Container, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar,
  NavbarBrand,
  NavbarToggler, NavItem,
  NavLink,
  UncontrolledDropdown
} from 'reactstrap';

function Header(props) {
  return (
    <header className='header'>
      <Container >
        <div className='header__container d-flex'>

          <div className='header__navbar'>
            <Navbar expand='md' light>
              <NavbarBrand href='/'>
                <div className='header__logo'>
                  <img
                    src='https://wildaid.org/wp-content/uploads/2020/08/NBC.png'
                    alt='logo'
                  />
                </div>
              </NavbarBrand>
              <NavbarToggler onClick={function noRefCheck() { }} />
              <Collapse navbar>
                <Nav className='me-auto' navbar>
                  <NavItem>
                    <NavLink href='/thoisu/'>Thời sự</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href='/thegioi/'>Thế giới</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href='/kinhdoanh/'>Kinh doanh</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href='/thethao/'>Thể thao</NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink href='/congnghe/'>Công nghệ</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href='/khoahoc/'>Khoa học</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href='/suckhoe/'>Sức khỏe</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href='/giaitri/'>Giải trí</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href='/dulich/'>Du lịch</NavLink>
                  </NavItem>
                  {/* <NavItem>
                    <NavLink href='https://github.com/reactstrap/reactstrap'>
                      GitHub
                    </NavLink>
                  </NavItem>
                  <UncontrolledDropdown inNavbar nav>
                    <DropdownToggle caret nav>
                      Options
                    </DropdownToggle>
                    <DropdownMenu end>
                      <DropdownItem>Option 1</DropdownItem>
                      <DropdownItem>Option 2</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Reset</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown> */}
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
