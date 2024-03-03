import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utlis";

export const GET = async (request) => {
  try {
    connectToDb();
    const posts = await Post.find();

    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};
