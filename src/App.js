import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RecipesList from "./components/RecipesList";
import CookbooksList from "./components/cookbook/CookbooksList";
import Landing from "./components/Landing";
import Recipe from "./components/Recipe";
import Cookbook from "./components/cookbook/Cookbook";

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
