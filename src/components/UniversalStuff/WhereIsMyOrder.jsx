import React from "react";
import Button2 from "./Button2";
import style from "./styles/WhereIsMyOrder.module.css";

const WhereIsMyOrder = () => {
  return (
    <div className={style["wrapper"]}>
      <div className={style["title"]}>WHERE IS MY ORDER?</div>
      <div className={style["text"]}>
        Log in or enter your order details in the order tracker to see your
        order overview. From there, you can cancel items, track the delivery
        status or arrange an exchange or a return.
      </div>
      <Button2 />
    </div>
  );
};

export default WhereIsMyOrder;
