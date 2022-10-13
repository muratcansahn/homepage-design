import {
  AuthorCardWrapper,
  AuthorImage,
  AuthorName,
  AuthorDescription,
  AuthorIcons,
  AuthorIcon,
} from "./styles";
import facebook from "../../assets/icons/facebook.png";
import twitter from "../../assets/icons/twitter.png";
import linkedin from "../../assets/icons/linkedin.png";
import instagram from "../../assets/icons/instagram.png";

const AuthorCard = ({ name, img, isActive }) => {
  return (
    <AuthorCardWrapper>
      <AuthorImage src={img} />
      <AuthorName>{name}</AuthorName>
      <AuthorDescription>Content Writer @Company </AuthorDescription>
      <AuthorIcons>
        <AuthorIcon src={facebook} />
        <AuthorIcon src={twitter} />
        <AuthorIcon src={instagram} />
        <AuthorIcon src={linkedin} />
      </AuthorIcons>
    </AuthorCardWrapper>
  );
};

export default AuthorCard;
