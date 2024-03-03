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

// ! fetch using api route
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

const Blog = async ({ params, searchParams }) => {
  // console.log("params", params);
  // console.log("search params", searchParams);
  // const posts = await getData();

  //! from lib.data, without an api
  // const posts = await getPosts();
  //console.log("posts", posts);

  // ! fetch using api route
  const posts = await getData();
  console.log(posts);
  return (
    <div className={styles.contaier}>
      {posts?.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default Blog;
