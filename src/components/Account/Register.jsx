import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import UserAccount from "../../Pages/UserAccount";
import { RegisterUser } from "../../Store/auth-action";
import Button from "../UniversalStuff/Button";
import style from "./styles/SigningIn.module.css";

const Register = () => {
  const dispatch = useDispatch();
  const userExists = useSelector((state) => state.auth.userExists);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [usernameValid, setUsernameValid] = useState(true);
  const [validUser, setValidUser] = useState(true);

  const validateEmailREGEX = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  const emailHandler = (e) => {
    const enteredEmail = e.target.value;
    if (enteredEmail.length <= 2 || !validateEmailREGEX.test(enteredEmail)) {
      setEmailValid(false);
    } else {
      setEmailValid(true);
      setEmail(enteredEmail);
    }
  };
  const usernameHandler = (e) => {
    const enteredUsername = e.target.value;
    if (enteredUsername.length <= 2) {
      setUsernameValid(false);
    } else {
      setUsernameValid(true);
      setUsername(enteredUsername);
    }
  };
  const passwordHandler = (e) => {
    const enteredPassword = e.target.value;
    if (enteredPassword.length <= 2) {
      setPasswordValid(false);
    } else {
      setPasswordValid(true);
      setPassword(enteredPassword);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password === "" || email === "" || username === "") {
      setEmailValid(false);
      setPasswordValid(false);
      setUsernameValid(false);
      return;
    }
    if (!emailValid || !passwordValid || !usernameValid) {
      setEmailValid(false);
      setPasswordValid(false);
      setUsernameValid(false);
      return;
    } else {
      dispatch(RegisterUser(username, email, password));
      return;
    }
  };
  useEffect(() => {
    console.log(userExists);
    if (userExists === false) {
      setRedirect(true);
    }
    if (userExists) {
      setValidUser(false);
    }
  }, [userExists]);

  const emailId = emailValid ? 0 : 1;
  const passId = passwordValid ? 0 : 1;
  const usernameId = usernameValid ? 0 : 1;

  return (
    <div className={style["signingIn-container"]}>
      <div className={style["signIn"]}>
        <div className={style["title"]}>Register </div>
        {validUser ? (
          ""
        ) : (
          <h6>
            Sorry. User with this Email address alerady exists! Try{" "}
            <a href="/useraccount">SIGN IN</a>
          </h6>
        )}
        <form onSubmit={submitHandler}>
          <div className={style["form"]}>
            <input
              id={style[emailId]}
              type="text"
              placeholder="Email *"
              onChange={emailHandler}
              onFocus={emailHandler}
            />
            <input
              id={style[usernameId]}
              type="text"
              placeholder="Username *"
              onChange={usernameHandler}
              onFocus={usernameHandler}
            />
            <input
              id={style[passId]}
              type="password"
              placeholder="Password *"
              onChange={passwordHandler}
              onFocus={passwordHandler}
            />
          </div>

          <div className={style["keep-logged-in"]}>
            <input type="checkbox" placeholder="kkok"></input>
            <div>
              Keep me logged in.{" "}
              <a className={style["hyperlink"]} href="/">
                More info
              </a>
            </div>
          </div>
          <button>
            <Button type={"submit"} koko={"SIGN IN"} />
          </button>
        </form>
      </div>
      {redirect && <Redirect to="/useraccount" component={UserAccount} />}
    </div>
  );
};
export default Register;
