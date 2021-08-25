import React from "react";
import contact from "./contact.module.css";

const Contact = (props) => {
  return (
    <section className={contact.contact}>
      <div className={contact.text_wrap}>
        <h1 className={contact.title}>Get in touch</h1>
        <p className={contact.text}>
          We look forward to hearing from you and one of our friendly team will be in touch as soon
          as we can.
        </p>
      </div>
      <form className={contact.form}>
        <div className={contact.inputs}>
          <input className={contact.input} type="text" placeholder="Name*"></input>
          <input className={contact.input} type="email" placeholder="E-mail*"></input>
          <input className={contact.input} type="tel" placeholder="Phone number*"></input>
          <select className={contact.select} name="want_type">
            <option value="programme">I want to join a programme</option>
            <option value="service">I want to commission a service</option>
          </select>
        </div>
        <div className={contact.inputs}>
          <textarea className={contact.input} cols="40" rows="10" placeholder="Message*"></textarea>
          <button className={contact.button}>Submit</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
