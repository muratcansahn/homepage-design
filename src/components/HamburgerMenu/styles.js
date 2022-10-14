import styled from "styled-components";
import { sizes } from "../../theme";
export const Wrapper = styled.div`
  cursor: pointer;
  height: 40px;
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (min-width: ${sizes.laptop}) {
    display: none;
  }
`;
export const Top = styled.div`
  width: 35px;
  height: 5px;
  background-color: white;
  margin-bottom: 5px;
  rotate: ${(p) => (p.isOpen ? "45deg" : "0deg")};
  transform: ${(p) => (p.isOpen ? "translate(7px, 7px)" : "none")};
  transition: all 0.4s ease-in-out;
`;
export const Middle = styled.div`
  width: 35px;
  height: 5px;
  background-color: white;
  margin-bottom: 5px;
  display: ${(p) => p.isOpen && "none"};
`;
export const Bottom = styled.div`
  width: 35px;
  height: 5px;
  background-color: white;
  margin-bottom: 5px;
  rotate: ${(p) => (p.isOpen ? "-45deg" : "0deg")};
  transition: all 0.4s ease-in-out;
`;
