import React, { Fragment } from "react";
import SigningIn from "../components/Account/SigningIn";
import style from "../styles/UserAccount.module.css";
import JoinTheClub from "../components/Account/JoinTheClub";
import MyAccount from "../components/Account/MyAccount";
import { useDispatch, useSelector } from "react-redux";
import { LogOut } from "../Store/auth-action";

const UserAccount = (props) => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(LogOut());
  };
  const auth = useSelector((state) => state.auth);
  return (
    <Fragment>
      {auth.isLoggedIn ? (
        <MyAccount onClick={logoutHandler} logoutHandler={logoutHandler} />
      ) : (
        <div className={style["user-account"]}>
          <div className={style["main-content"]}>
            <SigningIn />
            <JoinTheClub />
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default UserAccount;
