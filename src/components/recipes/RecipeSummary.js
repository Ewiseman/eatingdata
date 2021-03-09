import { Link } from "react-router-dom";

const Recipe = ({ recipe, removeRecipe }) => {
  return (
    <div className="recipe" key={recipe.id}>
      <Link to={`/recipes/${recipe.id}`}>
        <h4 className="recipe-title">{recipe.name}</h4>
      </Link>
      <p>{recipe.protein}</p>
      <p>{recipe.cookbook_name}</p>

      <button onClick={() => removeRecipe(recipe.id)}>Remove</button>
    </div>
  );
};

export default Recipe;
