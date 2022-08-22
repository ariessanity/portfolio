import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../Styles/Links.scss";

function Links() {
  
  return (
    <div className="links">

      <a
        className="links__item"
        href="https://www.linkedin.com/in/aries-ian-orillo-290637242/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon />
      </a>

      <a
        className="links__item"
        href="https://github.com/ariessanity"
        target="_blank"
        rel="noreferrer"
      >
        <GitHubIcon />
      </a>

      <a
        className="links__item"
        href="https://www.facebook.com/ariessanity09/"
        target="_blank"
        rel="noreferrer"
      >
        <FacebookIcon />
      </a>
      
    </div>
  );
}

export default Links;
