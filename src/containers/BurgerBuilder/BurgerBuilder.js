import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.7,
  meat: 1.5,
  bacon: 1
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  };

  addIngredient = type => {
    const { ingredients, totalPrice } = this.state;
    const oldCount = ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice = totalPrice + priceAddition;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
  };

  removeIngredient = type => {
    const { ingredients, totalPrice } = this.state;
    const oldCount = ingredients[type];
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...ingredients
    };
    updatedIngredients[type] = updatedCount < 0 ? 0 : updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const newPrice =
      updatedCount < 0 ? totalPrice : totalPrice - priceDeduction;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
  };

  render() {
    console.log(this.state.totalPrice);
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredient}
          ingredientRemoved={this.removeIngredient}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
