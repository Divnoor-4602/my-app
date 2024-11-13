"use client";
import React from "react";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import { Search, BookOpen, Video } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PostType } from "@/lib/actions/shared.types";

const FeedComponent = ({ posts }: { posts: PostType[] }) => {
  // const queryClient = useQueryClient();
  //   const { data, error } = useQuery({
  //     queryKey: ["cart"],
  //     queryFn: async () => JSON.parse((await getCart())!),
  //     initialData: cart,
  //     staleTime: 0,
  //   });

  //   if (error) <h1>An error occured</h1>;
  return (
    <MaxWidthWrapper className="mx-auto py-8">
      {/* Search Bar */}
      <div className="relative mb-8 ">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type="search"
          placeholder="Search cultural thoughts..."
          className="pl-10 w-full "
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
                    Cultural Course {course}
                  </CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Chapter {course}</div>
                  <p className="text-xs text-muted-foreground">
                    Learn about diverse cultural perspectives
                  </p>
                  <Button variant="ghost" className="w-full mt-4">
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
        <div className="space-y-6">
          {[1, 2, 3].map((post) => (
            <Card key={post}>
              <CardContent className="flex items-start space-x-4 pt-6">
                <Avatar className="w-8 h-8">
                  <AvatarImage
                    src={`/placeholder.svg?text=U${post}`}
                    alt={`User ${post}`}
                  />
                  <AvatarFallback>U{post}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-base font-semibold">User Name</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Video className="h-4 w-4 mr-1" />
                    <span>AI Video Generated</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    This is a brief preview of the cultural thought...
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default FeedComponent;
