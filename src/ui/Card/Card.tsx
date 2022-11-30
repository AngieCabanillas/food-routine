import styled from "styled-components";
import Button from "../Button";
import Container from "../Container";

const Card = () => {
  return (
    <StyledCard width="280px" height="390px" backgroundColor="#fff">
      <Container className="card__image" width="100%" height="215px">
        Image
      </Container>
      <Container>
        <p>Food name</p>
        <p>Description</p>
      </Container>
      <Button title="Button" />
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
