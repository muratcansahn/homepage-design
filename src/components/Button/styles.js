import styled from "styled-components";
export const ButtonStyles = styled.button`
  height: 48px;
  padding-left: 48px;
  padding-right: 48px;
  font-weight: 700;
  font-size: 18px;
  background-color: ${(p) => p.bg || "white"};
  border-radius: 2px;
`;
