import { getUser } from "@/lib/data";
import Image from "next/image";
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
  // console.log("65e0657c8eb88d29326d9f47" === userId);
  // ! fetch without api
  const userData = await getUser(userId);
  console.log("userData", userData.username);
  return (
    <div className={styles.container}>
      <Image
        src={userData.img ? userData.img : "/noavatar.png"}
        alt="single post img"
        width={50}
        height={50}
        className={styles.avater}
      />

      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{userData.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
