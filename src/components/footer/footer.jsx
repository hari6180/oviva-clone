import React from "react";
import styles from "./footer.module.css";

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <div>
        <img src="img/foot-logo.png"></img>
      </div>
      <section>
        <div>
          <h5>Useful Links</h5>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Work for us</li>
            <li>FAQs</li>
            <li>Sitemap</li>
            <li>Accessibility Statement</li>
            <li>‘Oviva App’ User manual</li>
            <li>Oviva Global</li>
          </ul>
          <p>All Systems operational</p>
        </div>
        <div>
          <h5>Contact</h5>
          <p>Tel: +8210 8070 6180</p>
        </div>
      </section>
      <div>
        <a href="#">
          <img src="img/twitter-icon.png" alt="twitter" />
        </a>
        <a href="#">
          <img src="img/email-icon.png" alt="email" />
        </a>
        <a href="#">
          <img src="img/foot-top.png" alt="top" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
