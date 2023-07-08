import ServicesBanner from "../components/Banner/ServicesBanner";
import Footer from "../components/Footer/Footer";
import * as React from "react";
import { styled } from "@mui/material/styles";
// import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { BsArrowRight } from "react-icons/bs";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import FaqData from "../components/data/FaqData";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<BsArrowRight sx={{ fontSize: "0.9rem" }} className='faq__icon'/>}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function FAQ() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <ServicesBanner heading="FAQ" />
      <div className="faq__container">
        <div className="accordion__child">
          {FaqData.map((faq) => (
            <>
              <Accordion
                expanded={expanded === faq.id}
                onChange={handleChange(faq.id)}
                className="faq__accordion--container"
              >
                <AccordionSummary aria-controls="panel1d-content" id={faq.id}>
                  <h3>{faq.question}</h3>
                </AccordionSummary>
                <AccordionDetails>
                  <p>{faq.answer}</p>
                </AccordionDetails>
              </Accordion>
            </>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
