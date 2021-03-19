import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const [recipe, setRecipe] = useState({ measurements: [] });
  const { id } = useParams();

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:3001/api/v1/recipes/${id}.json`,
    }).then((res) => {
      setRecipe(res.data);
    });
  }, [id]);

  const recipeDirections = recipe.directions
    ? recipe.directions
        .split(".")
        .map((str) => <p className="mb-5">{str + "."}</p>)
    : "";

  return (
    <section className="mb-9 bg-primary">
      <br />
      <br />

      <header className="bg-header"></header>
      <div className="absolute inset-0 flex justify-center">
        <blockquote className="recipe-title text-center text-white">
          <h1 className="text-5xl mb-3">{recipe.name}</h1>
          <p className="text-lg">{recipe.cookbook}</p>
        </blockquote>
      </div>
      <div className="mx-auto py-12 px-6 max-w-6xl -mt-20">
        <div className="grid grid-cols-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
          <div className="rounded-lg shadow-lg transform p-5 bg-white">
            <h1 className="text-2xl mb-3">
              <u>Ingredients</u>
            </h1>
            {recipe.measurements.map((measurement) => (
              <li key={measurement.id} className="mb-1">
                {measurement.unit} {measurement.type_of_measurement} -{" "}
                {measurement.ingredient_name}{" "}
                <i>
                  {measurement.description
                    ? "(" + measurement.description + ")"
                    : ""}
                </i>
              </li>
            ))}
          </div>

          <div className="col-span-2 ...">
            <div className="rounded-lg shadow-lg transform p-5 bg-white">
              <h1 className="text-2xl mb-3">
                <u>Directions</u>
              </h1>
              {recipeDirections}
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  );
};

export default Recipe;
