import style from "../../styles/UserAccount.module.css";
import Button from "../UniversalStuff/Button";

const SigningIn = (props) => {
  const buttonText = "SIGN IN";
  return (
    <div className={style["signingIn-container"]}>
      <div className={style["signIn"]}>
        <div className={style["title"]}>Sign in </div>
        <div className={style["form"]}>
          <input type="text" placeholder="Email *" />

          <input type="text" placeholder="Password *" />
        </div>
        <Button koko={"SIGN IN"} />
        <div className={style["logIn-different-way"]}></div>
      </div>
    </div>
  );
};
export default SigningIn;
