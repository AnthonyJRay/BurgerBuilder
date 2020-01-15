import React from 'react';

import classes from './ingredients.module.css';

const ingredients = props => {
  let ingredient = null;

  switch (props.type) {
    case 'bread-bottom':
      ingredient = <div className={classes.BreadBottom}></div>;
      break;

    case 'bread-top':
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;

    case 'meat':
      ingredients = <div className={classes.Meat}></div>;
      break;

    case 'cheese':
      ingredients = <div className={classes.Cheese}></div>;
      break;

    case 'Salad':
      ingredients = <div className={classes.Salad}></div>;
      break;

    case 'Bacon':
      ingredients = <div className={classes.Bacon}></div>;
      break;
    default:
      ingredients = null;
  }

  return ingredient;
};

export default ingredients;
