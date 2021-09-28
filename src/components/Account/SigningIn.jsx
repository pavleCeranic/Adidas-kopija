import style from "./Account.module.css";
import Button from "../UniversalStuff/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

const SigningIn = (props) => {
  return (
    <div className={style["signingIn-container"]}>
      <div className={style["signIn"]}>
        <div className={style["title"]}>Sign in </div>
        <div>
          <a href="">Forgotten Your Password?</a>
        </div>
        <div className={style["form"]}>
          <input type="text" placeholder="Email *" />

          <input type="text" placeholder="Password *" />
        </div>

        <div className={style["keep-logged-in"]}>
          <input type="checkbox" placeholder="kkok"></input>
          <div className={style[""]}>
            Keep me logged in. <a href=""> More info</a>
          </div>
        </div>
        <Button koko={"SIGN IN"} />
        <div className={style["privacy-notice"]}>
          I have read and accepted
          <a href=""> Creators Club Terms & Conditions</a> and the{" "}
          <a href=""> adidas Privacy Notice</a>
        </div>
        <div>OR</div>
        <div className={style["other-login-options"]}>
          <div className={style["fb-option"]}>
            <div>FACEBOOK</div>
            <div className={style["icon-fb"]}>
              <FontAwesomeIcon icon={faFacebook} />
            </div>
          </div>
          <div className={style["go-option"]}>
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
