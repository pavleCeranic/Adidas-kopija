import React from "react";
import BackToTop from "./BackToTop";
import GiveFeedback from "./GiveFeedback";
import BottomPart from "./BottomPart";
import style from "./styles/Footer.module.css";
import GetSaleOnMembership from "./GetSaleOnMembership";
import LogInandCartInFooter from "./LogInandCartInFooter";
import FooterAdition from "./FooterAdition";
import FooterCategories from "./FooterCategories";

const Footer = () => {
  return (
    <div>
      <GiveFeedback />
      <BackToTop />
      <LogInandCartInFooter />
      <GetSaleOnMembership />
      <FooterCategories />
      <FooterAdition />
      <BottomPart />
    </div>
  );
};

export default Footer;
