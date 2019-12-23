import React from "react";
import classes from "./BuildControl.module.css";
const BuildControl = ({ label, removed, isDisabled, added }) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <button onClick={removed} className={classes.Less} disabled={isDisabled}>
        Less
      </button>
      <button onClick={added} className={classes.More}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
