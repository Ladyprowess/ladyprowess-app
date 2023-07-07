import React from "react";
import './Services.css';
import ServicesForm from "./ServicesForm";

const ServicesContent = ({ heading, description }) => {
  return (
    <div className="servicescontent__container">
      <div className="servicescontent__topHeading">
        <h2>Send Us an Email for Everything on {heading}</h2>
      </div>
      <div className="services__content__children">
        <div className="services__content__child">
          <h2 className="services__content__heading">{heading}</h2>
          <p className="services__content__para">{description}</p>
        </div>
        <div className="services__content__child">
          <ServicesForm />
        </div>
      </div>
    </div>
  );
};

export default ServicesContent;
