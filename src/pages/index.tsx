import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { usePostsQuery } from "@/api/api";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data } = usePostsQuery();

  const posts = data?.posts;

  console.log(data);

  return (
    <>
      {posts?.map((post) => (
        <div>{post.title}</div>
      ))}
    </>
  );
}
