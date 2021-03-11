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
    <div className="align-content: center h-48 flex flex-wrap content-center ...">
      <form
        action=""
        className="form bg-white p-6 my-10 relative"
        onSubmit={(event) => {
          event.preventDefault();
          if (!recipe.name || !recipe.protein) return;
          props.addRecipe(recipe);
          setRecipe(props.initialFormState);
        }}
      >
        <select
          name="cookbook_id"
          onChange={handleInputChange}
          className="border p-2 w-full mt-3 rounded-lg text-gray-400"
        >
          <option className="text-red-700 text-opacity-0...">Coookbook</option>
          {cookbooks.map((cookbook) => (
            <option key={cookbook.id} value={cookbook.id}>
              {cookbook.name}
            </option>
          ))}
        </select>
        <br />

        <input
          type="text"
          name="name"
          placeholder="Recipe Name"
          value={recipe.name}
          onChange={handleInputChange}
          className="border p-2 w-full mt-3 rounded-md"
        ></input>
        <input
          type="text"
          name="protein"
          placeholder="Protein"
          value={recipe.protein}
          onChange={handleInputChange}
          className="border p-2 w-full mt-3 rounded-md"
        ></input>
        <input
          type="number"
          name="multiplier"
          placeholder="Recipe Mulitplier"
          value={recipe.multiplier}
          onChange={handleInputChange}
          className="border p-2 w-full mt-3 rounded-md"
        ></input>

        <button className="w-full mt-6 bg-pink-600 hover:bg-pink-500 text-white font-semibold p-3 rounded-md">
          Add recipe
        </button>
      </form>
    </div>
  );
};

export default NewRecipeForm;
