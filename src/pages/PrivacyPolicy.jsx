import React from "react";
import { Link } from "react-router-dom";
import ServicesBanner from "../components/Banner/ServicesBanner";
import Footer from "../components/Footer/Footer";
import "./Pages.css";

const PrivacyPolicy = () => {
  return (
    <>
      <ServicesBanner heading="Privacy Policy" />

      <div className="privacy__container">
        <h2>Privacy Policy</h2>
        <div className="privacy__description">
          <p style={{
            fontSize: "16px"
          }}>
            Thank you for your interest in our Privacy Policy. At Lady Prowess,
            we take your privacy and the security of your personal information
            very seriously. This Privacy Policy outlines how we collect, use,
            protect, and disclose the information you provide to us when using
            our website and engaging our content writing services.
          </p>

          <h3>Information We Collect:</h3>
          <p>
            When you visit our website or interact with our services, we may
            collect certain information from you, including personal information
            such as your name, email address, contact details, and any other
            information you voluntarily provide.
          </p>

          <h3>Use of Information:</h3>
          <p>
            We use the information we collect to provide and improve our content
            writing services, communicate with you, personalize your experience,
            process payments, and fulfill your requests. We may also use your
            information to send you promotional materials or important updates
            about our services.
          </p>

          <h3>Information Sharing:</h3>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties for marketing purposes. However, we may share your
            information with trusted service providers who assist us in
            operating our website and delivering our services. We may also
            disclose your information if required by law or to protect our
            rights, safety, or the rights, safety, or property of others.
          </p>

          <h3>Data Security:</h3>
          <p>
            We implement appropriate security measures to protect your personal
            information from unauthorized access, alteration, disclosure, or
            destruction. We use industry-standard encryption techniques and
            regularly review our security practices to ensure the safety of your
            data.
          </p>

          <h3>Third-Party Links:</h3>
          <p>
            Our website may contain links to third-party websites or services.
            Please note that we are not responsible for the privacy practices or
            the content of these third-party websites. We encourage you to
            review the privacy policies of those websites before providing any
            personal information.
          </p>

          <h3>Cookies and Tracking Technologies:</h3>
          <p>
            We may use cookies and similar tracking technologies to enhance your
            browsing experience, analyze website usage, and personalize content.
            You have the option to disable cookies through your browser
            settings, but please note that certain features of our website may
            not function properly without cookies.
          </p>

          <h3>Children's Privacy:</h3>
          <p>
            Our website and services are not directed to individuals under the
            age of 13. We do not knowingly collect personal information from
            children. If you believe that we may have inadvertently collected
            information from a child, please contact us immediately, and we will
            take appropriate steps to remove the information.
          </p>

          <h3>Updates to the Privacy Policy:</h3>
          <p>
            We may update our Privacy Policy from time to time. Any changes we
            make will be posted on this page, and the revised policy will be
            effective immediately upon posting. We encourage you to review this
            Privacy Policy periodically for any updates or changes. If you have
            any questions or concerns about our Privacy Policy or the handling
            of your personal information, please contact us using the
            information provided in our  <Link to='/contact'>Contact Us</Link>
            section.
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default PrivacyPolicy;
