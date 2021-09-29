import React from "react";
import style from "./styles/BackToTop.module.css";

const BackToTop = () => {
  const clickHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div onClick={clickHandler} className={style["back-to-top-wrapper"]}>
      <span className={style["arrow"]}></span>
      <div className={style["text"]}>BACK TO TOP</div>
    </div>
  );
};

export default BackToTop;
