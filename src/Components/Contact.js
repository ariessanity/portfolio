import React from "react";
import "../Styles/Contact.scss";

function Contact() {
  return (
    <div className="contacts">
      <h2 className="contacts__title">Contact</h2>

      <p className="contacts__sub">Let's get in touch!</p>

      <p className="contacts__description">
        Whether you just want to say “Hi!”, talk about Web Development, see if
        we can build amazing projects together, or simply talk about our common
        interests -- please do not hesitate to shoot me a message through this
        contact form.
      </p>

      <p className="contacts__email">Email:</p>
      <strong className="contacts__email-ad">ianorillo21@gmail.com</strong>


    </div>
  );
}

export default Contact;
