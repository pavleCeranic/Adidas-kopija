import React from "react";

export const Hamburger = (props) => {
  const { hamburgerClass, collapseHandler } = props;

  return (
    <div onClick={collapseHandler} className={hamburgerClass}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
