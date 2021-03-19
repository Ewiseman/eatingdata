import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import { Link } from "react-router-dom";
import { CgMathPlus } from "react-icons/cg";

const RecipesList = (props) => {
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/v1/recipes.json")
      .then((res) => setRecipes(res.data));
  }, []);

  const [recipes, setRecipes] = useState([]);

  // REMOVE RECIPE //
  const removeRecipe = (id) => {
    axios
      .delete("http://localhost:3001/api/v1/recipes/" + id + ".json")
      .then((res) => {
        setRecipes(recipes.filter((recipe) => recipe.id !== id));
      })
      .catch((error) => console.log(error));
  };

  // ON THE MENU //
  const onMenu = async (id) => {
    const big = "http://localhost:3001/api/v1/recipes/" + id + ".json";
    console.log(big);
  };

  return (
    <section>
      <br />
      <br />
      <br />
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          <div className="my-1 px-1 w-full bg-white border rounded-lg shadow-lg transform transition duration-500 hover:shadow-2xl">
            <Link to={`/new_recipe`}>
              <span
                style={{
                  position: "fixed",
                  bottom: "37%",
                  left: "37%",
                  zIndex: 1,
                  translateX: "0%",
                }}
              >
                <CgMathPlus size={70} />
              </span>
            </Link>
          </div>
          {recipes.map((recipe, _) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              removeRecipe={removeRecipe}
              onMenu={onMenu}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default RecipesList;
