import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import RecipesList from "./recipes/RecipesList";
import Landing from "./Landing";
// import ScrollToTop from "./ScrollToTop";
import CookbooksList from "./cookbooks/CookbooksList";
import Recipe from "./recipes/Recipe";
import NewRecipePage from "./recipes/NewRecipePage";
import Cookbook from "./cookbooks/Cookbook";

import IngredientsList from "./ingredients/IngredientsList";

const Navbar = ({ fixed }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <Router>
      <>
        <nav
          className="fixed shadow-md z-50 w-full px-5 py-2 flex justify-between navbar-expand-lg
        items-center shadow-lg bg-white"
        >
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link to={`/`}>
                <span className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap text-gray">
                  <span className="ml-2">Autoimmune Recipes</span>
                </span>
              </Link>

              <button
                className="text-gray cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <FaBars />
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <Link to={`/`}>
                    <span className="px-3 py-2 flex items-center text-xs font-bold leading-snug text-gray hover:opacity-75">
                      <span className="ml-2">Home</span>
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={`/recipes`}>
                    <span className="px-3 py-2 flex items-center text-xs font-bold leading-snug text-gray hover:opacity-75">
                      <span className="ml-2">Recipes</span>
                    </span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={`/ingredients`}>
                    <span className="px-3 py-2 flex items-center text-xs font-bold leading-snug text-gray hover:opacity-75">
                      <span className="ml-2">Ingredients</span>
                    </span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={`/cookbooks`}>
                    <span className="px-3 py-2 flex items-center text-xs font-bold leading-snug text-gray hover:opacity-75">
                      <span className="ml-2">Cookbooks</span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
      {/* <ScrollToTop /> */}
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/recipes">
          <RecipesList />
        </Route>
        <Route exact path="/recipes/:id">
          <Recipe />
        </Route>
        <Route exact path="/new_recipe">
          <NewRecipePage />
        </Route>
        <Route exact path="/ingredients">
          <IngredientsList />
        </Route>
        <Route exact path="/cookbooks">
          <CookbooksList />
        </Route>
        <Route exact path="/cookbooks/:id">
          <Cookbook />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navbar;
