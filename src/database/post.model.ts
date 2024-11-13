import { Schema, Document, model, models } from "mongoose";

export interface IPost extends Document {
  file: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
  prompt: string;
  thumbnail: string;
  key: string;
}

const postSchema = new Schema(
  {
    file: { type: Schema.Types.ObjectId, ref: "File", required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    prompt: { type: String, required: true },
    thumbnail: { type: String, required: false },
    key: { type: String, required: true },
  },
  { timestamps: true }
);

const Post = models.Post || model<IPost>("Post", postSchema);

export default Post;
