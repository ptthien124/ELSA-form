import React from "react";
import phone from "../public/images/top/phone.png";
import "../styles/css/top.css";

function Top() {
  const handleBtnClick = () => {
    const userInput = document.querySelector("#form__userInput");
    userInput.focus();
    window.scroll(0, 500);
  };

  return (
    <div className="top">
      <div className="top__container">
        <div className="square"></div>
        <div className="top__content">
          <span>APP LUYỆN NÓI</span>
          <span>GIAO TIẾP TIẾNG ANH THỜI 4.0</span>
          <h3>Với ELSA Speak - Ai Cũng Có Thể Nói Tiếng Anh Hay!</h3>
          <button onClick={handleBtnClick}>
            Đăng ký ngay
          </button>
        </div>
      </div>
      <img src={phone} alt="" />
    </div>
  );
}

export default Top;
