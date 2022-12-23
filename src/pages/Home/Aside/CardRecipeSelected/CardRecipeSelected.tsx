import { RecipeType } from "../../../../shared/models/recipes.model";
import Button from "../../../../ui/Button";
import Container from "../../../../ui/Container";

type CardRecipeSelectedProps = {
  recipe: RecipeType;
  onRemove: (id: string) => void;
};

export const CardRecipeSelected = ({
  recipe,
  onRemove,
}: CardRecipeSelectedProps) => {
  const onClick = () => {
    onRemove(recipe.idMeal);
  };

  return (
    <Container
      width="100%"
      height="80px"
      backgroundColor="#F7F7FC"
      display="flex"
      alignItems="center"
      padding="5px"
    >
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        width="70px"
        height="70px"
      />
      <Container
        width="100%"
        height="100%"
        padding="5px 5px 5px 15px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        {recipe.strMeal}
        <Button width="100px" title="Remove" onClick={onClick} />
      </Container>
    </Container>
  );
};

export default CardRecipeSelected;
