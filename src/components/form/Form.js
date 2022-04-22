import React, { useMemo, useState } from "react";
import "../../styles/css/form.css";

function Form() {
  const select = [
    {
      id: 0,
      text: "Gói học 1 năm",
      name: "oneYear",
    },
    {
      id: 1,
      text: "Gói trọn đời",
      name: "wholeLife",
    },
  ];

  // 2 way binding for input value
  const [check, setCheck] = useState(-1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // check validate input
  const [checkName, setCheckName] = useState(false);
  const [checkPhone, setCheckPhone] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);

  // function check if char is number
  const isNumber = (value) => {
    let result = false;
    for (let j = 0; j <= 9; j++) {
      if (value == j) {
        result = true;
        break;
      }
    }
    return result;
  };

  let validatePhone = true;
  useMemo(() => {
    for (let i = 0; i < phone.length; i++) {
      if (isNumber(phone[i]) === false) validatePhone = false;
    }
  }, [phone]);

  // validate input function
  const handleUserInputBlur = () => {
    if (name == "") {
      document
        .querySelector(".form__userError--empty")
        .classList.add("input__errorShow");

      document.querySelector("#form__userInput").classList.add("inputError");

      setCheckName(false);
    } else setCheckName(true);
  };

  const handleUserInputFocus = () => {
    document
      .querySelector(".form__userError--empty")
      .classList.remove("input__errorShow");

    document.querySelector("#form__userInput").classList.remove("inputError");
  };

  const handlePhoneInputBlur = () => {
    if (phone == "") {
      document
        .querySelector(".form__phoneError--empty")
        .classList.add("input__errorShow");

      document.querySelector("#form__phoneInput").classList.add("inputError");

      setCheckPhone(false);
    } else if (phone.length !== 10 || phone[0] !== "0" || !validatePhone) {
      document
        .querySelector(".form__phoneError--wrong")
        .classList.add("input__errorShow");

      document.querySelector("#form__phoneInput").classList.add("inputError");

      setCheckPhone(false);
    } else setCheckPhone(true);
  };

  const handlePhoneInputFocus = () => {
    document
      .querySelector(".form__phoneError--empty")
      .classList.remove("input__errorShow");

    document
      .querySelector(".form__phoneError--wrong")
      .classList.remove("input__errorShow");

    document.querySelector("#form__phoneInput").classList.remove("inputError");
  };

  const handleEmailInputBlur = () => {
    if (email == "") {
      document
        .querySelector(".form__emailError--empty")
        .classList.add("input__errorShow");

      document.querySelector("#form__emailInput").classList.add("inputError");

      setCheckEmail(false);
    } else if (
      email.search("@gmail.com") === -1 ||
      email.search("@gmail.com") === 0
    ) {
      document
        .querySelector(".form__emailError--wrong")
        .classList.add("input__errorShow");

      document.querySelector("#form__emailInput").classList.add("inputError");

      setCheckEmail(false);
    } else setCheckEmail(true);
  };

  const handleEmailInputFocus = () => {
    document
      .querySelector(".form__emailError--empty")
      .classList.remove("input__errorShow");

    document
      .querySelector(".form__emailError--wrong")
      .classList.remove("input__errorShow");

    document.querySelector("#form__emailInput").classList.remove("inputError");
  };

  const handleSubmitBtnClick = (e) => {
    e.preventDefault();
    document.querySelector(".modal__wrapper").classList.add("show");

    const modal = document.querySelector(".modal");
    if (checkName && checkPhone && checkEmail && check !== -1)
      modal.classList.add("success");
    else {
      modal.classList.add("error");
      if (!checkName) modal.classList.add("name");
      if (!checkPhone) modal.classList.add("phone");
      if (!checkEmail) modal.classList.add("email");
      if (check === -1) modal.classList.add("select");
    }
  };

  return (
    <form className="form">
      <div className="form__header">
        <span>CÙNG ỨNG DỤNG ELSA</span>
        <span>NÓI TIẾNG ANH “THẢ GA”</span>
      </div>

      <div className="form__body">
        <div className="form__user">
          <label htmlFor="form__userInput" className="form__label">
            <i className="fa-regular fa-user"></i>
            <span>Họ tên *</span>
          </label>
          <input
            type="text"
            id="form__userInput"
            value={name}
            placeholder="Nguyễn Văn A"
            onChange={(e) => setName(e.target.value)}
            onBlur={handleUserInputBlur}
            onFocus={handleUserInputFocus}
          />
          <p className="form__userError--empty">Vui lòng nhập tên của bạn</p>
        </div>

        <div className="form__number">
          <label htmlFor="form__phoneInput" className="form__label">
            <i className="fa-solid fa-phone"></i>
            <span>Số điện thoại *</span>
          </label>
          <input
            type="text"
            id="form__phoneInput"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onBlur={handlePhoneInputBlur}
            onFocus={handlePhoneInputFocus}
          />
          <p className="form__phoneError--empty">Vui lòng nhập số điện thoại</p>
          <p className="form__phoneError--wrong">
            Số điện thoại phải có 10 chữ số và bắt đầu bằng số 0
          </p>
        </div>

        <div className="form__email">
          <label htmlFor="form__emailInput" className="form__label">
            <i className="fa-regular fa-envelope"></i>
            <span>Email *</span>
          </label>
          <input
            type="email"
            id="form__emailInput"
            value={email}
            placeholder="NguyenVanA@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmailInputBlur}
            onFocus={handleEmailInputFocus}
          />
          <p className="form__emailError--empty">Vui lòng nhập Email</p>
          <p className="form__emailError--wrong">
            Email phải có ít nhất 1 kí tự cùng hậu tố <span>@gmail.com</span>
          </p>
        </div>

        <div className="form__select">
          {select.map((item) => (
            <div key={item.id}>
              {/*styled checkbox: https://www.youtube.com/watch?v=y93M3RoKQUE */}
              <input
                checked={check === item.id}
                onChange={() => setCheck(item.id)}
                type="checkbox"
                name={item.name}
                id={item.id}
              />
              <label htmlFor={item.id}>{item.text}</label>
            </div>
          ))}
        </div>
        {check === -1 ? (
          ""
        ) : check === 0 ? (
          <p className="form__price">Giá: 989.000 VND</p>
        ) : (
          <p className="form__price">Giá: 1.995.000 VND</p>
        )}

        <button onClick={handleSubmitBtnClick} className="form__submitBtn">
          GỬI ĐĂNG KÝ
        </button>
        <div className="padding__bottom" style={{ height: "32px" }}></div>
      </div>
    </form>
  );
}
export default Form;
