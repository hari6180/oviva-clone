import React from "react";
import special from "./special.module.css";

const Special = (props) => {
  return (
    <section className={special.special}>
      <h2 className={special.title}>What makes us different</h2>
      <div className={special.container}>
        <div className={special.img_wrap}>
          <div className={special.imgs}>
            <img className={special.img} src="img/NHS-logo-square.png" alt="NHS-logo" />
            <span className={special.text}>
              As a proud NHS provider, our programmes are free of charge
            </span>
          </div>
          <div className={special.imgs}>
            <img className={special.img} src="img/hand.svg" alt="hand" />
            <span className={special.text}>97% of people on our programmes recommend us</span>
          </div>
          <div className={special.imgs}>
            <img className={special.img} src="img/star.svg" alt="star" />
            <span className={special.text}>We’ve had over 94,000 app downloads</span>
          </div>
        </div>
        <div className={special.img_wrap}>
          <div className={special.imgs}>
            <img
              className={special.img}
              src="img/Log-waist-circumference.svg"
              alt="Log-waist-circumference"
            />
            <span className={special.text}>On average, people lose 9lbs on their programme</span>
          </div>
          <div className={special.imgs}>
            <img className={special.img} src="img/blood-glucose.svg" alt="blood-glucose" />
            <span className={special.text}>
              On average, people improve their blood glucose levels by 11.7mmol/mol
            </span>
          </div>
          <div className={special.imgs}>
            <img className={special.img} src="img/talk.svg" alt="talk" />
            <span className={special.text}>
              Nearly 1 in 4 achieve remission of their Type 2 diabetes
            </span>
          </div>
        </div>
        <div className={special.img_wrap}>
          <div className={special.imgs}>
            <img className={special.img} src="img/coach.svg" alt="coach" />
            <span className={special.text}>
              Our programmes are designed and delivered by health care experts
            </span>
          </div>
          <div className={special.imgs}>
            <img className={special.img} src="img/food.svg" alt="food" />
            <span className={special.text}>
              We’ll pair you with a coach for support unique to your health
            </span>
          </div>
          <div className={special.imgs}>
            <img className={special.img} src="img/book.svg" alt="book" />
            <span className={special.text}>Our care is delivered in over 22 languages</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Special;
