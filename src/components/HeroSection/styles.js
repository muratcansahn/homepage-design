import styled from "styled-components";
import HeroImage from "../../assets/hero-image.png";
import { Button } from "../";
import { sizes } from "../../theme";
export const HeroSectionStyles = styled.section`
  background: radial-gradient(
      30.56% 76.04% at 74.58% 0%,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url(${HeroImage}) no-repeat center center/cover;
  width: 100%;
  height: 720px;
`;
export const HeroContainer = styled.div`
  padding-top: 128px;
  padding-left: 80px;
  @media only screen and (max-width: ${sizes.tablet}) {
    padding-left: 30px;
    padding-top: 60px;
  }
`;
export const HeroImg = styled.img`
  width: 100%;
  height: 720px;
  object-fit: cover;
  position: absolute;
`;
export const HeroTopText = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 500;
  @media only screen and (max-width: ${sizes.mobile}) {
    font-size: 14px;
  }
`;
export const HeroTopTextSpan = styled.span`
  color: white;
  font-weight: 700;
  @media only screen and (max-width: ${sizes.mobile}) {
    font-weight: 500;
    font-size: 14px;
  }
`;
export const HeroTopTextContainer = styled.div`
  display: flex;
  letter-spacing: 3px;
  @media only screen and (max-width: ${sizes.mobile}) {
    letter-spacing: 1px;
  }
`;
export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 56px;
  line-height: 66px;
  color: white;
  width: 800px;
  margin-top: 24px;
  letter-spacing: -2px;
  @media only screen and (max-width: ${sizes.laptop}) {
    font-size: 40px;
    line-height: 48px;
    width: 80%;
  }
  @media only screen and (max-width: ${sizes.mobile}) {
    font-size: 32px;
  }
`;
export const AboutText = styled.p`
  color: white;
  margin-top: 24px;
`;
export const AboutTextSpan = styled.span`
  color: ${({ theme }) => theme.colors.yellow};
`;
export const Subtext = styled.p`
  color: white;
  line-height: 28px;
  width: 600px;
  margin-top: 16px;
  margin-bottom: 48px;
  @media only screen and (max-width: ${sizes.laptop}) {
    width: 80%;
  }
  @media only screen and (max-width: ${sizes.mobile}) {
    font-size: 14px;
  }
`;
export const ReadMoreButton = styled(Button)``;
