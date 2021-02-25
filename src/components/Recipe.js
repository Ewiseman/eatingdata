const Recipe = ( {recipe, removeRecipe} ) => {
  return (
    <div className="recipe" key={recipe.id}>
      <h4>{recipe.name}</h4>
      <p>{recipe.protein}</p>
      <p>{recipe.multiplier}</p>
      <p>{recipe.id}</p>

      <button onClick={() => removeRecipe(recipe.id)}>Remove</button>
    </div>
  )
}

export default Recipe
