import React from "react";
import { useSelector } from "react-redux";
import style from "./styles/MyAccount.module.css";

const MyAccount = (props) => {
  const { logoutHandler } = props;
  const auth = useSelector((state) => state.auth);
  return (
    <div className={style["wrapper"]}>
      <div className={style["title"]}>Hi, {auth.user}!</div>
      <div className={style["text"]} onClick={logoutHandler}>
        Log Out
      </div>
    </div>
  );
};

export default MyAccount;
