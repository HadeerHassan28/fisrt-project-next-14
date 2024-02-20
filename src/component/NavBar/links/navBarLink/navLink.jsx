import Link from "next/link";
import React from "react";
import styles from "./navLink.module.css";
const NavLink = ({ item }) => {
  return <Link href={item.path}>{item.title}</Link>;
};

export default NavLink;
