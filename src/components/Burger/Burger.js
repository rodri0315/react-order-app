import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "../Burger/BurgerIngredients/BurgerIngredient";

const Burger = ({ ingredients }) => {
  // Will always be an Array, even an array with empty elements.
  let transformedIngredients = Object.keys(ingredients)
    .map(ingredientKey => {
      console.log("Ingredients Key", ingredientKey);
      console.log("Ingredients Value", ingredients[ingredientKey]);
      return [...Array(ingredients[ingredientKey])].map((_, index) => {
        return (
          <BurgerIngredient key={ingredientKey + index} type={ingredientKey} />
        );
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  console.log(transformedIngredients);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type={"bread-top"} />
      {transformedIngredients}
      <BurgerIngredient type={"bread-bottom"} />
    </div>
  );
};

export default Burger;
