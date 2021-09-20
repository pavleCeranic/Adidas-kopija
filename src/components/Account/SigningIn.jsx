import React from "react";
import style from ".Account.module.css";

export const SigningIn = () => {
  return (
    <div className={style["signingIn-container"]}>
      <div className={style["logIn"]}>
        <div className={style["title"]}></div>
        <div className={style["form"]}></div>
        <div className={style["logIn-different-way"]}></div>
      </div>
      <div className={style["joinTheClub"]}>
        <div className={style["title"]}></div>
      </div>
    </div>
  );
};
