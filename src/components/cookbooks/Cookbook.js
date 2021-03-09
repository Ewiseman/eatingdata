import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Cookbook = () => {
  const [cookbook, setCookbook] = useState({ recipes: [] });
  const { id } = useParams();

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:3001/api/v1/cookbooks/${id}.json`,
    }).then((res) => {
      setCookbook(res.data);
    });
  }, [id]);

  console.log(cookbook.recipes);
  return (
    <div className="cookbook" key={cookbook.id}>
      <h4 className="cookbook-title">{cookbook.name}</h4>
      {cookbook.recipes.map((recipe) => (
        <li key={recipe.id}>{recipe.name}</li>
      ))}
    </div>
  );
};

export default Cookbook;
