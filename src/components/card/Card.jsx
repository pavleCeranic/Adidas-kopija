import React, { useState } from "react";
import style from "./Card.module.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";

const Card = () => {
  const [parabola, setParabola] = useState(true);

  const koko = parabola ? "card" : "cardHoverEffect";
  const price = parabola ? "price" : "priceHoverEffect";
  const hoverHandler = () => {
    setParabola((parabola) => !parabola);
  };

  return (
    <div
      onMouseEnter={hoverHandler}
      onMouseLeave={hoverHandler}
      className={style[koko]}
    >
      <div className={style["img-placeholder"]}>
        <div className={style[price]}>
          <div className={style["koko"]}>$120</div>
          <FontAwesomeIcon className={style["favourites"]} icon={faHeart} />
        </div>
      </div>
      <div className={style["description"]}>
        <div className={style["model-name"]}>ADIDAS ZX FLUX 1000</div>
        <div className={style["type"]}>originals</div>
        <div className={style["extra-stuff"]}>Special Edition</div>
      </div>
    </div>
  );
};
export default Card;
