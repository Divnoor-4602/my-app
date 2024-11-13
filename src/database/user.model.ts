import { Schema, model, models, Document } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  email: string;
  picture?: string;
  files?: Schema.Types.ObjectId[];
  posts?: Schema.Types.ObjectId[];
}

const userSchema = new Schema(
  {
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    name: { type: String, required: false },
    username: { type: String, required: false },
    picture: { type: String, required: false },
    files: [{ type: Schema.Types.ObjectId, ref: "File" }],
    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  },
  { timestamps: true }
);

const User = models?.User || model<IUser>("User", userSchema);

export default User;
