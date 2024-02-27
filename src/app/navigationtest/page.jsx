"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Page = () => {
  //! Client Side Navigation
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  //   console.log(q);

  //! Server Side Nagiagtion
  // in the slug folder usig {params} as a props
  const handleClick = () => {
    console.log("cliecked");
    router.push("/");
  };
  return (
    <div>
      <Link href="/" prefetch={false}>
        Click here
      </Link>
      <button onClick={() => handleClick()}>Write here</button>
    </div>
  );
};

export default Page;
