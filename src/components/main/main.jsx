import React from "react";
import styles from "./main.module.css";
import Button from "../button/button";

const Main = (props) => {
  return (
    <main className={styles.main}>
      <section className={styles.intro}>
        <div className={styles.intro__background_wrap}>
          <div className={styles.intro__background}>
            <h1 className={styles.intro__title}>Take control and change for good with Oviva.</h1>
            <p className={styles.intro__para}>
              We have helped over 100,000 people gain confidence and keep new healthy habits long
              term.
            </p>
            <Button />
          </div>
        </div>
        <img className={styles.intro__img} src="img/home-header.jpg" alt="happy-woman" />
      </section>
      <section>
        <img src="img/diagnose.svg" alt="happy-woman" />
        <h1>How it works</h1>
        <p>
          Get support to change your behaviour for the better with personalised expert care at home,
          at a time that works for you.
        </p>
      </section>
      <section>
        <img src="img/clive.jpg" alt="client" />
        <h2>Clive's story</h2>
        <p>
          <q>
            <em>
              Over the first period of 12 weeks I lost about 2.5 stone. If you can get through the
              first hard few weeks (like with anything!) - the benefits are great, it really did
              help. I didn’t have the urge to eat more which was a concern I had, that I’d still be
              hungry. The key thing is the support from the dietitian. They provide back up through
              the early stages. There is no embarrassment, everything is confidential and the chat
              on the app is great, anything you are thinking about you can get feedback on. My life
              has changed completely. I can ride 80 miles a day and feel great! I have no injuries
              due to losing weight, and will cycle up to 180 miles a week. Now I’ve seen the
              benefits I don’t want to go back to how I was feeling before.
            </em>
          </q>
        </p>
        <p>
          When Clive, 60, from Birmingham started Oviva Diabetes Remission he was recently retired,
          spending lots of time sitting down and was on 5 medications a day. He is now
          medications-free and is cycling up to 80 miles a day!
        </p>
      </section>
      <section>
        <img src="img/map.png" alt="map" />
        <h1>We are UK-wide!</h1>
        <p>
          We’re proud to be an NHS service provider as part of the Healthier You National Diabetes
          Prevention programme, the NHS Low Calorie Diet Programme, and the brand new NHS Weight
          Management Programme.
        </p>
        <p>participants can be referred by their GP and in some areas they can sign up directly.</p>
        <Button />
      </section>
      <section>
        <h2>What makes us different</h2>
        <div className="image__container">
          <div className="image__items">
            <div className="image__item">
              <img src="img/NHS-logo-square.png" alt="NHS-logo" />
              <span>As a proud NHS provider, our programmes are free of charge</span>
            </div>
            <div>
              <img src="img/hand.svg" alt="hand" />
              <span>97% of people on our programmes recommend us</span>
            </div>
            <div>
              <img src="img/star.svg" alt="star" />
              <span>We’ve had over 94,000 app downloads</span>
            </div>
          </div>
          <div className="image__items">
            <div className="image__item">
              <img src="img/Log-waist-circumference.svg" alt="Log-waist-circumference" />
              <span>On average, people lose 9lbs on their programme</span>
            </div>
            <div>
              <img src="img/blood-glucose.svg" alt="blood-glucose" />
              <span>On average, people improve their blood glucose levels by 11.7mmol/mol</span>
            </div>
            <div>
              <img src="img/talk.svg" alt="talk" />
              <span>Nearly 1 in 4 achieve remission of their Type 2 diabetes</span>
            </div>
          </div>
          <div className="image__items">
            <div className="image__item">
              <img src="img/coach.svg" alt="coach" />
              <span>Our programmes are designed and delivered by health care experts</span>
            </div>
            <div>
              <img src="img/food.svg" alt="food" />
              <span>We’ll pair you with a coach for support unique to your health</span>
            </div>
            <div>
              <img src="img/book.svg" alt="book" />
              <span>Our care is delivered in over 22 languages</span>
            </div>
          </div>
        </div>
      </section>
      <section>
        {/* img will be changed! */}
        <img src="img/app-280x536.png" alt="mobile_app" />
        <h1>Our technology</h1>
        <p>
          <strong>
            We combine personalised support from an expert health care professional with our unique
            digital tools: the Oviva app and Oviva Learn.
          </strong>
        </p>
        <p>
          This blended approach will support you to make manageable changes that can improve your
          health and wellbeing even after the programme has ended.
        </p>
        <Button />
      </section>
      <section>
        <h1>Still have questions?</h1>
        <Button />
      </section>
      <section>
        <h1>Get in touch</h1>
        <p>
          We look forward to hearing from you and one of our friendly team will be in touch as soon
          as we can.
        </p>
        <form>
          <div>
            <input type="text" placeholder="Name*"></input>
            <input type="email" placeholder="E-mail*"></input>
            <input type="tel" placeholder="Phone number*"></input>
            <select name="want_type">
              <option value="programme">I want to join a programme</option>
              <option value="service">I want to commission a service</option>
            </select>
          </div>
          <div>
            <input type="message" placeholder="Message*"></input>
          </div>
          <button>Submit</button>
        </form>
      </section>
    </main>
  );
};

export default Main;
