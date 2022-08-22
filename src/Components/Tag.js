import React from "react";
import "../Styles/Tag.scss";

function Tag(props) {
  return (
    <div>
      <img className="tag" src={props.tag} alt="logo" />
    </div>
  );
}

export default Tag;
