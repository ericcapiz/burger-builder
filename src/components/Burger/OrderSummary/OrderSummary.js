import React from 'react';
import Aux1 from '../../../hoc/Aux1';

const orderSummary = (props)=>{
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
    return (
    <li key={igKey}>
        <span style ={{textTransform: 'capitalize'}}>{igKey}: </span>
        {props.ingredients[igKey]}
        </li>
        )
    })
    
    return(
        <Aux1>
            <h3>Your Order:</h3>
            <p>Your Ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Checkout</p>
        </Aux1>
    )
    };
export default orderSummary;