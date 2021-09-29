import React, { Fragment, useState } from "react";
import { MainContent } from "./MainContent";
import { NavTrack } from "./NavTrack";
import style from "./styles/SideBar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleShowAction } from "../../Store/SidebarSlice";
import { debounce } from "lodash";

export const SideBar = (props) => {
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.show.show);

  const clickHandler = () => {
    dispatch(toggleShowAction.toggleSideabar());
  };

  return (
    <Fragment>
      {sidebar ? (
        <div className={style["sidebar"]}>
          <div className={style["header"]}>
            <div className={style["logo"]}>ADIDAS</div>
            <div onClick={clickHandler} className={style["closeIcon"]}>
              X
            </div>
          </div>
          <div className={style["sidebar-content"]}>
            <MainContent
              mainContentClass={style["main-categories"]}
              itemPlaceholderClass={style["item-placeholder"]}
            />
            <NavTrack navTrackClass={style["nav-track-categories"]} />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </Fragment>
  );
};
