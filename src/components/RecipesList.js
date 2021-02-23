import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewRecipeForm from './NewRecipeForm'

const RecipesList = props => {


  useEffect(() => {
    axios.get('http://localhost:3001/api/v1/recipes.json')
        .then(res => setRecipes(res.data))
      }, []);

  const [recipes, setRecipes] = useState([]);

  const initialFormState = {
    cusine_region:'',
    protein:'',
    multiplier:''
  };

  const addRecipe = recipe => {
    const data = JSON.stringify({
      cusine_region: recipe.cusine_region,
      protein: recipe.protein,
      multiplier: recipe.multiplier
    });

    axios.post('http://localhost:3001/api/v1/recipes', data, { headers:{ "Content-Type" : "application/json" } })
    .then(res=>( console.log(res)))
    .catch( error => console.log(error));
    
    setRecipes([...recipes, recipe]);
  };

  return (
    <div>
      <div>
      <NewRecipeForm addRecipe={addRecipe} initialFormState={initialFormState}/>
      </div>
      <div className="recipes-list">
        {recipes.map((recipe, index) => (
          <div key={index}>
            {recipe.cusine_region} | {recipe.protein} | {recipe.vegan ? "Vegan" : "Not Vegan" } | {recipe.multiplier}
          </div>
        ))}
      </div>
    </div>
  )
};
export default RecipesList;