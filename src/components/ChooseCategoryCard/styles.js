import styled from "styled-components";
import { sizes } from "../../theme";
export const CardWrapper = styled.div`
  cursor: pointer;
  width: 23.4%;
  border: 1px solid #e5e5e5;
  padding: 32px;
  margin-top: 48px;

  background-color: ${(p) => p.isActive && p.theme.colors.yellow};
  @media only screen and (max-width: ${sizes.laptop}) {
    width: 45%;
    :not(:last-child) {
      margin-right: 0;
    }
  }
  @media only screen and (max-width: ${sizes.tablet}) {
    width: 70%;
  }
  :hover {
    background-color: ${(p) => !p.isActive && p.theme.colors.yellowLight};
    cursor: pointer;
  }
`;
export const Icon = styled.img``;
export const Title = styled.h5`
  margin-top: 16px;
  font-size: 28px;
  font-family: ${({ theme }) => theme.fonts.primary};
  letter-spacing: -1px;
`;
export const Description = styled.p`
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.greyMedium};
  line-height: 28px;
`;
export const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.yellowLight};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
