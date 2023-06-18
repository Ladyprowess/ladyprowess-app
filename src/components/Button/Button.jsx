import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button({ title, url }) {
  return (
   
      <Link to={url} className="button__wrapper">
        <button>
          {title}
        </button>
      </Link>
    
  );
}

export default Button;