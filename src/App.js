import "./App.css";
import RecipesList from "./components/RecipesList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Recipe from "./components/Recipe";

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
    </Router>
  );
};

export default App;
