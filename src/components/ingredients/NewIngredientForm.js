import React, { useState } from "react";

const NewIngredientForm = (props) => {
  const [ingredient, setIngredient] = useState(props.initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setIngredient({ ...ingredient, [name]: value });
    console.log(ingredient);
  };

  return (
    <div className="align-content: center h-48 flex flex-wrap content-center ...">
      <form
        className="form bg-white p-6 my-10 relative"
        onSubmit={(event) => {
          event.preventDefault();
          if (!ingredient.name) return;
          props.addIngredient(ingredient);
          setIngredient(props.initialFormState);
        }}
      >
        <label>Ingredient</label>

        <input
          type="text"
          name="name"
          placeholder="Ingredient Name"
          value={ingredient.name}
          onChange={handleInputChange}
          className="border p-2 w-full mt-3 rounded-md"
        ></input>

        <button className="w-full mt-6 bg-pink-600 hover:bg-pink-500 text-white font-semibold p-3 rounded-md">
          Create Ingredient
        </button>
      </form>
    </div>
  );
};

export default NewIngredientForm;
