import React from 'react';

import classes from './MenuToggle.module.css';

const menutoggle = props => {
  return (
    <div className={classes.Toggler} onClick={props.menuToggler}>
      Menu
    </div>
  );
};
export default menutoggle;
