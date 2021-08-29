import React from "react";
import styles from "./navbar.module.css";

const Navbar = (props) => {
  // const navbarMenu = document.querySelector(".menu");

  // // Navbar toggle button for small screen
  // const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
  // navbarToggleBtn.addEventListener("click", () => {
  //   navbarMenu.classList.toggle("open");
  // });

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="#">
            <img alt="logo" src="img/logo-uk_en.png" />
          </a>
        </div>
        <ul className={styles.menu}>
          <li>
            <a href="#">
              About Us<span>▼</span>
            </a>
            <ul className={styles.sub_menu}>
              <li>Working at Oviva</li>
              <li>Success stories</li>
            </ul>
          </li>
          <li>
            <a href="#">How it works</a>
          </li>
          <li>
            <a href="#">
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
            <a href="#">NHS & Partnerships</a>
          </li>
          <li>
            <a href="#">Contact </a>
          </li>
        </ul>
        {/* Toggle button */}
        <div className={styles.toggle_wrap}>
          <button className={styles.toggle_btn}>
            <i className="fas fa-bars"></i>
          </button>
          <form
            className={styles.search_box}
            role="search"
            method="get"
            action="https://oviva.com/"
          >
            <label className="screen-reader-text" htmlFor="s">
              <img className={styles.search_icon} src="/img/search-new.png" alt="search_icon" />
            </label>
            <input className={styles.search_input} type="search" name="s" placeholder="Search" />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
