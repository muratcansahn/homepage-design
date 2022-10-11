import {
  PostCardStyles,
  PostCardInfo,
  PostCardInfoSpan,
  PostCardTitle,
} from "./styles";
const PostCard = ({ person, date, title, isActive }) => {
  return (
    <PostCardStyles isActive={isActive}>
      <PostCardInfo>
        By&nbsp;
        <PostCardInfoSpan>{person} &nbsp; |</PostCardInfoSpan>
        &nbsp; {date}
      </PostCardInfo>
      <PostCardTitle>{title}</PostCardTitle>
    </PostCardStyles>
  );
};

export default PostCard;
