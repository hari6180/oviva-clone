import React from "react";
import styles from "./footer.module.css";

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrap}>
        <div className={styles.menu__wrap}>
          <div className={styles.logo__wrap}>
            <img className={styles.logo} src="img/foot-logo.png" alt="logo" />
          </div>
          <div className={styles.menus}>
            <div className={styles.menu}>
              <h5 className={styles.title}>Useful Links</h5>
              <ul className={styles.menu_list}>
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
            <div className={styles.menu}>
              <h5 className={styles.title}>Contact</h5>
              <p className={styles.menu_list}>Tel: +8210 8070 6180</p>
            </div>
          </div>
        </div>
        <div className={styles.link__wrap}>
          <a href="#" className={styles.link}>
            <img className={styles.link_img} src="img/twitter-icon.png" alt="twitter" />
          </a>
          <a href="#" className={styles.link}>
            <img className={styles.link_img} src="img/email-icon.png" alt="email" />
          </a>
          <a href="#" className={styles.link}>
            <img className={styles.link_img} src="img/foot-top.png" alt="top" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
