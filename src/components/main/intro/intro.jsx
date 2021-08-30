import React from "react";
import intro from "./intro.module.css";
import Button from "../../button/button";

const Intro = (props) => {
  return (
    <section className={intro.intro}>
      <div className={intro.background_wrap}>
        <div className={intro.background}>
          <h1 className={intro.title}>Take control and change for good with Oviva.</h1>
          <p className={intro.desc}>
            We have helped over 100,000 people gain confidence and keep new healthy habits long
            term.
          </p>
          <Button name="Discover our programmes" />
        </div>
      </div>
      <img className={intro.img} src="img/home-header.png" alt="happy-woman" />
    </section>
  );
};

export default Intro;
