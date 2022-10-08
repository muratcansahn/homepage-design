import { ButtonStyles } from "./styles";
const Button = ({ children, bg }) => {
  return <ButtonStyles bg={bg}>{children}</ButtonStyles>;
};

export default Button;
