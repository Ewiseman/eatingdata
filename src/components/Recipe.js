import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Recipe = (props) => {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:3001/api/v1/recipes/${id}`,
    }).then((response) => {
      setRecipe(response.data);
    });
  }, [id]);

  return (
    <div className="recipe" key={recipe.id}>
      <Link to={`/recipes/${recipe.id}`}>
        <h4 className="recipe-title">{recipe.name}</h4>
      </Link>
      <p>{recipe.protein}</p>
      <p>{recipe.multiplier}</p>
      <p>{recipe.id}</p>
    </div>
  );
};

export default Recipe;
