import File from "@/database/file.model";
import { databaseConnect } from "@/lib/mongoose";
import User from "@/database/user.model";
import { GetFileProps } from "./shared.types";

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
