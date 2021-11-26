import React, { useState } from "react";
import style from "./styles/SigningIn.module.css";
import Button from "../UniversalStuff/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useDispatch } from "react-redux";
import { LogIn } from "../../Store/auth-action";
import { useSelector } from "react-redux";

const SigningIn = (props) => {
  const auth = useSelector((state) => state.auth.ValidUser);
  const dispatch = useDispatch();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [validUser, setValidUser] = useState(true);

  const validateEmailREGEX = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  const emialHandler = (e) => {
    const enteredEmail = e.target.value;
    if (enteredEmail.length <= 2 || !validateEmailREGEX.test(enteredEmail)) {
      setEmailValid(false);
    } else {
      setEmailValid(true);
      setEmail(enteredEmail);
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

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (Password === "" || Email === "") {
      setEmailValid(false);
      setPasswordValid(false);
      return;
    }
    if (!emailValid || !passwordValid) {
      return;
    } else {
      setValidUser(true);
      dispatch(LogIn(Email, Password));
      console.log("da li je user validan", auth);
      if (!auth) {
        setValidUser(false);
        return;
      }
    }
  };

  // const validity = await formSubmissionHandler();
  // if (validity || !auth) {
  //   setValidUser(false);
  //   return;
  // }

  const emailId = emailValid ? 0 : 1;
  const passId = passwordValid ? 0 : 1;

  return (
    <div className={style["signingIn-container"]}>
      <div className={style["signIn"]}>
        <div className={style["title"]}>Sign in </div>

        <a className={style["hyperlink"]} href="/">
          Forgotten Your Password?
        </a>
        {validUser ? (
          ""
        ) : (
          <h6>
            Sorry. Couldnt find that user, check if you typed correct info.
          </h6>
        )}
        <form onSubmit={formSubmissionHandler}>
          <div className={style["form"]}>
            <input
              id={style[emailId]}
              type="email"
              placeholder="Email *"
              onChange={emialHandler}
              onFocus={emialHandler}
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
            {" "}
            <Button type={"submit"} koko={"SIGN IN"} />
          </button>
        </form>
        <div className={style["privacy-notice"]}>
          I have read and accepted
          <a className={style["hyperlink"]} href="/">
            {" "}
            Creators Club Terms & Conditions
          </a>{" "}
          and the
          <a className={style["hyperlink"]} href="/">
            {" "}
            adidas Privacy Notice
          </a>
        </div>
        <div>OR</div>
        <div className={style["other-login-options"]}>
          <div className={style["option"]}>
            <div>FACEBOOK</div>
            <div className={style["icon-fb"]}>
              <FontAwesomeIcon icon={faFacebook} />
            </div>
          </div>
          <div className={style["option"]}>
            <div>GOOGLE</div>
            <div className={style["icon-go"]}>
              <FontAwesomeIcon icon={faGoogle} />
            </div>
          </div>
        </div>
        <div className={style["logIn-different-way"]}></div>
      </div>
    </div>
  );
};
export default SigningIn;
