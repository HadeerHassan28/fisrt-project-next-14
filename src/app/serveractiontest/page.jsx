import { addPost, delatePost } from "@/lib/action";
import React from "react";

const ServerActionTest = () => {
  //   const actionInComp = async () => {
  //     "use server";
  //     console.log("it works");
  //   };
  return (
    <div>
      <form action={addPost}>
        <input placeholder="title" type="text" name="title" />
        <input placeholder="desc" type="text" name="desc" />
        <input placeholder="slug" type="text" name="slug" />
        <input placeholder="userId" type="text" name="userId" />
        <button>Create</button>
      </form>

      <form action={delatePost}>
        <input placeholder="post id" type="text" name="id" />
        <button>Delete</button>
      </form>
    </div>
  );
};

export default ServerActionTest;
