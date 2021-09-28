import React from "react";
import style from "./styles/GiveFeedback.module.css";

const GiveFeedback = () => {
  return (
    <div className={style["feedback-wrapper"]}>
      <div className={style["title"]}>YOUR OPINION COUNTS</div>
      <div className={style["text"]}>
        We strive to serve you better and appreciate your feedback
      </div>
    </div>
  );
};

export default GiveFeedback;
