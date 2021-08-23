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
            <p className={styles.intro__desc}>
              We have helped over 100,000 people gain confidence and keep new healthy habits long
              term.
            </p>
            <Button />
          </div>
        </div>
        <img className={styles.intro__img} src="img/home-header.jpg" alt="happy-woman" />
      </section>
      <section className={styles.works}>
        <div className={styles.works__wrap_img}>
          <img className={styles.works__img} src="img/diagnose.svg" alt="diagnose" />
        </div>
        <div className={styles.works__wrap_text}>
          <h1 className={styles.works__title}>How it works</h1>
          <p className={styles.works__desc}>
            Get support to change your behaviour for the better with personalised expert care at
            home, at a time that works for you.
          </p>
        </div>
      </section>
      <section className={styles.review}>
        <div className={styles.review__img_wrap}>
          <img className={styles.review__img} src="img/clive.jpg" alt="client" />
        </div>
        <div className={styles.review__text_wrap}>
          <h2 className={styles.review__title}>Clive's story</h2>
          <p className={styles.review__text}>
            <q>
              <em>
                Over the first period of 12 weeks I lost about 2.5 stone. If you can get through the
                first hard few weeks (like with anything!) - the benefits are great, it really did
                help. I didn’t have the urge to eat more which was a concern I had, that I’d still
                be hungry. The key thing is the support from the dietitian. They provide back up
                through the early stages. There is no embarrassment, everything is confidential and
                the chat on the app is great, anything you are thinking about you can get feedback
                on. My life has changed completely. I can ride 80 miles a day and feel great! I have
                no injuries due to losing weight, and will cycle up to 180 miles a week. Now I’ve
                seen the benefits I don’t want to go back to how I was feeling before.
              </em>
            </q>
          </p>
          <p className={styles.review__bio}>
            When Clive, 60, from Birmingham started Oviva Diabetes Remission he was recently
            retired, spending lots of time sitting down and was on 5 medications a day. He is now
            medications-free and is cycling up to 80 miles a day!
          </p>
          <Button />
        </div>
      </section>
      <section className={styles.location}>
        <div className={styles.location__img_wrap}>
          <img className={styles.location__img} src="img/map.png" alt="map" />
        </div>
        <div className={styles.location__text_wrap}>
          <h1 className={styles.location__title}>We are UK-wide!</h1>
          <p className={styles.location__text}>
            We’re proud to be an NHS service provider as part of the Healthier You National Diabetes
            Prevention programme, the NHS Low Calorie Diet Programme, and the brand new NHS Weight
            Management Programme.
          </p>
          <p className={styles.location__text2}>
            Our programmes are also available for free in 39 NHS regions throughout the UK, eligible
            participants can be referred by their GP and in some areas they can sign up directly.
          </p>
          <Button />
        </div>
      </section>
      <section className={styles.special}>
        <h2 className={styles.special__title}>What makes us different</h2>
        <div className={styles.special__container}>
          <div className={styles.special__img_wrap}>
            <div className={styles.special__imgs}>
              <img className={styles.special__img} src="img/NHS-logo-square.png" alt="NHS-logo" />
              <span className={styles.special__text}>
                As a proud NHS provider, our programmes are free of charge
              </span>
            </div>
            <div className={styles.special__imgs}>
              <img className={styles.special__img} src="img/hand.svg" alt="hand" />
              <span className={styles.special__text}>
                97% of people on our programmes recommend us
              </span>
            </div>
            <div className={styles.special__imgs}>
              <img className={styles.special__img} src="img/star.svg" alt="star" />
              <span className={styles.special__text}>We’ve had over 94,000 app downloads</span>
            </div>
          </div>
          <div className={styles.special__img_wrap}>
            <div className={styles.special__imgs}>
              <img
                className={styles.special__img}
                src="img/Log-waist-circumference.svg"
                alt="Log-waist-circumference"
              />
              <span className={styles.special__text}>
                On average, people lose 9lbs on their programme
              </span>
            </div>
            <div className={styles.special__imgs}>
              <img
                className={styles.special__img}
                src="img/blood-glucose.svg"
                alt="blood-glucose"
              />
              <span className={styles.special__text}>
                On average, people improve their blood glucose levels by 11.7mmol/mol
              </span>
            </div>
            <div className={styles.special__imgs}>
              <img className={styles.special__img} src="img/talk.svg" alt="talk" />
              <span className={styles.special__text}>
                Nearly 1 in 4 achieve remission of their Type 2 diabetes
              </span>
            </div>
          </div>
          <div className={styles.special__img_wrap}>
            <div className={styles.special__imgs}>
              <img className={styles.special__img} src="img/coach.svg" alt="coach" />
              <span className={styles.special__text}>
                Our programmes are designed and delivered by health care experts
              </span>
            </div>
            <div className={styles.special__imgs}>
              <img className={styles.special__img} src="img/food.svg" alt="food" />
              <span className={styles.special__text}>
                We’ll pair you with a coach for support unique to your health
              </span>
            </div>
            <div className={styles.special__imgs}>
              <img className={styles.special__img} src="img/book.svg" alt="book" />
              <span className={styles.special__text}>
                Our care is delivered in over 22 languages
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.app}>
        {/* img will be changed! */}
        <div className={styles.app__img_wrap}>
          <img className={styles.app__img} src="img/app-280x536.png" alt="mobile_app" />
        </div>
        <div className={styles.app__text_wrap}>
          <h1 className={styles.app__title}>Our technology</h1>
          <p className={styles.app__text}>
            <strong>
              We combine personalised support from an expert health care professional with our
              unique digital tools: the Oviva app and Oviva Learn.
            </strong>
          </p>
          <p className={styles.app__text2}>
            This blended approach will support you to make manageable changes that can improve your
            health and wellbeing even after the programme has ended.
          </p>
          <Button />
        </div>
      </section>
      <section className={styles.ask}>
        <h1 className={styles.ask__title}>Still have questions?</h1>
        <Button />
      </section>
      <section className={styles.contact}>
        <div className={styles.contact__text_wrap}>
          <h1 className={styles.contact_title}>Get in touch</h1>
          <p className={styles.contact_text}>
            We look forward to hearing from you and one of our friendly team will be in touch as
            soon as we can.
          </p>
        </div>
        <form className={styles.contact__form}>
          <div className={styles.contact__inputs}>
            <input className={styles.contact__input} type="text" placeholder="Name*"></input>
            <input className={styles.contact__input} type="email" placeholder="E-mail*"></input>
            <input className={styles.contact__input} type="tel" placeholder="Phone number*"></input>
            <select className={styles.contact__select} name="want_type">
              <option value="programme">I want to join a programme</option>
              <option value="service">I want to commission a service</option>
            </select>
          </div>
          <div className={styles.contact__inputs}>
            <textarea
              className={styles.contact__input}
              cols="40"
              rows="10"
              placeholder="Message*"
            ></textarea>
            <button className={styles.contact__button}>Submit</button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Main;
