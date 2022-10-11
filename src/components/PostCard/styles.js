import styled from "styled-components";
export const PostCardStyles = styled.div`
  padding: 32px;
  height: 180px;
  box-sizing: border-box;
  background-color: ${(p) => p.isActive && p.theme.colors.yellowLight};
`;
export const PostCardInfo = styled.p`
  display: flex;
  font-weight: 500;
  color: ${(props) => props.theme.colors.greyDark};
`;
export const PostCardInfoSpan = styled.div`
  color: ${(props) => props.theme.colors.purple};
  font-weight: 500;
`;
export const PostCardTitle = styled.h4`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 24px;
  line-height: 32px;
  margin-top: 8px;
  width: 370px;
  cursor: pointer;
`;
