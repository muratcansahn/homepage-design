import {
  Nav,
  ContainerStyles,
  Logo,
  NavbarMenu,
  NavbarMenuItem,
  MobileMenu,
} from "./styles";
import logo from "../../assets/Logo.png";
import { Button, HamburgerMenu } from "../";

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarMenuItems = ["Home", "Blog", "About Us", "Contact Us"];
  return (
    <Nav>
      <ContainerStyles>
        <Logo src={logo} />
        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        <NavbarMenu>
          {navbarMenuItems.map((item, i) => (
            <NavbarMenuItem key={i}>{item}</NavbarMenuItem>
          ))}
          <Button>Subscribe</Button>
        </NavbarMenu>
      </ContainerStyles>
      <MobileMenu isOpen={isOpen}>
        {navbarMenuItems.map((item, i) => (
          <NavbarMenuItem key={i}>{item}</NavbarMenuItem>
        ))}
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;
