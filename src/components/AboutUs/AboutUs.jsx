import {
  Topbar,
  TopbarLeft,
  TopbarMiddle,
  TopbarRight,
  AboutUsStyles,
  AboutUsWrapper,
  Left,
  Right,
  TopTitle,
  AboutUsTitle,
  AboutUsText,
  AboutUsReadMore,
  OurMissionTitle,
} from "./styles";

const AboutUs = () => {
  return (
    <AboutUsStyles>
      <Topbar>
        <TopbarLeft />
        <TopbarMiddle />
        <TopbarRight />
      </Topbar>
      <AboutUsWrapper>
        <Left>
          <TopTitle>ABOUT US</TopTitle>
          <AboutUsTitle>
            We are a community of content writers who share their learnings
          </AboutUsTitle>
          <AboutUsText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </AboutUsText>
          <AboutUsReadMore>Read More</AboutUsReadMore>
        </Left>
        <Right>
          <TopTitle>OUR MISSION</TopTitle>
          <OurMissionTitle>
            Creating valuable content for creatives all around the world
          </OurMissionTitle>
          <AboutUsText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AboutUsText>
        </Right>
      </AboutUsWrapper>
    </AboutUsStyles>
  );
};

export default AboutUs;
