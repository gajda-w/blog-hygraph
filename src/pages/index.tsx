import { Inter } from "next/font/google";
import { usePostsQuery } from "@/api/api";
import { Header } from "../components/Header";

export default function Home() {
  const { data } = usePostsQuery();

  const posts = data?.posts;

  console.log(data);

  return (
    <>
      <Header />
      {posts?.map((post) => (
        <div>{post.title}</div>
      ))}
    </>
  );
}
