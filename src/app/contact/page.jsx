import Image from "next/image";
import React from "react";
import styles from "./contact.module.css";
const Contact = () => {
  return (
    <div className={styles.container}>
      {/* left */}
      <div className={styles.imgContaier}>
        <Image fill src="/contact.png" className={styles.img} alt="Conatct" />
      </div>
      {/* right */}
      <div className={styles.formContaier}>
        <form action="" className={styles.form}>
          <input placeholder="Name and Surname" type="text" />
          <input placeholder="Email Address" type="text" />
          <input placeholder="Phone Number (Optional)" type="number" />
          <textarea name="" id="" cols={30} rows="10" placeholder="Massage" />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
