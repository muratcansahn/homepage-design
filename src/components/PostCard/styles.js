import styled from "styled-components";
import { sizes } from "../../theme";
export const PostCardStyles = styled.div`
  padding: 32px;
  height: 180px;
  box-sizing: border-box;
  background-color: ${(p) => p.isActive && p.theme.colors.yellowLight};
  @media only screen and (max-width: ${sizes.tablet}) {
    width: 100%;
    padding: 16px;
  }
  :hover {
    border-right: 3px solid ${(p) => !p.isActive && p.theme.colors.yellow};
  }
`;
export const PostCardInfo = styled.div`
  display: flex;
  font-weight: 500;
  color: ${(props) => props.theme.colors.greyDark};
  @media only screen and (max-width: ${sizes.mobile}) {
    font-size: 14px;
  }
`;
export const PostCardInfoSpan = styled.div`
  color: ${(props) => props.theme.colors.purple};
  font-weight: 500;
  @media only screen and (max-width: ${sizes.mobile}) {
    font-size: 14px;
  }
`;
export const PostCardTitle = styled.h4`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 24px;
  line-height: 29px;
  margin-top: 8px;
  width: 370px;
  cursor: pointer;
  @media only screen and (max-width: ${sizes.tablet}) {
    width: 100%;
    font-size: 22px;
  }
`;
export const PostCardInfoDate = styled.span`
  @media only screen and (max-width: ${sizes.tablet}) {
    display: none;
  }
`;
