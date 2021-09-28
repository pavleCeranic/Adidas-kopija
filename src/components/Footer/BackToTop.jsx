import React from "react";
import style from "./styles/BackToTop.module.css";

const BackToTop = () => {
  return (
    <div className={style["back-to-top-wrapper"]}>
      <span className={style["arrow"]}></span>
      <div className={style["text"]}>BACK TO TOP</div>
    </div>
  );
};

export default BackToTop;
