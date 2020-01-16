import React from 'react';

import classes from './MenuToggle.module.css';

const menutoggle = props => {
  return (
    <div className={classes.DrawerToggle} onClick={props.menuToggler}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default menutoggle;
