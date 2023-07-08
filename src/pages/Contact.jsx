import React from "react";
import { BiMailSend } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import ServicesBanner from "../components/Banner/ServicesBanner";
import Footer from "../components/Footer/Footer";
import lady2 from '../assets/images/lady2.jpg'

const Contact = () => {
  return (
    <>
      <ServicesBanner heading="Contact Us" />
      <div className="contact__container">
        <div className="contact__description">
          <div className="contact__description--header">
            <h2>Contact Us</h2>
            <p>
              Thank you for your interest in contacting us. We're here to assist
              you with any questions, inquiries, or requests you may have.
              Please find below our contact information:
            </p>
          </div>
          <div className="contact__description--icons">
            <div className="contact__icon">
              <BsTelephone size={25} fill="#507B80" />
              <a href="tel:+2348162174443">(+234) 816-217-4443</a>
            </div>
            <div className="contact__icon">
              <BiMailSend size={30} fill="#507B80" />
              <a href="mailto:admin@ladyprowess.com.ng">
                admin@ladyprowess.com.ng
              </a>
            </div>
          </div>
          <div className="contact__description--footer">
            <p>
              Feel free to reach out to us via phone or email, and our friendly
              and knowledgeable team will be happy to assist you. <br />
              We strive to respond to all inquiries in a timely manner and
              provide the assistance you need. Whether you have questions about
              our services, pricing, customization options, or any other
              content-related matter, we're here to help. <br />
              Thank you for considering Lady Prowess for your content writing
              needs. We look forward to hearing from you and helping you achieve
              your goals through our exceptional content writing services.
            </p>
          </div>
        </div>
        <div className="contact__image">
          <img src={lady2} alt="Ladyprowess Founder" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
