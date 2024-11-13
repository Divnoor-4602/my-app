import { databaseConnect } from "@/lib/mongoose";
import { auth, currentUser } from "@clerk/nextjs/server";
import { createUploadthing } from "uploadthing/server";
import User from "@/database/user.model";
import File from "@/database/file.model";
import { getFile } from "@/lib/actions/file.action";

const f = createUploadthing();

export const uploadRouter = {
  withAwaitedServerData: f(
    { image: { maxFileSize: "2MB", maxFileCount: 1, minFileCount: 1 } },
    { awaitServerData: true }
  )
    .middleware(async ({ req }) => {
      const user = await currentUser();

      // database connection
      await databaseConnect();

      if (!user || !user.id) throw new Error("Unauthorised");

      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // check if the file already exists or not
      const existingFile = await getFile({
        clerkId: metadata.userId,
        key: file.key,
      });

      // create a new image file

      // send this to ai and do some shit

      return { foo: "bar" as const };
    }),
};
