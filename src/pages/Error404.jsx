import React from "react";
import { Link } from "react-router-dom";
import "./Error404.css";

function Error404() {
  return (
    <>
      <div className="error404__container">
        <h2>
          Oh No! It seems the page <br />
          you're looking for does not exist
        </h2>
        <p>
          While you're still here, why don't you browse through our services.
        </p>
        <Link to='/' className="about__button__wrapper">
        <button>
          Get Started
        </button>
      </Link>
      </div>
    </>
  );
}

export default Error404;