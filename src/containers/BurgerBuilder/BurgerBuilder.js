import React, { Component } from 'react';
import Aux1 from '../../hoc/Aux1';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
class BurgerBuilder extends Component{
    state ={
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        }
    }
    render(){
        return(
           <Aux1>
               <Burger ingredients={this.state.ingredients}/>
               <BuildControls />
           </Aux1>
        );
    }
}
export default BurgerBuilder;