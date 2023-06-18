import React from "react";
import "./Services.css";
import book from "../../assets/images/Book.png";
import ebook from "../../assets/images/Ebook.png";
import sourcecode from "../../assets/images/Source Code.png";
import searchbar from "../../assets/images/Search Bar.png";
import blog from "../../assets/images/Blogloving.png";
import vector from "../../assets/images/Vector.png";

const Services = () => {
  return (
    <div className="services__container">
      <div className="services__container--top">
        <h2>Services</h2>
        <p>
          Our content writing brand offers a wide range of services to help
          businesses <br/>
          and individuals achieve their goals through the power of
          words.
        </p>
      </div>
      <div className="services__container--bottom">
        <div className="services__container--bottom__child">
          <div className="services__icon-box">
            <img
              src={book}
              alt="an icon that talks about the services of ladyprowess"
            />
          </div>
          <h3>Content Marketing</h3>
          <p>
            Whether your goal is to augment internal writers, increase traffic
            to category pages, or keep things interesting with a vast SKU
            inventory, our skilled product copywriters and content marketers can
            help you produce content that converts.
          </p>
        </div>
        <div className="services__container--bottom__child">
          <div className="services__icon-box">
            <img
              src={ebook}
              alt="an icon that talks about the services of ladyprowess"
            />
          </div>
          <h3>White Paper</h3>
          <p>
            Do you need a white paper that will inform your audience while
            establishing your brand’s credibility and creating demand for your
            products? Our white paper writers are recruited for their
            proficiency in research, writing, and the subject matter.
          </p>
        </div>
        <div className="services__container--bottom__child">
          <div className="services__icon-box">
            <img
              src={sourcecode}
              alt="an icon that talks about the services of ladyprowess"
            />
          </div>
          <h3>Technical Writing</h3>
          <p>
            By producing papers such as installation and user manuals, standard
            operating procedures (SOPs), API documentation, technical reports,
            training materials, quick reference guides, and website content, we
            assist businesses in meeting a broad range of writing demands.
          </p>
        </div>
        <div className="services__container--bottom__child">
          <div className="services__icon-box">
            <img
              src={searchbar}
              alt="an icon that talks about the services of ladyprowess"
            />
          </div>
          <h3>SEO Management</h3>
          <p>
            With a small team of seasoned writers and SEO strategists, we have
            made SEO optimization a top-priority service. We take the necessary
            precautions and use our knowledge to ensure that your content is
            enhanced with all the elements required to rank well on search
            engine result pages.
          </p>
        </div>
        <div className="services__container--bottom__child">
          <div className="services__icon-box">
            <img
              src={blog}
              alt="an icon that talks about the services of ladyprowess"
            />
          </div>
          <h3>Blog Post</h3>
          <p>
            To produce material that your audience wants to read, a selected
            network of freelance blog writers is available. Blog post content
            may increase website traffic and foster thought leadership. Let us
            hand-pick a writer with experience in your field for you!
          </p>
        </div>
        <div className="services__container--bottom__child">
          <div className="services__icon-box">
            <img
              src={vector}
              alt="an icon that talks about the services of ladyprowess"
            />
          </div>
          <h3>Custom Services</h3>
          <p>
            To produce material that your audience wants to read, a selected
            network of freelance blog writers is available. Blog post content
            may increase website traffic and foster thought leadership. Let us
            hand-pick a writer with experience in your field for you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
