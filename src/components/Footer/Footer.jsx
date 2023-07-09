import React from "react";
import { Link } from "react-router-dom";
import FooterForm from "./FooterForm";
import { AiOutlineMail } from "react-icons/ai";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTelephone,
  BsTwitter,
} from "react-icons/bs";
import "./Footer.css";
import Logo from "../../assets/images/Logo2.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer__container">
        <div className="footer__links">
          <div className="footer__links--top">
            <img src={Logo} alt="Logo of the brand" />
          </div>
          <div className="footer__links--child">
            <div className="footer__links--bold">
              <Link to="/faq">FAQ</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/terms-and-conditions">Terms and Conditions</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </div>
            <div className="footer__links--small">
              <Link to="/services/content-marketing">Content Marketing</Link>
              <Link to="/services/academic-writing">Academic Writing</Link>
              <Link to="/services/blog-post">Blog Post</Link>
              <Link to="/services/seo-management">SEO Management</Link>
              <Link to="/services/custom-services">Custom Services</Link>
            </div>
          </div>
          <div className="footer__links--social">
            <a
              href="https://facebook.com/ladyprowess"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook size={20} className="footer__icon" />
            </a>
            <a
              href="https://twitter.com/ladyprowess"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter size={20} className="footer__icon" />
            </a>
            <a
              href="https://www.instagram.com/ladyprowess/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram size={20} className="footer__icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/peace-ngozi-okafor-7548b2144/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin size={20} className="footer__icon" />
            </a>
            <a href="mailto:admin@ladyprowess.com.ng">
              <AiOutlineMail size={20} className="footer__icon" />
            </a>
            <a href="tel:+234-816-217-4443">
              <BsTelephone size={20} className="footer__icon" />
            </a>
          </div>
        </div>
        <div className="footer__form">
          <h3>Subscribe to our Newsletter</h3>

          <FooterForm />
        </div>
      </div>
      <div className="footer__copyright">
        <h3>Copyright &#169;{currentYear} LADY PROWESS; ALL RIGHTS RESERVED</h3>
      </div>
    </footer>
  );
};

export default Footer;
