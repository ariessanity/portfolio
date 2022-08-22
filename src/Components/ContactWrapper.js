import React from 'react';
import "../Styles/ContactWrapper.scss"


function ContactWrapper(props) {
  return (
    <div className='contact-wrapper' id="contact" >{props.children}</div>
  )
}

export default ContactWrapper;