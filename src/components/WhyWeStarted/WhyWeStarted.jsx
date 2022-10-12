import {
  Wrapper,
  WhyWeStartedImage,
  WhyWeStartedBox,
  WhyWeStartedTopTitle,
  WhyWeStartedTitle,
  WhyWeStartedDescription,
} from "./styles";
import { Button } from "../";
import WhyWeStartedImg from "../../assets/why-we-started.png";
const WhyWeStarted = () => {
  return (
    <Wrapper>
      <WhyWeStartedImage src={WhyWeStartedImg} />
      <WhyWeStartedBox>
        <WhyWeStartedTopTitle>WHY WE STARTED</WhyWeStartedTopTitle>
        <WhyWeStartedTitle>
          It started out as a simple idea and evolved into our passion{" "}
        </WhyWeStartedTitle>
        <WhyWeStartedDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </WhyWeStartedDescription>
        <Button bg="yellow">Discover Our Story </Button>{" "}
      </WhyWeStartedBox>
    </Wrapper>
  );
};

export default WhyWeStarted;
