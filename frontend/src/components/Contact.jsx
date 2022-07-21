import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-form" id="Contact">
      <div className="c-left">
        <div className="c-title">
          <span>Un projet ?</span>
          <span>Contactez-moi!</span>
          <div className="blur s-blur1" style={{ background: "#ABF1FF94" }} />
        </div>
      </div>
      <div className="c-right">
        <form>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />

          <a className="button" href="." type="submit" value="send">
            <span />
            <span />
            <span />
            <span />
            Envoyer
          </a>
          {/* <span>{done && "Thanks for Contacting me"}</span> */}
        </form>
      </div>
    </div>
  );
}
