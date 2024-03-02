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

//! to do dynamic title of the broswer
export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePastPage = async ({ params }) => {
  const { slug } = params;
  // const post = await getData(slug);
  //console.log(params);

  //! fetch without api
  const post = await getPost(slug);
  //console.log("Date", post.createdAt);
  return (
    <div className={styles.container}>
      {/* img */}
      {post?.img && (
        <div className={styles.imgContaier}>
          <Image
            src={post.img}
            alt="single post img"
            fill
            className={styles.img}
          />
        </div>
      )}

      {/* text */}
      <div className={styles.textContaier}>
        <h1 className={styles.title}>{post?.title}</h1>
        {/* details */}
        <div className={styles.detail}>
          {/* author */}

          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}

          {/* puplish */}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Publish</span>
            <span className={styles.detailValue}>
              {post?.createdAt?.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        {/* contact */}
        <div className={styles.contact}>{post?.desc}</div>
      </div>
    </div>
  );
};

export default SinglePastPage;
