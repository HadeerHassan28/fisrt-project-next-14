import { getUser } from "@/lib/data";
import React from "react";
import styles from "./postUser.module.css";

//! fetch with api
// const getData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     { cache: "no-store" }
//   );
//   if (!res.ok) throw new Error("Could not retrieve user data");
//   return await res.json();
// };

const PostUser = async ({ userId }) => {
  // const userData = await getData(userId);

  // ! fetch without api
  const userData = getUser(userId);
  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{userData.username}</span>
    </div>
  );
};

export default PostUser;
