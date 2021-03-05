import React, { useState, useEffect } from "react";
import axios from "axios";

const NewRecipeForm = (props) => {
  const [recipe, setRecipe] = useState(props.initialFormState);
  const [cookbooks, setCookbooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/v1/cookbooks.json")
      .then((res) => setCookbooks(res.data));
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!recipe.name || !recipe.protein) return;
        props.addRecipe(recipe);
        setRecipe(props.initialFormState);
      }}
    >
      <label>Cookbook</label>
      <select name="cookbook_id" onChange={handleInputChange}>
        {cookbooks.map((cookbook) => (
          <option key={cookbook.id} value={cookbook.id}>
            {cookbook.name}
          </option>
        ))}
      </select>

      <label>Recipe</label>
      <input
        type="text"
        name="name"
        value={recipe.name}
        onChange={handleInputChange}
      ></input>
      <label>Protein</label>
      <input
        type="text"
        name="protein"
        value={recipe.protein}
        onChange={handleInputChange}
      ></input>
      <label>Multiplier</label>
      <input
        type="number"
        name="multiplier"
        value={recipe.multiplier}
        onChange={handleInputChange}
      ></input>
      <input
        type="text"
        placeholder="Placeholder"
        className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
      />

      <button>Create recipe</button>
    </form>
  );
};

export default NewRecipeForm;
