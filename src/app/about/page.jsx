import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
const About = () => {
  return (
    <div className={styles.container}>
      {/* left */}
      <div className={styles.textContainer}>
        {/* subtitle */}
        <h2 className={styles.subTitle}>About Agency</h2>
        {/* title */}
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        {/* desc */}
        <p className={styles.desc}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        {/* boxes */}
        <div className={styles.boxes}>
          {/* 1st box */}
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          {/* 2nd */}
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          {/* 3rd */}
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      {/* right */}
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About" fill className={styles.img} />

        {/* for extranl src  */}
        {/* <Image
          src="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="About"
          fill
        /> */}
      </div>
    </div>
  );
};

export default About;
