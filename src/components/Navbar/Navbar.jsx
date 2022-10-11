import {
  Nav,
  ContainerStyles,
  Logo,
  NavbarMenu,
  NavbarMenuItem,
} from "./styles";
import logo from "../../assets/Logo.png";
import { Button, Container } from "../";

const Navbar = () => {
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
      </ContainerStyles>
    </Nav>
  );
};

export default Navbar;
