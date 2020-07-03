import React, { Component } from 'react';
import classes from './Modal.css';
import Aux1 from '../../../hoc/Aux1';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show;
    }
    componentWillUpdate (){
        console.log('[MODAL] WillUpdate');
    }
    render (){
        return(
            <Aux1>
            <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
        <div 
        className={classes.Modal}
        style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0' }}>
            {this.props.children}
        </div>
        </Aux1>
        )
    }
} 

export default Modal;