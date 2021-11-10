import React from "react";
import style from "../styles/Category.module.css";

const Featured = (props) => {
  return (
    <div className={style["featured"]}>
      <div className={style["names"]}>FEATURED</div>
      <ul>
        <li>
          {} {}
        </li>
      </ul>
    </div>
  );
};

export default Featured;
