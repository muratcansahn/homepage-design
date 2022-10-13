import { Wrapper, Top, Middle, Bottom } from "./styles";
const HamburgerMenu = ({ isOpen, setIsOpen }) => {
  return (
    <Wrapper onClick={() => setIsOpen(!isOpen)}>
      <Top isOpen={isOpen} />
      <Middle isOpen={isOpen} />
      <Bottom isOpen={isOpen} />
    </Wrapper>
  );
};

export default HamburgerMenu;
