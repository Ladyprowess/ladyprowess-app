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
          Keep in mind that the client knows best. Put your brain to work in the
          shower if you want to be a genius. After that, leave the house, work,
          and serve the client. For us, every piece of content has the potential
          to make an impact, and we are committed to helping you achieve your
          goals through the power of words. Contact us today to learn more about
          how we can help you improve your online presence and reach your target
          audience.
        </p>
      </div>
    </div>
  );
};

export default AboutLady;
