import { useState } from "react";
import { ChooseCategoryCard } from "..";
import {
  Wrapper,
  ChooseCategoryTitle,
  ChooseCategoryCardWrapper,
} from "./styles";
import { CategoryCards } from "../../utils";
const ChooseCategory = () => {
  const [activeCard, setActiveCard] = useState(2);
  return (
    <Wrapper>
      <ChooseCategoryTitle>Choose A Category</ChooseCategoryTitle>
      <ChooseCategoryCardWrapper>
        {CategoryCards.map((item) => (
          <ChooseCategoryCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            desc={item.description}
            isActive={item.id === activeCard}
          />
        ))}
      </ChooseCategoryCardWrapper>
    </Wrapper>
  );
};

export default ChooseCategory;
