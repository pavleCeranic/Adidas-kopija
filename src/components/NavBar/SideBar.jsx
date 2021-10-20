import React, { Fragment } from "react";
import { MainContent } from "./MainContent";
import { NavTrack } from "./NavTrack";
import style from "./styles/SideBar.module.css";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../../Store/ui-action";

export const SideBar = (props) => {
  const dispatch = useDispatch();

  let specialClasses = props.cssClass;

  if (props.cssClass === "closingSidebar") {
    specialClasses = "sidebar";
  }
  if (props.cssClass === "openingSidebar") {
    specialClasses = "sidebarClose";
  }

  const clickHandler = () => {
    dispatch(closeSidebar());
  };

  return (
    <Fragment>
      <div className={style[specialClasses]}>
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
    </Fragment>
  );
};
