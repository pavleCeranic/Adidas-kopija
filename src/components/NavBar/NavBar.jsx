import React from "react";
import style from "./styles/NavBarFile.module.css";
//import { BrowserRouter as Router } from "react-router-dom";
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
import { Link } from "react-router-dom";

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
    <>
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
              <Link to="/wishlist">
                <FontAwesomeIcon className={style["icons"]} icon={faHeart} />
              </Link>
            </div>
          </div>

          <div className={style["logo"]}>
            <Link to="/">
              <img src={og} alt="kok" className={style["image"]}></img>
            </Link>
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
            <Link to="/useraccount">
              <FontAwesomeIcon className={style["icons"]} icon={faUser} />
            </Link>
            <Link className={style["favourites"]} to="/wishlist">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
            <Link to="/shoppingcart">
              <FontAwesomeIcon
                className={style["icons"]}
                icon={faShoppingCart}
              />
            </Link>
            <FontAwesomeIcon
              className={style["searchIcon"]}
              onClick={clickSearchHandler}
              icon={faSearch}
            />
          </div>
        </div>
      </div>
      {sidebarState && <SideBar />}
      {searchState && <SearchTab />}
    </>
  );
};
