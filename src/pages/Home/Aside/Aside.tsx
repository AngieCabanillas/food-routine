import { useRecipeContext } from "../../../shared/contexts/RecipesProvider";
import Container from "../../../ui/Container";
import CardRecipeSelected from "./CardRecipeSelected";

export const Aside = () => {
  const { recipes, removeRecipe } = useRecipeContext();

  const onRemove = (id: string) => {
    removeRecipe(id);
  };

  return (
    <Container
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      gap="8px"
    >
      {recipes.map((recipe, index) => {
        return (
          <CardRecipeSelected key={index} recipe={recipe} onRemove={onRemove} />
        );
      })}
    </Container>
  );
};

export default Aside;
