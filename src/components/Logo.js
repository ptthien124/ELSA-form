import React from "react";
import A from "../public/images/logo/A.png";
import E from "../public/images/logo/E.png";
import L from "../public/images/logo/L.png";
import logoImage from "../public/images/logo/logo.png";
import S from "../public/images/logo/S.png";
import "../styles/css/logo.css";

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
