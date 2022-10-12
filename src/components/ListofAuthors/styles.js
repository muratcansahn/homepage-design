import styled from "styled-components";
export const Wrapper = styled.section`
  margin-top: 128px;
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h5`
  font-size: 36px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -2px;
`;
export const AuthorListContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
