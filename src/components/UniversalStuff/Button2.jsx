import React, { useState } from "react";
import style from "./styles/Button2.module.css";

const Button2 = (props) => {
  const { koko } = props;
  const [state, setState] = useState(true);

  const buttocks = state ? "button" : "button-clicked";

  const clickHandler = (props) => {
    setState((state) => !state);
    const timer = setTimeout(() => setState((state) => !state), 100);
    return () => clearTimeout(timer);
  };

  return (
    <div className={style["button-wrapper"]}>
      <div onClick={clickHandler} className={style[buttocks]}>
        {koko}
        <img src="https://img.icons8.com/ios/20/000000/long-arrow-right.png" />
      </div>
    </div>
  );
};

export default Button2;
