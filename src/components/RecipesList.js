import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewRecipeForm from './NewRecipeForm'
import Recipe from './Recipe'

const RecipesList = props => {


  useEffect(() => {
    axios.get('http://localhost:3001/api/v1/recipes.json')
        .then(res => setRecipes(res.data))
      }, []);

  const [recipes, setRecipes] = useState([]);

  const initialFormState = {
    name:'',
    protein:'',
    multiplier:''
  };

  
  




  // ADD RECIPE //
  const addRecipe = recipe => {
  
    axios.post('http://localhost:3001/api/v1/recipes', {recipe})
      .then(res=>{ 
        setRecipes([...recipes, res.data])
      })
      .catch( error => console.log(error))
      
  }
  



  // REMOVE RECIPE //
  const removeRecipe = (id) => {
    console.log('delete', id)
    axios.delete( 'http://localhost:3001/api/v1/recipes/' + id )
        .then(response => {
          setRecipes(recipes.filter(recipe => recipe.id !== id))
        })
        .catch(error => console.log(error))
  };

  return (
    <div>
      <div>
      <NewRecipeForm addRecipe={addRecipe} initialFormState={initialFormState}/>
      </div>
      <div className="recipes-list">
        {recipes.map((recipe, index) => (
            <Recipe key={recipe.id} recipe={recipe} removeRecipe={removeRecipe} />
          ))}
      </div>
    </div>
  )
};
export default RecipesList;