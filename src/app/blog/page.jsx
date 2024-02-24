import PostCard from "@/component/PostCard/postCard";
import React from "react";
import styles from "./blog.module.css";
const Blog = () => {
  return (
    <div className={styles.contaier}>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
    </div>
  );
};

export default Blog;
