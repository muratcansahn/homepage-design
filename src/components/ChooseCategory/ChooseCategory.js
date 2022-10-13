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

  console.log(activeCard);
  return (
    <Wrapper>
      <ChooseCategoryTitle>Choose A Category</ChooseCategoryTitle>
      <ChooseCategoryCardWrapper>
        {CategoryCards.map((item, i) => (
          <ChooseCategoryCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            desc={item.description}
            isActive={i + 1 === activeCard}
            onClick={() => setActiveCard(3)}
          />
        ))}
      </ChooseCategoryCardWrapper>
    </Wrapper>
  );
};

export default ChooseCategory;
