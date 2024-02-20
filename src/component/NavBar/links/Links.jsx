import Link from "next/link";
import React from "react";
import styles from "./links.module.css";
import NavLink from "./navBarLink/navLink";
const Links = () => {
  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
  ];
  return (
    <div className={styles.links}>
      {links.map((ele) => (
        <NavLink item={ele} key={ele.title} />
      ))}
    </div>
  );
};

export default Links;
