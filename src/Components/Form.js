import React from "react";
import "../Styles/Form.scss";
import Button from "./Button";

function Form() {
  return (
    <div className="form">
      <form
        action="https://getform.io/f/e7742788-2dfd-4e90-9b34-fa3c40fc30db"
        method="POST"
      >
        <input className="form__name" type="text" placeholder="Name" required />
        <input
          className="form__email"
          type="email"
          placeholder="Email"
          required
        />
        <textarea
          className="form__message"
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
          required
        ></textarea>

        <button className="button" typeof="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
