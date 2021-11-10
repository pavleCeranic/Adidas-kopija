import React, { useState } from "react";
import style from "./styles/Button.module.css";

const Button = (props) => {
  const { koko } = props;
  const [state, setState] = useState(true);

  const buttocks = state ? "butt" : "Butt";

  const clickHandler = (props) => {
    setState((state) => !state);
    const timer = setTimeout(() => setState((state) => !state), 100);
    return () => clearTimeout(timer);
  };

  return (
    <div className={style["button-wrapper"]}>
      <span className={style["outline"]}>
        <span onClick={clickHandler} className={style[buttocks]}>
          {koko}{" "}
          <img
            alt="kooko"
            src="https://img.icons8.com/ios/20/ffffff/long-arrow-right.png"
          />
        </span>
      </span>
    </div>
  );
};
export default Button;
