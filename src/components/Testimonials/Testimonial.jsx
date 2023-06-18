import React from "react";
import "./Testimonial.css";
import natasha1 from "../../assets/images/Ellipse 6.svg";
import natasha2 from "../../assets/images/Ellipse 7.svg";
import natasha3 from "../../assets/images/Ellipse 8.svg";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonial = () => {
  return (
    <div className="testimonial__container" >
        
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 600,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 600,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
      
        <div className="testimonial__box">
          <div className="testimonial__box--top">
            <img src={natasha1} alt="Testimonial from a client" />
            <div className="testimonial__box-name">
              <p>Natasha</p>
              <span>Web Developer</span>
            </div>
          </div>
          <div className="testimonial__box--text">
            <div className="testimonial__icon">
              <BsStarFill fill="#F9D978" size={15} />
              <BsStarFill fill="#F9D978" size={15} />
              <BsStarFill fill="#F9D978" size={15} />
              <BsStarFill fill="#F9D978" size={15} />
              <BsStarFill fill="#F9D978" size={15} />
            </div>
            <p>
              To create compelling and engaging content that informs, educates,
              and inspires our audience while meeting the needs of our clients.
            </p>
          </div>
        </div>
        <div className="testimonial__box">
          <div className="testimonial__box--top">
            <img src={natasha2} alt="Testimonial from a client" />
            <div className="testimonial__box-name">
              <p>Natasha</p>
              <span>Web Developer</span>
            </div>
          </div>
          <div className="testimonial__box--text">
            <div className="testimonial__icon">
              <BsStarFill fill="#F9D978" size={15} />
              <BsStarFill fill="#F9D978" size={15} />
              <BsStarFill fill="#F9D978" size={15} />
              <BsStarFill fill="#F9D978" size={15} />
              <BsStarHalf fill="#F9D978" size={15} />
            </div>
            <p>
              To create compelling and engaging content that informs, educates,
              and inspires our audience while meeting the needs of our clients.
            </p>
          </div>
        </div>
        <div className="testimonial__box">
          <div className="testimonial__box--top">
            <img src={natasha3} alt="Testimonial from a client" />
            <div className="testimonial__box-name">
              <p>Natasha</p>
              <span>Web Developer</span>
            </div>
          </div>
          <div className="testimonial__box--text">
            <div className="testimonial__icon">
              <BsStarFill fill="#F9D978" size={15} />
              <BsStarFill fill="#F9D978" size={15} />
              <BsStarFill fill="#F9D978" size={15} />
              <BsStarFill fill="#F9D978" size={15} />
              <BsStarFill fill="#F9D978" size={15} />
            </div>
            <p>
              To create compelling and engaging content that informs, educates,
              and inspires our audience while meeting the needs of our clients.
            </p>
          </div>
        </div>
        <div className="testimonial__box">
          <div className="testimonial__box--top">
            <img src={natasha3} alt="Testimonial from a client" />
            <div className="testimonial__box-name">
              <p>Natasha</p>
              <span>Web Developer</span>
            </div>
          </div>
          <div className="testimonial__box--text">
            <div className="testimonial__icon">
              <BsStarFill fill="#F9D978" size={15} />
              <BsStarFill fill="#F9D978" size={15} />
              <BsStarFill fill="#F9D978" size={15} />
              <BsStarFill fill="#F9D978" size={15} />
              <BsStarHalf fill="#F9D978" size={15} />
            </div>
            <p>
              To create compelling and engaging content that informs, educates,
              and inspires our audience while meeting the needs of our clients.
            </p>
          </div>
        </div>
        <div className="testimonial__box">
          <div className="testimonial__box--top">
            <img src={natasha1} alt="Testimonial from a client" />
            <div className="testimonial__box-name">
              <p>Natasha</p>
              <span>Web Developer</span>
            </div>
          </div>
          <div className="testimonial__box--text">
            <div className="testimonial__icon">
              <BsStarFill fill="#F9D978" size={15} />
              <BsStarFill fill="#F9D978" size={15} />
              <BsStarFill fill="#F9D978" size={15} />
              <BsStarFill fill="#F9D978" size={15} />
              <BsStarFill fill="#F9D978" size={15} />
            </div>
            <p>
              To create compelling and engaging content that informs, educates,
              and inspires our audience while meeting the needs of our clients.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonial;
