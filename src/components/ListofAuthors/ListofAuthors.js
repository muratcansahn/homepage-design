import { Wrapper, Title, AuthorListContainer } from "./styles";
import { AuthorCard } from "../";
import { AuthorsList } from "../../utils";
const ListofAuthors = () => {
  return (
    <Wrapper>
      <Title>List of Authors</Title>
      <AuthorListContainer>
        {AuthorsList.map((author) => (
          <AuthorCard key={author.id} name={author.name} img={author.img} />
        ))}
      </AuthorListContainer>
    </Wrapper>
  );
};
export default ListofAuthors;
