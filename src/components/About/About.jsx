import React from "react";
import { Link } from "react-router-dom";
import about from "../../assets/images/lady2.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about__container">
      <div className="about__container--imagebox">
        <img
          src={about}
          alt="A Woman holidng a laptop inside Ladyprowess logo"
        />
      </div>
      <div className="about__container--description">
        <h2>About Us</h2>
        <p>
          We are a content writing brand that provides high quality written
          materials for businesses and individuals. With a team of experienced
          and skilled writers, we strive to create engaging, informative, and
          effective content in conveying your message to your target audience.
          Whether it’s a website, blog post, product description, or any other
          content, we take the time to understand your goals and objectives and
          craft custom content that accurately reflects your brand voice and
          appeals to your target audience.
        </p>
        <Link to='/' className="about__button__wrapper">
        <button>
          Get Started
        </button>
      </Link>
      </div>
    </div>
  );
};

export default About;
