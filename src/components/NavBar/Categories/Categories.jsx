import React from "react";
import style from "../styles/Category.module.css";
import Featured from "./Featured";

const Categories = () => {
  const containerProps = "container";
  const namesProps = "names";
  const koko = "koko";
  return (
    <div className={style["categories"]}>
      <div className={style["category"]}>
        <Featured
          koko={koko}
          namesProps={namesProps}
          containerProps={containerProps}
        />
        <div className={style["bottom-link"]}>
          <div>All {}</div>
        </div>
      </div>

      <div className={style["category"]}>
        <div className={style["container"]}>
          <div className={style["names"]}>Shoes</div>
          <div className={style["list"]}>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
          </div>
        </div>
        <div className={style["bottom-link"]}>
          <div>All {}</div>
        </div>
      </div>
      <div className={style["category"]}>
        <div className={style["container"]}>
          <div className={style["names"]}>clothing</div>
          <div className={style["list"]}>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
          </div>
        </div>
        <div className={style["bottom-link"]}>
          <div>All {}</div>
        </div>
      </div>
      <div className={style["category"]}>
        <div className={style["container"]}>
          <div className={style["names"]}>accessories</div>
          <div className={style["list"]}>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
          </div>
        </div>
        <div className={style["bottom-link"]}>
          <div>All {}</div>
        </div>
      </div>
      <div className={style["category"]}>
        <div className={style["container"]}>
          <div className={style["names"]}>Sport</div>
          <div className={style["list"]}>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
            <div>footbal</div>
          </div>
        </div>
        <div className={style["bottom-link"]}>
          <div>All {}</div>
        </div>
      </div>
      <div className={style["category"]}>
        <div className={style["container"]}>
          <div className={style["names"]}>Promoting Stuff for seasons</div>
        </div>
        <div className={style["bottom-link"]}>
          <div>All {}</div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
