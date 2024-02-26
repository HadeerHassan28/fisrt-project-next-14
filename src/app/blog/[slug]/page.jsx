import Image from "next/image";
import React from "react";
import styles from "./single-post.module.css";
const SinglePastPage = () => {
  return (
    <div className={styles.container}>
      {/* img */}
      <div className={styles.imgContaier}>
        <Image
          src="https://images.pexels.com/photos/15410074/pexels-photo-15410074/free-photo-of-frame-among-roses-and-leaves.jpeg"
          alt="single post img"
          fill
          className={styles.img}
        />
      </div>
      {/* text */}
      <div className={styles.textContaier}>
        <h1 className={styles.title}>Title of the Post</h1>
        {/* details */}
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/15410074/pexels-photo-15410074/free-photo-of-frame-among-roses-and-leaves.jpeg"
            alt="single post img"
            width={50}
            height={50}
            className={styles.avater}
          />
          {/* author */}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Hadeer</span>
          </div>
          {/* puplish */}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Publish</span>
            <span className={styles.detailValue}>1/1/2024</span>
          </div>
        </div>
        {/* contact */}
        <div className={styles.contact}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum fugit
          voluptatibus, similique quae, quis explicabo placeat aut, odit
          consequuntur illo corporis assumenda recusandae officiis debitis
          corrupti! Delectus earum assumenda nihil!
        </div>
      </div>
    </div>
  );
};

export default SinglePastPage;
