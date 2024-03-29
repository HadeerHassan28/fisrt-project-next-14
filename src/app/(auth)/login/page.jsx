import { handleGitHubLogin } from "@/lib/action";
import { auth } from "@/lib/auth";
import React from "react";
import syles from "./login.module.css";
const Login = async () => {
  const session = await auth();

  console.log(session);
  return (
    <div className={syles.container}>
      <h1 className={syles.title}>Sign in</h1>
      <form action={handleGitHubLogin} className={syles.form}>
        <button className={syles.btn}>Login with GitHub</button>
      </form>
    </div>
  );
};

export default Login;
