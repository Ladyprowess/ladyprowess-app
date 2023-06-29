import React, { useState } from "react";
import "./Services.css";
import ServicesData from "../data/ServicesData";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import ServicesForm from "./ServicesForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  // height: 700,
  bgcolor: "#fff",
  border: "1px solid #ccc",
  borderRadius: 2,
  outline: "none",
  p: 6,
  overflowY: "auto", // Enable vertical scroll if content overflows
  maxHeight: "80vh", // Set maximum height to 80% of viewport height

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

const Services = () => {
  // Modal State Variables
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [selectedService, setSelectedService] = useState("");
  const [selectedServiceDescription, setSelectedServiceDescription] =
    useState("");

  const handleServiceClick = (heading, description) => {
    setSelectedService(heading);
    setSelectedServiceDescription(description);
    setOpen(true);
    console.log("Clicked service:", heading);
  };
  return (
    <div className="services__container">
      <div className="services__container--top">
        <h2>Services</h2>
        <p>
          Our content writing brand offers a wide range of services to help
          businesses <br />
          and individuals achieve their goals through the power of words.
        </p>
      </div>
      <div className="services__container--bottom">
        {ServicesData.map((service) => (
          <div
            className="services__container--bottom__child"
            onClick={() =>
              handleServiceClick(service.heading, service.description)
            }
            key={service.heading}
          >
            <div className="services__icon-box">
              <img
                src={service.img}
                alt="an icon that talks about the services of ladyprowess"
              />
            </div>
            <h3>{service.heading}</h3>
            <p>{service.description}</p>
          </div>
        ))}

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
              <ServicesForm
                selectedService={selectedService}
                selectedServiceDescription={selectedServiceDescription}
              />
            </Box>
          </Fade>
        </Modal>
      </div>
    </div>
  );
};

export default Services;
