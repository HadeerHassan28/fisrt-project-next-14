// export const sayHello = async () => {
//   "use server";
//   console.log("Hello");
// };
"use server";
import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utlis";

//!add post
export const addPost = async (formData) => {
  //   const title = formData.get("title");
  //   const desc = formData.get("desc");
  //   const slug = formData.get("slug");

  const { title, desc, slug, userId } = Object.fromEntries(formData);
  //console.log(title);
  try {
    connectToDb();
    const newPost = new Post({ title, desc, slug, userId });
    await newPost.save();
    revalidatePath("/blog");
    console.log("saved to db");
  } catch (error) {
    console.log(error);
    return { error: "sth is wrong" };
  }
};

//!delate post
export const delatePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    revalidatePath("/blog");
    console.log("delated");
  } catch (error) {
    console.log(error);
  }
};
