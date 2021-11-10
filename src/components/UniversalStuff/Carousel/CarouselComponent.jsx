import React, { Fragment, useRef, useEffect, useState } from "react";
import axios from "axios";

import style from "./Test.module.css";

const CarouselComponent = () => {
  const [state, setState] = useState(true);
  const [arrayState, setArrayState] = useState([]);

  const firstRender = useRef(false);

  useEffect(() => {
    if (firstRender.current) {
      return;
    } else {
      axios
        .get("https://localhost:5001/api/users/")
        .then((response) =>
          setArrayState((arrayState) => (arrayState = response.data))
        )
        .then(() => console.log("kokosi", arrayState))
        .then(() => setState(false))
        .then(() => (firstRender.current = true));
    }
  }, [arrayState]);

  let boko = [];

  arrayState.map((el) =>
    boko.push(<div className={style["card"]}>{el.name}</div>)
  );

  const leftHandler = () => {};
  const rightHandler = () => {};
  return (
    <Fragment>
      {state ? (
        <div className={style["loading"]}>LOADING ...</div>
      ) : (
        <div className={style["wrapper"]}>
          <div className={style["container"]}>
            <div className={style["title"]}>Title</div>
            <div className={style["content"]}>
              <button onClick={leftHandler} className={style["butt"]}>
                LEFT
              </button>
              {[boko[0], boko[1]]}
              <button onClick={rightHandler} className={style["butt"]}>
                RIGHT
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default CarouselComponent;
