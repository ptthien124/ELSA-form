import React from "react";
import Flower from "../../public/images/form/flower.png";
import Phone from "../../public/images/form/phone.png";
import "../../styles/css/formContainer.css";
import Form from "./Form";

function FormContainer() {
  return (
    <div className="form__container">
      <div className="form__wrapper">
        <Form></Form>
      </div>
      <div className="form__background">
        <img className="form__backgroundFlower" src={Flower} alt="" />
        <img className="form__backgroundPhone" src={Phone} alt="" />
        <div className="background__circle small"></div>
        <div className="background__circle big"></div>
        <div className="background__square"></div>
      </div>
    </div>
  );
}

export default FormContainer;
