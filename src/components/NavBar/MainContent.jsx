import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  showBRANDS,
  showCOLLECTION,
  showKIDS,
  showMEN,
  showSPORTS,
  showWOMEN,
} from "../../Store/category-action";
import style from "./styles/NavBarFile.module.css";
import { categoryActions } from "../../Store/category-slice";

export const MainContent = (props) => {
  const dispatch = useDispatch();
  const { mainContentClass, itemPlaceholderClass } = props;

  const showMenHandler = () => {
    dispatch(showMEN());
    dispatch(categoryActions.toggle());
  };
  const showWomanHandler = () => {
    dispatch(showWOMEN());
    dispatch(categoryActions.toggle());
  };
  const showKidsHandler = () => {
    dispatch(showKIDS());
    dispatch(categoryActions.toggle());
  };
  const showSportsHandler = () => {
    dispatch(showBRANDS());
    dispatch(categoryActions.toggle());
  };
  const showBrandsHandler = () => {
    dispatch(showSPORTS());
    dispatch(categoryActions.toggle());
  };
  const showCollectionsHandler = () => {
    dispatch(showCOLLECTION());
    dispatch(categoryActions.toggle());
  };

  return (
    <div className={mainContentClass}>
      <div
        className={itemPlaceholderClass}
        onMouseEnter={showMenHandler}
        onMouseLeave={showMenHandler}
      >
        <div className={style["men"]}>men</div>
        {/* <div className={style["arrow"]}>&gt;</div> */}
      </div>
      <div
        className={itemPlaceholderClass}
        onMouseEnter={showWomanHandler}
        onMouseLeave={showWomanHandler}
      >
        <div>women</div>
        {/* <div>&gt;</div> */}
      </div>
      <div
        className={itemPlaceholderClass}
        onMouseEnter={showKidsHandler}
        onMouseLeave={showKidsHandler}
      >
        <div>kids</div>
        {/* <div>&gt;</div> */}
      </div>
      <div
        className={itemPlaceholderClass}
        //onMouseEnter={showSportsHandler}
        onMouseOut={showBrandsHandler}
        onMouseOver={showSportsHandler}
        //onMouseLeave={showSportsHandler}
      >
        <div href="#" className={style["category"]}>
          sports
        </div>
        {/* <div>&gt;</div> */}
      </div>
      <div
        className={itemPlaceholderClass}
        onMouseEnter={showBrandsHandler}
        onMouseLeave={showBrandsHandler}
      >
        <div className={style["category"]}>brands</div>
        {/* <div>&gt;</div> */}
      </div>
      <div
        className={itemPlaceholderClass}
        onMouseEnter={showCollectionsHandler}
        onMouseLeave={showCollectionsHandler}
      >
        <div className={style["category"]}>collections</div>
        {/* <div>&gt;</div> */}
      </div>
    </div>
  );
};
