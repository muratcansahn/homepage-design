import styled from "styled-components";
export const AboutUsStyles = styled.section`
  padding: 155px 80px 0 80px;
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
`;
export const Left = styled.div`
  margin-left: 80px;
  width: 515px;
`;
export const Right = styled.div`
  width: 515px;
  margin-left: 60px;
`;
export const TopTitle = styled.h4`
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 3px;
`;
export const AboutUsTitle = styled.h3`
  margin-top: 24px;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 36px;
  line-height: 48px;
  letter-spacing: -2px;
  padding-right: 25px;
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
`;
export const OurMissionTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  letter-spacing: -1px;
  margin-top: 24px;
  padding-right: 25px;
`;
