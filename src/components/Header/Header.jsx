import React from 'react';
import {
  Collapse, Container, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar,
  NavbarBrand,
  NavbarToggler, NavItem,
  NavLink,
  UncontrolledDropdown
} from 'reactstrap';
import { category } from "../../fakeData/category"

function Header(props) {
  console.log(category.slice(1, 10))
  return (
    <header className='header'>
      <Container >
        <div className='header__container d-flex'>

          <div className='header__navbar'>
            <Navbar expand='md' light>
              <NavbarBrand href='/'>
                <div className='header__logo'>
                  <img
                    src='https://seeklogo.com/images/N/nbc-news-logo-EDDBA8ADC9-seeklogo.com.png'
                    alt='logo'
                  />
                </div>
              </NavbarBrand>

              <NavbarToggler onClick={function noRefCheck() { }} />
              <Collapse navbar>
                <Nav className='me-auto' navbar>
                  {category.slice(1, 10).map(cate => {
                    return (
                      <NavItem key={cate.id}>
                        <NavLink href={`/category/${cate.name}`} className='color-black fw-500'>{cate.name}</NavLink>
                      </NavItem>
                    )
                  })}
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
