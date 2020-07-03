import React, {Component} from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Aux1 from '../../hoc/Aux1';
import classes from './Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component{
    state={
        showSideDrawer: false
    }
    sideDrawerClosedHandler = ()=>{
        this.setState({showSideDrawer: false})
    }
    sideDrawerToggleHandler = ()=>{
        this.setState((prevState)=>{
            return{showSideDrawer: !prevState.showSideDrawer};
        });
    }
    render(){
        return(
        <Aux1>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer closed={this.sideDrawerClosedHandler}
                open={this.state.showSideDrawer} />
        <main className={classes.Content}>
            {this.props.children}
        </main>
        </Aux1>
        )
    }
} 

export default Layout;