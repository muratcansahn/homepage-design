import styled from "styled-components";
export const AuthorCardWrapper = styled.div`
  width: 296px;
  background-color: ${(p) =>
    p.isActive ? p.theme.colors.yellowLight : p.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  :not(:last-child) {
    margin-right: 32px;
  }
  height: 324px;
  :hover {
    background-color: ${(p) => p.theme.colors.yellowLight};
  }
  cursor: pointer;
`;
export const AuthorImage = styled.img``;
export const AuthorName = styled.h5`
  margin-top: 20px;
  font-size: 28px;
  font-family: ${({ theme }) => theme.fonts.primary};
`;
export const AuthorDescription = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.greyMedium};
`;
export const AuthorIcons = styled.div`
  margin-top: 20px;
  width: 112px;
  display: flex;
  justify-content: space-between;
`;
export const AuthorIcon = styled.img`
  width: 16px;
  height: 16px;
`;
