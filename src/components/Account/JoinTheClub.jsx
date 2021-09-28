import Button from "../UniversalStuff/Button";
import React from "react";
import style from "./Account.module.css";

const JoinTheClub = () => {
  return (
    <div className={style["JoinTheClub-wrapper"]}>
      <div className={style["title"]}>Join the club. get rewarded</div>
      <div>
        <div>Create an account with adidas:</div>
        <ul>
          <li>
            A single global login to interact with adidas products and services.
          </li>
          <li>Faster checkout with your saved address and payment details.</li>
          <li>Access your complete order history</li>
          <li>Track your order delivery</li>
          <li>
            Create and save your wishlist to help you keep track of your
            most-wanted items
          </li>
        </ul>
      </div>
      <Button koko={"REGSTER"} />
    </div>
  );
};
export default JoinTheClub;
