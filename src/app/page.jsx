import Image from "next/image";
import styles from "./home.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      {/* left(text) */}
      <div className={styles.textContainer}>
        {/* title */}
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        {/* description */}
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        {/* button */}
        <div className={styles.buttons}>
          <button className={styles.btn}>Learn More</button>
          <button className={styles.btn}>Contact</button>
        </div>
        {/* img of brands*/}
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt="barnds"
            className={styles.brandImg}
            fill
          />
        </div>
      </div>

      {/* right (img) */}
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="hero" fill className={styles.heroImg} />
      </div>
    </div>
  );
}
