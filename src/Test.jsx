//import CarouselComponent from "./components/Carousel/Carousel";
import React from "react";
import CarouselComponent from "./components/UniversalStuff/Carousel/CarouselComponent";
import Button2 from "./components/UniversalStuff/Button2";
//import Novo from "./components/UniversalStuff/Novo";
//import { useEffect, useState } from "react";

const Test = (props) => {
  return (
    <div>
      {/* <Novo /> */}
      <Button2 koko={"LOGIN"} />
      <CarouselComponent />
    </div>
  );
};
export default Test;
