import {
  FeaturedStyles,
  Featured,
  FeaturedTitle,
  FeaturedPostCard,
  FeaturedPostImg,
  FeaturedPostAbout,
  FeaturedPostSpan,
  FeaturedPostTitle,
  FeaturedPostSubText,
  AllPost,
  AllPostTop,
  ViewAll,
  AllPostTitle,
} from "./styles";
import { useState } from "react";
import { Button, PostCard } from "../";
import FeaturedImage from "../../assets/featured-image.jpeg";
import { PostCardItems } from "../../utils";
const FeaturedSection = () => {
  const [isActive, setIsActive] = useState(2);
  console.log(isActive);
  return (
    <FeaturedStyles>
      <Featured>
        <FeaturedTitle>Featured Post</FeaturedTitle>
        <FeaturedPostCard>
          <FeaturedPostImg src={FeaturedImage} />
          <FeaturedPostAbout>
            By&nbsp;
            <FeaturedPostSpan>John Doe </FeaturedPostSpan> | May 23,2022
          </FeaturedPostAbout>
          <FeaturedPostTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.{" "}
          </FeaturedPostTitle>
          <FeaturedPostSubText>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </FeaturedPostSubText>
          <Button bg="yellow">Read More&nbsp;></Button>
        </FeaturedPostCard>
      </Featured>
      <AllPost>
        <AllPostTop>
          <AllPostTitle>All Posts</AllPostTitle>
          <ViewAll>View All</ViewAll>
        </AllPostTop>
        {PostCardItems.map((item) => (
          <PostCard
            key={item.id}
            person={item.person}
            date={item.date}
            title={item.title}
            isActive={isActive === item.id}
          />
        ))}
      </AllPost>
    </FeaturedStyles>
  );
};

export default FeaturedSection;
