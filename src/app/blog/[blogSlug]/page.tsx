import { Post } from "../page";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

async function getPost(blogSlug: string) {
    const res = await fetch(`${process.env.CMS_URL}/blogs?filters[slug][$eq]=${blogSlug}`, {cache: "no-store"});
    const data = await res.json();
    const post: Post = data.data[0];
    return post;
}

export default async function BlogPost({params}: {
    params: {
        blogSlug: string
    }
}) {
    const post: Post = await getPost(params.blogSlug);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-white text-zinc-950">
            <article className="prose lg:prose-2xl max-w-prose mx-auto rounded-lg  p-8">
                <h1 className="text-4xl font-bold py-2">
                    {post.attributes.Title}</h1>
                <div className="mt-4">
                    <Markdown>{post.attributes.content}</Markdown>
                </div>
            </article>
        </div>
    )
}
