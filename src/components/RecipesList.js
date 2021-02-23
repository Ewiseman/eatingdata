import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewRecipeForm from './NewRecipeForm'





const RecipesList = props => {

  const initialFormState = {
    name:'',
    protein:''
  };

  const addRecipe = recipe => {
    const qs = require('qs');
  
    axios.post('http://localhost:3001/api/v1/recipes.json', qs.stringify(
        {
          recipe:{
            company: recipe.name,
            position: recipe.protein}
        }))
        .then(res=>( console.log(res)))
        .catch( error => console.log(error))
    
    setRecipes([...recipes, recipe]);
  };
  

  useEffect(() => {
    axios.get('http://localhost:3001/api/v1/recipes.json')
        .then(res => setRecipes(res.data))
      }, []);

  const [recipes, setRecipes] = useState([]);

  return (
    <div>
      <div>
      <NewRecipeForm addRecipe={addRecipe} initialFormState={initialFormState}/>
      </div>
      <div className="recipes-list">
        {recipes.map((recipe, index) => (
          <div key={index}>
            {recipe.name} | {recipe.protein} | {recipe.vegan ? "Vegan" : "Not Vegan" } | {recipe.multiplier}
          </div>
        ))}
      </div>
    </div>
  )
};
export default RecipesList;