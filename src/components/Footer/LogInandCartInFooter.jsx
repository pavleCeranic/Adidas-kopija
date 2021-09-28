import React from "react";
import style from "./styles/LogInandCartInFooter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const LogInandCartInFooter = () => {
  return (
    <div className={style["LogInandCartInFooter-wrapper"]}>
      <div className={style["first-element"]}>
        <div className={style["icons"]}>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className={style["text"]}>LOG IN</div>
      </div>
      <div className={style["second-element"]}>
        <div className={style["icons"]}>
          <FontAwesomeIcon icon={faShoppingBag} />
        </div>
        <div className={style["text"]}>YOUR BAG (0)</div>
      </div>
    </div>
  );
};

export default LogInandCartInFooter;
