import styled from "styled-components";
import Button from "../Button";
import Container from "../Container";

type CardProps = {
  title: string;
  src: string;
};

const Card: React.FC<CardProps> = (props) => {
  const { src, title } = props;

  return (
    <StyledCard width="280px" height="390px" backgroundColor="#fff">
      <Container className="card__image" width="100%" height="215px">
        <img src={src} alt={title} width="235px" height="200px" />
      </Container>
      <Container>
        <p>{title}</p>
      </Container>
      <Button title="Add" />
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
