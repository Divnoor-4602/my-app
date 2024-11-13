"use client";

import { Card, CardContent } from "@/components/ui/card";
import { VideoComponent } from "@/components/VideoComponent";
import { fetchUserPosts } from "@/lib/actions/post.action";
import { PostType } from "@/lib/actions/shared.types";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Dashboard = ({
  userPosts,
  userId,
}: {
  userPosts: PostType[];
  userId: string;
}) => {
  const { data, error } = useQuery({
    queryKey: ["personal-posts"],
    queryFn: async () =>
      JSON.parse(await fetchUserPosts({ clerkId: userId })!) as PostType[],
    initialData: userPosts,
    staleTime: 0,
  });
  console.log(data);

  if (error) <h1>An error occured</h1>;
  return (
    <section>
      {data?.length === 0 ? (
        <div className="w-full flex justify-center items-center h-[200px] text-stone-500">
          No Content Yet
        </div>
      ) : (
        <div className="space-y-6 flex flex-col">
          {data?.map((post, index) => (
            <Card key={index} className="rounded-3xl">
              <CardContent className="flex flex-col gap-5 items-start space-x-4 pt-6">
                <div className="flex items-center gap-4"></div>
                <div className="flex-1  h-[450px] self-center">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <VideoComponent
                      videoUrl={post.key}
                      thumbnailUrl={post.thumbnail}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground my-4">
                    {post.prompt}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
};

export default Dashboard;
