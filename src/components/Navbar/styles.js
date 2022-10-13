import styled from "styled-components";
import { sizes } from "../../theme";
export const Nav = styled.nav`
  width: 100vw;
  height: 80px;
  background-color: ${(props) => props.theme.colors.black};
`;
export const ContainerStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 80px;
  @media only screen and (max-width: ${sizes.laptop}) {
    padding-left: 20px;
    padding-right: 30px;
  }
`;
export const Logo = styled.img`
  @media only screen and (max-width: ${sizes.laptop}) {
    width: 100px;
  }
`;
export const NavbarMenu = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  @media only screen and (max-width: ${sizes.laptop}) {
    display: none;
  }
`;
export const NavbarMenuItem = styled.li`
  margin-left: 12px;
  margin-right: 12px;
  color: white;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  list-style-type: none;

  font-family: "Quicksand", sans-serif;
  @media only screen and (max-width: ${sizes.laptop}) {
    font-size: 16px;
    color: ${(props) => props.theme.colors.black};
    font-weight: 600;
    text-transform: uppercase;
    margin-top: 12px;
    text-align: center;
    margin-bottom: 6px;
  }
`;
export const HamburgerMenuIcon = styled.img`
  color: white;
  width: 35px;
  height: 25px;
  @media only screen and (min-width: ${sizes.laptop}) {
    display: none;
  }
`;
export const MobileMenu = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.yellowLight};
  position: absolute;
  left: ${(props) => (props.isOpen ? "0" : "-100%")};
  transition: all 0.5s ease-in-out;
  padding-top: 20px;
  padding-bottom: 20px;
`;
