import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.55,
  cheese: 0.75,
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
    totalPrice: 4,
    canPurchase: false
  };

  updatePurchase = ingredients => {
    const sum = Object.keys(ingredients)
      .map(ingredient => ingredients[ingredient])
      .reduce((prev, curr) => {
        return prev + curr;
      }, 0);
    this.setState({ canPurchase: sum > 0 });
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
    this.updatePurchase(updatedIngredients);
  };

  removeIngredient = type => {
    const { ingredients, totalPrice } = this.state;
    const oldCount = ingredients[type];
    if (oldCount <= 0) return;
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const newPrice = totalPrice - priceDeduction;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    this.updatePurchase(updatedIngredients);
  };

  render() {
    const { ingredients, totalPrice, canPurchase } = this.state;
    const disabledInfo = {
      ...ingredients
    };
    for (const key in disabledInfo) {
      if (disabledInfo.hasOwnProperty(key)) {
        disabledInfo[key] = disabledInfo[key] <= 0;
      }
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredient}
          ingredientRemoved={this.removeIngredient}
          disabled={disabledInfo}
          price={totalPrice}
          canPurchase={canPurchase}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
