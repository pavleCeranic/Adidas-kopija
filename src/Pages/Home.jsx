import React, { useEffect } from "react";
import style from "../styles/Home.module.css";
import AdidasStories from "../components/UniversalStuff/AdidasStories";
import PopularRN from "../components/UniversalStuff/PopularRN";

const Home = () => {
  return (
    <div className={style["home"]}>
      <PopularRN />
      <AdidasStories />
    </div>
  );
};

export default Home;
