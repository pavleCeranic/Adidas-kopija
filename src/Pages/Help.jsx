import React from "react";
import WhereIsMyOrder from "../components/UniversalStuff/WhereIsMyOrder";
import style from "../styles/Help.module.css";

const Help = () => {
  return (
    <div className={style["help-page"]}>
      <WhereIsMyOrder />
    </div>
  );
};

export default Help;
