import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = "5cd0d137";
  const APP_KEY = "46cd5df803514d214e79f5c5ce22960a";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  return (
    <div className="App">
      <form className="search-form" type="text">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  )
}

export default App;
