import { databaseConnect } from "@/lib/mongoose";
import { auth, currentUser } from "@clerk/nextjs/server";
import {
  createUploadthing,
  FileRouter,
  UploadThingError,
} from "uploadthing/server";
import File from "@/database/file.model";
import { getFile } from "@/lib/actions/file.action";
import { getUser } from "@/lib/actions/user.action";

const f = createUploadthing();

export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    // Set permissions and file types for this FileRoute
    .middleware(async () => {
      const user = await currentUser();

      if (!user) throw new UploadThingError("Unauthorized");

      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.url);
      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;
export type OurFileRouter = typeof ourFileRouter;
