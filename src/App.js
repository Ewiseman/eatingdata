import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RecipesList from "./components/recipes/RecipesList";
import Recipe from "./components/recipes/Recipe";
import CookbooksList from "./components/cookbooks/CookbooksList";
import Cookbook from "./components/cookbooks/Cookbook";
import Landing from "./components/Landing";

const App = () => {
  return (
    <Router>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route exact path="/recipes">
        <RecipesList />
      </Route>
      <Route exact path="/recipes/:id">
        <Recipe />
      </Route>
      <Route exact path="/cookbooks">
        <CookbooksList />
      </Route>
      <Route exact path="/cookbooks/:id">
        <Cookbook />
      </Route>
    </Router>
  );
};

export default App;
