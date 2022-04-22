import React from "react";
import "../styles/css/logo.css";
import logoImage from "../public/images/logo/logo.png";
import E from "../public/images/logo/E.png";
import L from "../public/images/logo/L.png";
import S from "../public/images/logo/S.png";
import A from "../public/images/logo/A.png";

function Logo() {
  return (
    <div className="logo">
      <img className="logo__img" src={logoImage} alt="" />
      <div className="logo__container">
        <img src={E} alt="" />
        <img src={L} alt="" />
        <img src={S} alt="" />
        <img src={A} alt="" />
      </div>
    </div>
  );
}

export default Logo;
