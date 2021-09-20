import React from "react";
import style from "./styles/NavBarFile.module.css";

export const MainContent = (props) => {
  const { mainContentClass, itemPlaceholderClass } = props;
  return (
    <div className={mainContentClass}>
      <div className={itemPlaceholderClass}>
        <a className={style["men"]}>men</a>
        {/* <div className={style["arrow"]}>&gt;</div> */}
      </div>
      <div className={itemPlaceholderClass}>
        <a>women</a>
        {/* <div>&gt;</div> */}
      </div>
      <div className={itemPlaceholderClass}>
        <a>kids</a>
        {/* <div>&gt;</div> */}
      </div>
      <div className={itemPlaceholderClass}>
        <a className={style["category"]}>sports</a>
        {/* <div>&gt;</div> */}
      </div>
      <div className={itemPlaceholderClass}>
        <a className={style["category"]}>brands</a>
        {/* <div>&gt;</div> */}
      </div>
      <div className={itemPlaceholderClass}>
        <a className={style["category"]}>collections</a>
        {/* <div>&gt;</div> */}
      </div>
    </div>
  );
};
