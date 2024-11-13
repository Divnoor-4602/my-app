import React from "react";
import Dashboard from "../components/Dashboard";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { auth } from "@clerk/nextjs/server";
import UploadButton from "../components/UploadButton";
import { fetchUserPosts } from "@/lib/actions/post.action";
import { PostType } from "@/lib/actions/shared.types";

const Page = async () => {
  const { userId } = await auth();

  const userPosts: PostType[] = JSON.parse(
    await fetchUserPosts({ clerkId: userId })!
  );

  return (
    <>
      <MaxWidthWrapper>
        <main className="pt-10">
          <div className="flex-col-reverse sm:flex-row gap-6 flex justify-between sm:items-center">
            <h1 className="text-5xl tracking-tighter font-open font-bold">
              Your Posts
            </h1>
            <UploadButton />
          </div>
          <div className="border-b border-secondary mt-4" />
        </main>
        <Dashboard userPosts={userPosts} userId={userId!} />
      </MaxWidthWrapper>
    </>
  );
};

export default Page;
