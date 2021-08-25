import React from "react";
import location from "./location.module.css";
import Button from "../../button/button";

const Location = (props) => {
  return (
    <section className={location.location}>
      <div className={location.img_wrap}>
        <img className={location.img} src="img/map.png" alt="map" />
      </div>
      <div className={location.text_wrap}>
        <h1 className={location.title}>We are UK-wide!</h1>
        <p className={location.text}>
          We’re proud to be an NHS service provider as part of the Healthier You National Diabetes
          Prevention programme, the NHS Low Calorie Diet Programme, and the brand new NHS Weight
          Management Programme.
        </p>
        <p className={location.text2}>
          Our programmes are also available for free in 39 NHS regions throughout the UK, eligible
          participants can be referred by their GP and in some areas they can sign up directly.
        </p>
        <Button />
      </div>
    </section>
  );
};

export default Location;
