import { databaseConnect } from "../mongoose";
import User from "@/database/user.model";

export const createUser = async (user: InstanceType<typeof User>) => {
  try {
    await databaseConnect();
    const newUser = await User.create(user);
    return newUser;
  } catch (error) {
    console.log(error);
  }
};
