import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

// prettier-ignore
const layout = props => {
  return (
    <Aux>
      <Toolbar />
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main 
        className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  );
};

export default layout;
