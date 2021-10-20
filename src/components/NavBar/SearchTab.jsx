import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import style from "./styles/SearchTab.module.css";
import { closeSearch } from "../../store/ui-action";

const SearchTab = (props) => {
  const dispatch = useDispatch();

  let specialClasses = props.cssClass;

  if (props.cssClass === "closingSearch") {
    specialClasses = "searchTab";
  }
  if (props.cssClass === "openingSearch") {
    specialClasses = "searchTabClosed";
  }

  const clickSearchHandler = () => {
    dispatch(closeSearch());
  };

  return (
    <Fragment>
      <div className={style[specialClasses]}>
        <div className={style["search-container"]}>
          <div onClick={clickSearchHandler} className={style["exit"]}>
            X
          </div>
          <input
            type="text"
            placeholder="Search"
            className={style["searchTabInput"]}
          />
        </div>
      </div>
    </Fragment>
  );
};
export default SearchTab;
