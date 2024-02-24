import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./postCard.module.css";
const PostCard = () => {
  return (
    <div className={styles.contaier}>
      {/* top */}
      <div className={styles.top}>
        {/* img */}
        <div className={styles.imgContainer}>
          <Image
            alt="product title"
            fill
            className={styles.img}
            src="https://images.pexels.com/photos/15410074/pexels-photo-15410074/free-photo-of-frame-among-roses-and-leaves.jpeg"
          />
        </div>
        {/* date */}
        <span className={styles.date}>1/1/2024</span>
      </div>

      {/* botton */}
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
          quaerat quo quia ratione rem magni dolores reprehenderit consectetur
          earum totam. Sint accusamus suscipit pariatur quaerat sunt tempora cum
          libero nam.
        </p>
        <Link href="/blog/post">Read More</Link>
      </div>
    </div>
  );
};

export default PostCard;
