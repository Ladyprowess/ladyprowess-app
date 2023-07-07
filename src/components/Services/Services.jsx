import React from "react";
import "./Services.css";
import ServicesData from "../data/ServicesData";
import { Link } from "react-router-dom";



const Services = () => {

  return (
    <div className="services__container">
      <div className="services__container__top">
        <h2>Services</h2>
        <p>
          Our content writing brand offers a wide range of services to help
          businesses <br />
          and individuals achieve their goals through the power of words.
        </p>
      </div>
      <div className="services__container__bottom">
      {ServicesData.map((service) => (
          <Link
            className="services__container__bottom__child"
            key={service.heading}
            to={service.href}
          >
            <div className="services__icon_box">
              <img
                src={service.img}
                alt="an icon that talks about the services of ladyprowess"
                
              />
            </div>
            <h3>{service.heading}</h3>
            <p>{service.description}</p>
          </Link>
        ))}

       
      </div>
    </div>
  );
};

export default Services;
