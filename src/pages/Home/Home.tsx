import { useState } from "react";
import { useRecipeContext } from "../../shared/contexts/RecipesProvider";
import { RecipeType } from "../../shared/models/recipes.model";
import { getRecipes } from "../../shared/services/recipesService";
import Card from "../../ui/Card";
import Container from "../../ui/Container";
import LayoutGeneral from "../../ui/Layouts/LayoutGeneral";
import Aside from "./Aside";
import Categories from "./Categories";

const Home = () => {
  const { addRecipe } = useRecipeContext();

  const [recipes, setRecipes] = useState<Array<RecipeType>>([]);

  const onClickCategory = (category: string) => {
    const data = getRecipes(category);
    data.then((data) => {
      setRecipes(data.data.meals);
    });
  };

  const onClickCard = (data: RecipeType) => {
    addRecipe(data);
  };

  return (
    <LayoutGeneral
      navbar={"FOOD ROUTINE"}
      categories={
        <Categories onClick={(category) => onClickCategory(category)} />
      }
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
                id={recipe.idMeal}
                src={recipe.strMealThumb}
                title={recipe.strMeal}
                onClick={onClickCard}
              />
            );
          })}
        </Container>
      }
      aside={<Aside />}
    />
  );
};

export default Home;
