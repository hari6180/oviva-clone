import React from "react";
import review from "./review.module.css";
import Button from "../../button/button";

const Review = (props) => {
  return (
    <section className={review.review}>
      <div className={review.img_wrap}>
        <img className={review.img} src="img/clive.jpg" alt="client" />
      </div>
      <div className={review.text_wrap}>
        <h2 className={review.title}>Clive's story</h2>
        <p className={review.text}>
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
        <p className={review.bio}>
          When Clive, 60, from Birmingham started Oviva Diabetes Remission he was recently retired,
          spending lots of time sitting down and was on 5 medications a day. He is now
          medications-free and is cycling up to 80 miles a day!
        </p>
        <Button name="More stories" />
      </div>
    </section>
  );
};

export default Review;
