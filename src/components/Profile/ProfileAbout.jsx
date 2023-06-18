import React from "react";
import "./ProfileAbout.css";
import rectangle54 from "../../assets/images/Rectangle 54.png";
import image1 from "../../assets/images/image 1.png";

import { BiMailSend } from "react-icons/bi";
import { BsGithub, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";

const ProfileAbout = () => {
  return (
    <div className="profileabout__container">
      <div className="profile__container--top">
        <div className="profile__container--top--image">
          <img src={image1} alt="Lady Prowess" />
        </div>
        <div className="profile__container--top--text">
          <h2>About Me</h2>
          <p>
            My name is Okafor, Peace Ngozi a Technical and Crypto Writer with
            love for Web3 and Blockchain. I am learning how to write more
            meaningful code & building web applications. I am passionate about
            crafting compelling and engaging stories. My writing experience
            spans a range of industries, from tech and finance to lifestyle and
            travel. I am also familiar with creating documentations, web copy,
            memos, reports, and whitepapers. I love Tech and I am interested in
            exploring the tech and web3 industry.
          </p>

          <div className="profile__resume">
            <div className="profile__resume--socials">
              <a href="mailto:">
                <BiMailSend size={25} fill="#507B80"/>
              </a>
              <a href="http://" target="_blank" rel="noreferrer">
                <BsLinkedin size={25}  fill="#507B80"/>
              </a>
              <a href="http://" target="_blank" rel="noreferrer">
                <BsTwitter size={25} fill="#507B80"/>
              </a>
              <a href="http://" target="_blank" rel="noreferrer">
                <BsGithub size={25}  fill="#507B80"/>
              </a>
              <a href="http://" target="_blank" rel="noreferrer">
                <BsWhatsapp size={25} fill="#507B80"/>
              </a>
            </div>
            <div className="profile__resume--cv">
              <a href="http://" target="_blank" rel="noreferrer">
                <AiOutlineDownload size={20} fill="#507B80"/>My Résumé
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="profile__container--bottom">
        <div className="profile__container--bottom--text">
          <h2>Professional Records</h2>
          <p>
            Whether you need blog posts, articles, whitepapers, or technical
            article, website content, I have the skills and experience to bring
            your vision to life. My writing process is thorough, and I work
            closely with clients to ensure that their content accurately
            reflects their brand and messaging. Also, I have much experience
            writing product descriptions, SaaS, and B2B articles. With a keen
            eye for detail and a knack for researching complex topics, I have
            developed a reputation for delivering high-quality, well-researched
            content that informs, educates, and captivates audiences. My writing
            style is adaptable, and I take pride in my ability to craft content
            that speaks to my client’s target audience.
          </p>
        </div>
        <div className="profile__container--bottom--image">
          <img src={rectangle54} alt="Brand Ambassadors" />
        </div>
      </div>
    </div>
  );
};

export default ProfileAbout;
