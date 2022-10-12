import { CardWrapper, Icon, Title, Description, IconWrapper } from "./styles";
import BusinessIcon from "../../assets/icons/business.png";
const ChooseCategoryCard = ({ icon, title, desc, isActive }) => {
  return (
    <CardWrapper isActive={isActive}>
      <IconWrapper>
        <Icon src={icon} />
      </IconWrapper>
      <Title>{title}</Title>
      <Description>{desc} </Description>
    </CardWrapper>
  );
};

export default ChooseCategoryCard;
