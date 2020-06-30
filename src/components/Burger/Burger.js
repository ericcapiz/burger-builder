import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const burger = (props)=>{
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="bacon" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}
export default burger;