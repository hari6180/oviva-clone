import React from "react";
import ask from "./ask.module.css";
import Button from "../../button/button";

const Ask = (props) => {
  return (
    <section className={ask.ask}>
      <h1 className={ask.title}>Still have questions?</h1>
      <Button />
    </section>
  );
};

export default Ask;
