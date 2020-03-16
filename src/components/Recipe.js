import React from 'react';
import style from './recipe.module.css';

const Recipe = props => {
  return (
    <div className={style.recipe}>
      <h1>{props.label}</h1>
      <ol>
        {props.ingredients.map((ingredient, index) => (
          <li key={ingredient.weight + index}>{ingredient.text}</li>
        ))}
      </ol>
      <p>{props.calories}</p>
      <img src={props.image} alt="recipe" />
    </div>
  );
};
export default Recipe;
