import React from "react";
import Button from "../UniversalStuff/Button";
import style from "./styles/GetSaleOnMembership.module.css";

const GetSaleOnMembership = () => {
  return (
    <div className={style["sale-on-membership-wrapper"]}>
      <div className={style["sale-on-membership-text"]}>
        BECOME A MEMBER & GET 20% OFF
      </div>
      <Button koko={"SIGN UP FOR FREE"} />
    </div>
  );
};

export default GetSaleOnMembership;
