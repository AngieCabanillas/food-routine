import { createContext, useContext, useState } from "react";
import { usePersistedState } from "../hooks/usePersistedState";
import { RecipeType } from "../models/recipes.model";

export const RecipesContext = createContext<{
  recipes: Array<RecipeType>;
  addRecipe: (recipe: RecipeType) => void;
  removeRecipe: (id: string) => void;
} | null>(null);

export const useRecipeContext = () => {
  const context = useContext(RecipesContext);

  if (context === null) {
    throw new Error("useRecipeContext must be used within a RecipesContext");
  }

  return context;
};

type RecipeProviderProps = {
  children: React.ReactNode;
};

export const RecipesProvider: React.FC<RecipeProviderProps> = ({
  children,
}) => {
  const [recipes, setRecipes] = usePersistedState<Array<RecipeType>>(
    "recipes",
    []
  );

  const addRecipe = (recipe: RecipeType) => {
    setRecipes((prev) => [...prev, recipe]);
  };

  const removeRecipe = (id: string) => {
    setRecipes((prev) => prev.filter((recipe) => recipe.idMeal !== id));
  };

  return (
    <RecipesContext.Provider
      value={{
        recipes,
        addRecipe,
        removeRecipe,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};
