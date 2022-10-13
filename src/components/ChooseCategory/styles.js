import styled from "styled-components";
import { sizes } from "../../theme";

export const Wrapper = styled.div`
  padding: 0 80px;
  margin-top: 128px;
  @media only screen and (max-width: ${sizes.tablet}) {
    padding: 0 40px;
  }
  @media only screen and (max-width: ${sizes.mobile}) {
    padding: 0 0px;
  }
`;
export const ChooseCategoryTitle = styled.h5`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 36px;
  line-height: 48px;
  letter-spacing: -1px;
  display: block;
  margin: 0 auto;
  width: fit-content;
`;
export const ChooseCategoryCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media only screen and (max-width: ${sizes.tablet}) {
    justify-content: center;
  }
`;
