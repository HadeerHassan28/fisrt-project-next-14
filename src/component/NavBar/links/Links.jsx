import Link from "next/link";
import React from "react";

const Links = () => {
  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
  ];
  return (
    <div>
      {links.map((ele) => (
        <Link href={ele.path} key={ele.title}>
          {ele.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
