import React from "react";
import CustomLink from "./CustomLink";

interface IDetailPostProps {
  post: TPost;
}

export default function DetailPost({ post }: IDetailPostProps) {
  return (
    <div>
      <span className="font-bold text-4xl mb-8 inline-block pb-2">
        Details Post
      </span>
      <h1 className="font-bold text-2xl mb-8">{post.title}</h1>
      <p>{post.body}</p>
      <CustomLink href="/" className="px-5 mt-8 w-fit">
        All Posts
      </CustomLink>
    </div>
  );
}
