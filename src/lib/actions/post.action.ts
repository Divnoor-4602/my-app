import { databaseConnect } from "../mongoose";
import Post from "@/database/post.model";
import { PostType } from "./shared.types";

//fetch all posts
//return  in array of posts
export const fetchPosts = async () => {
  try {
    await databaseConnect();

    const posts = await Post.find()
      .sort({ timestamp: -1 }) // Sort by 'timestamp' in descending order
      .populate("file"); // Populate the 'file' field with referenced data from 'File' schema

    return posts as PostType[];
  } catch (error) {
    console.error(error);
    throw error;
  }
};
