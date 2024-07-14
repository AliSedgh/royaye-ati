import Posts from "./_components/Posts";
import { Metadata } from "next";
import { getPosts } from "@/services/posts";

export const metadata: Metadata = {
  title: "posts",
};

export default async function Home() {
  const posts = await getPosts<TPost[]>();
  return (
    <main className="">
      <Posts posts={posts} />
    </main>
  );
}
