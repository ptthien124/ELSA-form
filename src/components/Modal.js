import React, { useEffect, useMemo, useState } from "react";
import "../styles/css/modal.css";

function Modal() {
  const handleCloseClick = (e) => {
    e.preventDefault();
    const modalWrapper = document.querySelector(".modal__wrapper");
    modalWrapper.classList.remove("show");

    const modal = document.querySelector(".modal");
    modal.classList.remove("success");
    modal.classList.remove("error");
    modal.classList.remove("name");
    modal.classList.remove("phone");
    modal.classList.remove("email");
    modal.classList.remove("select");
  };

  return (
    <div className="modal__wrapper" onClick={handleCloseClick}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <span className="modal__headerSuccess">Success!</span>
          <span className="modal__headerError">Error!</span>
        </div>
        <div className="modal__body">
          <div className="success__container">
            Chúc mừng bạn đã đăng ký thành công tài khoản ELSA Speak.
          </div>
          <div className="error__container">
            <p>Có lỗi!</p>
            <span style={{ color: "transparent" }}>a</span>
            <p className="errorName">Họ tên của bạn không hợp lệ</p>
            <p className="errorPhone">Số điện thoại của bạn không hợp lệ</p>
            <p className="errorEmail">Email của bạn không hợp lệ</p>
            <p className="errorSelect">Chọn gói học của bạn</p>
          </div>
        </div>
        <div className="modal__footer">
          <button className="modal__btn" onClick={handleCloseClick}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
