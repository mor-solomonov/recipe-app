import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {

  const APP_ID = "5cd0d137";
  const APP_KEY = "46cd5df803514d214e79f5c5ce22960a";

  //the data from the API is stored here
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  //query will update only after the submit button is clicked
  const [query, setQuery] = useState('vegetarian');

  // When placing an empty arrray at the end of the useEffect 
  // function it will only once run when the app mounts and not every time it rerenders (there is a change)
  // or add values in the array to specify when it will run

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    // console.log(data.hits);
  }


  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  // whenever a form is submitted this function will run
  const getSearch = e => {
    //stops the rerendering of the query
    e.preventDefault();
    setQuery(search)
    setSearch('');
  }


  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" placeholder="Search for Recipes..." value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes_container">
        <div className="recipes">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.calories}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;
