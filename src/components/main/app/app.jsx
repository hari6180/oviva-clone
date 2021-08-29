import React from "react";
import Button from "../../button/button";
import app from "./app.module.css";

const App = (props) => {
  return (
    <section className={app.app}>
      <div className={app.img_wrap}>
        <img className={app.img} src="img/app-280x536.png" alt="mobile_app" />
      </div>
      <div className={app.text_wrap}>
        <h1 className={app.title}>Our technology</h1>
        <p className={app.text}>
          <strong>
            We combine personalised support from an expert health care professional with our unique
            digital tools: the Oviva app and Oviva Learn.
          </strong>
        </p>
        <p className={app.text2}>
          This blended approach will support you to make manageable changes that can improve your
          health and wellbeing even after the programme has ended.
        </p>
        <Button name="How it works" />
      </div>
    </section>
  );
};

export default App;
