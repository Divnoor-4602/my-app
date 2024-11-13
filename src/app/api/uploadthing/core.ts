import { createFile } from "@/lib/actions/file.action";
import { currentUser } from "@clerk/nextjs/server";
import { createUploadthing, FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f(
    { image: { maxFileSize: "8MB" } },
    {
      awaitServerData: true,
    }
  )
    // Set permissions and file types for this FileRoute
    .middleware(async () => {
      const user = await currentUser();

      if (!user) throw new Error("Unauthorized");

      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("on upload complete");

      // create the file in the database
      const createdFile = await createFile({
        clerkId: metadata.userId,
        key: file.key,
        name: file.name,
        url: file.url,
        uploadStatus: "pending",
      });

      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.url);
      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { createdFile };
    }),
} satisfies FileRouter;
export type OurFileRouter = typeof ourFileRouter;
