import React from "react";
import Phones from "../public/images/bottom/phones.png";
import "../styles/css/bottom.css";

function Bottom() {
  const handleBottomBtnClick = () => {
    const userInput = document.querySelector("#form__userInput");
    userInput.focus();
    window.scroll(0, 500);
  };
  return (
    <div className="bottom">
      <img src={Phones} alt="" />
      <div className="bottom__container">
        <button onClick={handleBottomBtnClick}>Đăng ký ngay</button>
      </div>
    </div>
  );
}

export default Bottom;
