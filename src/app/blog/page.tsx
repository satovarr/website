import {Post} from "@/interfaces/Post";
import Image from "next/image";
import Link from "next/link";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
  

import { getPosts } from "@/services/strapiAPI";
import BlogCard from "@/components/BlogCard";

export default async function BlogPage() {
  const posts: Post[] = await getPosts();
  return (
    <main className="h-screen ">
      <section className="flex flex-col w-full h-screen py-22">
        <div className="basis-1/4">
          <div className="rounded-3xl  size-auto  flex flex-col justify-center gap-5 my-5 ml-10 p-5 border border-background ">
            <Link href="/blog">
              <h1 className="text-6xl font-semibold pb-5">Blog</h1>
              <p className="">
                <span className="text-primary">Here</span> I post some of my
                thoughts and ideas about{" "}
                <span className="text-secondary">
                  {" "}
                  programming, technology and life
                </span>
                .
              </p>
            </Link>
          </div>
        </div>
        <div className="basis-3/4 flex gap-10 px-10">
          {posts.map((post) => {
            return <BlogCard post={post} key={post.id} />;
          })}
        </div>
      </section>
    </main>
  );
}

