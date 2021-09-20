import React from "react";
import style from "./styles/NavBarFile.module.css";
import { BrowserRouter as Router } from "react-router-dom";
import { MainContent } from "./MainContent";
import { NavTrack } from "./NavTrack";
import { SideBar } from "./SideBar";
import { toggleShowAction } from "../../Store/SidebarSlice";
import { toggleSearchAction } from "../../Store/SearchSlice";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchTab from "./SearchTab";
import og from "./ogTike.jpg";
import {
  faUser,
  faHeart,
  faShoppingCart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export const NavBar = (props) => {
  const dispatch = useDispatch();
  const sidebarState = useSelector((state) => state.show.show);
  const searchState = useSelector((state) => state.search.show);

  console.log("kako e", searchState);

  const clickHandler = () => {
    dispatch(toggleShowAction.toggleSideabar());
  };
  const clickSearchHandler = () => {
    dispatch(toggleSearchAction.toggleSearch());
  };

  return (
    <Router>
      <div className={style["navbar"]}>
        <div className={style.navmenu}>
          <div>FREE DELIVERY FOR CREATORS club members</div>
          <div>60 DAYS* FREE RETURNS & EXCHANGE</div>
          <div>COVID-19 FAQS & STORES OPEN</div>
        </div>
        <NavTrack navTrackClass={style["nav-track"]} ida={"track-item"} />
        <div className={style["all-categories"]}>
          <div className={style["left-side-navbar"]}>
            <div onClick={clickHandler} className={style["hamburger"]}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={style["heart-left"]}>
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </div>

          <div className={style["logo"]}>
            <img src={og} alt="kok" className={style["image"]}></img>
          </div>
          {/* <div className={style["logo"]}>dd</div> */}
          <MainContent
            mainContentClass={style["main-categories"]}
            itemPlaceholderClass={style["item-placeholder"]}
          />
          <div className={style["input-and-icons"]}>
            <input
              className={style["search-form"]}
              placeholder="Search"
              type="text"
            />
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon className={style["favourites"]} icon={faHeart} />
            <FontAwesomeIcon icon={faShoppingCart} />
            <FontAwesomeIcon
              onClick={clickSearchHandler}
              className={style["searchIcon"]}
              icon={faSearch}
            />
          </div>
        </div>
      </div>
      {sidebarState && <SideBar />}
      {searchState && <SearchTab />}
    </Router>
  );
};
