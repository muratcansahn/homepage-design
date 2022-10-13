import styled from "styled-components";
import { sizes } from "../../theme";
export const AboutUsStyles = styled.section`
  padding: 155px 80px 0 80px;
  @media only screen and (max-width: ${sizes.tablet}) {
    padding: 20px 40px 0 40px;
  }
  @media only screen and (max-width: ${sizes.mobile}) {
    padding: 0;
  }
`;
export const Topbar = styled.div`
  height: 23px;
  display: flex;
`;
export const TopbarLeft = styled.div`
  height: 100%;
  width: 15%;
`;
export const TopbarMiddle = styled.div`
  background-color: ${({ theme }) => theme.colors.yellow};
  height: 100%;
  width: 60%;
`;
export const TopbarRight = styled.div`
  background-color: ${({ theme }) => theme.colors.purple};
  height: 100%;
  width: 25%;
`;
export const AboutUsWrapper = styled.div`
  height: 523px;
  background-color: ${({ theme }) => theme.colors.lavander};
  padding-top: 96px;
  display: flex;
  @media only screen and (max-width: ${sizes.laptop}) {
    flex-direction: column;
    height: auto;
    padding-bottom: 30px;
  }
  @media only screen and (max-width: ${sizes.mobile}) {
    padding-top: 40px;
  }
`;
export const Left = styled.div`
  margin-left: 80px;
  width: 515px;
  @media only screen and (max-width: ${sizes.laptop}) {
    width: 100%;
    padding-right: 100px;
    height: inherit;
  }
  @media only screen and (max-width: ${sizes.mobile}) {
    margin-left: 10px;
    padding-right: 10px;
  }
`;
export const Right = styled.div`
  width: 515px;
  margin-left: 60px;
  @media only screen and (max-width: ${sizes.laptop}) {
    width: 100%;
    padding-right: 100px;
    margin-top: 30px;
  }
  @media only screen and (max-width: ${sizes.mobile}) {
    margin-left: 10px;
    padding-right: 10px;
  }
`;
export const TopTitle = styled.h4`
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 3px;
  @media only screen and (max-width: ${sizes.tablet}) {
    text-align: center;
  }
`;
export const AboutUsTitle = styled.h3`
  margin-top: 24px;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 36px;
  line-height: 48px;
  letter-spacing: -2px;
  padding-right: 25px;
  @media only screen and (max-width: ${sizes.laptop}) {
    font-size: 32px;
    line-height: 36px;
  }
  @media only screen and (max-width: ${sizes.tablet}) {
    line-height: 34px;
    font-size: 28px;
  }
`;
export const AboutUsText = styled.p`
  color: ${({ theme }) => theme.colors.greyMedium};
  margin-top: 16px;
  line-height: 28px;
`;
export const AboutUsReadMore = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.purple};
  margin-top: 16px;
  cursor: pointer;
`;
export const OurMissionTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  letter-spacing: -1px;
  margin-top: 24px;
  padding-right: 25px;
  @media only screen and (max-width: ${sizes.mobile}) {
    margin-left: 10px;
  }
  @media only screen and (max-width: ${sizes.tablet}) {
    line-height: 34px;
    width: 100%;
  }
`;
