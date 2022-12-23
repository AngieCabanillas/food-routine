import styled from "styled-components";
import { RecipeType } from "../../shared/models/recipes.model";
import Button from "../Button";
import Container from "../Container";

type CardProps = {
  id: string;
  title: string;
  src: string;
  onClick: (data: RecipeType) => void;
};

const Card: React.FC<CardProps> = (props) => {
  const { id, src, title, onClick } = props;

  const onClickCard = () => {
    onClick({ idMeal: id, strMeal: title, strMealThumb: src });
  };

  return (
    <StyledCard width="280px" height="390px" backgroundColor="#fff">
      <Container className="card__image" width="100%" height="215px">
        <img src={src} alt={title} width="235px" height="200px" />
      </Container>
      <Container>
        <p>{title}</p>
      </Container>
      <Button title="Add" onClick={onClickCard} />
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled(Container)`
  border: 2px solid #d9dbe9;
  border-radius: 9px;
  padding: 20px;

  .card__image {
    border-bottom: 2px solid #d9dbe9;
  }
`;
