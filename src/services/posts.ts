import get from "@/services/baseService/request";

async function getPosts<T>() {
  return get<T>("/posts");
}

async function getDetailsPost<T>(postId: string) {
  return get<T>(`/posts/${postId}`);
}

export { getPosts, getDetailsPost };
