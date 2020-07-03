import React, { Component } from 'react';
import Aux1 from '../../../hoc/Aux1';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }
    render (){
        const ingredientSummary = Object.keys(this.props.ingredients)
    .map(igKey => {
    return (
    <li key={igKey}>
        <span style ={{textTransform: 'capitalize'}}>{igKey}: </span>
        {this.props.ingredients[igKey]}
        </li>
        )
    })
        return (
            <Aux1>
            <h3>Your Order:</h3>
            <p>Your burger has the following items:</p>
            <ul>
                {ingredientSummary}
                <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
            </ul>
            
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel Order</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
        </Aux1>
        );
    }
} 
export default OrderSummary;