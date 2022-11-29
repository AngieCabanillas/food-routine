/* 
  PAGES:
    - HOME
    - RECIPE

  CONTAINERS:
    - LAYOUT GENERAL
    - LAYOUT RECIPE

  COMPONENTS:
    - BUTTON
    - CARD
    - SELECTED RECIPE CELL
    - CATEGORY CELL
*/

import AppRouter from "../shared/routes/AppRouter";

const App = () => {
  return (
    <div className="app">
      <AppRouter />
    </div>
  );
};

export default App;
