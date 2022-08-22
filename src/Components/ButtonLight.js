import React from 'react';
import "../Styles/ButtonLight.scss"

function ButtonLight({text, url}) {
  return (
    <div >
      <a className="button-card-light" href={url} target="_blank">
        {text}
      </a>
    </div>
  )
}

export default ButtonLight;