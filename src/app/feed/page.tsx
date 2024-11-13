import { fetchPosts } from "@/lib/actions/post.action";
import FeedComponent from "@/components/FeedComponent";

export default async function FeedPage() {
  const posts = await fetchPosts();
  return <FeedComponent posts={posts} />;
}
