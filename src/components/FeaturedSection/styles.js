import styled from "styled-components";
import { sizes } from "../../theme";
export const FeaturedStyles = styled.section`
  display: flex;
  height: auto;
  margin-top: 128px;
  padding: 0 80px;
  @media only screen and (max-width: ${sizes.laptop}) {
    flex-direction: column;
  }
  @media only screen and (max-width: ${sizes.tablet}) {
    padding: 0 20px;
  }
  @media only screen and (max-width: ${sizes.mobile}) {
    padding: 0 5px;
  }
`;
export const Featured = styled.div`
  width: 57%;
  @media only screen and (max-width: ${sizes.laptop}) {
    width: 100%;
  }
`;
export const FeaturedTitle = styled.h2`
  margin-bottom: 32px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: 36px;
  letter-spacing: -2px;
  @media only screen and (max-width: ${sizes.laptop}) {
    text-align: center;
    font-size: 32px;
  }
`;
export const FeaturedPostCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.greyLight};
  padding: 32px;
`;
export const FeaturedPostImg = styled.img`
  height: 500px;
  object-fit: cover;
  width: 100%;
  box-sizing: border-box;
  @media only screen and (max-width: ${sizes.tablet}) {
    height: 400px;
  }
  @media only screen and (max-width: ${sizes.mobile}) {
    height: 300px;
  }
`;
export const FeaturedPostAbout = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-top: 16px;
  line-height: 20px;
`;
export const FeaturedPostSpan = styled.span`
  color: ${({ theme }) => theme.colors.purple};
  font-weight: 600;
`;
export const FeaturedPostTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 28px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: -1px;
  margin-top: 16px;
  @media only screen and (max-width: ${sizes.tablet}) {
    font-size: 24px;
    line-height: 32px;
  }
`;
export const FeaturedPostSubText = styled.p`
  color: ${({ theme }) => theme.colors.greyMedium};
  margin-top: 16px;
  width: 550px;
  margin-bottom: 32px;
  @media only screen and (max-width: ${sizes.tablet}) {
    width: 100%;
  }
`;

export const AllPost = styled.div`
  width: 43%;
  padding-left: 32px;
  box-sizing: border-box;
  height: 804px;
  @media only screen and (max-width: ${sizes.laptop}) {
    width: 100%;
    margin-top: 50px;
    padding-left: 16px;
  }
`;
export const AllPostTitle = styled.h2`
  margin-bottom: 32px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: 36px;
  letter-spacing: -2px;
  width: -webkit-fill-available;
  @media only screen and (max-width: ${sizes.tablet}) {
    padding-left: 16px;
  }
`;
export const AllPostTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ViewAll = styled.p`
  color: ${({ theme }) => theme.colors.purple};
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  margin-top: 9px;
  width: 75px;
`;
