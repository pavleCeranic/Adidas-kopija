import React from "react";
import { Link } from "react-router-dom";
import style from "./styles/FooterCategories.module.css";

const FooterCategories = () => {
  return (
    <div className={style["footer-categories-wrappper"]}>
      <div id={style["8"]} className={style["categories"]}>
        <div className={style["title"]}>PRODUCTS</div>
        <div className={style["list-item"]}>
          <Link to="">Shoes</Link>
          <Link to="">Clothing</Link>
          <Link to="">Accessories</Link>
          <Link to="">New Arrivals</Link>
          <Link to="">Release Date</Link>
          <Link to="">Top Sellers</Link>
          <Link to="">Outlet</Link>
        </div>
      </div>
      <div className={style["categories"]}>
        <div className={style["title"]}>SPORTS</div>
        <div className={style["list-item"]}>
          <Link to="">Football</Link>
          <Link to="">Basketball</Link>
          <Link to="">Golf</Link>
          <Link to="">Gym & Training</Link>
          <Link to="">Outdoor</Link>
          <Link to="">Rugby</Link>
          <Link to="">Running</Link>
          <Link to="">Tennis</Link>
        </div>
      </div>
      <div className={style["categories"]}>
        <div className={style["title"]}>COLLECTIONS</div>
        <div className={style["list-item"]}>
          <Link to="">Originals</Link>
          <Link to="">IVY PARK</Link>
          <Link to="">Ultraboost</Link>
          <Link to="">NMD</Link>
          <Link to="">Gazelle</Link>
          <Link to="">Superstar</Link>
          <Link to="">Stan Smith</Link>
          <Link to="">Ozweego</Link>
        </div>
      </div>
      <div className={style["categories"]}>
        <div className={style["title"]}>SUPPORT</div>
        <div className={style["list-item"]}>
          <Link to="">Delivery</Link>
          <Link to="">Returns & Refunds</Link>
          <Link to="">Help & Customer Service</Link>
          <Link to="">Size Charts</Link>
          <Link to="">Store Finder</Link>
          <Link to="">Student discount</Link>
          <Link to="">Gift Cards</Link>
          <Link to="">European Disputes</Link>
          <Link to="">Resolution</Link>
          <Link to="">Imprint</Link>
        </div>
      </div>
      <div id={style["8"]} className={style["categories"]}>
        <div className={style["title"]}>COMPANY INFO</div>
        <div className={style["list-item"]}>
          <Link to="">About Us</Link>
          <Link to="">Careers</Link>
          <Link to="">Press</Link>
          <Link to="">Creators Club</Link>
          <Link to="">Mobile Apps</Link>
          <Link to="">adidas Confirmed</Link>
          <Link to="">adidas Stories</Link>
        </div>
      </div>
      <div className={style["categories"]}>
        <div className={style["title"]}>MORE ADIDAS</div>
        <div className={style["list-item"]}>
          <Link to="">Training Equipment</Link>
        </div>
      </div>
    </div>
  );
};

export default FooterCategories;
