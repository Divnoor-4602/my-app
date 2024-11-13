"use client";
import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import { Search, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PostType } from "@/lib/actions/shared.types";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/lib/actions/post.action";
import { VideoComponent } from "./VideoComponent";




const FeedComponent = ({ posts }: { posts: PostType[] }) => {
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const { data, error } = useQuery({
    queryKey: ["all-posts"],
    queryFn: async () => JSON.parse(await fetchPosts()!) as PostType[],
    initialData: posts,
    staleTime: 0,
  });
  console.log(data);

  useEffect(() => {
    if (search.length > 0) {
      setFilteredPosts(
        data.filter((posts) =>
          posts.prompt.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setFilteredPosts(data);
    }
  }, [search, data]);

  if (error) <h1>An error occured</h1>;

  return (
    <MaxWidthWrapper className="mx-auto py-8">
      {/* Search Bar */}
      <div className="relative mb-8 ">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type="search"
          placeholder="Search cultural thoughts..."
          className="pl-10 w-full "
          value={search}
          onChange={(e) => setSearch(e.target.value.trim())}
        />
      </div>

      {/* Courses Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Featured Courses</h2>
        <ScrollArea className="w-full whitespace-nowrap rounded-md border">
          <div className="flex w-max space-x-4 p-4">
            {[1, 2, 3, 4, 5].map((course) => (
              <Card key={course} className="w-[250px] flex-shrink-0">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Cultural Course
                  </CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <div className="text-2xl font-bold">Coming Soon</div>
                  <p className="text-xs text-muted-foreground">
                    Learn about diverse cultural perspectives
                  </p>
                  <Button variant="ghost" className="w-full ">
                    Start Learning
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>

      {/* Latest Posts Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Latest Posts</h2>
        {filteredPosts?.length === 0 ? (
          <div className="w-full flex justify-center items-center h-[200px] text-stone-500">
            No Content Yet
          </div>
        ) : (
          <div className="space-y-6">
            {filteredPosts?.map((post, index) => (
              <Card key={index} className="rounded-3xl">
                <CardContent className="flex flex-col gap-5 items-start space-x-4 pt-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-8 h-8">
                      <AvatarImage
                        src={post?.user?.picture}
                        alt={`User ${post?.user?.name}`}
                      />
                      <AvatarFallback>{post?.user?.name}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-base font-semibold">
                      {post?.user?.email}
                    </h3>
                  </div>
                  <div className="flex-1 w-[800px] h-[450px] self-center">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <VideoComponent
                        videoUrl={post.key}
                        thumbnailUrl={post.thumbnail}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground my-4">
                      This is a brief preview of the cultural thought...
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </MaxWidthWrapper>
  );
};

export default FeedComponent;
