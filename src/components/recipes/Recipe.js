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

  return (
    <div className="recipe">
      <h4 className="recipe-title">{recipe.name}</h4>
      {recipe.measurements.map((measurement) => (
        <li key={measurement.id}>
          {measurement.unit} {measurement.type_of_measurement} -{" "}
          {measurement.ingredient_name}
        </li>
      ))}
      <br />
    </div>
  );
};

export default Recipe;
