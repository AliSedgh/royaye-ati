import React from "react";
import Post from "./Post";

interface IPostsProps {
  posts: TPost[];
}

const Posts: React.FC<IPostsProps> = ({ posts }) => {
  return (
    <div className="grid gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
