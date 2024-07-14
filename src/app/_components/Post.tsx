import React from "react";
import CustomLink from "./CustomLink";
import truncateString from "@/utils/truncateString";

interface IPostProps {
  post: TPost;
}

const Post: React.FC<IPostProps> = ({ post }) => {
  return (
    <div className="w-full p-4 rounded-md bg-white shadow-lg">
      <h2 className="text-xl font-bold">{truncateString(post.title, 20)}</h2>
      <p className="text-sm mb-8 mt-4">{truncateString(post.body, 50)}...</p>
      <CustomLink href={`posts/${post.id}`} className="w-full">
        More Details
      </CustomLink>
    </div>
  );
};

export default Post;
