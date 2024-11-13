import { Schema } from "mongoose";
export interface CreateUserParams {
  clerkId: string;
  email: string;
  picture: string;
}

export type PostType = {
  user: {
    clerkId: string;
    email: string;
    picture: string;
    name: string;
    username: string;
  };
  prompt: string;
  thumbnail: string;
  key: string;
  file: {
    name: string;
    key: string;
    url: string;
    uploadStatus: string;
    user: Schema.Types.ObjectId;
    post: Schema.Types.ObjectId;
  };
};

export interface GetFileProps {
  clerkId: string;
  key: string;
}
