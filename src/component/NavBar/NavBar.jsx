import { auth } from "@/lib/auth";
import Link from "next/link";
import React from "react";
import Links from "./links/Links";
import styles from "./NavBar.module.css";
const NavBar = async () => {
  const session = await auth();
  console.log("nav", session);
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Lama
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default NavBar;
