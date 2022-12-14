import styled from "styled-components";
import { sizes } from "../../theme";
export const Wrapper = styled.section`
  margin: 0 80px;
  margin-top: 128px;
  position: relative;
  height: 705px;
  @media only screen and (max-width: ${sizes.laptop}) {
    margin: 0;
    display: flex;
    justify-content: center;
  }
  @media only screen and (max-width: ${sizes.tablet}) {
    margin: 0 20px;
    width: 100%;
  }
`;
export const WhyWeStartedImage = styled.img`
  position: absolute;
  @media only screen and (max-width: ${sizes.laptop}) {
    display: none;
  }
`;
export const WhyWeStartedBox = styled.div`
  width: 706px;
  height: 584px;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 80px;
  background-color: white;
  @media only screen and (max-width: ${sizes.laptop}) {
    left: 0;
  }
  @media only screen and (max-width: ${sizes.tablet}) {
    padding: 20px;
    width: 90%;
  }
`;
export const WhyWeStartedTopTitle = styled.p`
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 3px;
`;
export const WhyWeStartedTitle = styled.h4`
  margin-top: 24px;
  font-size: 48px;
  letter-spacing: -2px;
  font-weight: 700;
  line-height: 64px;
  @media only screen and (max-width: ${sizes.tablet}) {
    font-size: 32px;
    line-height: 48px;
  }
`;
export const WhyWeStartedDescription = styled.p`
  color: ${({ theme }) => theme.colors.greyMedium};
  margin-top: 16px;
  margin-bottom: 32px;
  line-height: 28px;
`;
