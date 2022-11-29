import { Route, Routes } from "react-router-dom";
import Home from "../../../pages/Home";
import Recipe from "../../../pages/Recipe";
import paths from "../paths";

const AppRouter = () => {
  return (
    <Routes>
      <Route>
        <Route path={paths.root} element={<Home />} />
        <Route path={paths.recipe()} element={<Recipe />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
