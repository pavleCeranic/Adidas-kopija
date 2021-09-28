import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import style from "./styles/UniversalStuff.module.css";
import { clickButtonAction } from "../../Store/button-slice";

const Button = (props) => {
  const { koko } = props;
  const dispatch = useDispatch();
  const buttonClick = useSelector((state) => state.button.button);

  const buttocks = buttonClick ? "butt" : "Butt";

  const clickHandler = (props) => {
    dispatch(clickButtonAction.clickButton());
    const timer = setTimeout(
      () => dispatch(clickButtonAction.clickButton()),
      100
    );
    return () => clearTimeout(timer);
  };

  return (
    <span onClick={clickHandler}>
      <div className={style["outline"]}></div>
      <button onClick={clickHandler} className={style[buttocks]}>
        {koko}
      </button>
    </span>
  );
};
export default Button;
