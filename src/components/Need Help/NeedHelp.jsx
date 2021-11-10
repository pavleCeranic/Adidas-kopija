import React from "react";
import style from "./NeedHelp.module.css";

const NeedHelp = () => {
  return (
    <div className={style["needhelp-container"]}>
      <div className={style["title"]}> need help?</div>
      <div className={style["items"]}>
        <a href="#">Products</a>
        <a href="#">Ordering & Payments</a>
        <a href="#">Delivery</a>
        <a href="#">Promotions & Vouchers</a>
        <a href="#">Return & Refund</a>
        <a href="#">Account & Newsletter</a>
        <a href="#">Company information</a>
      </div>
    </div>
  );
};

export default NeedHelp;
