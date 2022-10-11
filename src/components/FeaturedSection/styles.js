import styled from "styled-components";
export const FeaturedStyles = styled.section`
  display: flex;
  height: auto;
  margin-top: 128px;
  padding: 0 80px;
  flex-wrap: wrap;
`;
export const Featured = styled.div`
  width: 57%;
`;
export const FeaturedTitle = styled.h2`
  margin-bottom: 32px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: 36px;
  letter-spacing: -2px;
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
`;
export const FeaturedPostSubText = styled.p`
  color: ${({ theme }) => theme.colors.greyMedium};
  margin-top: 16px;
  width: 550px;
  margin-bottom: 32px;
`;

export const AllPost = styled.div`
  width: 43%;
  padding-left: 32px;
  box-sizing: border-box;
  height: 804px;
`;
export const AllPostTitle = styled.h2`
  margin-bottom: 32px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: 36px;
  letter-spacing: -2px;
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
`;
