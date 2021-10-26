import React from "react";
import style from "./styles/SigningIn.module.css";
import Button from "../UniversalStuff/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

const SigningIn = (props) => {
  return (
    <div className={style["signingIn-container"]}>
      <div className={style["signIn"]}>
        <div className={style["title"]}>Sign in </div>

        <a className={style["hyperlink"]} href="/">
          Forgotten Your Password?
        </a>

        <div className={style["form"]}>
          <input type="text" placeholder="Email *" />

          <input type="text" placeholder="Password *" />
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
        <Button koko={"SIGN IN"} />
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
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </div>
          </div>
          <div className={style["option"]}>
            <div>GOOGLE</div>
            <div className={style["icon-go"]}>
              <FontAwesomeIcon icon={faGoogle} size="2x" />
            </div>
          </div>
        </div>
        <div className={style["logIn-different-way"]}></div>
      </div>
    </div>
  );
};
export default SigningIn;
