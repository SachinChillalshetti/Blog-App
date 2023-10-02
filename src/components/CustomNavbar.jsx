import { useState } from 'react';
import { NavLink as ReactLink} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';


  const CustomNavbar = () =>{
    const [isOpen,setIsOpen]=useState(false)
  return (
    <div>
      <Navbar 
      color="dark"
      dark
      expand="md"
      fixed=""
      >
        <NavbarBrand tag={ReactLink} to="/">MyBlogs</NavbarBrand>
        <NavbarToggler onClick={()=>setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/about">Feed</NavLink>
            </NavItem>
            
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              categories
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={ReactLink} to="/sports">Sports</DropdownItem>
                <DropdownItem tag={ReactLink} to="/education">Education</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            
            <NavItem>
              <NavLink tag={ReactLink} to="/login">
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/signup">
                Signup
              </NavLink>
            </NavItem>
            
           
          </Nav>
          <NavbarText>Search</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;