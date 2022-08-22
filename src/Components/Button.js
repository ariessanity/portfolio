import React from "react";
import "../Styles/Button.scss";

function Button({ text, url }) {
  return (
    <div>
      <a className="button" href={url} target="_blank">
        {text}
      </a>
    </div>
  );
}

export default Button;
