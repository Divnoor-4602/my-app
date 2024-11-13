import { databaseConnect } from "../mongoose";
import User from "@/database/user.model";
import { CreateUserParams } from "./shared.types";

export async function createUser(params: CreateUserParams) {
  try {
    await databaseConnect();

    const user = await User.create(params);

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getUser(clerkId: string) {
  try {
    await databaseConnect();

    const user = await User.findOne({ clerkId });

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
