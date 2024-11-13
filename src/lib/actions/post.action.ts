"use server";

import { databaseConnect } from "../mongoose";
import Post from "@/database/post.model";
import {
  CreatePostParams,
  FetchUserPostParams,
  PostType,
} from "./shared.types";
import User from "@/database/user.model";
import File from "@/database/file.model";
import { revalidatePath } from "next/cache";

//fetch all posts
//return  in array of posts
export const fetchPosts = async () => {
  try {
    await databaseConnect();

    const posts = await Post.find()
      .sort({ timestamp: -1 }) // Sort by 'timestamp' in descending order
      .populate("file")
      .populate("user"); // Populate the 'file' field with referenced data from 'File' schema and 'user' field with referenced data from 'User' schema

    return JSON.stringify(posts as PostType[]);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchUserPosts = async (params: FetchUserPostParams) => {
  try {
    await databaseConnect();

    const { clerkId } = params;

    const user = await User.findOne({ clerkId }).populate("posts");

    if (!user) {
      throw new Error("User not found");
    }

    return JSON.stringify(user.posts);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createPost = async (params: CreatePostParams) => {
  try {
    const { file, user, prompt, thumbnail, key, pathname } = params;

    // Connect to the database

    await databaseConnect();

    // Create a new post
    const post = await Post.create({
      file,
      user,
      prompt,
      thumbnail,
      key,
    });

    // add to user
    await User.findByIdAndUpdate(user, {
      $push: { posts: post._id },
    });

    // add to file
    await File.findByIdAndUpdate(file, {
      post: post._id,
    });

    revalidatePath(pathname);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
