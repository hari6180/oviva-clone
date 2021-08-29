import React, { useState } from "react";
import styles from "./navbar.module.css";

const Navbar = (props) => {
  const [toggle, setToggle] = useState("close");

  const handleToggle = (e) => {
    e.preventDefault();
    if (toggle === "close") {
      setToggle("open");
    } else {
      setToggle("close");
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="#">
            <img className={styles.logo_img} alt="logo" src="img/logo-uk_en.png" />
          </a>
        </div>
        <ul
          id="menu"
          className={`${styles.menu} ${toggle === "open" ? styles.open : styles.close}`}
        >
          <li>
            <a className={styles.sub_title} href="#">
              About Us<span>▼</span>
            </a>
            <ul className={styles.sub_menu}>
              <li>Working at Oviva</li>
              <li>Success stories</li>
            </ul>
          </li>
          <li>
            <a className={styles.sub_title} href="#">
              How it works
            </a>
          </li>
          <li>
            <a className={styles.sub_title} href="#">
              Programmes<span>▼</span>
            </a>
            <ul className={styles.sub_menu}>
              <li>Diabetes Prevent</li>
              <li>National Diabetes</li>
              <li>Prevention Programme</li>
              <li>Diabetes Support</li>
              <li>Diabetes Remission</li>
              <li>Paediatric Allergy</li>
              <li>Weight Management</li>
              <li>Adult Nutrition</li>
            </ul>
          </li>
          <li>
            <a className={styles.sub_title} href="#">
              NHS & Partnerships
            </a>
          </li>
          <li>
            <a className={styles.sub_title} href="#">
              Contact{" "}
            </a>
          </li>
        </ul>
        {/* Toggle button */}
        <div className={styles.toggle_wrap}>
          <button id="toggle_btn" className={styles.toggle_btn} onClick={handleToggle}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <form className={styles.search_box} role="search" method="get" action="https://oviva.com/">
          <label className="screen-reader-text" htmlFor="s">
            <img className={styles.search_icon} src="/img/search-new.png" alt="search_icon" />
          </label>
          <input className={styles.search_input} type="search" name="s" placeholder="Search" />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
