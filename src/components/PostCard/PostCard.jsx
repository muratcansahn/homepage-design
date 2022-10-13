import {
  PostCardStyles,
  PostCardInfo,
  PostCardInfoSpan,
  PostCardTitle,
  PostCardInfoDate,
} from "./styles";
const PostCard = ({ person, date, title, isActive }) => {
  return (
    <PostCardStyles isActive={isActive}>
      <PostCardInfo>
        By&nbsp;
        <PostCardInfoSpan>{person} &nbsp; </PostCardInfoSpan>
        <PostCardInfoDate> &nbsp;| {date}</PostCardInfoDate>
      </PostCardInfo>
      <PostCardTitle>{title}</PostCardTitle>
    </PostCardStyles>
  );
};

export default PostCard;
