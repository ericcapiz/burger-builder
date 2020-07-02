import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';

import Aux1 from '../../hoc/Aux1';
import classes from './Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
const layout = (props)=>(
    <Aux1>
        <Toolbar />
        <SideDrawer />
    <main className={classes.Content}>
        {props.children}
    </main>
    </Aux1>
);

export default layout;