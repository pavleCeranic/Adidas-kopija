import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import style from "./styles/BottomPart.module.css";

const BottomPart = () => {
  const line = (
    <img
      alt=""
      className={style["line"]}
      src="https://img.icons8.com/ios/20/ffffff/vertical-line.png"
    />
  );
  return (
    <div className={style["bottom-part-wrapper"]}>
      <Link className={style["region"]}>Region</Link>
      <Link>Data Settings</Link>
      {line}
      <Link>Cookies</Link>
      {line}
      <Link>Privacy Notice</Link>
      {line}
      <Fragment className={style["language"]}>
        <Link>Language</Link>
        {line}
      </Fragment>
      <Link>Privacy Centre</Link>
      {line}
      <Link>Cookie Directory</Link>
      {line}
      <Link>Terms and Conditions</Link>
    </div>
  );
};

export default BottomPart;
