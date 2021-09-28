import React from "react";
import { Link } from "react-router-dom";
import style from "./styles/FooterCategories.module.css";

const FooterCategories = () => {
  return (
    <div className={style["footer-categories-wrappper"]}>
      <div id={style["8"]} className={style["categories"]}>
        <div className={style["title"]}>PRODUCTS</div>
        <div className={style["list-item"]}>
          <Link>Shoes</Link>
          <Link>Clothing</Link>
          <Link>Accessories</Link>
          <Link>New Arrivals</Link>
          <Link>Release Date</Link>
          <Link>Top Sellers</Link>
          <Link>Outlet</Link>
        </div>
      </div>
      <div className={style["categories"]}>
        <div className={style["title"]}>SPORTS</div>
        <div className={style["list-item"]}>
          <Link>Football</Link>
          <Link>Basketball</Link>
          <Link>Golf</Link>
          <Link>Gym & Training</Link>
          <Link>Outdoor</Link>
          <Link>Rugby</Link>
          <Link>Running</Link>
          <Link>Tennis</Link>
        </div>
      </div>
      <div className={style["categories"]}>
        <div className={style["title"]}>COLLECTIONS</div>
        <div className={style["list-item"]}>
          <Link>Originals</Link>
          <Link>IVY PARK</Link>
          <Link>Ultraboost</Link>
          <Link>NMD</Link>
          <Link>Gazelle</Link>
          <Link>Superstar</Link>
          <Link>Stan Smith</Link>
          <Link>Ozweego</Link>
        </div>
      </div>
      <div className={style["categories"]}>
        <div className={style["title"]}>SUPPORT</div>
        <div className={style["list-item"]}>
          <Link>Delivery</Link>
          <Link>Returns & Refunds</Link>
          <Link>Help & Customer Service</Link>
          <Link>Size Charts</Link>
          <Link>Store Finder</Link>
          <Link>Student discount</Link>
          <Link>Gift Cards</Link>
          <Link>European Disputes</Link>
          <Link>Resolution</Link>
          <Link>Imprint</Link>
        </div>
      </div>
      <div id={style["8"]} className={style["categories"]}>
        <div className={style["title"]}>COMPANY INFO</div>
        <div className={style["list-item"]}>
          <Link>About Us</Link>
          <Link>Careers</Link>
          <Link>Press</Link>
          <Link>Creators Club</Link>
          <Link>Mobile Apps</Link>
          <Link>adidas Confirmed</Link>
          <Link>adidas Stories</Link>
        </div>
      </div>
      <div className={style["categories"]}>
        <div className={style["title"]}>MORE ADIDAS</div>
        <div className={style["list-item"]}>
          <Link>Training Equipment</Link>
        </div>
      </div>
    </div>
  );
};

export default FooterCategories;
