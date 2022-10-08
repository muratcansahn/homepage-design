import { Nav, Container, Logo, NavbarMenu, NavbarMenuItem } from "./styles";
import logo from "../../assets/Logo.png";
import { Button } from "../";

const Navbar = () => {
  const navbarMenuItems = ["Home", "Blog", "About Us", "Contact Us"];
  return (
    <Nav>
      <Container>
        <Logo src={logo} />
        <NavbarMenu>
          {navbarMenuItems.map((item, i) => (
            <NavbarMenuItem key={i}>{item}</NavbarMenuItem>
          ))}
          <Button>Subscribe</Button>
        </NavbarMenu>
      </Container>
    </Nav>
  );
};

export default Navbar;
