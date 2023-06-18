import React from "react";
import money from "../../assets/images/Stack of Money.png";
import seller from "../../assets/images/Best Seller.svg";
import support from "../../assets/images/Technical Support.svg";
import "./Features.css";

const Features = () => {
  return (
    <div className="banner__container--box">
      <div className="banner__container--box__child">
        <div className="banner__icon-box">
          <img
            src={money}
            alt="an icon that talks about the features of ladyprowess"
          />
        </div>
        <h2>Affordable</h2>
        <p>
          Get quality content with prices that you do not need to break the
          bank. We are budget friendly
        </p>
      </div>
      <div className="banner__container--box__child">
        <div className="banner__icon-box">
          <img
            src={seller}
            alt="an icon that talks about the features of ladyprowess"
          />
        </div>
        <h2>Best Service</h2>
        <p>
          Get quality content with prices that you do not need to break the
          bank. We are budget friendly
        </p>
      </div>
      <div className="banner__container--box__child">
        <div className="banner__icon-box">
          <img
            src={support}
            alt="an icon that talks about the features of ladyprowess"
          />
        </div>
        <h2>Constant Support</h2>
        <p>
          Get quality content with prices that you do not need to break the
          bank. We are budget friendly
        </p>
      </div>
    </div>
  );
};

export default Features;
