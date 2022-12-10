import Card from "../../ui/Card";
import Container from "../../ui/Container";
import LayoutGeneral from "../../ui/Layouts/LayoutGeneral";
import Categories from "./Categories";

const Home = () => {
  return (
    <LayoutGeneral
      navbar={undefined}
      categories={<Categories />}
      foods={
        <Container
          width="100%"
          height="100%"
          display="flex"
          flexWrap="wrap"
          gap="24px"
          padding="24px"
          overFlowY="auto"
        >
          <Card />
          <Card />
          <Card />
          <Card />
        </Container>
      }
      aside={undefined}
    />
  );
};

export default Home;
