import React from "react";
import "./Goals.css";
import goals from '../../assets/images/Goal.svg'
import lens from '../../assets/images/Microsoft HoloLens.svg'
import woman from '../../assets/images/goals.png'
import woman2 from '../../assets/images/Rectangle 9.png'

const Goals = () => {
  return (
    <div className="goals__container">
      <div className="goals__container--text">
        <div className="goals__text--mission--container">
          <div className="goals__aims--text">
            <img src={goals} alt="Mission goals" />
            <h3>Mission</h3>
            <p>
              To create compelling and engaging content that informs, educates,
              and inspires our audience while meeting the needs of our clients.
            </p>
          </div>

         
        </div>
        <div className="goals__text--vision--container">
          <div className="goals__aims--text">
            <img src={lens} alt="Vision goals" />
            <h3>Vision</h3>
            <p>
              To be the leading content writing brand known for producing
              high-quality, impactful content that drives results for our
              clients and creates a positive impact on society.
            </p>
          </div>
          
        </div>
      </div>
      <div className="goals__container--image">
        <img src={woman} alt="A Ladyprowess ambassador" className="show-on-laptop"/>
        <img src={woman2} alt="A Ladyprowess ambassador" className="hide-on-laptop"/>
      </div>
    </div>
  );
};

export default Goals;
