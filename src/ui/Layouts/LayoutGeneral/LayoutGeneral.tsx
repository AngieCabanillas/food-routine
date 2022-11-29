import styled from "styled-components";
import Container from "../../Container";

type LayoutGeneralProps = {
  navbar: React.ReactNode;
  categories: React.ReactNode;
  foods: React.ReactNode;
  aside: React.ReactNode;
};

const LayoutGeneral = (props: LayoutGeneralProps) => {
  const { navbar, categories, foods, aside } = props;

  return (
    <StyledContainer width="100vw" height="100vh">
      <Container width="100%" height="80px" backgroundColor="#f7f8ff">
        {navbar}
      </Container>
      <Container className="container__categories" width="100%" height="56px">
        {categories}
      </Container>

      <Container width="100%" height="calc(100vh - 136px)" display="flex">
        <Container
          className="container__foods"
          width="calc(100% - 375px)"
          backgroundColor="#eff0f6"
        >
          {foods}
        </Container>
        <Container width="375px">{aside}</Container>
      </Container>
    </StyledContainer>
  );
};

export default LayoutGeneral;

const StyledContainer = styled(Container)`
  .container__categories {
    border-bottom: 2px solid #d9dbe9;
  }

  .container__foods {
    border-right: 2px solid #d9dbe9;
  }
`;
