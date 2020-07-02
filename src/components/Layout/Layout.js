import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';

import Aux1 from '../../hoc/Aux1';
import classes from './Layout.css';
const layout = (props)=>(
    <Aux1>
        <Toolbar />
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>
        {props.children}
    </main>
    </Aux1>
);

export default layout;