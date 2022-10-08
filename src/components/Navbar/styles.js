import styled from "styled-components";
export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme.colors.black};
`;
export const ContainerStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;
export const Logo = styled.img``;
export const NavbarMenu = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;
export const NavbarMenuItem = styled.li`
  margin-left: 12px;
  margin-right: 12px;
  color: white;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  font-family: "Quicksand", sans-serif;
`;
