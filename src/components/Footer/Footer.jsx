import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style["footer"]}>
      <div className={style["region"]}>
        <div>Region</div>
        <div className={style["language"]}>Language </div>
      </div>

      <div className={style["bottom-links"]}>
        <div className={style["sector"]}>
          <div>
            <a href="#somelink">Data settings</a>
          </div>
          <div>
            <a href="#somelink">Privacy Centre</a>
          </div>
          <div>
            <a href="#somelink">Cookies</a>
          </div>
        </div>
        <div className={style["sector"]}>
          <div>
            <a href="#somelink">Cookie Directory</a>
          </div>
          <div>
            <a href="#somelink">Privacy Notice</a>
          </div>
          <div>
            <a href="#somelink">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
