import React from "react";
import style from "../styles/Home.module.css";
import CardList from "../components/card/CardList";

const Home = () => {
  return (
    <div className={style["home"]}>
      <CardList />
    </div>
  );
};

export default Home;
