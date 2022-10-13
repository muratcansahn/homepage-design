import styled from "styled-components";
import { sizes } from "../../theme";
export const Wrapper = styled.section`
  margin-top: 128px;
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: ${sizes.laptop}) {
    padding: 0 40px;
    margin-top: 20px;
  }
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
