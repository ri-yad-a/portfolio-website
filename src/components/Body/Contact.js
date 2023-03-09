import "../../App.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { StyledContact } from "../styles/Contact.styled.js";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q7dw814",
        "template_k9u1918",
        form.current,
        "PHkkRQHLj3ShQ7FUu"
      )
      .then(
        (result) => {
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="last-content-item">
      <h2 className="section-header">Contact Me</h2>
      <StyledContact className="">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label>Name</label>
          <input
            className="input-field"
            type="text"
            name="user_name"
            required
          />
          <label>Email</label>
          <input
            className="input-field"
            type="email"
            name="user_email"
            required
          />
          <label>Message</label>
          <textarea className="input-field" name="message" />
          <input type="submit" value="Send" required />
        </form>

        <p className="or">OR</p>

        <p className="message-me">Message me on <a href="https://www.linkedin.com/in/riyad-abdullayev-79b29b239/">Linkedin</a>!</p>

      </StyledContact>
    </div>
  );
}

export default Contact;
