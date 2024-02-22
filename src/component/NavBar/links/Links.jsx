"use client";

import React, { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navBarLink/navLink";
const Links = () => {
  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
  ];
  const [open, setopen] = useState(false);
  const session = true;
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
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}

            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>

      {/* Burger button for small screen */}
      <button className={styles.menuBtn} onClick={(prev) => handleClick(prev)}>
        Menu
      </button>

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
