import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleSearchAction } from "../../Store/SearchSlice";
import style from "./styles/SearchTab.module.css";

const SearchTab = () => {
  const dispatch = useDispatch();

  const searchState = useSelector((state) => state.search.show);
  console.log("kako e", searchState);

  const clickSearchHandler = () => {
    dispatch(toggleSearchAction.toggleSearch());
  };

  return (
    <Fragment>
      {searchState ? (
        <div className={style["search-tab"]}>
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
      ) : (
        <div></div>
      )}
    </Fragment>
  );
};
export default SearchTab;
