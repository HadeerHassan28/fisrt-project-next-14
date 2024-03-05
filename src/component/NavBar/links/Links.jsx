"use client";

import { handleLogout } from "@/lib/action";

import Image from "next/image";
import React, { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navBarLink/navLink";
const Links = async ({ session }) => {
  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
  ];
  const [open, setopen] = useState(false);

  //Tem
  // const session = true;
  const isAdmin = true;

  // function for small  screen menu open and close
  const handleClick = (e) => {
    e.preventDefault();
    setopen(!open);
  };
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((ele) => (
          <NavLink item={ele} key={ele.title} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>

      {/* Burger button for small screen */}

      <Image
        src="/menu.png"
        alt="menu"
        width={30}
        height={30}
        onClick={(prev) => handleClick(prev)}
        className={styles.menuBtn}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((ele) => (
            <NavLink item={ele} key={ele.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
