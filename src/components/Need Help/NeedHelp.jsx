import React from "react";
import style from "./NeedHelp.module.css";

const NeedHelp = () => {
  return (
    <div className={style["needhelp-container"]}>
      <div className={style["title"]}> need help?</div>
      <div className={style["items"]}>
        <a>Products</a>
        <a>Ordering & Payments</a>
        <a>Delivery</a>
        <a>Promotions & Vouchers</a>
        <a>Return & Refund</a>
        <a>Account & Newsletter</a>
        <a>Company information</a>
      </div>
    </div>
  );
};

export default NeedHelp;
