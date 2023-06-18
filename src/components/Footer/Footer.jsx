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
import Logo from "../../assets/images/Logo 2.svg";

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
              <Link to="/">Services</Link>
              <Link to="/">FAQ</Link>
              <Link to="/">Help Center</Link>
              <Link to="/">Blog</Link>
            </div>
            <div className="footer__links--small">
              <Link to="/">Content Marketing</Link>
              <Link to="/">Technical Writing</Link>
              <Link to="/">White Papers</Link>
              <Link to="/">SEO Management</Link>
              <Link to="/">Custom Services</Link>
            </div>
          </div>
          <div className="footer__links--social">
            <a href="http://" target='_blank' rel="noreferrer">
              <BsFacebook size={20} className="footer__icon" />
            </a>
            <a href="http://" target='_blank' rel="noreferrer">
              <BsTwitter size={20} className="footer__icon" />
            </a>
            <a href="http://" target='_blank' rel="noreferrer">
              <BsInstagram size={20} className="footer__icon" />
            </a>
            <a href="http://" target='_blank' rel="noreferrer">
              <BsLinkedin size={20} className="footer__icon" />
            </a>
            <a href="mailto:">
              <AiOutlineMail size={20} className="footer__icon" />
            </a>
            <a href="tel:+">
              <BsTelephone size={20} className="footer__icon" />
            </a>
          </div>
        </div>
        <div className="footer__form">
          <h3>Let us know how we can help today</h3>

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
