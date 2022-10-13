import {
  Nav,
  ContainerStyles,
  Logo,
  NavbarMenu,
  NavbarMenuItem,
  HamburgerMenuIcon,
  MobileMenu,
} from "./styles";
import logo from "../../assets/Logo.png";
import { Button } from "../";
import HamburgerMenu from "../../assets/icons/hamburger.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarMenuItems = ["Home", "Blog", "About Us", "Contact Us"];
  return (
    <Nav>
      <ContainerStyles>
        <Logo src={logo} />
        <NavbarMenu>
          {navbarMenuItems.map((item, i) => (
            <NavbarMenuItem key={i}>{item}</NavbarMenuItem>
          ))}
          <Button>Subscribe</Button>
        </NavbarMenu>
        <HamburgerMenuIcon
          src={HamburgerMenu}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
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
