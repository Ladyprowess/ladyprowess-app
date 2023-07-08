import React from "react";
import "./Topmenu.css";
import Sidebar from "./Sidebar";
import { useNavigate, useLocation } from "react-router-dom";
import SupportButton from "../Button/SupportButton";
import logo from "../../assets/images/Logo2.png";
import DropdownMenu from '../DropdownMenu/DropdownMenu'
function Topmenu() {
  const navigation = useNavigate();
  let location = useLocation();

  return (
    <>
      <div className="show_desktop">
        <div className="home_max_width">
          <div className="topBar">
            <div className="Container-topmenu">
              <div className="displayDesktop">
                <div className="topbarbody">
                  <img
                    onClick={() => navigation("/")}
                    src={logo}
                    alt="Ladyprowess logo"
                    style={{ cursor: "pointer" }}
                  />
                </div>

                <div className="linksCont">
                  <span
                    className={
                      location.pathname === ""
                        ? "linksContLinkActive"
                        : "linksContLink"
                    }
                    onClick={() => navigation("/")}
                  >
                    Home
                  </span>
                  <span
                    className={
                      location.pathname === "/about"
                        ? "linksContLinkActive"
                        : "linksContLink"
                    }
                    onClick={() => navigation("/about")}
                  >
                    About
                  </span>

                    <DropdownMenu />

                  <span
                    className={
                      location.pathname === "/profile"
                        ? "linksContLinkActive"
                        : "linksContLink"
                    }
                    onClick={() => navigation("/profile")}
                  >
                    Profile
                  </span>
                 
                  {/* <span
                    className={
                      location.pathname === ""
                        ? "linksContLinkActive"
                        : "linksContLink"
                    }
                    onClick={() => navigation("/")}
                  >
                    Blog
                  </span> */}
                  {/* <a
                    href="https://ladyprowessblog.com.ng/"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontSize: "18px"
                    }}
                  >
                    Blog
                  </a> */}

                  <SupportButton
                    type="button"
                    txtColor="#507B80"
                    pd="7px"
                    br="7px"
                    fs="14px"
                    w="120px"
                    bg="#fff"
                    txt="Support Us"
                    border="0px solid white"
                    
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="show_mobile">
        <Sidebar />
      </div>
    </>
  );
}

export default Topmenu;
