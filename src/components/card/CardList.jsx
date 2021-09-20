import React from "react";
import Card from "./Card";
import style from "./Card.module.css";

const CardList = () => {
  return (
    <div className={style["card-list"]}>
      <div className={style["cardlist-container"]}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
export default CardList;
