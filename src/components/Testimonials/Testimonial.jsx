import React from "react";
import "./Testimonial.css";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonial = () => {
  return (
    <div className="testimonial__container">
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
            {/* <img src={natasha1} alt="Testimonial from a client" /> */}
            <div className="testimonial__box-name">
              <p>Mark</p>
              <span>Small Business Owner</span>
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
              "Lady Prowess has been a game-changer for my business! Their
              content writing services have significantly boosted my online
              presence. The quality of their work is exceptional, and their
              attention to detail is impeccable. I highly recommend them!"
            </p>
          </div>
        </div>
        <div className="testimonial__box">
          <div className="testimonial__box--top">
            {/* <img src={natasha2} alt="Testimonial from a client" /> */}
            <div className="testimonial__box-name">
              <p>Emma</p>
              <span>Blogger</span>
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
              "Working with Lady Prowess has been an absolute pleasure. Their
              team of writers understood my vision perfectly and created
              engaging blog posts that aligned perfectly with my brand. The
              level of professionalism and timely delivery of their services is
              unmatched. I couldn't be happier!"
            </p>
          </div>
        </div>
        <div className="testimonial__box">
          <div className="testimonial__box--top">
            {/* <img src={natasha3} alt="Testimonial from a client" /> */}
            <div className="testimonial__box-name">
              <p>John</p>
              <span>University Student</span>
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
              "I am extremely impressed with Lady Prowess' academic writing
              services. They helped me with my research paper, and the result
              was outstanding. The writer was knowledgeable in my subject area
              and delivered a well-structured and thoroughly researched paper. I
              will definitely be using their services again!"
            </p>
          </div>
        </div>
        <div className="testimonial__box">
          <div className="testimonial__box--top">
            {/* <img src={natasha3} alt="Testimonial from a client" /> */}
            <div className="testimonial__box-name">
              <p>Feyijimi</p>
              <span>Director of ERIN</span>
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
              I highly recommend LadyProwess for your Technical Writing
              projects. They are exceptional writers with an impressive ability
              to simplify complex technical information into clear and concise
              language that is easily understandable to any audience. Their
              attention to details and ability to research complex topics to
              create engaging content are truly impressive.
            </p>
          </div>
        </div>
        <div className="testimonial__box">
          <div className="testimonial__box--top">
            {/* <img src={natasha1} alt="Testimonial from a client" /> */}
            <div className="testimonial__box-name">
              <p>Smidh Vadera </p>
              <span>Co-Founder at ICON TECHSOFT PVT. LTD.</span>
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
              It was an absolute pleasure working with the LadyProwess team. I
              couldn't have asked for a better collaborator on this project.
              Their professionalism and expertise were evident throughout the
              entire process. Not only did they deliver exceptional results, but
              they also did so with remarkable speed and efficiency.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonial;
