import React from "react";
import work from "./work.module.css";

const Work = (props) => {
  return (
    <section className={work.works}>
      <div className={work.wrap_img}>
        <img className={work.img} src="img/diagnose.svg" alt="diagnose" />
      </div>
      <div className={work.wrap_text}>
        <h1 className={work.title}>How it works</h1>
        <p className={work.desc}>
          Get support to change your behaviour for the better with personalised expert care at home,
          at a time that works for you.
        </p>
      </div>
    </section>
  );
};

export default Work;
