"use server";

import File from "@/database/file.model";
import { databaseConnect } from "@/lib/mongoose";
import User from "@/database/user.model";
import { CreateFileParams, GetFileProps } from "./shared.types";

export const getFile = async (params: GetFileProps) => {
  try {
    await databaseConnect();

    const { clerkId, key } = params;

    const user = await User.findOne({ clerkId });

    if (!user) throw new Error("User not found");

    const file = await File.findOne({ user: user._id, key });

    if (!file) throw new Error("File not found");

    return file;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createFile = async (params: CreateFileParams) => {
  try {
    await databaseConnect();

    const { clerkId, key, name, url, uploadStatus } = params;

    // check if the file exists
    const existingFile = await File.findOne({ key: key });

    if (existingFile) throw new Error("File already exists");

    const user = await User.findOne({ clerkId });

    if (!user) throw new Error("User not found");

    const file = await File.create({
      user: user._id,
      key,
      name,
      url,
      uploadStatus,
    });

    // add the file to users as well
    await User.findByIdAndUpdate(user._id, { $push: { files: file._id } });

    // todo: add file to post model

    return file;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
