import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

import Image from "next/image";
import Link from "next/link";

async function getPosts() {
  const res = await fetch(`${process.env.CMS_URL}/blogs`, {
    cache: "no-store",
  });
  const data = await res.json();
  const posts: Post[] = data.data;
  return posts;
}

export default async function BlogPage() {
  const posts: Post[] = await getPosts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {posts.map((post) => {
        return (
          <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            key={post.id}
          >
            <Image
              className="rounded-t-lg"
              src="https://images.unsplash.com/photo-1682687218904-de46ed992b58?q=80&w=1843&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width={500}
              height={500}
            />
            <div className="p-5">
              <Link href={`/blog/${post.attributes.slug}`}>
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {post.attributes.Title}
                  </h5>
              </Link>
              <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <BlocksRenderer content={post.attributes.Description} />
              </span>
              <Link href={`/blog/${post.attributes.slug}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
              </Link>
            </div>
          </div>
        );
      })}
    </main>
  );
}

export interface Post {
  id: string;
  attributes: {
    Title: string;
    Description: BlocksContent;
    content: string;
    slug: string;
  };
}
