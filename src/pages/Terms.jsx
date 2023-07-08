import React from "react";
import { Link } from "react-router-dom";
import ServicesBanner from "../components/Banner/ServicesBanner";
import Footer from "../components/Footer/Footer";

const Terms = () => {
  return (
    <>
      <ServicesBanner heading="Terms and Conditions" />

      <div className="privacy__container">
        <h2>Terms and Condition</h2>
        <div className="privacy__description">
          <p
            style={{
              fontSize: "16px",
            }}
          >
            Thank you for your interest in our Terms and Conditions. Please note
            that the following information outlines the terms of use and
            conditions for engaging with Lady Prowess and using our content
            writing services. By accessing our website and using our services,
            you agree to abide by these terms. If you have any questions or
            concerns, please contact us for clarification.
          </p>

          <h3>Acceptance of Terms:</h3>
          <p>
            By accessing our website or using our services, you acknowledge that
            you have read, understood, and agreed to be bound by these Terms and
            Conditions. If you do not agree with any part of these terms, please
            refrain from using our website or services.
          </p>

          <h3>Intellectual Property:</h3>
          <p>
            All content, including text, graphics, logos, images, and software,
            on our website is protected by intellectual property laws and
            belongs to Lady Prowess. You may not use, modify, reproduce,
            distribute, or transmit any of our copyrighted materials without our
            prior written consent.
          </p>

          <h3>Services and Pricing:</h3>
          <p>
            We offer various content writing services, and the details,
            descriptions, and pricing for these services are available on our
            website. We reserve the right to modify or discontinue any service
            at any time without notice. The pricing and availability of services
            are subject to change.
          </p>

          <h3>Client Responsibilities:</h3>
          <p>
            As a client, you agree to provide accurate and complete information
            when engaging our services. You are responsible for the content you
            provide us and ensuring that it does not infringe upon the rights of
            any third parties. You also agree to make timely payments for the
            services rendered.
          </p>

          <h3>Revision and Refund Policy:</h3>
          <p>
            We strive to deliver high-quality content that meets your
            expectations. If you are not satisfied with the initial draft, we
            offer a revision period during which you can request changes.
            However, please note that additional fees may apply for substantial
            revisions. We do not provide refunds for services rendered unless
            there are exceptional circumstances.
          </p>

          <h3> Confidentiality:</h3>
          <p>
            We respect the confidentiality of the information you provide us.
            However, please note that we cannot guarantee the security of data
            transmission over the internet. While we take reasonable measures to
            protect your information, the transmission of information is at your
            own risk.
          </p>

          <h3>Limitation of Liability:</h3>
          <p>
            Lady Prowess and its affiliates, directors, employees, or agents
            shall not be liable for any indirect, consequential, or incidental
            damages arising from the use of our website or services. We shall
            not be responsible for any errors, omissions, or inaccuracies in the
            content we provide.
          </p>

          <h3>Termination:</h3>
          <p>
            Termination: We reserve the right to terminate or suspend your
            access to our website or services at any time for any reason,
            without prior notice. Upon termination, any provisions of these
            Terms and Conditions that should reasonably survive termination will
            continue to apply.
          </p>
          <h3>Governing Law:</h3>
          <p>
            These Terms and Conditions shall be governed by and construed in
            accordance with the laws of the jurisdiction where Lady Prowess is
            located. Any legal actions or disputes arising from these terms
            shall be subject to the exclusive jurisdiction of the courts in that
            jurisdiction.
            <br />
            Please review these Terms and Conditions carefully. If you have any
            questions or concerns, feel free to{" "}
            <Link to="/contact">Contact Us</Link> for further clarification.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Terms;
