import React from "react";
import css from "./Testimonials.module.css";
import Hero from "../../assets/testimonialHero.png";

const Testimonials = () => {
  return (
    <div className={css.testimonials}>
      <div className={css.wrapper}>
        <span>Top Rated</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
      </div>
      <img src="Hero" alt="" />

      <div className={css.container}>
        <span>100k</span>
        <span>Happy Customers with us</span>
      </div>
    </div>
  );
};

export default Testimonials;
