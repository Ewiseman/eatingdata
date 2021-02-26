import React, { useState } from "react";

const NewRecipeForm = (props) => {
  const [recipe, setRecipe] = useState(props.initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
    console.log(recipe);
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

      <button>Create recipe</button>
    </form>
  );
};

export default NewRecipeForm;
