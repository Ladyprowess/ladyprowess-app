import React, { useState, useRef } from "react";
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
    p: 2,
    maxHeight: "90vh",
  },

  "@media (max-width: 576px)": {
    width: "90%",
    maxHeight: "95vh", // Adjust maximum height for even smaller screens
  },
};

const ServicesForm = () => {
  const form = useRef();

  // Modal State Variables
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedOption, setSelectedOption] = useState('')

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleOnChangeSelect = (e) => {
    setSelectedOption(e.target.value)
  }

  // const handlePhoneChange = (value) => {
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     phoneNumber: value
  //   }));
  // };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    };

    // Validate first name
    if (formData.firstName.trim() === "") {
      newErrors.firstName = "First name is required";
      isValid = false;
    }

    // Validate last name
    if (formData.lastName.trim() === "") {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }

    // Validate email
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }


    // Validate message
    if (formData.message.trim() === "") {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const isValidEmail = (email) => {
    // Email validation logic
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm(
          "service_18s3g9t",
          "template_a9nubym",
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
    }
  };

  return (
    <form onSubmit={sendEmail} className="services__form__container" ref={form}>
      <div className="services__form--input">
        <div className="services__input">
          <p>First Name</p>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleOnChange}
            placeholder="John"
          />
          {errors.firstName && <span>{errors.firstName}</span>}
        </div>
        <div className="services__input">
          <p>Last Name</p>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleOnChange}
            placeholder="Doe"
          />
          {errors.lastName && <span>{errors.lastName}</span>}
        </div>
        <div className="services__input">
          <p>Email</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleOnChange}
            placeholder="JohnDoe@gmail.com"
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        {/* <div className="services__input">
          <p>Phone Number</p>
          <PhoneInput
            international
            countryCallingCodeEditable={false}
            defaultCountry="NG"
            value={formData.phoneNumber}
            onChange={handlePhoneChange}
          />
          {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
        </div> */}

        <div className="services__input">
          <p>
            What Service?
            <select
              name="service"
              value={selectedOption}
              onChange={handleOnChangeSelect}
              className="styled-select"
            >
              <option value="">Select a Service</option>
              <option value="Content Marketing">Content Marketing</option>
              <option value="Academic Writing">Academic Writing</option>
              <option value="Technical Writing">Technical Writing</option>
              <option value="SEO Management">SEO Management</option>
              <option value="Blog Post">Blog Post</option>
              <option value="Custom Services">Custom Services</option>
            </select>
          </p>
        </div>

        <div className="services__input">
          <p>Message</p>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleOnChange}
          ></textarea>
          {errors.message && <span>{errors.message}</span>}
        </div>
      </div>
      <button type="submit" onClick={handleOpen}>
        Submit
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
              }}
            >
              Thank you for contacting us!
            </p>
            <p
              style={{
                fontSize: "16px",
                textAlign: "center",
                lineHeight: "35px",
                marginBottom: "20px",
              }}
            >
              One of our customer agents will reach out to schedule a call with
              you. Talk to you soon. Cheers!
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
  );
};

export default ServicesForm;
