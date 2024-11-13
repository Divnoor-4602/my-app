import { Schema, Document, model, models } from "mongoose";

export interface IFile extends Document {
  name: string;
  user: Schema.Types.ObjectId;
  post?: Schema.Types.ObjectId[];
  uploadStatus: string;
  key: string;
  url: string;
}

const fileSchema = new Schema(
  {
    name: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    post: { type: Schema.Types.ObjectId, ref: "Post" },
    uploadStatus: { type: String, required: true, default: "pending" },
    key: { type: String, required: true },
    url: { type: String, required: true },
  },
  { timestamps: true }
);

const File = models.File || model<IFile>("File", fileSchema);

export default File;
