import styled from "styled-components";
import { sizes } from "../../theme";
export const ButtonStyles = styled.button`
  cursor: pointer;
  height: 48px;
  padding-left: 48px;
  padding-right: 48px;
  font-weight: 700;
  font-size: 18px;
  background-color: ${(p) =>
    (p.bg === "yellow" && p.theme.colors.yellow) || "white"};
  border-radius: 2px;
  border: none;
  @media only screen and (max-width: ${sizes.mobile}) {
    height: 40px;
    padding-left: 40px;
    padding-right: 40px;
    font-size: 16px;
  }
`;
