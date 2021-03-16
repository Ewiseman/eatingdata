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

  const stringBreak = recipe.directions
    ? recipe.directions.replace(/\./g, "\n")
    : "";

  const recipeDirections = stringBreak
    .split("\n")
    .map((str) => <p className="mb-5">{str}</p>);

  return (
    <section className="mb-9">
      <br />
      <br />

      <header className="bg-header flex items-center justify-center h-screen pb-12">
        <blockquote className="bg-black mx-4 p-4 text-center text-white md:p-8 rounded-lg shadow-lg">
          <h1 className="text-5xl mb-3">{recipe.name}</h1>
          <p className="text-lg">{recipe.cookbook}</p>
        </blockquote>
      </header>
      <div className="mx-auto py-12 px-6 max-w-6xl">
        <div className="grid grid-cols-3 gap-4">
          <div className="...">
            {recipe.measurements.map((measurement) => (
              <div key={measurement.id}>
                {measurement.unit} {measurement.type_of_measurement} -{" "}
                {measurement.ingredient_name}{" "}
                {measurement.description
                  ? "(" + measurement.description + ")"
                  : ""}
              </div>
            ))}
          </div>

          <div className="col-span-2 ...">{recipeDirections}</div>
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
