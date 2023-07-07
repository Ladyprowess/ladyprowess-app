
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import './Dropdown.css'


export default function DropDownMenu() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <div
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onMouseOver={handleClick}
        style={{
          textDecoration: "none",
          fontSize: "18px",
          fontWeight: "500",
          lineHeight: "19px",
          color: "#141811",
          display: "flex",
          gap: "5px",
          cursor: "pointer",
        }}
      >
        <span style={{
            color: "#fff"
        }}>Services</span>
        <span >
          <BiChevronDown />
        </span>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
       
        <div>
          <Link to="/services/academic-writing" className="dropdownmenu__link">Academic Writing</Link>
        </div>
        <div>
          <Link to="/services/blog-post" className="dropdownmenu__link">Blog Post</Link>
        </div>
        <div>
          <Link to="/services/content-marketing" className="dropdownmenu__link">Content Marketing</Link>
        </div>
        <div>
          <Link to="/services/custom-services" className="dropdownmenu__link">Custom Services</Link>
        </div>
        <div>
          <Link to="/services/seo-management" className="dropdownmenu__link">SEO Management</Link>
        </div>
        <div>
          <Link to="/services/technical-writing" className="dropdownmenu__link">Technical Writing</Link>
        </div>
      </Menu>
    </div>
  );
}
