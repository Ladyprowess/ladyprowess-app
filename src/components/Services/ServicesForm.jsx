import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ServicesForm = ({ selectedService, selectedServiceDescription }) => {

    const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: '',
    message: "",
  });


  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: '',
    message: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      phoneNumber: value
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
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

    // Validate phone number
    if (formData.phoneNumber.trim() === "") {
      newErrors.phoneNumber = "Phone number is required";
      isValid = false;
    } else if (!isValidPhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number format";
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

  const isValidPhoneNumber = (phoneNumber) => {
    // Phone number validation logic
    const phoneRegex = /^\d{10}$/; // Assumes 10-digit phone number
    return phoneRegex.test(phoneNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form submission logic
      console.log("Form submitted successfully");
      // Reset the form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
      setErrors({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="services__form--container">
      <div className="services__form--description">
        <h2>Contact us for {selectedService}</h2>
        <p>{selectedServiceDescription}</p>
      </div>
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
        <div className="services__input">
          <p>Phone Number</p>
          {/* <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleOnChange}
        /> */}

          <PhoneInput
            international
            countryCallingCodeEditable={false}
            defaultCountry="NG"
            value={formData.phoneNumber}
            onChange={handlePhoneChange}
          />
          {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default ServicesForm;
