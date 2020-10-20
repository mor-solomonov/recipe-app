import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {

  const APP_ID = "5cd0d137";
  const APP_KEY = "46cd5df803514d214e79f5c5ce22960a";

  //the data from the API is stored here
  const [recipes, setRecipes] = useState([]);

  // When placing an empty arrray at the end of the useEffect 
  // function it will only once run when the app mounts and not every time it rerenders (there is a change)
  // or add values in the array to specify when it will run

  useEffect(() => {
    getRecipes()
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=vegetarian&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }



  return (
    <div className="App">
      <form className="search-form" type="text">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))};
    </div>
  )
}

export default App;
