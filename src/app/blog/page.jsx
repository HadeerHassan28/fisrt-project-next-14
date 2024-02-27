import PostCard from "@/component/PostCard/postCard";
import { getPosts } from "@/lib/data";
import React from "react";
import styles from "./blog.module.css";

// ! fetch data with an API
// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   if (res.ok) return await res.json();
//   else throw new Error(await res.text());
// };

const Blog = async ({ params, searchParams }) => {
  // console.log("params", params);
  // console.log("search params", searchParams);
  // const posts = await getData();

  //! from lib.data, without an api
  const posts = await getPosts();
  return (
    <div className={styles.contaier}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default Blog;
