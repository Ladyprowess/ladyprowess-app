import React, { useState } from "react";
import "./Footer.css";

const FooterForm = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const handleInput = (e) => {
    setName(e.target.value);
  };

  const handleMail = (e) => {
    setMail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  
  return (
    <>
      <form action="" className="footer__newform">
        <div className="footer__input">
          <p>Name</p>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleInput}
          />
        </div>
        <div className="footer__input">
          <p>Email</p>
          <input
            type="email"
            name="email"
            id="email"
            value={mail}
            onChange={handleMail}
          />
        </div>
        <div className="footer__input">
          <p>Your Message</p>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="5"
            value={message}
            onChange={handleMessage}
          ></textarea>
        </div>
        <button type="submit">
            Contact us
        </button>
      </form>
    </>
  );
};

export default FooterForm;
