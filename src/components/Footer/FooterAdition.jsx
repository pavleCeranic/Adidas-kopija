import React from "react";
import { Link } from "react-router-dom";
import style from "./styles/FooterAdition.module.css";

const FooterAdition = () => {
  return (
    <div className={style["footer-adittion-wrapper"]}>
      <Link>Delivery</Link>
      <Link>Returns & Refunds</Link>
      <Link>Order Tracker</Link>
      <Link>Imprint</Link>
      <Link>Payment</Link>
      <Link>Help</Link>
      <Link>Store Finder</Link>
    </div>
  );
};

export default FooterAdition;
