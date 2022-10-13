import {
  HeroSectionStyles,
  HeroContainer,
  HeroTopText,
  HeroTopTextSpan,
  HeroTopTextContainer,
  HeroTitle,
  AboutText,
  AboutTextSpan,
  Subtext,
  ReadMoreButton,
} from "./styles";
const HeroSection = () => {
  return (
    <HeroSectionStyles>
      <HeroContainer>
        <HeroTopTextContainer>
          <HeroTopText>POSTED ON </HeroTopText>
          <HeroTopTextSpan>&nbsp; STARTUP </HeroTopTextSpan>
        </HeroTopTextContainer>
        <HeroTitle>Step-by-step guide to choosing great font pairs </HeroTitle>
        <AboutText>
          By <AboutTextSpan>James West </AboutTextSpan>| May 23,2022{" "}
        </AboutText>
        <Subtext>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </Subtext>
        <ReadMoreButton bg="yellow">Read More </ReadMoreButton>
      </HeroContainer>
    </HeroSectionStyles>
  );
};

export default HeroSection;
