import React, { useEffect, useState } from "react";
import style from "./styles/NavBarFile.module.css";
import { MainContent } from "./MainContent";
import { NavTrack } from "./NavTrack";
import { SideBar } from "./SideBar";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchTab from "./SearchTab";
import og from "./ogTike.jpg";
import {
  faUser,
  faHeart,
  faShoppingBag,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { openSidebar, openSearch } from "../../Store/ui-action";
import Categories from "./Categories/Categories";

export const NavBar = (props) => {
  const dispatch = useDispatch();
  const sidebarState = useSelector((state) => state.cssClass.sidebarCss);
  const searchState = useSelector((state) => state.cssClass.searchCss);
  const [item, setItem] = useState("");
  const showCategories = useSelector((state) => state.category.show);

  const array = [
    "FREE DELIVERY FOR CREATORS club members",
    "60 DAYS* FREE RETURNS & EXCHANGE",
    "COVID-19 FAQS & STORES OPEN",
  ];
  const clickSidebarHandler = () => {
    dispatch(openSidebar());
  };
  const clickSearchHandler = () => {
    dispatch(openSearch());
  };
  useEffect(() => {
    var count = 0;
    setInterval((e) => {
      var randomNumber = Math.floor(Math.random() * 11);
      count = (count + randomNumber) % array.length;
      setItem(array[count]);
    }, 3000);
  }, [array]);

  return (
    <>
      <div className={style["navbar"]}>
        <div className={style.navmenu}>
          <div>FREE DELIVERY FOR CREATORS club members</div>
          <div>60 DAYS* FREE RETURNS & EXCHANGE</div>
          <div>COVID-19 FAQS & STORES OPEN</div>
          <div className={style["small-width-navmenu"]}>{item}</div>
        </div>
        <NavTrack navTrackClass={style["nav-track"]} ida={"track-item"} />
        <div className={style["all-categories"]}>
          <div className={style["left-side-navbar"]}>
            <div onClick={clickSidebarHandler} className={style["hamburger"]}>
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
                icon={faShoppingBag}
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
      <SideBar cssClass={sidebarState.cssClass} />
      <SearchTab cssClass={searchState.cssClass} />
      {showCategories && <Categories />}
    </>
  );
};
