import React from "react";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      {/* left (LOGO) */}
      <div className={styles.logo}>lamadev</div>
      {/* right text  */}
      <div className={styles.text}>
        Lama creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
