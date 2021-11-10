import React from "react";
import SigningIn from "../components/Account/SigningIn";
import style from "../styles/UserAccount.module.css";
import JoinTheClub from "../components/Account/JoinTheClub";

const UserAccount = () => {
  return (
    <div className={style["user-account"]}>
      <div className={style["main-content"]}>
        <SigningIn />
        <JoinTheClub />
      </div>
    </div>
  );
};
export default UserAccount;
