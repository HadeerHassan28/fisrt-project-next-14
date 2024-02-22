import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
const About = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About" fill />

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
