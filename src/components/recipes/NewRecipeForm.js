import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import Select from "react-select";

const NewRecipeForm = (props) => {
  const [recipe, setRecipe] = useState(props.initialFormState);
  const [cookbooks, setCookbooks] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/v1/cookbooks.json")
      .then((res) => setCookbooks(res.data));
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const types_of_food = [
    { label: "Main Dish", id: 1 },
    { label: "Side Dish", id: 2 },
    { label: "Salad", id: 3 },
    { label: "Soup", id: 4 },
    { label: "Sauce / Dressing", id: 5 },
    { label: "Drink", id: 6 },
    { label: "Desert", id: 7 },
  ];

  return (
    <div className="align-content: center h-48 flex flex-wrap content-center ...">
      <form
        action=""
        className="form bg-white p-6 my-10 relative"
        onSubmit={(event) => {
          event.preventDefault();
          if (!recipe.name || !recipe.protein) return;
          props.addRecipe(recipe);
          history.push("/recipes");
        }}
      >
        <select
          name="cookbook_id"
          onChange={handleInputChange}
          className="border p-2 w-full mt-3 rounded-lg text-gray-400"
        >
          <option className="text-red-700 text-opacity-0...">Cookbook</option>
          {cookbooks.map((cookbook) => (
            <option key={cookbook.id} value={cookbook.id}>
              {cookbook.name}
            </option>
          ))}
        </select>
        <br />

        <select
          name="type_of_food"
          onChange={handleInputChange}
          className="border p-2 w-full mt-3 rounded-lg text-gray-400"
        >
          <option className="text-red-700 text-opacity-0...">
            Type of Food
          </option>
          {types_of_food.map((type) => (
            <option key={type.id} value={type.label}>
              {type.label}
            </option>
          ))}
        </select>

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
