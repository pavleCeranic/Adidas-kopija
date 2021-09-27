import React from "react";
import RegisterNew from "../components/Account/RegisterNew";
import SigningIn from "../components/Account/SigningIn";
import style from "../styles/UserAccount.module.css";

const UserAccount = () => {
  return (
    <div className={style["user-account"]}>
      <SigningIn />
      <RegisterNew />
    </div>
  );
};
export default UserAccount;
