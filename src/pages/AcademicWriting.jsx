
import React from "react";
import ServicesBanner from "../components/Banner/ServicesBanner";
import ServicesContent from "../components/Services/ServicesContent";
import Footer from '../components/Footer/Footer'

const AcademicWriting = () => {
  return (
    <>
      <ServicesBanner heading="Academic Writing" />
      <ServicesContent
        heading="Academic Writing"
        description="We have a team of experienced writers who excel in academic writing. Whether you need assistance with essays, research papers, case studies, or dissertations, we are here to help you achieve academic success. Our writers possess in-depth knowledge across various subjects and are skilled at delivering well-researched and meticulously structured academic papers."
      />
      <Footer/>
    </>
  );
};

export default AcademicWriting;
