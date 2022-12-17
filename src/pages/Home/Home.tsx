import { useState } from "react";
import { RecipeType } from "../../shared/models/recipes.model";
import { getRecipes } from "../../shared/services/recipesService";
import Card from "../../ui/Card";
import Container from "../../ui/Container";
import LayoutGeneral from "../../ui/Layouts/LayoutGeneral";
import Categories from "./Categories";

const Home = () => {
  const [recipes, setRecipes] = useState<Array<RecipeType>>([]);

  const onClickCard = (category: string) => {
    const data = getRecipes(category);
    data.then((data) => {
      setRecipes(data.data.meals);
    });
  };

  return (
    <LayoutGeneral
      navbar={"FOOD ROUTINE"}
      categories={<Categories onClick={(category) => onClickCard(category)} />}
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
          {recipes.map((recipe) => {
            return (
              <Card
                key={recipe.idMeal}
                src={recipe.strMealThumb}
                title={recipe.strMeal}
              />
            );
          })}
        </Container>
      }
      aside={undefined}
    />
  );
};

export default Home;
