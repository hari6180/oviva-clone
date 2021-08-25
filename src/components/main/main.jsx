import React from "react";
import App from "./app/app";
import Ask from "./ask/ask";
import Contact from "./contact/contact";
import Intro from "./intro/intro";
import Location from "./location/location";
import styles from "./main.module.css";
import Review from "./review/review";
import Special from "./special/special";
import Work from "./work/work";

const Main = (props) => {
  return (
    <main className={styles.main}>
      <Intro />
      <Work />
      <Review />
      <Location />
      <Special />
      <App />
      <Ask />
      <Contact />
    </main>
  );
};

export default Main;
