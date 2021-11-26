import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import style from "../../../Test.module.css";

const CarouselComponent = () => {
  const list = [
    "prvi",
    "drugi",
    "treci",
    "cetvrti",
    "peti",
    "sesti",
    "sedmi",
    "osmi",
    "deveti",
    "deseti",
    "jedanaesti",
  ];
  const mappedList = list.map((el) => (
    <div className={style["content"]}>{el}</div>
  ));

  for (let i = 0; list.length < i; i + 3) {
    const koko = list[i];
    console.log(koko);
  }

  return (
    <div className={style["wrapper"]}>
      <div className={style["container"]}>
        <div className={style["title"]}>Title</div>
        <div className={style["content"]}>
          <button>LEFT</button>
          {mappedList}
          <button>RIGHT</button>
        </div>
      </div>
    </div>
  );
};
export default CarouselComponent;
