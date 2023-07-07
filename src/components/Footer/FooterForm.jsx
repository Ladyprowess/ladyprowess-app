import React, { useState, useRef } from "react";
import "./Footer.css";
import emailjs from "@emailjs/browser";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 410,
  bgcolor: "#fff",
  border: "1px solid #ccc",
  borderRadius: 2,
  outline: "none",
  p: 6,
  overflowY: "auto", // Enable vertical scroll if content overflows
  maxHeight: "80vh",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  alignItems: "center",

  // Set maximum height to 80% of viewport height

  "@media (max-width: 768px)": {
    width: "90%",
    p: 8,
    maxHeight: "90vh",
  },

  "@media (max-width: 576px)": {
    width: "90%",
    maxHeight: "95vh",
    p: '50px 15px',
  },
};
const FooterForm = () => {
  const form = useRef();

  // Modal State Variables
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const handleInput = (e) => {
    setName(e.target.value);
  };

  const handleMail = (e) => {
    setMail(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_18s3g9t",
        "template_mhhqmhr",
        form.current,
        "OCH_euBrk2E-NK4qn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="footer__newform">
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
        {/* <div className="footer__input">
          <p>Your Message</p>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="5"
            value={message}
            onChange={handleMessage}
          ></textarea>
        </div> */}
        <button type="submit" onClick={handleOpen}>
          Subscribe
        </button>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <p
                style={{
                  fontSize: "70px",

                  
                }}
              className='modal__icon'>
                🎉
              </p>
              <p
                style={{
                  fontSize: "20px",
                  textAlign: 'center',
                }}
              >
                Thank you for subscribing to our newsletter!
              </p>
              <p
                style={{
                  fontSize: "16px",
                  textAlign: "center",
                  lineHeight: "35px",
                  marginBottom: "20px",
                }}
              >
                Our bi-weekly newsletter will always be in your inbox with all
                Major Announcements, Special Offers, and much more exciting
                things. See you soon!
              </p>
              <button
                onClick={handleClose}
                style={{
                  backgroundColor: "#507b80",
                  color: "#eee",
                  padding: "12px 20px",
                  fontSize: "16px",
                  borderRadius: "5px",
                }}
              >
                OK
              </button>
            </Box>
          </Fade>
        </Modal>
      </form>
    </>
  );
};

export default FooterForm;
