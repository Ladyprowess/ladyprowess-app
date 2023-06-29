import React from "react";
import "./About.css";
import image1 from "../../assets/images/Rectangle 7.png";
import image2 from "../../assets/images/Rectangle 38.png";
import image3 from "../../assets/images/Rectangle 37.png";
import image4 from "../../assets/images/Rectangle 39.png";

const AboutLady = () => {
  return (
    <div className="aboutlady__container">
      <div className="aboutlady__container--image">
        <div className="aboutlady__image--right">
          <img src={image1} alt="Brand ambassador of Ladyprowess" />
          <img src={image2} alt="Brand ambassadoe of Ladyprowess" />
        </div>
        <div className="aboutlady__image--left">
          <img src={image3} alt="Brand ambassador of Ladyprowess" />
          <img src={image4} alt="Brand ambassadoe of Ladyprowess" />
        </div>
      </div>
      <div className="aboutlady__container--text">
        <h2>About the Company</h2>
        <p>
          Welcome to Lady Prowess, your go-to destination for exceptional
          content writing services! At Lady Prowess, we take pride in our
          ability to deliver outstanding content that meets and exceeds your
          expectations. Our team of skilled writers possesses the expertise and
          creativity to provide you with compelling and engaging written
          materials across various domains. At Lady Prowess, we are passionate
          about delivering exceptional content that helps you achieve your
          goals. Our commitment to quality, creativity, and customer
          satisfaction sets us apart. Contact us today, and let us elevate your
          brand's presence with our premium content writing services.
        </p>
      </div>
    </div>
  );
};

export default AboutLady;
