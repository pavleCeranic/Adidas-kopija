import React from "react";
import style from "./styles/PopularRN.module.css";

const PopularRN = () => {
  return (
    <div className={style["wrapper"]}>
      <div className={style["title"]}>POPULAR RIGHT NOW</div>
      <div className={style["container"]}>
        <span>ULTRABOOST</span>
        <span>SST TRACKSUIT</span>
        <span>OZWEEGO</span>
        <span>GAZELLE</span>
        <span>PREDATOR</span>
      </div>
    </div>
  );
};

export default PopularRN;
