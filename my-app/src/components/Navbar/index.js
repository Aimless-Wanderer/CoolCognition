import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to = '/'>
                    CoolCognition
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='yourFridge'>Abstract</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='Services'>Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to=''>Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/Inventory">Beta Test</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>  
    </>
  );
}

export default Navbar;