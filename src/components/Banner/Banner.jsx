import React from "react";
import Button from "../Button/Button";
import Topmenu from "../Topmenu/Topmenu";

import "./Banner.css";

const Banner = () => {
  return (
    <>
    
    <div className="banner__container">
    <Topmenu/>
      <div className="banner__container--description">
        <h1>
          Need Content Writers For <br />
          Your Project?
        </h1>
        <p>
          Our extensive experience with renowned projects and protocols will
          impact your narrative if you allow us to work with you.
        </p>
        <Button title="Get Started" url="/" />
      </div>
     
    </div>
    </>
    
  );
};

export default Banner;
