import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 80px;
  margin-top: 128px;
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
  margin-top: 48px;
  display: flex;
`;
