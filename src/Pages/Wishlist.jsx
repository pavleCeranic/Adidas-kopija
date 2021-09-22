import React from "react";
import style from "../styles/Wishlist.module.css";
import NeedHelp from "../components/Need Help/NeedHelp";

const Wishlist = () => {
  const wishCount = 0;
  return (
    <div className={style["wish-page"]}>
      <div className={style["wishlist-container"]}>
        <div className={style["title"]}>my wishlist</div>
        <div className={style["items"]}>{wishCount} items</div>
        {wishCount === 0 && (
          <div className={style["emptyWishlist"]}>
            You haven't saved any items to your wishlist yet. Start shopping and
            add your favorite items to your wishlist.{" "}
          </div>
        )}
      </div>
      <NeedHelp />
    </div>
  );
};

export default Wishlist;
