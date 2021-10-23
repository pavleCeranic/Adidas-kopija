import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { categoryActions } from "../../../Store/category-slice";
import style from "../styles/Category.module.css";
import Featured from "./Featured";

const Categories = (props) => {
  const dispatch = useDispatch();
  const containerProps = "container";
  const namesProps = "names";
  const koko = "koko";
  const categories = useSelector((state) => state.category.categories);

  const listaZaShoes = categories.shoes.map((el) => <div>{el}</div>);
  const listaZaClothing = categories.clothing.map((el) => <div>{el}</div>);
  const listaZaAccessories = categories.accessories.map((el) => (
    <div>{el}</div>
  ));
  const listaZaSport = categories.sports.map((el) => <div>{el}</div>);
  const hoverHandler = () => {
    dispatch(categoryActions.toggle());
  };
  return (
    <div
      className={style["categories"]}
      onMouseEnter={hoverHandler}
      onMouseLeave={hoverHandler}
    >
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
          <div className={style["list"]}>{listaZaShoes}</div>
        </div>
        <div className={style["bottom-link"]}>
          <div>All {}</div>
        </div>
      </div>
      <div className={style["category"]}>
        <div className={style["container"]}>
          <div className={style["names"]}>clothing</div>
          <div className={style["list"]}>{listaZaClothing}</div>
        </div>
        <div className={style["bottom-link"]}>
          <div>All {}</div>
        </div>
      </div>
      <div className={style["category"]}>
        <div className={style["container"]}>
          <div className={style["names"]}>accessories</div>
          <div className={style["list"]}>{listaZaAccessories}</div>
        </div>
        <div className={style["bottom-link"]}>
          <div>All {}</div>
        </div>
      </div>
      <div className={style["category"]}>
        <div className={style["container"]}>
          <div className={style["names"]}>Sport</div>
          <div className={style["list"]}>{listaZaSport}</div>
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
