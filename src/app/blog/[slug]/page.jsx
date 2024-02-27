import PostUser from "@/component/postUser/postUser";
import { getPost } from "@/lib/data";
import Image from "next/image";
import React, { Suspense } from "react";
import styles from "./single-post.module.css";

//! fetch data with an API
// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//   if (res.ok) return await res.json();
//   else throw new Error(await res.text());
// };

const SinglePastPage = async ({ params }) => {
  const { slug } = params;
  // const post = await getData(slug);
  //console.log(params);

  //! fetch without api
  const post = await getPost(slug);
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
        <h1 className={styles.title}>{post?.title}</h1>
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

          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}

          {/* puplish */}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Publish</span>
            <span className={styles.detailValue}>1/1/2024</span>
          </div>
        </div>
        {/* contact */}
        <div className={styles.contact}>{post?.body}</div>
      </div>
    </div>
  );
};

export default SinglePastPage;
