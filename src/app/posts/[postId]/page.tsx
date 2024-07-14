import DetailPost from "@/app/_components/DetailPost";
import { getDetailsPost } from "@/services/posts";
import truncateString from "@/utils/truncateString";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";

interface IDetailPageProps {
  params: {
    postId: string;
  };
}

export async function generateMetadata(
  { params }: IDetailPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.postId;
  const post = await getDetailsPost<TPost>(id);
  return {
    title: truncateString(post.title, 20),
  };
}

export default async function DetailPage({ params }: IDetailPageProps) {
  const post = await getDetailsPost<TPost>(params.postId);
  return <DetailPost post={post} />;
}
