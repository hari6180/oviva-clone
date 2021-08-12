import React from "react";
import styles from "./navbar.module.css";

const Navbar = (props) => {
  return (
    <nav>
      <div className={styles.logo}>
        <a href="#">
          <img alt="logo" src="img/logo-uk_en.png" />
        </a>
      </div>
      <ul>
        <li>
          <a href="#">
            About Us<span>▼</span>
          </a>
          <ul>
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
          <ul>
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
      <form role="search" method="get" action="https://oviva.com/">
        <label class="screen-reader-text" for="s"></label>
        <input
          type="search"
          value=""
          name="s"
          id="s"
          placeholder="Search"
          class="form-control"
        ></input>
      </form>
    </nav>
  );
};

export default Navbar;
