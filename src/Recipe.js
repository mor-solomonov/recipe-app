import React from 'react'
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients, url }) => {
    return (
        <div className={style.recipe}>
            <h1 >{title}</h1>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.text}</li>
                ))}
            </ul>
            <button className="directions-button"><a className="directions" href={url}>Instructions & More</a></button>
            <p className="calories">Calories per meal: {Math.round(calories)}</p>
            <img className={style.image} src={image} alt="recipe_image" />
        </div>
    );

}

export default Recipe