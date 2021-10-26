import React from "react";
import style from "./styles/LogInandCartInFooter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const LogInandCartInFooter = () => {
  return (
    <div className={style["LogInandCartInFooter-wrapper"]}>
      <Link className={style["first-element"]} to="/useraccount">
        <div className={style["icons"]}>
          <FontAwesomeIcon icon={faUser} size="2x" />

          <div className={style["text"]}>LOG IN</div>
        </div>
      </Link>
      <Link className={style["second-element"]} to="/shoppingcart">
        <div className={style["icons"]}>
          <FontAwesomeIcon icon={faShoppingBag} size="2x" />
          <div className={style["text"]}>YOUR BAG (0)</div>
        </div>
      </Link>
    </div>
  );
};

export default LogInandCartInFooter;
